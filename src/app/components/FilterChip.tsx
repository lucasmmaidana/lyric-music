export default function FilterChip({children, className, active, href}: {children: React.ReactNode; className?: string; active?: boolean; href: string}) {
  return (
    <a href={href} className={`rounded-full px-5 py-2 text-white-light cursor-pointer ${className} ${active ? "bg-green" : "bg-black-light"}`}>
      {children}
    </a>
  )
}
