import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div>
        <Header />
        <Search />
        <List />
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
