import React from 'react'

export default function ListItemes(props) {
    return (
        <div>
           { props.list.map((items) => <li>{items}</li>)} 
        </div>
    )
}
