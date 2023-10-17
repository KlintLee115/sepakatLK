import { useEffect } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"

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