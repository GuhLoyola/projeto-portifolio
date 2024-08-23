import Starfield from "react-starfield"
import Header from "../components/Header"
import Home from "../components/Home/home"
import Home2 from "../components/Home/home-2"
import Footer from "../components/Footer"

const HomePage = () => {
    return (
        <>
            <Starfield starCount={5000} starColor={[255, 255, 255]} speedFactor={0.05} />
            <Header />
            <main>
                <Home />
                <Home2 />
            </main>
            <Footer />
        </>
    )
}

export default HomePage