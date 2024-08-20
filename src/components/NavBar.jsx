const NavBar = () => {
    return (
        <nav className="bg-dove-gray h-16 w-full text-smoky-white flex items-center  md:justify-between px-8">
            <div>
                <a href="/" className="p-4">Gustavo Loyola</a>
            </div>
            <ul className="hidden md:flex md:gap-5">
                <li><a href="/sobre-mim">Sobre mim</a></li>
                <li><a href="/projetos">Projetos</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}

export default NavBar