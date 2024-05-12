import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isMaxWidth?: boolean
}