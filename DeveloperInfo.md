
# DashForge – Modular MERN Dashboard Starter

DashForge is a **powerful modular dashboard boilerplate** built using the MERN stack.
It allows you to build dashboards, admin panels, SaaS systems, and internal tools — **with plugins** that you can enable/disable easily.

---

## Features

- Modular Authentication System
- Plugin Architecture (Blog, Notes, Products, Chat…)
- Beautiful React + Tailwind UI
- Reusable Layouts (Sidebar + Topbar + Settings Page)
- Fully Scalable Structure
- Auto-loaded backend routes
- Built-in Settings Panel (Account / Appearance / Developer)

---

## Project Structure

### **Backend**
```

backend/
src/
core/
config/
routes/
modules/
plugins/
utils/

```

### **Frontend**
```

frontend/
src/
core/
modules/
plugins/
pages/

````

---

## Installation

### Clone:
```sh
git clone https://github.com/abdullahkhaver/dashforge/
````

### Install dependencies:

```sh
cd backend && npm install
cd frontend && npm install
```

---

## Running Development Servers

### Backend:

```sh
npm run dev
```

### Frontend:

```sh
npm run dev
```

Backend runs on: `http://localhost:5000`
Frontend runs on: `http://localhost:5173`

---

## Adding Plugins

Each plugin goes in:

### Backend:

```
src/plugins/<plugin-name>
```

### Frontend:

```
src/plugins/<plugin-name>
```

The system auto-loads plugin routes and components.

---

## Developer Info

See **DeveloperInfo.md** for more deep documentation.

---

## License

MIT License — free for personal & commercial use.

---

## Made by Abdullah Khaver

DashForge will power multiple IT-Khaver products with clean modular architecture.
