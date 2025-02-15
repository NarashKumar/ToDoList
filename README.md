
<p align="center">
    <h1 align="center">SIMPLE_TODO_LIST</h1>
</p>
<p align="center">
    <em><code>❯ A simple To-Do List application built with React and Tailwind CSS.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/NarashKumar/ToDoList?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/NarashKumar/ToDoList?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/NarashKumar/ToDoList?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/NarashKumar/ToDoList?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat&logo=TailwindCSS&logoColor=white" alt="Tailwind CSS">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
</p>

<br>

##### Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

SIMPLE_TODO_LIST is a minimalist to-do list application built with React and Tailwind CSS. It provides users with an intuitive interface to add, complete, and delete tasks, while persisting data across sessions using the browser's localStorage.

---

## Features

- Add tasks and display them in a dynamic list.
- Toggle tasks between complete and incomplete states with immediate visual feedback.
- Remove tasks from the list seamlessly.
- Persist user data locally to maintain the to-do list between sessions.
- Styled with Tailwind CSS for a clean, responsive user interface.

---

## Getting Started

### Prerequisites

- **Node**: `version 16.x` or higher (recommended)
- **npm**: Comes with Node.js

### Installation

Build the project from source:

1. Clone the SIMPLE_TODO_LIST repository:
   ```sh
   ❯ git clone https://github.com/YourGitHubUsername/Simple_Todo_List
   ```

2. Navigate to the project directory:
   ```sh
   ❯ cd Simple_Todo_List
   ```

3. Install the required dependencies:
   ```sh
   ❯ npm install
   ```

### Usage

To run the project in development mode, execute the following command:

```sh
❯ npm run dev
```

Then, open your browser and navigate to the URL provided in your terminal (typically `http://localhost:3000`).

---

## Repository Structure

```sh
└── Simple_Todo_List/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── assets
    │       ├── todo_icon.png
    │       ├── tick.png
    │       ├── not_tick.png
    │       └── delete.png
    ├── src
    │   ├── App.jsx
    │   ├── components
    │   │   ├── ToDo.jsx
    │   │   └── ToDoItems.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
```

---

## Contributing

Contributions are welcome! Here are some ways to contribute:

- **Report Issues**: If you find a bug or have a feature request, please [open an issue](https://github.com/YourGitHubUsername/Simple_Todo_List/issues).
- **Submit Pull Requests**: Fork the repository, make your changes, and open a pull request to contribute improvements.
- **Join the Discussions**: Share your feedback, ask questions, or discuss ideas in the [discussions section](https://github.com/YourGitHubUsername/Simple_Todo_List/discussions).

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Click the "Fork" button at the top-right of the repository page.
2. **Clone Locally**: Clone the forked repository to your local machine.
   ```sh
   git clone https://github.com/YourGitHubUsername/Simple_Todo_List
   ```
3. **Create a New Branch**: Always work on a new branch with a descriptive name.
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Implement your feature or bug fix.
5. **Commit Your Changes**: Write clear commit messages describing your changes.
   ```sh
   git commit -m "Describe your changes"
   ```
6. **Push to GitHub**: Push your branch to your fork.
   ```sh
   git push origin feature/your-feature-name
   ```
7. **Submit a Pull Request**: Open a pull request on the original repository.
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com/YourGitHubUsername/Simple_Todo_List/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=YourGitHubUsername/Simple_Todo_List" alt="Contributors Graph">
   </a>
</p>
</details>

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- Inspired by modern minimalistic design principles.
```

Feel free to adjust repository links, version numbers, or any other details as needed for your project.
