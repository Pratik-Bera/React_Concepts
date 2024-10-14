import {useNavigate} from 'react-router-dom';
const Contact = ()=>{
    const navigateContact = useNavigate();
    const handleClick = ()=>{
        navigateContact('/about');
    }
    return(
        <>
            <h1>Contact Section</h1>
            <p>This is a contact section</p>
            <button onClick={handleClick} >Go To About page</button>
        </>
    )
}

export default Contact;