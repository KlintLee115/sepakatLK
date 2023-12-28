import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import StackOverflow from "/stack-overflow.svg"
import { CSSProperties, useEffect } from "react"

export default function Careers() {

    const CareersTextStyle: CSSProperties = {
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "26px",
        margin: "5vh auto",
        fontFamily: 'Poppins',
    }

    const internStyle: CSSProperties = {
        lineHeight: "26px",
        fontWeight: 400,
        wordWrap: "break-word",
        fontSize: "16px",
        margin: "5vh auto"
    }

    useEffect(() => {
        document.title = "CAREERS"
    }, [])

    return <>
        <Header />
        <NavBar currView="CAREERS" />

        <main className="px-[8%] py-[4%]">
            <div className="text-center">
                <h1>Careers</h1>
                <p style={CareersTextStyle}>
                    Sepekat LK strives to be an exceptional company recognized for excellence in our core businesses and we
                    believe that human capital plays a critical role in this vision. If you would like to join our team,
                    please send your photograph, resume, and other relevant documents to sepakatlk@yahoo.com.
                </p>
                <p style={CareersTextStyle}>*By submitting your application, you are deemed to have given your consent to us to process your personal
                    information provided. All applications will be processed in strict confidence and only shortlisted
                    candidates will be notified.</p>
            </div>

            <div id="internships" className="my-[10%]">
                <img src={StackOverflow} className="w-[5%]" alt="Stackoverflow svg" />
                <h1 className="mt-[5vh]">Internships</h1>
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