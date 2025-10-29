## GirlyApp — React + Tailwind Project
## girlyhub.netlify.app
GirlyApp is a simple, aesthetic, and responsive React application built to demonstrate:

Component-based architecture

Dark/Light theme switching

API integration with infinite scroll

Routing using React Router

Reusable UI components with Tailwind CSS


## Features

✅ Reusable Components

Button (Primary, Secondary, Danger variants)

Card for consistent layout

Navbar and Footer shared across pages

✅ Task Manager

Add, delete, complete, and filter tasks

Local storage persistence

Cute pink and dark mode support

✅ API Integration

Fetches data from JSONPlaceholder API

Infinite scrolling

Loading and error handling

Search functionality

✅ Dark / Light Mode

App-wide theme switching using React Context

Tailwind CSS dark mode integration

Smooth transitions

✅ Responsive Design

Fully responsive on mobile, tablet, and desktop

## 🛠️ Tech Stack
Technology	Purpose
React	Frontend framework
Vite	Fast development environment
Tailwind CSS	Styling and responsiveness
React Router DOM	Navigation and routing
Context API	Global state management for theme
JSONPlaceholder	Public API for demo data

## installation and setup
Clone the repository

## install dependencies
npm install

## run the development server
npm run dev

## visit the your browser
http://localhost:5173

## project structure 
girlyapp/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Users.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md

## 🖼️ Preview

### Light Mode ✨
![GirlyApp Light Mode](./girly1.jpg)

### Dark Mode 🌙
![GirlyApp Dark Mode](./girly2.jpg)









