export function TitleLimit({ title, limit }) {
  const titleLimited =
    title?.length > limit ? `${title.substring(0, limit)}...` : title;

  return <p>{titleLimited}</p>;
}
