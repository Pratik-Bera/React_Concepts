import {FirstName,LastName} from '../../App.js';
import UseContext from './UseContext';
const ContextC = () =>{
    return(
        <>
            <h3>ContextC</h3>
            <FirstName.Consumer>
                {(name)=>{
                    return(
                            <>
                            <h1>{name}</h1>
                            <LastName.Consumer>
                                {(surName)=>{
                                    return(
                                    <>
                                    <h1>{surName}</h1>
                                    </>
                                )
                                }}
                            </LastName.Consumer>
                            </>
                    )
                }}
            </FirstName.Consumer>
            <UseContext/>
        </>
    )
}

export default ContextC;