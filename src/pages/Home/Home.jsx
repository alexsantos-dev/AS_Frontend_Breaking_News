import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Data.js";
import { BarraLateral } from "./BarraLateral.jsx";

export function Home() {
  return (
    <BarraLateral>
      <Navbar />
      {news.map((item, index) => {
        return <Card key={index} news={item} />;
      })}
    </BarraLateral>
  );
}
