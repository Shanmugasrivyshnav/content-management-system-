# Production-Ready CMS and Frontend Integration

A decoupled, production-ready Content Management System (CMS) with a dynamic public-facing React application.

The project replaces static frontend content with a scalable, database-driven architecture where administrators can create and manage structured content through an authenticated dashboard.

The system follows a **headless CMS architecture**, separating:

* **Admin Management System** — secure dashboard for content creation and management.
* **Public Frontend Application** — dynamic content renderer consuming CMS APIs.

---

# GitHub Repository

Repository:

```
https://github.com/Shanmugasrivyshnav/content-management-system-

```

---

# Project Overview

The application provides:

* Secure admin authentication.
* JWT-based session management.
* Database-driven page management.
* Block-based content architecture.
* Dynamic frontend rendering.
* Rich structured content support:
---

# Technology Stack

## Backend

### Node.js + Express.js

Used for:

* REST API development.
* Authentication handling.
* Content management services.
* Middleware-based request processing.

Libraries:

* Express.js
* bcryptjs
* jsonwebtoken
* dotenv
* database 
* validation library

---

## Database

### SQL / MySQL

Used for:

* Admin user storage.
* Page metadata.
* Structured content block storage.

The database design supports flexible content structures while maintaining relational consistency.

---

## Admin Frontend

### React.js + Styled Components

Responsibilities:

* Admin authentication.
* CMS dashboard.
* Page creation and editing.
* Block-based content management.
* Secure route handling.

Libraries:

* React
* React Router
* Styled Components

---

## Public Frontend

### React.js + Styled Components

---

# API Endpoints

## Authentication

### Login

```
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```

Response:

```json
{
  "token": "jwt_token_here"
}
```

---

## Content APIs

### Get Public Page

```
GET /api/v1/content/pages/:slug
```

### Create Page

```
POST /api/v1/content/pages
```

(Admin authentication required)

### Update Page

```
PUT /api/v1/content/pages/:id
```

(Admin authentication required)

### Delete Page

```
DELETE /api/v1/content/pages/:id
```

(Admin authentication required)

---

# Environment Variables

Create `.env` files based on `.env.example`.

Example:

```env
# Backend

PORT=5000

DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=cms_database

JWT_SECRET=my_secret_key


# Frontend

REACT_APP_API_URL=http://localhost:5000/api/v1
```

---

# Setup Instructions

## Prerequisites

Install:

* Node.js 18+
* npm
* MySQL Server

Verify:

```bash
node -v
npm -v
```

---

# Backend Setup

Navigate:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure environment:

```bash
cp .env.example .env
```

Create database:

```sql
CREATE DATABASE cms_database;
```

Run migrations:

```bash
npm run migrate
```

Seed admin user:

```bash
npm run seed
```

Start backend:

```bash
npm run dev
```

Backend runs:

```
http://localhost:5000
```

---

# Admin Frontend Setup

Navigate:

```bash
cd admin-frontend
```

Install:

```bash
npm install
```

Start:

```bash
npm start
```

Admin dashboard:

```
http://localhost:3001
```

---

# Public Frontend Setup

Navigate:

```bash
cd public-frontend
```

Install:

```bash
npm install
```

Start:

```bash
npm start
```

Public website:

```
http://localhost:3000
```

---

# Sample Credentials

## Admin Account

```
Email:
admin@example.com

Password:
Admin@123
```

---


---

# Architectural Decisions

## 1. Headless CMS Approach

The CMS and public frontend are separated.

Benefits:

* Independent deployment.
* Better scalability.
* Multiple frontend clients can consume the same API.

---

## 2. Block-Based Content Model

Instead of storing HTML, content is stored as structured blocks.

Benefits:

* Safer rendering.
* Reusable components.
* Easier validation.
* Supports complex layouts.

---

## 3. JWT Authentication

JWT was selected because:

* It supports stateless authentication.
* It works well with API-based architectures.
* It scales horizontally.

---

## 4. Component-Based Frontend

React components represent CMS blocks.

Benefits:

* Maintainable UI.
* Reusable layouts.
* Easy future expansion.

---

## 5. Environment-Based Configuration

Sensitive information is separated from source code:

* Database credentials.
* JWT secrets.
* API URLs.

---

# Running the Complete Application

Open three terminals.

Terminal 1:

```bash
cd backend
npm run dev
```

Terminal 2:

```bash
cd admin-frontend
npm start
```

Terminal 3:

```bash
cd public-frontend
npm start
```

Access:

```
Admin:
http://localhost:3001

Public:
http://localhost:3000
```

---
