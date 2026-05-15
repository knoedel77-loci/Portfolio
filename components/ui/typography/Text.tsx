type TextProps = {
  children: React.ReactNode;
};

export default function Text({ children }: TextProps) {
  return (
    <p
      className="
        font-(--font-text)]
        text-(--color-foreground)]
      "
    >
      {children}
    </p>
  );
}
