export default function Result ({ result }) {
    return (
        <ul className='list-group'>
            {result.map((item, key) => 
                <li key={key} className='list-group-item'>
                    <img
                        className='img-fluid'
                        src={item.images.original.url}
                        alt={item.title}
                    />
                </li>
            )}
        </ul>
    )
}