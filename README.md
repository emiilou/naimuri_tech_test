### [Emily Baker](https://www.linkedin.com/in/emily-l-022595243)

Full Stack Software Engineer

#

# GitHub Search Application

This application provides a user interface for searching and filtering GitHub repositories using the GitHub API. It allows users to enter a search term and apply filters based on the number of stars, forks, and open issues. The search results are displayed with relevant information about each repository.

## Installation

To install and run the GitHub Search Application, please follow these steps:

1. Ensure you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org](https://nodejs.org)

2. Clone the repository or download the source code files.

3. Open a terminal or command prompt and navigate to the project directory.

4. Install the project dependencies by running the following command:

   ```
   npm install
   ```

5. Once the dependencies are installed, you can start the application by running the command:

   ```
   npm run dev
   ```

6. The application should now be running locally on your machine. Open a web browser and visit the URL shown in the terminal to access the application.

## Usage

Upon launching the GitHub Search Application, you will be presented with a search form and filter options. Follow these steps to use the application effectively:

1. Enter a search term in the text field labeled "Enter a search term..." to specify your search query.

2. Optionally, you can set filters to narrow down the search results based on the minimum number of stars, forks, and open issues.

   - To set a filter, enter a minimum value for the respective field. Only repositories that meet or exceed the specified value will be included in the results.

3. Click the "Search" button to initiate the search with the provided search term and filters.

4. The application will fetch the repositories from the GitHub API based on your search query and display them below the search form.

5. Each repository in the search results is presented as a paper card, containing the following information:

   - Repository name (clickable link to the GitHub repository)
   - Number of stars
   - Number of forks
   - Number of open issues
   - Programming language used in the repository (if available)

6. You can click on the repository name link to open the repository's GitHub page in a new browser tab or window.

7. To perform a new search, simply update the search term or filter values and click the "Search" button again.

8. You can repeat the search process as needed to explore different repositories based on your search criteria.

## Limitations

    - lack of testing (including accessibility)
    - no dark mode option
    - rigid/unresponsive layout
    - basic state management
    - limited accessibility measures
