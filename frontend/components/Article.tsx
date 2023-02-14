import { useEffect, useState } from "react";

type Article = {
  title: string;
  text: string;
};

export const Article = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      const data: Article = {
        title: "Learning Next.js",
        text: "Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
      };

      // simulate network delay
      new Promise((resolve) =>
        setTimeout(() => {
          return resolve(data);
        }, 2000)
      ).then((res: Article) => setArticle(res));
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
