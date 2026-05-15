type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
};

export default function Heading({
  as = "h1",
  children,
}: HeadingProps) {
  const Tag = as;

  const stylesByLevel = {
  h1: "text-[2.5rem] leading-tight mt-8 mb-4 font-computer tracking-[0.05em]",
    h2: "text-[1.75rem] leading-snug mt-6 mb-3 font-display text-accent italic tracking-[-0.05em]",
  h3: "text-[1.25rem] leading-snug mt-4 mb-2 font-text",
};

  return (
    <Tag
  className={`
    font-(--font-computer)]
    text-(--color-foreground)]
    ${stylesByLevel[as]}
  `}
>

      {children}
    </Tag>
  );
}
