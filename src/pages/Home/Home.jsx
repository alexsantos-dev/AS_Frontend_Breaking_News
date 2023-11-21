import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { getAllNews, getTopNews } from "../../services/news.services";
import { HomeBody, HomeHeader } from "./Home.styles";

export function Home() {
  const [news, setNews] = useState([]);
  const [topPost, setTopPost] = useState({});

  async function findPost() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewsResponse = await getTopNews();
    setTopPost(topNewsResponse.data.news);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <HomeHeader>
        <Card
          top={true}
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
