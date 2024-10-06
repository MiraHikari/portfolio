## Print-friendly portfolio CV

![preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

## 📄 About

This project is refactored from the original [**dev-portfolio**](https://github.com/Smilesharks/dev-portfolio) project, thanks to his work.

I use iconify instead of SVG icons for better dev experience.

Thanks for antfu's cool animations.

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Dropdown menu with keyboard shortcuts made in pure JavaScript.

## 🚀 Getting Started

### 0. One-click to deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MiraHikari/portfolio&project-name=portfolio&repository-name=portfolio)

Or you can manually deploy the repo, read more.

### 1. Use this Repo as an Astro Project Template

- I use [pnpm](https://pnpm.io/installation) as my package manager.

# Initialize the project
```bash
pnpm create astro@latest --template MiraHikari/portfolio
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
Change the data-theme of `cv.json` and choose one of the colour themes defined in theme.css, red, blue, green, cyber, pink and default, with its variants in dark mode, or create your own.

## 🧞 Commands

|     | Command         | Action                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Launches a local development server at `localhost:4321`.                   |
| ⚙️  | `build`         | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`       | Local preview at `localhost:4321`                                       |


CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)
