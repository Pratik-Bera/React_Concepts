// import ./cssFilepath         ** External Css Just Do css on external css file.
let div = {
    color : 'green',
    border : '1px solid red',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    height : '80vh',
    weidth : '80vw',
}

function A03AddingCSSProperty(){
    return (
        <>
            <div style={div}>   {/*Internal CSS*/}
                <h1>Hi, Pratik</h1>
                <p style={{                                     
                    color : 'red',
                    marginLeft : '20px'
                }}>I am a Software Engineer.</p>        {/*Inline CSS*/}
            </div>
        </>
    );
}
export default A03AddingCSSProperty;