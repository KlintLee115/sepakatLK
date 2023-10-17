import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Building from "/building.jpg"
import { useWindowDimensions } from "../App";
import './Home.css'

export default function Home() {

    useEffect(() => {
        document.title = "HOME"
    }, [])

    const { width } = useWindowDimensions();

    const h2Style : any= {
        whiteSpace: "nowrap",
        position: "absolute",
        textAlign: "center",
        color: "black",
        fontSize: width > 687 ? width > 992 ? "4rem" : "3rem" : "2rem", 
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }

    return <div id="home">
        <Header />
        <NavBar currView="HOME" />
        <div id="banner" style={{ "position": "relative", "width": "auto"}}>
            <img src={Building} style={{ "width": "100%", "opacity": "82%" }} alt="A project"/>
            <h2 style={h2Style}>We Are<br /> THE BUILDER OF CHOICE</h2>
        </div>
        <Footer/>
    </div>
}