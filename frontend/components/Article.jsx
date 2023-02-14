import { useEffect, useState } from "react";

export const Article = () => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function fetchArticle() {
      const data = {
        title: "Learning Next.js",
        text: "Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
      };

      // simulate network delay
      new Promise((resolve) =>
        setTimeout(() => {
          return resolve(data);
        }, 2000)
      ).then((res) => setArticle(res));
    }

    fetchArticle();
  }, []);

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
    </div>
  );
};
