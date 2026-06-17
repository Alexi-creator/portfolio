import { Badge, Group, SimpleGrid, Text } from "@mantine/core"
import { SKILLS } from "@/data/portfolio"
import { Container } from "@/ui/Container"
import { Section } from "@/ui/Section"
import { SectionLabel } from "@/ui/SectionLabel"

export function Skills() {
  return (
    <Section id="stack" divider>
      <Container>
        <SectionLabel idx="02">technical stack</SectionLabel>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={56} verticalSpacing={40}>
          {SKILLS.map((g) => (
            <div key={g.group}>
              <Text fw={500} fz="13.5px" c="var(--fg)" mb={16}>
                <Text span inherit c="teal">
                  ▹
                </Text>{" "}
                {g.group}
              </Text>
              <Group gap={8}>
                {g.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </Group>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
}
