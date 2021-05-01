import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home__left'>
                <h1>Aesop.</h1>
            </div>

            <div className='home__right' >
                <h2>Mother’s Day</h2>
                <h1>Affection, bottled</h1>
                <p>Offering renewed thanks with every pour, dollop and lather, our suggested 
                    gifts for caregivers of all varieties include satisfying body cleansers,
                     softening hand balms, and gentle formulations for the skin. </p>

                <button className='home__button'>
                    Discover gifts for mother figures
                </button>
            </div>
        </div>
    )
}

export default Home
