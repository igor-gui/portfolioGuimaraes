import { Link } from "react-router-dom"
import { StyledHome } from "../components/styled"
import perfil from "../images/perfil.jpg"

export default function Home() {


    return (
        <StyledHome>
            <img src={perfil} alt="Foto de Igor Guimarães" />
            <div className="text">
                <h1>Igor Guimarães</h1>
                <h2>Junior Front-End Developer</h2>
            </div>
            <nav>
                <Link to='/projects'>Projetos</Link>
                <Link to='/about'>Sobre</Link>
                <Link to='/academics'>Formação</Link>
                <Link to='/socialMedia'>Redes</Link>
            </nav>
        </StyledHome>
    )
}

