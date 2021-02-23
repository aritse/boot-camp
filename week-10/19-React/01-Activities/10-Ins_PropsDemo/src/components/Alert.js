const Alert = props => <div className={`alert alert-${props.type || 'success'}`}>{props.children}</div>
export default Alert;