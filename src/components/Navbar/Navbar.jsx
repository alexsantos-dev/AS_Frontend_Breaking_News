import Logo from "../../assets/LogoBN.png";
import { Nav, ImageLogo, LoginBtn, Searcher, ErrorSpan } from "./Navbar.styles";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string({ required_error: "A pesquisa nao pode conter somente espaços" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Preencha o campo corretamente!",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`search/${title}`);
    reset();
  }

  function goAuth() {
    navigate("/auth");
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <Searcher className="input-search-space">
            <input
              type="text"
              name="searcher"
              id="seacher"
              placeholder="Procurar notícias..."
              {...register("title")}
              required
            />
            <button type="submit" className="bi bi-search"></button>
          </Searcher>
        </form>
        <Link>
          <ImageLogo src={Logo} alt="Logo Breaking News" />
        </Link>
        <LoginBtn onClick={goAuth}>Entrar</LoginBtn>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
