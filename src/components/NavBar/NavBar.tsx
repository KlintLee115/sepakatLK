import './NavBar.css'
import NavBarLink from './NavBarLink'

export default function NavBar(props: any) {

    const currView = props.currView
    
    return <nav>
        <NavBarLink butText="HOME" view={currView} href="/"/>
        <NavBarLink butText="ABOUT" view={currView} href="/about"/>
        {/* <NavBarLink butText="OUR PROJECTS" view={currView} href="/projects"/> */}
        <NavBarLink butText="ACCOLADES" view={currView} href="/accolades"/>
        <NavBarLink butText="CAREERS" view={currView} href="/careers"/>
        <NavBarLink butText="CONTACT US" view={currView} href="/contact"/>

    </nav>
}