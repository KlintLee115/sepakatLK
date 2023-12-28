import NavBarLink from './NavBarLink'

export default function NavBar(props: { currView: any }) {

    const currView = props.currView
    
    return <nav className='flex gap-[2vh] flex-col p-[2%] text-center pr-0 z-10 bg-gray-600 w-auto md:flex-row md:gap-[5vw] md:sticky md:py-[2vh] mx-[2vw] md:top-0  '>
        <NavBarLink butText="HOME" view={currView} href="/"/>
        <NavBarLink butText="ABOUT" view={currView} href="/about"/>
        <NavBarLink butText="ACCOLADES" view={currView} href="/accolades"/>
        <NavBarLink butText="CAREERS" view={currView} href="/careers"/>
        <NavBarLink butText="CONTACT US" view={currView} href="/contact"/>

    </nav>
}