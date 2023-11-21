import { useState } from "react";
import Logo from "../../assets/LogoBN.png";
import { Nav, ImageLogo, LoginBtn, Searcher } from "./Navbar.styles";
import { Outlet } from "react-router-dom";

export function Navbar() {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <>
      <Nav>
        <Searcher className="input-search-space" onFocus={onFocus}>
          <input
            type="text"
            name="searcher"
            id="seacher"
            placeholder={onFocus ? "" : "Procurar notícias..."}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
          <i className="bi bi-search"></i>
        </Searcher>
        <ImageLogo src={Logo} alt="Logo Breaking News" />
        <LoginBtn>Entrar</LoginBtn>
      </Nav>
      <Outlet />
    </>
  );
}
