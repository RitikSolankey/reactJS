import ProfilePic from "./assets/imagee.jpg"
function Card() {
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic}></img>
            <h2 className="card-title">Ritik Solankey</h2>
            <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, id.</p>
        </div>
    );
}

export default Card