import { type ContainerProps, Container as MantineContainer } from "@mantine/core"

// Единая обёртка-контейнер лендинга (max-width + горизонтальные отступы).
// Поверх Mantine Container, чтобы не повторять размеры в каждой секции.
export function Container(props: ContainerProps) {
  return <MantineContainer size={1200} px={{ base: 20, sm: 32 }} {...props} />
}
