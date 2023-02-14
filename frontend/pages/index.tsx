import { Article } from "../components/Article";

const Main = () => {
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

        <Article />
      </div>
    </>
  );
};

export default Main;
