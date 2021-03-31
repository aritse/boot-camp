export default function Row({ children, fluid }) {
  return (
    <div className={`row${fluid ? '-fluid' : ''}`}>
      {children}
    </div>
  )
}