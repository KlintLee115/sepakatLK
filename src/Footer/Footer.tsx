import './Footer.css'
import Logo from './logoRemovebgPreview.jpg'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'
import { useWindowDimensions } from '../App'

export default function Footer() {

    const copyright: any = {
        background: "#303745",
        color: "#afb0b2",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "26px",
        fontWeight: 400,
        padding: "2% 0",
        margin: 0
    }

    const iconColor = "black"

    const { width } = useWindowDimensions();

    let locationIconSize = width > 687 ? width > 1100 ? "0.7cm" : "1cm" : "0.7cm"

    return <><footer>
        <div id='footer-top-left'>
            <img src={Logo} alt='' id='footer-logo' />
            <p id='bottom-left-text'>
                Sepakat LK Sdn. Bhd. (891408-H) was incorporated in 2005 and commenced operations in 2006 with the construction of Mentari Court Phase 2. The company's core business
                is in the construction of Road and Drainage Works whilst we also specialise in the flooring & wall finishes namely tiling, granite & marble works. We are enthusiastic,
                especially to the fast track projects.
            </p>
        </div>
        <div id='footer-top-divider'></div>
        <div id='footer-top-right'>
            <h3 id='footer-company-title'>Sepakat LK OFFICE</h3>
            <div className='redLine'></div>
            <div id='bottom-contacts'>
                <div className='bottom-contact'>
                    <HiLocationMarker size={locationIconSize} color={iconColor} />
                    <p>
                        1-1, Jalan PUJ 3/5, Taman Puncak Jalil Bandar Putra Permai 43300 Selangor.
                    </p>
                </div>
                <div className='bottom-contact'>
                    <AiFillPhone size={20} color={iconColor} />
                    <p>
                        +603-8940 1833
                    </p>
                </div>
                <div className='bottom-contact'>
                    <HiMailOpen size={20} color={iconColor} />
                    <p>
                        sepakatlk@yahoo.com
                    </p>
                </div>
            </div>
        </div>
        </footer>

        <p style={copyright}>Copyright © 2015-2019 Sepakat LK Sdn. Bhd. All Rights Reserved.</p>
</>
}
