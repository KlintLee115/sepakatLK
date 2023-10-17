import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import StackOverflow from "/stack-overflow.svg"
import { useEffect } from "react"

export default function Careers() {

    const h6Style: any = {
        color: "#303745",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    fontFamily: 'Poppins'
    }

    const internStyle: any = {
        marginTop: 0,
        lineHeight: "26px",
        fontWeight: 400,
        color: "#505050",
        wordWrap: "break-word",
        fontSize: "16px"
    }

    useEffect(() => {
        document.title = "CAREERS"
    }, [])

    return <>
        <Header/>
        <NavBar currView="CAREERS" />

        <main style={{"padding":"4% 8%"}}>
            <div style={{ "textAlign": "center" }}>
                <h1>Careers</h1>
                <h6 style={h6Style}>
                    Sepekat LK strives to be an exceptional company recognized for excellence in our core businesses and we
                    believe that human capital plays a critical role in this vision. If you would like to join our team,
                    please send your photograph, resume, and other relevant documents to sepakatlk@yahoo.com.
                </h6>
                <p style={{"color":"#505050"}}>*By submitting your application, you are deemed to have given your consent to us to process your personal
                    information provided. All applications will be processed in strict confidence and only shortlisted
                    candidates will be notified.</p>
            </div>

            <div id="internships" style={{"margin":"10% 0"}}>
                <img src={StackOverflow} style={{ "width": "5%" }} alt="Stackoverflow svg"/>
                <h1>Internships</h1>
                <p style={internStyle}>Sepakat LK collaborates with universities, polytechnics and government
                    agencies to provide internships
                    for undergraduates. Through these internships, undergraduates can gain experience and insights and in
                    the working environment of the relevant industries, as well as build a career foundation and business
                    networks.
                </p>
            </div>
        </main>
        <Footer />
    </>
}