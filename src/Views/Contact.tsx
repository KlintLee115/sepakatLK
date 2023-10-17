import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'
import './Contact.css'
import { useEffect } from "react"
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Contact() {

    useEffect(() => {
        document.title = "CONTACT"
    }, [])

    return <>
        <Header/>
        <NavBar currView="CONTACT US" />

        <main style={{ "fontFamily": 'Lato', "padding":"4%", "display":"flex", "justifyContent":"space-around" }}>
            <div className="contact">
                <HiLocationMarker />
                <p>1-1, Jalan PUJ 3/5,
                    Taman Puncak Jalil
                    Bandar Putra Permai
                    43300 Selangor.</p>
            </div>
            <div className="contact">
                <AiFillPhone />
                <p>Telephone: +603-8940 1833</p>
                <p>Fax: +603-8940 2833</p>

            </div>
            <div className="contact">
                <HiMailOpen />
                <p>Email: sepakatlk@yahoo.com</p>
            </div>

        </main>

        <Footer />
    </>
}