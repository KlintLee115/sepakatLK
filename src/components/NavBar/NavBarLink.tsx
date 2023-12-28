import { Link } from "react-router-dom"

export default function NavBarLink(props: { butText: string; view: any; href: string }) {

    const butText = props.butText
    const view = props.view
    const href = props.href

    return <Link to={href}
    className="text-lg"
     style={{"color": view === butText ? "red" : "white", "textDecoration":"none","margin":"1% 0"}}
      >{butText}</Link>
}