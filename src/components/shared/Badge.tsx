interface BadgeProps {
  children: string;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default:
      "bg-surface border border-border text-text-secondary",
    accent:
      "bg-accent/10 border border-accent/20 text-accent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
