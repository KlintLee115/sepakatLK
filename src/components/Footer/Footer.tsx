import { CSSProperties } from 'react'
import Logo from './logoRemovebgPreview.jpg'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker, HiMailOpen } from 'react-icons/hi'

export default function Footer() {

    const copyright: CSSProperties = {
        background: "#303745",
        color: "#afb0b2",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "26px",
        fontWeight: 400,
        padding: "2% 0",
        margin: 0
    }

    const BottomContactStyle: string = "flex gap-[1vw] items-center justify-center"

    const iconColor = "#cccccc"

    return <>
        <footer className='bg-gray-700 text-gray-200 text-center clear-right py-[8%] mb:pb-0 px-[10%]
        md:flex md:justify-around md:py-[5vh]'>
            <div className='mb-[10%] md:mb-0' style={{flexBasis:"40%"}}>
                <img src={Logo} alt='' className='w-[50vw] h-[7vh] md:w-[25vw] md:h-[10vh] mx-auto' />
                <p className='my-[3vh]'>
                    Sepakat LK Sdn. Bhd. (891408-H) was incorporated in 2005 and commenced operations in 2006 with the construction of Mentari Court Phase 2. The company's core business
                    is in the construction of Road and Drainage Works whilst we also specialise in the flooring & wall finishes namely tiling, granite & marble works. We are enthusiastic,
                    especially to the fast track projects.
                </p>
            </div>
            <div id='footer-top-right' style={{flexBasis:"55%"}}>
                <h3 className='text-white font-bold'>Sepakat LK OFFICE</h3>
                <div className='bg-red-500 w-[100px] h-[2px] my-[2vh] mx-auto'></div>
                <div className='flex flex-col gap-[3vh]'>
                    <div className={BottomContactStyle}>
                        <HiLocationMarker size={"0.5cm"} color={iconColor} />
                        <p>
                            1-1, Jalan PUJ 3/5, Taman Puncak Jalil Bandar Putra Permai 43300 Selangor.
                        </p>
                    </div>
                    <div className={BottomContactStyle}>
                        <AiFillPhone size={"0.5cm"} color={iconColor} />
                        <p>
                            +603-8940 1833
                        </p>
                    </div>
                    <div className={BottomContactStyle}>
                        <HiMailOpen size={"0.5cm"} color={iconColor} />
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
