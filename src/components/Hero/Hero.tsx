import { Button, Grid, Group, SimpleGrid, Text, Title } from "@mantine/core"
import clsx from "clsx"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { StarNZ } from "@/components/ui/StarNZ"
import { PROFILE, STATS } from "@/data/portfolio"
import styles from "./Hero.module.css"

export function Hero() {
  return (
    <Section id="about">
      <Container>
        <Grid gap={56} align="center" className={styles.layer}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <div className={styles.rise}>
              <span className={styles.eyebrow}>
                <span className="dot" /> {PROFILE.location}
              </span>
              <Title order={1} mt={22}>
                I architect frontends
                <br />
                that scale
                <StarNZ />
              </Title>
              <Text fz={17} maw={560} mt={22} c="var(--fg-2)">
                {PROFILE.summary}
              </Text>
              <Group gap={12} mt={30}>
                <Button component="a" href="#work" variant="filled" size="md">
                  View selected work →
                </Button>
                <Button component="a" href={`mailto:${PROFILE.email}`} variant="default" size="md">
                  Get in touch
                </Button>
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <div className={clsx(styles.term, styles.rise)} style={{ animationDelay: ".08s" }}>
              <div className={styles.termBar}>
                <span className={styles.tdot} style={{ background: "#FA5252" }} />
                <span className={styles.tdot} style={{ background: "#FAB005" }} />
                <span className={styles.tdot} style={{ background: "#51CF66" }} />
                <span className={clsx(styles.termTitle, "mono")}>~/elijah — whoami</span>
              </div>
              <div className={clsx(styles.termBody, "mono")}>
                <div>
                  <span className="accent">$</span> whoami
                </div>
                <div className={styles.termOut}>
                  {PROFILE.name} · {PROFILE.role}
                </div>
                <div style={{ marginTop: 10 }}>
                  <span className="accent">$</span> cat focus.txt
                </div>
                <div className={styles.termOut}>
                  architecture · performance · DX · testing · mentorship
                </div>
                <div style={{ marginTop: 10 }}>
                  <span className="accent">$</span> stack --primary
                </div>
                <div className={styles.termOut}>
                  React · Next.js · TypeScript · Node.js / NestJS
                </div>
                <div style={{ marginTop: 10 }}>
                  <span className="accent">$</span> status
                </div>
                <div className={styles.termOut}>
                  <span className="dot" style={{ display: "inline-block", marginRight: 6 }} />
                  expanding into full-stack — NestJS · Node.js · Postgres
                  <span className={styles.cursor} />
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>

        <SimpleGrid className={styles.layer} cols={{ base: 2, sm: 4 }} spacing="var(--gap)" mt={64}>
          {STATS.map((s) => (
            <div className={styles.stat} key={s.label}>
              <div className={clsx(styles.statVal, "mono")}>
                {s.value}
                <span className={styles.statUnit}>{s.unit}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}
