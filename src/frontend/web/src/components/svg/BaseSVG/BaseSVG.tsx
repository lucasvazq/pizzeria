interface BaseSVGProps {
  title: string
  width: number
  height: number
  children: React.ReactNode
}

function BaseSVG({ title, width, height, children }: BaseSVGProps): JSX.Element {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="inline-block"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {children}
    </svg>
  )
}

export default BaseSVG
