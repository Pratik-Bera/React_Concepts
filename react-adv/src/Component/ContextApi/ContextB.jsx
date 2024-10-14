import ContextC from './ContextC'
import {LastName} from '../../App'
const ContextB = ()=>{
    return(
        <>
            <h2>ContextB</h2>
            <ContextC/>

            <LastName.Consumer>
                {
                    (title)=>{
                        return(
                            <>
                                <h6>Hey mr. {title}. I think you understand Context Api well. </h6>
                            </>
                        )
                    }
                }
            </LastName.Consumer>

            
        </>
    )
}

export default ContextB;