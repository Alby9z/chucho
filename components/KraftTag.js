export default function KraftTag({ title, children }) {
  return (
    <div className="kraft-tag-wrap">
      <span className="kraft-tag-pin" aria-hidden="true" />

      <div className="kraft-tag w-[190px]">
        <strong>{title}</strong>
        <span>{children}</span>
      </div>
    </div>
  );
}