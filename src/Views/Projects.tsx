import { useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

export default function Projects() {

    useEffect(() => {
        document.title = "PROJECTS"
    }, [])

    return <>
        <Header />
        <NavBar currView="OUR PROJECTS" />
        <Footer />
    </>
}