import pic from "/building.jpg"
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const MainText = ({text}: {text: string}) => <p>{text}</p>

export default function About() {

    useEffect(() => {
        document.title = "ABOUT"
    }, [])

    return <>
        <Header/>
        <NavBar currView="ABOUT" />

        <main id="about-section" className="mx-[4%] mb-[10%] h-[60%]">
            <p className="text-2xl  my-[5vh]">WHO ARE WE</p>
            <MainText text="We are a structural & infrastructural contractor
                    mainly
                    construct the road and drainage works to the residential,
                    commercial and industrial projects. We also specialised in the
                    flooring & wall finishes; namely tiling, granite & marble works.
                    We are enthusiastic, especially to the fast track projects."/>

            <img src={pic} className="hidden sm:about-picture" alt="A PROJECT" />
            <p className="text-2xl my-[5vh]">COMPANY MISSION</p>

            <MainText text="Sepakat LK Sdn Bhd was established with a
                    mission to
                    develop
                    business strategies with our associates to grow together through
                    innovative implementation and completion of the projects with
                    the quality of work at the utmost essential."/>

        </main>

        <Footer />
    </>
}