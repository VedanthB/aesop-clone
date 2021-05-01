import './Header.css'

function Header() {
    return (
        <div className='header' >
            <div className='header__left'>
                <p>Shop</p>
                <p>Read</p>
                <p>Stores</p>
                <p>Search</p>
            </div>

            <div className='header__right' >
                <p>Login</p>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Header
