import React from "react"
import { Link } from "react-router-dom"

export default function NavBarLink(props) {

    const butText = props.butText
    const view = props.view
    const href = props.href

    return <Link className={butText}
    to={href}
     style={{"color": view === butText ? "red" : "white", "textDecoration":"none",
    "fontSize":"16px","margin":"1% 0"}}
      >{butText}</Link>
}