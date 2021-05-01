import './Products.css'

function Products({src, title, description}) {
    return (
        <div className='products'>
            <img src={src} />

            <h4>
                {title}
            </h4>

            <p>
                {description}
            </p>

        </div>
    )
}

export default Products
