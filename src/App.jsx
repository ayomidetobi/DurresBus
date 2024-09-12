import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";
import { cities } from "./data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cities based on search term
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div>
        <Header />
        <Search onSearch={setSearchTerm} />
        <List filteredCities={filteredCities} />
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
