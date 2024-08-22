import Starfield from "react-starfield"
import Header from "../components/Header"
import Home from "../components/Home/home"

const HomePage = () => {
    return (
        <>
            <Starfield starCount={5000} starColor={[255, 255, 255]} speedFactor={0.05}/>
            <Header />
            <main>
                <Home />
            </main>
        </>
    )
}

export default HomePage