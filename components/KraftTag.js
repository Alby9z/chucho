export default function KraftTag({ title, children }) {
  return (
    <div className="kraft-tag w-[190px]">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  );
}
