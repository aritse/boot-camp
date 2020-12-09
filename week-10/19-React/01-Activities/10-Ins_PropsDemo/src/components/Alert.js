export default function Alert(props) {
  return <div className={`alert alert-${props.type || "success"}`} role="alert">{props.children}</div>
}