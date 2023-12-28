import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'
import { CSSProperties, useEffect } from "react"
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

export default function Contact() {

    const ContactWrapperStyle: CSSProperties = {
        padding: '4% 2%',
        textAlign: 'center',
        margin: '5% 0',
        borderRadius: '3%',
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: '22%',
    };

    useEffect(() => {
        document.title = "CONTACT"
    }, [])

    return <>
        <Header />
        <NavBar currView="CONTACT US" />

        <main className='flex justify-around p-[4%]' style={{ "fontFamily": 'Lato' }}>
            <div style={ContactWrapperStyle} className='border border-gray-800 dark:border-white'>
                <div className='mx-auto w-min'><HiLocationMarker /></div>
                <p>1-1, Jalan PUJ 3/5,
                    Taman Puncak Jalil
                    Bandar Putra Permai
                    43300 Selangor.</p>
            </div>
            <div style={ContactWrapperStyle} className='border border-gray-800 dark:border-white'>
                <div className='mx-auto w-min'><AiFillPhone /></div>
                <p>Telephone: +603-8940 1833</p>
                <p>Fax: +603-8940 2833</p>

            </div>
            <div style={ContactWrapperStyle} className='border border-gray-800 dark:border-white'>
                <div className='mx-auto w-min'> <HiMailOpen /></div>
                <p>Email: sepakatlk@yahoo.com</p>
            </div>

        </main>

        <Footer />
    </>
}