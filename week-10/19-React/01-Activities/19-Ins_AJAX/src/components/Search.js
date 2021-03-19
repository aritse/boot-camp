export default function Search(props) {
  return (
    <form className='form-group'>
      <label htmlFor='term'>Search</label>
      <input
        placeholder='Search for a gif'
        className='form-control'
        name='term'
        value={props.term}
        onChange={props.onInputChange}
      />
      <button className='btn btn-primary mt-3' onClick={props.onButtonClick}>Search</button>
    </form>
  )
}