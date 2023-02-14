import { useState, useEffect } from "react";

const Main = () => {
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
    <>
      <h1>DWWW 2023</h1>
      <div id="main">
        <div>
          <h2>Frontend</h2>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ol>
        </div>

        <div>
          <h2>{article.title}</h2>
          <p>{article.text}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
