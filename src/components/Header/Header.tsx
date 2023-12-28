import logo from './logo.png'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'

export default function Header() {

    const logoClick = () => window.location.href = "/"

    const ContactStyle: string = "mx-[1%] my-0 w-full flex items-center justify-center md:w-fit"

    return <header className='text-center flex flex-col m-[2%] items-center md:flex-row md:gap-[5vw]'>

        <img className='w-[35%] h-[10%] hover:cursor-pointer mb-[3vh] md:w-[25vw]' src={logo} alt="" onClick={logoClick} />

        <div className='mb-[3vh] flex flex-wrap md:flex-row gap-[3vh] md:gap-[2vw] justify-center items-center flex-col w-full'>
            <div className={ContactStyle} >

                <AiFillPhone size="0.5cm" />
                <p>+603-8940 1833</p>
            </div>
            <div className={ContactStyle}>

                <HiMailOpen size={"0.5cm"} />

                <p>sepakatlk@yahoo.com</p>
            </div>

            <div className={ContactStyle}>

                <HiLocationMarker size={"0.5cm"} />
                <p>1-1, Jalan PUJ 3/5,
                    Taman Puncak Jalil
                    Bandar Putra Permai
                    43300 Selangor.</p>
            </div>
        </div>
    </header>
}