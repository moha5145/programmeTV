import "./App.css";
import Programme from "./components/Programme";
import data from "./data.json";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      {data.map((item) => {
        return <Programme item={item} />;
      })}
    </div>
  );
}

export default App;
