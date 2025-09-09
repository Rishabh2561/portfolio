export function Button({ children, variant }) {
  const base = "px-4 py-2 rounded font-semibold transition-colors";
  const style = variant === "outline"
    ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
    : "bg-blue-600 text-white hover:bg-blue-700";
  return <button className={`${base} ${style}`}>{children}</button>;
}
