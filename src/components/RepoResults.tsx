import React from "react";
import Paper from "@mui/material/Paper";

interface Repository {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
}

interface RepoResultsProps {
  repos: Repository[];
}

const RepoResults: React.FC<RepoResultsProps> = ({ repos }) => {
  return (
    <div>
      <h2>Repositories</h2>
      {repos.map((repo) => (
        <Paper key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.full_name}
          </a>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Forks: {repo.forks_count}</p>
          <p>Open Issues: {repo.open_issues_count}</p>
          <p>Language: {repo.language}</p>
        </Paper>
      ))}
    </div>
  );
};

export default RepoResults;
