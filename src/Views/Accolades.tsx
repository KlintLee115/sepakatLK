import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"
import pic1 from "/accolades/company-registration1.jpg"
import pic2 from "/accolades/company-registration2.jpg"
import { useWindowDimensions } from "../App"
import { useEffect } from "react"

export default function Accolades() {

    const { width } = useWindowDimensions();

    const organizePicsCSS: any = width > 687 ? {
        display: "flex",
        columnGap : "2%",
        alignItems: "center",
        justifyContent: "center"
    }:{
        textAlign:"center"
    }

    const phonePicsCSS = {
        width:"clamp(60%,70%,80%)"
    }

    useEffect(() => {
        document.title = "ACCOLADES"
    }, [])

    return width > 687?
    <>
        <Header />
        <NavBar currView="ACCOLADES" />


        <main style={{"padding":"5%"}}>
            <div>
                <p style={{"marginBottom":"5%"}}>Company's registration</p>
                
                <div style={organizePicsCSS}>
                    <img src={pic1} style={{"width":"clamp(35%,40%,40%)","height":"clamp(20%,30%,40%)"}} alt="Accolade 1"/>
                    <div style={{"width":"3%"}}></div>
                    <img src={pic2} style={{"width":"clamp(35%,40%,40%)","height":"clamp(20%,30%,40%)"}} alt="Accolade 2"/>
                </div>
            </div>
        </main>
        <Footer />
    </>
    :

    <>
    <Header />
        <NavBar currView="ACCOLADES" />


        <main style={{"padding":"5%"}}>
            <div>
                <p style={{"marginBottom":"5%"}}>Company's registration</p>
                
                <div style={organizePicsCSS}>
                    <img src={pic1} style={phonePicsCSS} alt="Accolade 1"/>
                    <div style={{"width":"3%"}}></div>
                    <img src={pic2} style={phonePicsCSS} alt="Accolade 2"/>
                </div>
            </div>
        </main>
        <Footer /></>

}