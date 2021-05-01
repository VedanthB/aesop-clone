import './Item.css'

function Item({h3, h2, p, button, src}) {
    return (
        <div className='item'>
            <div className='item__left'>
            <h3> {h3} </h3>
                <h2> {h2} </h2>
                <p> {p} </p>

                <button className='item__button'>
                   {button}
                </button>
            </div>

            <div className='item__right'>
                <img src={src} alt='' />
            </div>
        </div>
    )
}

export default Item
