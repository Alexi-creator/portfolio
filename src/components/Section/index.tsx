import React from "react";
import { SectionProps } from "./section.props";

export const Section = ({ className, children, isMaxWidth = true, ...props }: SectionProps) => {
  return (
    <section className={`px-3 md:px-6 lg:px-10 ${isMaxWidth && "max-w-screen-xl mx-auto"} ${className}`} {...props}>
      {children}
    </section>
  );
};
