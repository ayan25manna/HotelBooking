import SearchBar from '../../components/SearchBar/SearchBar'
import './homepage.scss'

function Homepage() {
    return (
        <div className='homepage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find real Estate & Get your dream place
                    </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dolorem. Iste cum atque ex quidem nam? Mollitia natus sequi aspernatur, fugiat hic sunt odio incidunt ipsum nam praesentium. Expedita, officiis?</p>
                    <SearchBar />
                    <div className="Boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="../../../public/public/homePic.png" alt="" />
            </div>
        </div>
    )
}

export default Homepage