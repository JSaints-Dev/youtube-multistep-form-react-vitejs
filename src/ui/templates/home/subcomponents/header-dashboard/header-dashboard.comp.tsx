export function HeaderDashboard({ title }: { title: string }) {
  return (
    <header className="flex w-full bg-dark px-10 py-12 text-6xl lg:px-56">
      <div className="relative flex flex-col">
        <h1 className="font-semibold text-light">{title}</h1>
        <span className="absolute -right-2 bottom-0 h-1 w-14 bg-accent" />
        <span className="absolute -right-2 bottom-0 h-14 w-1 bg-accent" />

        <span className="absolute -left-2 -top-1 h-1  w-14 bg-accent" />
        <span className="absolute -left-2 -top-1 h-14  w-1 bg-accent" />
      </div>
    </header>
  )
}
