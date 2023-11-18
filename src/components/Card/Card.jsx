export function Card({ news }) {
  return (
    <section>
      <h2>{news.title}</h2>
      <p>{news.text}</p>
      <img src={news.image} alt="Banner da notícia" />
      <i className="bi bi-hands-thumbs-up"></i>
      <span>{news.likes}</span>
      <i className="bi bi-chat"></i>
      <span>{news.comments}</span>
    </section>
  );
}
