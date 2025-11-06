# 🖼️ Random Art Gallery

---

This project is a single-page web application that showcases random artworks from The Metropolitan Museum of Art's Open Access collection. Users can click a button to instantly discover a new, high-resolution public domain masterpiece along with its relevant metadata.

The application is built using modern TypeScript and a structured modular design, demonstrating best practices in frontend development and API consumption.

---

## ✨ Features

Random Art Discovery: Fetches a new, randomly selected artwork with every click.

🏗️ Modular Architecture (Modlets)

The codebase is organised into three distinct, hierarchical Modlets to promote reusability, separation of concerns, and maintainability, fulfilling all academic requirements for advanced modularity:

# types Modlet:

Responsibility: Handles type definitions.

Contents: types.ts (type separation).

Pattern: Exposes all components via types/index.ts.

# api Modlet:

Responsibility: Fetching API.

Contents: metApi.ts (type separation).

Pattern: Exposes all components via api/index.ts.

# ui Modlet:

Responsibility: Manages all DOM manipulation and visual updates.

Contents: domRenderer.ts.

Pattern: Exposes its functions via ui/index.ts.

---

### 💻 Tech Stack & Tools

Primary Language: TypeScript

Frontend: HTML5, CSS3, ES Modules

API Source: The Metropolitan Museum of Art Collection API

Linter: ESLint (@typescript-eslint/parser, @typescript-eslint/eslint-plugin)

Automation: GitHub Actions

---

### ⚙️ Setup and Installation

Prerequisites

You must have Node.js and npm (or yarn/pnpm) installed.

Steps

Clone the Repository:

```bash
git clone (https://github.com/NyeinChanLin/gallery.git)
```

Install Dependencies:

```bash
npm install
```

Build the Project:

```bash
npm run dev
```
Then you can select the server and view the web app 🎉
---

### 🔗 Data Source

This project uses public domain data and imagery provided by:

The Metropolitan Museum of Art Collection API

The Met's Open Access program allows for free and unrestricted use of images of public domain artworks under the Creative Commons Zero (CC0) license.
