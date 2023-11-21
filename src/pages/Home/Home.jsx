import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews, getTopNews } from "../../services/news.services";
import { HomeBody, HomeHeader } from "./Home.styles";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [topPost, setTopPost] = useState({});

  async function findPost() {
    const postsResponse = await getAllNews();
    setPosts(postsResponse.data.results);

    const topPostResponse = await getTopNews();
    setTopPost(topPostResponse.data.news);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        <Card
          // top={true}
          title={topPost.title}
          text={topPost.text}
          banner={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}
        />
      </HomeHeader>
      <HomeBody>
        {posts.map(
          (item, index) =>
            // Verifica se o índice é maior que zero pra não incluiro Card no HomeHeader
            index > 0 && (
              <Card
                key={item.id}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
              />
            )
        )}
      </HomeBody>
    </>
  );
}
