import * as Export from './A05Export';
import CanChange,{val1,Test} from './A05Export'

function ExporttoApp(){
    return(
        <>
            <h1>Hello User</h1>
            <h1>{Export.default}</h1>
            <h1>{Export.val1}</h1>
            <Export.Test/>

            <p>{CanChange}</p>
            <p>{val1}</p>
            <Test/>
        </>
    )
}

export default ExporttoApp;