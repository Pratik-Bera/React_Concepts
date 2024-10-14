/* Create a component to display GoodMorning  , Good Afternoon, Good Evening, Good Noght,
** between 6 to 12 pm Good morning in green,
**between 12 to 6 pm Good Afternoon in orange,
**between 6 to 8 pm Good Evening in blue,
**between 8 to 12 am Good Night in black,
**between 12 to 6 am Go to Sleep.
*/

let strProperty ={

};
let currTime = new Date().getHours();;
let preString = "";
if(currTime>=6 && currTime<12){
    preString = "Good Morning";
    strProperty.color = "green";
}else if(currTime>=12 &&currTime<18){
    preString = "Good Afternoon";
    strProperty.color = "orange";
}else if(currTime>=18 && currTime<20){
    preString = "Good Evening";
    strProperty.color = "blue";
}else if(currTime>24 && currTime>=20){
    preString = "Good Night";
    strProperty.color = "black";
}else{
    preString = "Go to Sleep";
    strProperty.color = "red";
}



function A04Challenge1() {
    return (
        <>
            <h1 style={strProperty}>{`${preString} , User ...`}</h1>
        </>
    )

}

export default A04Challenge1;
