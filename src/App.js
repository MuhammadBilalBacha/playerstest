import "./App.css";
// import Players from "./Components/PlayerList/players";
import PlayerList from "./Components/PlayerList/PlayerList";
import { Route, Routes } from "react-router-dom";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
// import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <head>
          <meta
            property="og:image"
            itemprop="image"
            content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg?v=1"
            id="og-image"
          />
        </head>
        <h3>Players Data</h3>
      </div>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/details/:Id" element={<PlayerDetails />} />
      </Routes>

      {/* <Players /> */}
    </div>
  );
}

export default App;
