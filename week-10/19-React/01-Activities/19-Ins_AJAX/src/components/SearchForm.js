export default function SearchForm(props) {
  return (
    <form className="form-group">
      <label htmlFor="search">Search</label>
      <input
        placeholder="Search for a gif"
        className="form-control"
        onChange={props.onChange}
        value={props.search}
        name="search">
      </input>
      <button className="btn btn-primary mt-3" onClick={props.onClick}>Search</button>
    </form>
  )
}