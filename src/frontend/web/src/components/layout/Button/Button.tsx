import { MouseEventHandler } from "react"

interface ButtonProps {
  children: React.ReactNode
  isSubmit?: boolean
  onClick?: MouseEventHandler
}

function Button({ children, isSubmit = true, onClick }: ButtonProps): JSX.Element {
  return (
    <button className="btn btn-secondary normal-case" type={isSubmit ? "submit" : "button"} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
