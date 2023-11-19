import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Data.js";
import { BarraLateral } from "./BarraLateral.jsx";
import { HomeBody } from "./Home.styles.jsx";

export function Home() {
  return (
    <BarraLateral>
      <Navbar />
      <HomeBody>
        {news.map((item, index) => {
          return <Card key={index} news={item} />;
        })}
      </HomeBody>
    </BarraLateral>
  );
}
