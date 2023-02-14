import { useEffect, useState } from "react";

type Article = {
  title: string;
  text: string;
};

export const Article = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      fetch("http://localhost:4000/article")
        .then((response) => response.json())
        .then((data: Article) => setArticle(data))
        .catch((e) => console.error(e));
    }

    fetchArticle();
  }, []);

  return (
    <>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>{article.text}</p>
        </div>
      )}
    </>
  );
};
