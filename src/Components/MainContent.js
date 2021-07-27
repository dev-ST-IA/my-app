import React from 'react'

function MainContent(props) {
    const checkedStyle={
        fontStyle:'italic',
        color: 'grey',
        textDecoration:'line-through grey wavy'
    }
    return (
        <div className='main'>
            <p className='btnlbls' style={props.todo.completed? checkedStyle:null}><input type='checkbox' id="td1" className="checkbtns" checked={props.todo.completed} onChange={() => props.handleChangeProp(props.todo.id)} />
                {props.todo.text}
            </p>
        </div>
    )

}

export default MainContent