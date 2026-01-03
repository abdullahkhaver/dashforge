# Dashboard Library – Full-Stack Modular Framework (MERN + TypeScript)

## Table of Contents

1. Overview
2. Goals & Philosophy
3. High-Level Architecture
4. Monorepo & Workspaces
5. TypeScript Strategy
6. Root Setup
7. Package Breakdown

   * CLI
   * Core Backend
   * Core Frontend
   * Shared
   * Plugins
8. Plugin System Design
9. Generated User Project
10. Build & Dev Flow
11. Dependency Rules
12. Why This Architecture Works
13. Future Extensions

---

## 1️⃣ Overview

This project is a **full-stack dashboard framework** built with:

* **MongoDB**
* **Express**
* **React**
* **Node.js**
* **TypeScript (everywhere)**

It is **not just an app**, but a **library + framework** that provides:

* A **core dashboard**
* **Essential modules** (auth, users, roles, permissions)
* A **plugin system** (blogs, CMS, analytics, etc.)
* A **CLI tool** to scaffold projects and install plugins
* Full **frontend + backend extensibility**
* Strong **type safety across boundaries**

Inspired by:

* Strapi
* Supabase Studio
* Keystone
* Vercel tooling
* Nx / Turborepo monorepos

---

## 2️⃣ Goals & Philosophy

### Core Goals

* ✅ **One command to create a full-stack dashboard**
* ✅ **Pluggable modules (first-party & third-party)**
* ✅ **Shared contracts between frontend & backend**
* ✅ **Enterprise-grade structure**
* ✅ **Framework, not a single app**
* ✅ **Type safety as a first-class citizen**

### Design Principles

* Separation of concerns
* Thin controllers, strong services
* Plugins should not tightly couple to core
* Core provides extension points, not hacks
* CLI drives developer experience

---

## 3️⃣ High-Level Architecture

```
dashboard-lib (MONOREPO)
│
├── packages/
│   ├── cli              → CLI tool
│   ├── core-backend     → Backend framework
│   ├── core-frontend    → Frontend dashboard framework
│   ├── shared           → Shared contracts & types
│   └── plugins/         → Official plugins
│
├── templates/           → App templates
├── docs/                → Documentation
└── examples/            → Example projects
```

---

## 4️⃣ Monorepo & Workspaces

We use **npm workspaces**.

### Why?

* Shared dependencies
* Clean imports
* Faster installs
* Scales to many plugins

### Root `package.json`

```json
{
  "name": "dashboard-lib",
  "private": true,
  "workspaces": [
    "packages/*",
    "packages/plugins/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build"
  }
}
```

---

## 5️⃣ TypeScript Strategy (Critical)

### Rules

* TypeScript **everywhere**
* Each package compiles independently
* Shared base config
* Output always goes to `dist/`
* Use ESM

---

### `tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Node",

    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,

    "strict": true,
    "noImplicitOverride": true,
    "noUncheckedIndexedAccess": true,
    "noFallthroughCasesInSwitch": true,

    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,

    "baseUrl": ".",
    "paths": {
      "@dashboard/cli": ["packages/cli/src"],
      "@dashboard/core-backend": ["packages/core-backend/src"],
      "@dashboard/core-frontend": ["packages/core-frontend/src"],
      "@dashboard/shared": ["packages/shared/src"],
      "@dashboard/plugins/*": ["packages/plugins/*/src"]
    },

    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true
  }
}
```

Each package extends this config.

---

## 6️⃣ Root Setup

📍 **Run here**

```bash
npm init -y
npm install -D typescript turbo
```

Root only manages:

* Workspaces
* Build orchestration
* Shared TS config

❌ No app dependencies live here.

---

## 7️⃣ Packages Breakdown

---

### 🛠️ CLI (`packages/cli`)

#### Purpose

* Scaffold projects
* Add/remove plugins
* Generate config files
* Provide DX similar to `create-next-app`

#### Setup

```bash
cd packages/cli
npm init -y
npm install commander inquirer chalk fs-extra
npm install -D typescript ts-node @types/node
```

#### Structure

```
packages/cli/
├── src/
│   ├── commands/
│   │   ├── create.ts
│   │   └── add-plugin.ts
│   ├── generators/
│   ├── utils/
│   └── index.ts
├── tsconfig.json
└── package.json
```

#### CLI Commands

```bash
npx dashboard create my-app
npx dashboard add blog
```

---

### 🧠 Core Backend (`packages/core-backend`)

#### Purpose

* Express framework
* Auth, users, roles, permissions
* Plugin loading
* API foundation

#### Setup

```bash
npm install express mongoose cors dotenv
npm install jsonwebtoken bcrypt zod
npm install -D typescript ts-node nodemon @types/node @types/express
```

#### Structure

```
packages/core-backend/
├── src/
│   ├── core/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── roles/
│   │   └── permissions/
│   │
│   ├── plugins/
│   │   └── index.ts
│   │
│   ├── config/
│   │   ├── database.ts
│   │   └── plugin-loader.ts
│   │
│   ├── common/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── middlewares/
│   │
│   ├── app.ts
│   └── server.ts
│
├── tsconfig.json
└── package.json
```

---

### 🎨 Core Frontend (`packages/core-frontend`)

#### Purpose

* Dashboard UI
* Layout, sidebar, routing
* Plugin UI injection
* Permissions-based rendering

#### Setup

```bash
npm create vite@latest . -- --template react-ts
npm install react-router-dom axios zustand
```

#### Structure

```
packages/core-frontend/
├── src/
│   ├── core/
│   │   ├── auth/
│   │   ├── users/
│   │   └── settings/
│   │
│   ├── plugins/
│   ├── components/
│   ├── layouts/
│   ├── routes/
│   ├── store/
│   ├── themes/
│   └── utils/
│
├── package.json
└── vite.config.ts
```

---

### 🔁 Shared (`packages/shared`)

#### Purpose

* Shared types
* Permission enums
* Validation schemas
* Contracts between FE & BE

#### Setup

```bash
npm init -y
npm install zod
npm install -D typescript
```

#### Structure

```
packages/shared/
├── src/
│   ├── types/
│   ├── permissions/
│   ├── validators/
│   └── index.ts
├── tsconfig.json
└── package.json
```

---

### 🔌 Plugins (`packages/plugins/*`)

#### Purpose

* Extend backend & frontend
* Add features like:

  * Blog
  * CMS
  * Analytics
  * Payments

#### Example Plugin: Blog

```
packages/plugins/blog/
├── backend/
│   ├── src/
│   │   ├── blog.controller.ts
│   │   ├── blog.service.ts
│   │   └── index.ts
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── BlogPage.tsx
│   │   └── routes.ts
│   └── tsconfig.json
│
├── plugin.json
└── package.json
```

#### `plugin.json`

```json
{
  "name": "blog",
  "version": "1.0.0",
  "requires": ["auth"],
  "backend": true,
  "frontend": true,
  "sidebar": true
}
```

Plugins use **peerDependencies** to avoid tight coupling.

---

## 8️⃣ Plugin System Design

### Backend

* Plugins register:

  * Routes
  * Models
  * Permissions

### Frontend

* Plugins register:

  * Routes
  * Sidebar items
  * Pages

### Shared

* Plugins can extend:

  * Permission enums
  * API contracts

---

## 9️⃣ Generated User Project

When running:

```bash
npx dashboard create my-app
```

Generated structure:

```
my-app/
├── backend/
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── dashboard.config.ts
└── README.md
```

### `dashboard.config.ts`

```ts
export default {
  plugins: ["auth", "blog"],
  database: "mongodb"
}
```

---

## 🔟 Build & Dev Flow

### Development

* `turbo run dev`
* Each package watches independently
* Plugins hot-reload

### Build

* `turbo run build`
* Outputs to `dist/`
* Ready for publishing

---

## 1️⃣1️⃣ Dependency Rules (IMPORTANT)

| Rule                           | Reason                |
| ------------------------------ | --------------------- |
| No app deps at root            | Prevent coupling      |
| Shared has no runtime deps     | Keeps contracts clean |
| Plugins use peerDependencies   | Compatibility         |
| Backend never imports frontend | Layer safety          |

---

## 1️⃣2️⃣ Why This Architecture Works

✅ Scales to large teams
✅ Encourages plugin ecosystem
✅ Type safety across boundaries
✅ Clean separation of concerns
✅ Enterprise-grade
✅ CLI-driven DX

---

## 1️⃣3️⃣ Future Extensions

* Typed plugin codegen
* Permission-aware UI rendering
* Plugin marketplace
* GraphQL support
* RBAC visual editor
* Multi-tenant support

---
