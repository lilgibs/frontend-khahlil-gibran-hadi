# 🖥️ User Insights App — Frontend with Next.js + Tailwind CSS

This is the **frontend application** for the User Insights project, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It visualizes user data retrieved from the backend API, including gender distribution, device brand usage, digital interests, and location types.

---

## 🛠️ Tech Stack

- **Next.js** – React framework for SSR & client-side rendering
- **TypeScript** – Static typing for JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Recharts** – Chart library for visualizing aggregated data
- **Lucide React** – Icon library for UI

---

## ✨ Features

- 📊 Dashboard with aggregated user insights:
  - Gender overview
  - Brand device usage
  - Location type distribution
  - Digital interest popularity
- 🧑 Paginated User List table
- 🔍 Sidebar navigation with toggle
- 🖼️ Hero image on welcome page

---

## 🔗 Backend API Source

All data is consumed from the backend API hosted on Vercel:  
[🔗 Backend API Documentation](https://be-express-mongoose-user-insight-git-vercel-lilgibs-projects.vercel.app)

You can also view the backend source code here:  
[📂 GitHub Repository – Backend](https://github.com/lilgibs/be-express-mongoose-user-insight)

---

## 🔗 Frontend App

The frontend for this project is deployed on Vercel:  
🔗 [User Insights App (Live on Vercel)](https://fe-next-user-insight-psi.vercel.app/)

---

## 🚀 Getting Started

1. **Clone or download** this repository to your local machine.
2. Open a terminal or command prompt and navigate to the repository directory.
3. create a .env.development in the root directory
    ```env
    NEXT_PUBLIC_API_URL=https://be-express-mongoose-user-insight-git-vercel-lilgibs-projects.vercel.app/api/
    ```
4. **Install dependencies** with the command:
     ```sh
    npm install
    ```
5. **Start the application** in development mode by running:
     ```sh
    npm run dev
    ```
6. After the server is running, you can access the API locally at:
    ```sh
    http://localhost:3000
    ```