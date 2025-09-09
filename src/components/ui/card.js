export function Card({ children, className }) {
  return <div className={`bg-white dark:bg-gray-800 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
