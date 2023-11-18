import { useState } from "react";
import Logo from "../../assets/LogoBN.png";
import { Nav, ImageLogo, LoginBtn, Searcher } from "./NavbarStyled";

export function Navbar() {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <>
      <Nav>
        <Searcher className="input-search-space" onFocus={onFocus}>
          <i className="bi bi-search"></i>
          <input
            type="text"
            name="searcher"
            id="seacher"
            placeholder={onFocus ? "" : "Procurar notícias..."}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
        </Searcher>
        <ImageLogo src={Logo} alt="Logo Breaking News" />
        <LoginBtn>Entrar</LoginBtn>
      </Nav>
      <h1>Aoba Garai!</h1>
    </>
  );
}
