const NavBar = () => {
    return (
        <nav className="bg-almost-black h-16 w-full text-smoky-white flex items-center">
            <div>
                <a href="/" className="p-4">Gustavo Loyola</a>
            </div>
            <ul className="hidden md:block">
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default NavBar