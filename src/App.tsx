import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const [repos, setRepos] = useState<any[]>([]);

  const searchRepos = async (searchTerm: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchTerm}`
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  return (
    <>
      <h1>Github Search</h1>
      <Search onSearch={searchRepos} />
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.id}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
