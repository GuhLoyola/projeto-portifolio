import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import AboutMePage from "./AboutMePage"
import ContactPage from "./ContactPage"
import ProjectPage from "./ProjectPage"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre-mim" element={<AboutMePage />} />
                <Route path="/projetos" element={<ProjectPage />} />
                <Route path="/contato" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes