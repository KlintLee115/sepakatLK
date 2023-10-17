import logo from './logo.png'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'
import { useWindowDimensions } from '../../App'
import './Header.css'

export default function Header() {

    function logoClick() {
        window.location.href = "/"
    }

    const { width } = useWindowDimensions();


    let locationIconSize = width > 687 ? width > 1100 ? "1cm" : "1.8cm" : "0.5cm"

    return <header>

        <img src={logo} alt="" onClick={logoClick} />

        <div id="top-contacts">
            <div className='top-contact' >

                <AiFillPhone size="0.5cm" />
                <p>+603-8940 1833</p>
            </div>
            <div className='top-contact'>

                <HiMailOpen size={"0.5cm"} />

                <p>sepakatlk@yahoo.com</p>
            </div>

            <div className="top-contact">

                <HiLocationMarker size={locationIconSize} />
                <p>1-1, Jalan PUJ 3/5,
                    Taman Puncak Jalil
                    Bandar Putra Permai
                    43300 Selangor.</p>
            </div>
        </div>
    </header>
}