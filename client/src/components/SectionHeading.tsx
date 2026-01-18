interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({ subtitle, title, align = "center", light = false }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClasses[align]}`}>
      <span className={`block font-script text-2xl mb-2 ${light ? "text-primary-foreground/90" : "text-primary"}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-serif font-bold ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <div className={`h-1 w-24 bg-accent mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
