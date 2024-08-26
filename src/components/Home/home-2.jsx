import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const Home2 = () => {

    let Medias = [
        { name: 'Instagram', link: 'https://www.instagram.com/g_loyola17', icon: <FaInstagram className="media-icon" />, id: 1 },
        {
            name: 'Linkedin', link: 'https://www.linkedin.com/in/gustavo-loyola-754102241',
            icon: <FaLinkedinIn className="media-icon" />,
            id: 2
        },
        { name: 'Github', link: 'https://github.com/GuhLoyola', icon: <FaGithub className="media-icon" />, id: 3 },
        { name: 'Whatsapp', link: 'https://wa.me/5519995269890', icon: <FaWhatsapp className="media-icon" />, id: 4 },
    ]

    return (
        <section className="bg-black-russian text-smoky-white overflow-hidden">
            <div className="flex justify-center flex-col text-center">
                <h2 className="text-2xl mb-10 md:text-4xl md:mb-20">Deixe-me me apresentar</h2>
                <div className="container mx-auto px-10 mb-10 md:mb-20 md:w-10/12 text-justify">
                    <p className="text-sm md:text-lg leading-relaxed md:leading-normal">
                        Sou um desenvolvedor front end, apaixonado por tecnologia e desenvolvimento web 👨🏻‍💻.
                        <br />
                        <br />
                        Aqui, você encontrará alguns dos meus trabalhos favoritos, onde aplico minhas habilidades em desenvolver aplicações com <span className="text-blue-violet">Node.js</span> e frameworks Javascript como <span className="text-blue-violet">React.js</span>.
                    </p>
                    <p className="text-sm md:text-lg mt-5 leading-relaxed">
                        Seja bem-vindo ao meu portifólio!
                        <br />
                        <span className="font-bold text-blue-violet italic">Vamos criar algo incrível juntos</span> 💜.
                    </p>
                </div>


                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl mb-0 md:mb-2">Você pode me encontrar em</h2>
                    <h3 className="md:text-xl">Sinta-se à vontade para se <span className="text-blue-violet">conectar</span> comigo</h3>
                </div>

                <ul className="grid grid-cols-2 gap-5 place-items-center py-10 md:flex md:justify-center md:items-center md:py-20">
                    {
                        Medias.map(media => (
                            <li key={media.id} className="bg-cod-gray w-16 h-16 rounded-lg shadow-smoky-white shadow-md hover:shadow-blue-violet transition-all duration-300 ease-in-out hover:scale-110 z-30">
                                <a href={media.link} target="_blank">
                                    {media.icon}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Home2