import { type ContainerProps, Container as MantineContainer } from "@mantine/core"

// Shared landing container (max-width + horizontal padding) on top of Mantine's
// Container, so the sizes aren't repeated in every section.
export function Container(props: ContainerProps) {
  return <MantineContainer size={1200} px={{ base: 20, sm: 32 }} {...props} />
}
