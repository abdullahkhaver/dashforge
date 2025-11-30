# 👨‍💻 Developer Info – DashForge (MERN Modular Dashboard)

DashForge is a modular, plugin-based MERN dashboard starter designed for companies, products, and reusable admin systems.

---

## 🔥 Tech Stack

### **Backend**
- Node.js
- Express.js
- MongoDB / Mongoose
- Plugin-based modular architecture

### **Frontend**
- React + Vite
- Tailwind CSS
- React Router
- Modular UI (modules + plugins system)

---

## 📁 Project Structure

### **Backend (src/)**
```

core/       → Essential system configs (db, logger, security middleware)
modules/    → Built-in modules (auth, users, roles)
plugins/    → Extendable features (blog, notes, products, etc.)
routes/     → Auto-loaded routes for modules/plugins
utils/      → Helpers (JWT, hashing, validation)
config/     → Environment + global configs

```

### **Frontend (src/)**
```
core/       → Layouts, global components (Sidebar, Topbar)
modules/    → App-wide modules (Auth, User, Settings)
plugins/    → Optional features (Blog, Notes, Shop)
pages/      → Dashboard pages, settings, profile
```

---

## 🎯 Project Goals

- Create a reusable dashboard for multiple products
- Add or remove plugins without modifying core code
- Keep backend modular and frontend maintainable
- Scalable for SaaS-level projects

---

## 🧑‍💻 Developer Notes

- Use `modules` for fixed core features (auth, settings)
- Use `plugins` for optional/add-on functionality (blog, shop, chat)

---

## ⚠️ Requirements

- Node 20+
- MongoDB 6+
- Vite 5+
- Git

This documentation will grow as your project grows.
