export default function Container({ children, fluid }) {
  return (
    <div className={`container${fluid ? '-fluid' : ''}`}>
      {children}
    </div>
  )
}