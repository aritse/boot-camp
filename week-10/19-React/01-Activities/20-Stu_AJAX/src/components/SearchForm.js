export default function SearchForm({ term, onInputChange, onFormSubmit}) {
  return (
    <form className='form-group' onSubmit={onFormSubmit}>
      <input
        name='term'
        placeholder='Search a movie'
        value={term}
        onChange={onInputChange}
        className='form-control'
      />
      <button className='btn btn-primary'>Search</button>
    </form>
  )
}