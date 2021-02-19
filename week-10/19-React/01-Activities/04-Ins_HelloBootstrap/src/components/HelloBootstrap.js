const HelloBootstrap = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello World!</h1>
        <p>I am Jumbotron.</p>
        <button className="btn btn-primary btn-sm">Learn More</button>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card Title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card Content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card Title</h3>
        </div>
        <div className='card-body'>
          <p className='card-text'>Card Content</p>
        </div>
      </div>
    </div>
  )
}

export default HelloBootstrap;