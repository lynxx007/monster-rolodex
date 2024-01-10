import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.util";

export type Monster = {
  id: string;
  name: string;
  email: string;
};
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster: Monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilterMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        value={handleChange}
        placeholder="search monsters"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};
export default App;
