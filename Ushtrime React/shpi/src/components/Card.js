import "./Card.css"
import Profile from '../img/FACEBOOK LODO.png'

function Card() {

    return (
        <div className="Diva">
            <img src={Profile} alt="Profile img"></img>
            <h1>Dijar Ismajli</h1>
            <p>Programmer</p>
        </div>
    )
}

export default Card