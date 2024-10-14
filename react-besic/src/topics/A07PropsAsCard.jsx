import './A07PropsAsCard.css';
function A07PropsAsCard(props){  
    return (
        <>
            <div className="card" >
            <img src={props.cardImage} alt="card_image"/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href ={props.link} target="_blank" rel="noopener noreferrer">Watch Triler</a>
            </div>
        </>
    )
}

export default A07PropsAsCard;