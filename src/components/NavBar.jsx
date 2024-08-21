import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false)
    const [navColor, setNavColor] = useState(false)

    const handleScroll = () => {
        window.scrollY >= 20 ? setNavColor(true) : setNavColor(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 top-0 transition-colors duration-300 
        ${navColor ? 'bg-black-russian-66 backdrop-blur-md shadow-md' : 'bg-transparent backdrop-blur-md'}`}>
            <div className="mx-auto p-4 flex justify-between items-center text-smoky-white">
                <div className="flex items-center">
                    <Link to='/'>
                        <p className="uppercase font-bold">Gustavo Loyola</p>
                    </Link>
                </div>
                <div className="md:hidden" onClick={() => setNavExpanded(!navExpanded)}>
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-smoky-white transition-transform duration-300 ease-in-out 
                            ${navExpanded ? 'rotate-45 translate-y-2' : ''}`}></span>

                        <span className={`block w-8 h-0.5 bg-smoky-white transition-opacity duration-300 ease-in-out
                            ${navExpanded ? 'opacity-0' : ''}`}></span>

                        <span className={`block w-8 h-0.5 bg-smoky-white transition-transform duration-300 ease-in-out 
                            ${navExpanded ? '-rotate-45 -translate-y-3' : ''}`}></span>
                    </div>
                </div>
                <div className={`${navExpanded ? "block" : "hidden"} md:flex md:items-center md:space-x-6`}>
                    <ul className="flex flex-col md:flex-row md:items-center gap-4 p-4">
                        <li>
                            <Link to='/sobre-mim' className="text-smoky-white flex items-center gap-1"
                                onClick={() => setNavExpanded(false)}>
                                Sobre mim
                            </Link>
                        </li>
                        <li>
                            <Link to='/projetos' className="text-white flex items-center gap-1"
                                onClick={() => setNavExpanded(false)}>
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link to='/contato' className="text-white flex items-center gap-1"
                                onClick={() => setNavExpanded(false)}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
