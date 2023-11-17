import "./Navbar.css"
import Logo from "../../assets/LogoBN.png"

export function Navbar(){
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i></i>
                    <input type="text" name="" id="" />
                </div>
                <img src={Logo} alt="Logo Breaking News" />
            </nav>
        </>
    )
}