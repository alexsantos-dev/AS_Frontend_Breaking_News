import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews } from "../../services/news.services.js";
import { HomeBody } from "./Home.styles.jsx";
import { useState, useEffect } from "react";

export function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
