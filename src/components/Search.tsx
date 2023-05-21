import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface SearchProps {
  onSearch: (searchTerm: string, filters: Filters) => void;
}

export interface Filters {
  stars: number;
  forks: number;
  issues: number;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filters>({
    stars: 0,
    forks: 0,
    issues: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm, filters);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: parseInt(value, 10),
    }));
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <div className="search-input">
          <TextField
            label="Enter a search term..."
            variant="filled"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </div>
        <div className="filter-options">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="filter-input">
              <label>
                Minimum {key.replace(/^\w/, (match) => match.toUpperCase())}:
              </label>
              <TextField
                type="number"
                name={key}
                variant="outlined"
                value={value}
                onChange={handleFilterChange}
              />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Search;
