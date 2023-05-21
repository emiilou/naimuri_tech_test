import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import RepoResults from "./components/RepoResults";
import "./App.css";

export interface Filters {
  stars: number;
  forks: number;
  issues: number;
}

const App = () => {
  const [repos, setRepos] = useState<any[]>([]);

  const searchRepos = async (searchTerm: string, filters: Filters) => {
    try {
      const queryFilters = Object.entries(filters)
        .filter(([_, value]) => value !== "")
        .map(([filter, value]) => `${filter}:>=${value}`)
        .join("+");
      const queryString = `q=${searchTerm}${
        queryFilters ? "+" + queryFilters : ""
      }`;
      const response = await axios.get(
        `https://api.github.com/search/repositories?${queryString}`
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  return (
    <>
      <h1 className="app-title">Github Search</h1>
      <Search onSearch={searchRepos} />
      <RepoResults repos={repos} />
    </>
  );
};

export default App;
