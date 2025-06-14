# 🛒 Mini App Cost Estimator — Frontend with Next.js + Tailwind CSS

This is the **frontend** for the Mini App project focused on **Country listing** and **Cost Estimation**. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, the app allows users to select a country, view ports, choose items, and calculate total costs dynamically.

---

## 🛠️ Tech Stack

- **Next.js** – React framework for SSR & client-side rendering
- **TypeScript** – Static typing for JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide React** – Icon library for UI

---

## ✨ Features

- 🌐 View list of countries with codes
- 🚢 Dependent dropdowns: Country → Port → Item
- 💼 Auto-filled item details (price, description, discount)
- ✍️ Editable price and discount fields
- 💰 Auto-calculated total price
- 📱 Basic responsive layout
- 🔄 Simple navigation with sidebar

---

## 🔗 Live Demo

You can try the deployed version of this app here:  
🌐 [mini-app-cost-estimator.vercel.app](https://mini-app-cost-estimator.vercel.app/country/cost-estimator)

---

## 🚀 Getting Started

1. **Clone or download** this repository to your local machine.
2. Open a terminal or command prompt and navigate to the repository directory.
3. Create a `.env.development` file in the root directory with the following content:
    ```env
    NEXT_PUBLIC_API_URL=http://202.157.176.100:3001/
    ```
4. **Install dependencies** with the command:
    ```sh
    npm install
    ```
5. **Start the application** in development mode by running:
    ```sh
    npm run dev
    ```
6. After the server is running, you can access the frontend at:
    ```sh
    http://localhost:3000
    ```

---