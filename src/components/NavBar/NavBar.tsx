import './NavBar.css'
import NavBarLink from './NavBarLink'

export default function NavBar(props: { currView: any }) {

    const currView = props.currView
    
    return <nav>
        <NavBarLink butText="HOME" view={currView} href="/"/>
        <NavBarLink butText="ABOUT" view={currView} href="/about"/>
        <NavBarLink butText="ACCOLADES" view={currView} href="/accolades"/>
        <NavBarLink butText="CAREERS" view={currView} href="/careers"/>
        <NavBarLink butText="CONTACT US" view={currView} href="/contact"/>

    </nav>
}