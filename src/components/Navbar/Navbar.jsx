import { useState } from "react";
import Logo from "../../assets/LogoBN.png";
import { Nav, ImageLogo, LoginBtn, Searcher } from "./Navbar.styles";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Navbar() {
  const [onFocus, setOnFocus] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <Searcher className="input-search-space" onFocus={onFocus}>
            <input
              type="text"
              name="searcher"
              id="seacher"
              placeholder={onFocus ? "" : "Procurar notícias..."}
              onFocus={() => setOnFocus(true)}
              onBlur={() => setOnFocus(false)}
              {...register("title")}
            />
            <button type="submit" className="bi bi-search"></button>
          </Searcher>
        </form>
        <Link>
          <ImageLogo src={Logo} alt="Logo Breaking News" />
        </Link>
        <LoginBtn>Entrar</LoginBtn>
      </Nav>
      <Outlet />
    </>
  );
}
