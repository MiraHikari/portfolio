## Print-friendly portfolio CV

![preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)
![GitHub stars](https://img.shields.io/github/stars/Smilesharks/dev-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Smilesharks/dev-portfolio)
![GitHub forks](https://img.shields.io/github/forks/Smilesharks/dev-portfolio)
![GitHub PRs](https://img.shields.io/github/issues-pr/Smilesharks/dev-portfolio)

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Dropdown menu with keyboard shortcuts made in pure JavaScript.

## 🚀 Getting Started

### 1. Use this Repo as an Astro Project Template

- I use [pnpm](https://pnpm.io/installation) as my package manager.

```bash
# Enable pnpm on MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate
```

# Initialize the project
```bash
pnpm create astro@latest -- --template Smilesharks/dev-portfolio
```

### 2. Add Your Content:

Edit the `cv.json` file to create your own printable Portfolio/CV.

### 3. Launch the Development Server:

```bash
# Enjoy the results
pnpm dev
```
1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### 4. Customisable colours:
Change the data-theme of `cv.json` and choose one of the colour themes defined in theme.css, red, blue, green, cyber and default, with its variants in dark mode, or create your own.

## 🧞 Commands

|     | Command         | Action                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Launches a local development server at `localhost:4321`.                   |
| ⚙️  | `build`         | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`       | Local preview at `localhost:4321`                                       |


CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)

Based on [**Bartosz Jarocki - Print-friendly, minimalist CV page**](https://github.com/BartoszJarocki/cv) and [**Miguel Ángel Durán - minimalist-portfolio-json**](https://github.com/midudev/minimalist-portfolio-json)
