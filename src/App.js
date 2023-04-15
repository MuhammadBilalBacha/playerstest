import "./App.css";
// import Players from "./Components/PlayerList/players";
import PlayerList from "./Components/PlayerList/PlayerList";
import { Route, Routes } from "react-router-dom";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
// import { Helmet } from "react-helmet";
// import { DocumentMeta } from "react-document-meta";
// import DocumentMeta from "react-document-meta";

function App() {
  return (
    <div className="App">
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
