import { Group, SimpleGrid } from "@mantine/core"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Tag } from "@/components/ui/Tag"
import { SKILLS } from "@/data/portfolio"
import styles from "./Skills.module.css"

export function Skills() {
  return (
    <Section id="stack" divider>
      <Container>
        <SectionLabel idx="02">technical stack</SectionLabel>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={56} verticalSpacing={40}>
          {SKILLS.map((g) => (
            <div key={g.group}>
              <div className={`${styles.head} mono`}>
                <span className="accent">▹</span> {g.group}
              </div>
              <Group gap={8}>
                {g.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </Group>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}
