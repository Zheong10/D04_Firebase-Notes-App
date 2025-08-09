# 📒 Day 04 – NotesApp: Real-Time Notes with Firebase Firestore

This is **Day 04** of my **#30Days30Apps** challenge, where I build a new app every day from beginner to advanced level.  
Today’s project is a **real-time notes app** using **React, TailwindCSS, ShadCN UI, and Firebase Firestore**.  
It’s our **first full-stack project** in this challenge — storing and syncing data live with Firestore.

---

## 🚀 Features
- ✏️ Add, display, and delete notes
- 🔄 Real-time updates using Firestore’s `onSnapshot`
- 🎨 Clean and modern UI with TailwindCSS + ShadCN
- 📂 Organized project structure with `lib/firebase.ts`

---

## 🧰 Tech Stack
- **React + Vite** (TypeScript)
- **Tailwind CSS**
- **ShadCN UI**
- **Firebase Firestore**

---

## 💡 What I Learned
- Setting up and integrating Firebase Firestore in a React app
- Adding, reading, and deleting data from Firestore
- Real-time data syncing using listeners
- Using async/await with Firestore operations
- Structuring a frontend + backend full-stack app

---

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/ZuharAhamed/04-Notes-App.git

# Navigate to project folder
cd 04-Notes-App

# Install dependencies
npm install

# Run the development server
npm run dev




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
