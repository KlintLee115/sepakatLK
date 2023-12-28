import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Building from "/building.jpg"
import { useWindowDimensions } from "../App";
import { CSSProperties } from "react";

export default function Home() {

    const { width } = useWindowDimensions();

    const h2Style : CSSProperties= {
        fontSize: width > 687 ? width > 992 ? "4rem" : "3rem" : "2rem"
    }

    return <div id="home">
        <Header />
        <NavBar currView="HOME" />
        <div id="banner" className="relative w-auto">
            <img src={Building} alt="A project" className="opacity-60 w-full dark:opacity-30"/>
            <h2 style={h2Style} className="dark:text-gray-50 font-bold black whitespace-nowrap absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">We Are<br /> THE BUILDER OF CHOICE</h2>
        </div>
        <Footer/>
    </div>
}