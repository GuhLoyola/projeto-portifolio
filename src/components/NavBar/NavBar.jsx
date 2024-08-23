import { CodeBracketIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    let Links = [
        { name: 'Sobre mim', link: '/sobre-mim', id: 1 },
        { name: 'Projetos', link: '/projetos', id: 2 },
        { name: 'Contato', link: '/contato', id: 3 },
    ]

    let [isOpen, setIsOpen] = useState(false)

    let [navColor, setNavColor] = useState(false)

    const handleScroll = () => {
        window.scrollY >= 20 ? setNavColor(true) : setNavColor(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`nav ${navColor ? 'md:bg-black-russian-66 md:backdrop-blur-md shadow-md' : 'bg-transparent'} bg-black-russian font-poppins`}>
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center text-smoky-white">
                <div className="flex text-2xl items-center gap-2">
                    <CodeBracketIcon className="w-7 h-7 text-amethyst" />
                    <Link to='/' className="font-bold">Gustavo Loyola</Link>
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ? <XMarkIcon /> : <Bars3Icon />}
                </div>

                <ul className={`menu bg-black-russian ${isOpen ? 'top-12 shadow-md' : 'top-[-490px]'}`}>
                    {
                        Links.map(link => (
                            <li key={link.id} className="my-7 md:my-0 md:ml-8 font-semibold relative">
                                <Link to={link.link} className="z-[-1] link">
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
