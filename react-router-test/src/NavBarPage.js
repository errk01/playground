import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBarPage extends Component{
    render(){
        return(
            <div className="nav">
                <Link to="/">Home</Link> |
                <Link to="/menu">Menu</Link> |
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default NavBarPage