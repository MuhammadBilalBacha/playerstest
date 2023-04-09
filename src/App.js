import "./App.css";
// import Players from "./Components/PlayerList/players";
import PlayerList from "./Components/PlayerList/PlayerList";
import { Route, Routes } from "react-router-dom";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg?v=1"
          id="og-image"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>React App</title>
      </Helmet>
      <div className="container py-5">
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
