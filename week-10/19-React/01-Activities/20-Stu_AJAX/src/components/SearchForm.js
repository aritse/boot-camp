export default function SearchForm(props) {
  return (
    <form className='form-group'>
      <label htmlFor="search">Search</label>
      <input
        className='form-control'
        placeholder='Search for a movie'
        type='text'
        id='search'
        value={props.search}
        onChange={props.onChange}
        name="search"
      ></input>
      <br/>
      <button className='btn btn-primary' onClick={props.onClick}>Search</button>
    </form>
  )
}