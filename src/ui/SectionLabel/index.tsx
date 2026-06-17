import { Divider, Group, Text } from "@mantine/core"
import type { ReactNode } from "react"

interface SectionLabelProps {
  /** Section index, e.g. "01". */
  idx: string
  children: ReactNode
  /** Extra content to the right of the line (e.g. a project counter). */
  right?: ReactNode
}

export function SectionLabel({ idx, children, right }: SectionLabelProps) {
  return (
    <Group gap={10} align="center" mb={22} wrap="nowrap">
      <Text component="span" ff="monospace" fz="12.5px" c="dimmed" style={{ whiteSpace: "nowrap" }}>
        <Text component="span" c="teal" inherit>
          {idx}
        </Text>{" "}
        {children}
      </Text>
      <Divider style={{ flex: 1 }} />
      {right}
    </Group>
  )
}
