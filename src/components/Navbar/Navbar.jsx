import "./Navbar.css"
import Logo from "../../assets/LogoBN.png"

export function Navbar(){

    function clique(){
        window.alert("Ciclou")
    }
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search" onClick={clique}></i>
                    <input type="text" name="searcher" id="seacher"
                    placeholder="Procurar notícias..." />
                </div>
                <img src={Logo} alt="Logo Breaking News" />
                <button>Entrar</button>
            </nav>
            <h1>Aoba Garai!</h1>

        </>
    )
}