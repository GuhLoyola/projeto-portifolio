import { ReactTyped } from "react-typed"
import Img_Guh from '../../assets/img/Gustavo Loyola.png'

const Home = () => {
    return (
        <section className="bg-black-russian h-screen">
            <div className="flex justify-center flex-col items-center gap-10 h-full md:flex-row">
                <img src={Img_Guh} alt="Imagem de Gustavo loyola" className="bg-blue-300 w-56 h-56 md:w-80 md:h-80 rounded-full z-30" />
                <h1 className="text-smoky-white text-xl md:text-3xl text-center">Olá, eu sou Gustavo Loyola <br />
                    <ReactTyped strings={['Desenvolvedor Front End']} typeSpeed={100} loop className="text-blue-violet" />
                </h1>
            </div>
        </section>
    )
}

export default Home