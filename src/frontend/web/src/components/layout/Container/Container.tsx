/*
  Component that adjust and center a content inside a limited width.
*/

interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center h-full px-[var(--separator-big)]">
      <div className="container m-auto">{children}</div>
    </div>
  )
}

export default Container
