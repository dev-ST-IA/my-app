import React from 'react'


function Logger(props){
    return(
        <div>
            <h1>{(props.isLogged &&"Logged In")||"Logged Out"}</h1>
            <button onClick={props.handleClick}>{(props.isLogged &&"Log Out")||(!props.isLogged && "Log In")}</button>
        </div>
    )
}
export default Logger