import React from 'react';

const Authentication = (props) => {
    const {Component}=props;
    const [username, password] = ["admin","admin@123"];
    
    function auth(){
        if(localStorage.getItem("userName")===username && localStorage.getItem("password")===password){
            return <Component/>
        }
        else{
            return <h1>Login First</h1>
        }
    }

  return (
    <div>
    {auth()}
    </div>
  )
}

export default Authentication
