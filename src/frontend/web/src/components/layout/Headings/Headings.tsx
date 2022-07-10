interface HeadingsProps {
  children: React.ReactNode
}

function H1({ children }: HeadingsProps): JSX.Element {
  return <h1 className="text-4xl">{children}</h1>
}

function H2({ children }: HeadingsProps): JSX.Element {
  return <h2 className="text-2xl">{children}</h2>
}

export { H1, H2 }
