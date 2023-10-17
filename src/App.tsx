import { useEffect, useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./Views/About";
import Accolades from "./Views/Accolades";
import Careers from "./Views/Careers";
import Home from "./Views/Home";
import Projects from "./Views/Projects";
import Contact from "./Views/Contact"

export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/careers" element={<Careers/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/accolades" element={<Accolades/>} />
                <Route path="/contact" element={<Contact/>} />

            </Routes>

        </BrowserRouter>
    )
}