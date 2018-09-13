import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const menus = [
    {
        to: '/',
        name: 'Tasks List',
        exact: true
    },
    {
        to: '/edit',
        name: 'Add Task',
        exact: false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : ''
            return (
                <li className={'nav-item' + active} >
                    <Link className="nav-link" to={to}>{label}</Link>
                </li>
            )
        }} />
    )
}

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = menus => {
        let result = null
        if(menus.length > 0){
            result = menus.map((menu, index)=>{
                return (<MenuLink label={menu.name} activeOnlyWhenExact={menu.exact} key={index} to={menu.to}/>)
            })
        }
        return result
    }
}

export default Nav;