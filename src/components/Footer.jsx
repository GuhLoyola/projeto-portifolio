import { Link } from "react-router-dom"

const Footer = () => {

    let Links = [
        { name: 'Sobre mim', link: '/sobre-mim', id: 1 },
        { name: 'Projetos', link: '/projetos', id: 2 },
        { name: 'Contato', link: '/contato', id: 3 },
    ]

    return (
        <footer className="bg-rich-black md:px-10 py-4 px-7 md:flex flex-col justify-center items-center relative
         text-smoky-white z-30">
            <ul className="flex justify-evenly md:gap-10 mb-5">
                {
                    Links.map(link => (
                        <li key={link.id} className="relative">
                            <Link to={link.link} className="z-[-1] link">
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <p className="text-center">Copyright © 2024 | Gustavo Loyola</p>
        </footer>
    )
}

export default Footer