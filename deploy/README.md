# Deployment

The site is a static Next.js export (`output: "export"`). CI builds it and rsyncs
the `out/` contents to the server; nginx serves them. No Node.js runs on the server.

## One-time server setup

Run these once on the VPS (as a sudo user).

### 1. Create the web root and give the deploy user write access

```bash
sudo mkdir -p /var/www/elijah-pavlov
sudo chown -R "$USER":www-data /var/www/elijah-pavlov
sudo chmod -R 755 /var/www/elijah-pavlov
```

`$USER` here must be the same account used by the CI `SSH_USER` secret, so rsync
can write. nginx (`www-data`) only needs read access.

### 2. DNS

Point the domain at the server's public IP:

```
A    elijah-pavlov.nz       -> <SERVER_IP>
A    www.elijah-pavlov.nz   -> <SERVER_IP>
```

Wait for propagation before requesting the certificate.

### 3. Install the nginx site

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/elijah-pavlov.nz
sudo ln -s /etc/nginx/sites-available/elijah-pavlov.nz /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 4. HTTPS certificate (Let's Encrypt)

```bash
sudo certbot --nginx -d elijah-pavlov.nz -d www.elijah-pavlov.nz
```

certbot edits the server block in place: it adds the `listen 443 ssl` lines,
the certificate paths, and an HTTP -> HTTPS redirect. Renewal is automatic via
the certbot systemd timer.

## CI/CD

`.github/workflows/deploy.yml` runs on push to `main`:
build -> rsync `out/` to `DEPLOY_PATH` (default `/var/www/elijah-pavlov`).

### Required GitHub Actions secrets

| Secret        | Value                                                        |
| ------------- | ----------------------------------------------------------- |
| `SSH_HOST`    | Server IP or hostname                                        |
| `SSH_USER`    | SSH user (must own `/var/www/elijah-pavlov`)                 |
| `SSH_KEY`     | Private SSH key for that user                                |
| `DEPLOY_PATH` | Optional. Defaults to `/var/www/elijah-pavlov`               |
