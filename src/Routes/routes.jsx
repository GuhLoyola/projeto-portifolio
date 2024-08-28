import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./homePage"
import ContactPage from "./contactPage"
import ProjectPage from "./projectPage"
import AboutPage from "./aboutPage"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre-mim" element={<AboutPage />} />
                <Route path="/projetos" element={<ProjectPage />} />
                <Route path="/contato" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes