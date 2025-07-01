import "./App.css";
import { moviesData } from "./film";

function App() {
  const movie = [...moviesData];
  return (
    <>
      <div>
        <ul className="1">
          {movie.map((m, index) => {
            return (
              <li key={index}>
                <img src={m.posterURL} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
