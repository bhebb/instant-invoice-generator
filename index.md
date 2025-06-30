# 🛠️ Instant Invoice Generator

Welcome to the documentation hub for the **Instant Invoice Generator** ecosystem.  
This workspace centralizes all technical documentation, architecture, APIs, and infrastructure details across all modules.

---

## 🔍 Purpose

This project aims to offer a modular, scalable solution for generating and managing invoices, integrating:

- 🔒 Secure user authentication (SSO, social login)
- ⚡ Fast API-based backend services
- 🖥️ Modern web frontend using Angular or React
- 📱 Mobile app for convenience and on-the-go usage
- 📊 Integrated observability, monitoring, and versioning

---

## 📁 Project Structure

| Module     | Description                                        | Documentation                       |
|------------|----------------------------------------------------|--------------------------------------|
| `backend`  | Core API logic, authentication, business services  | [Backend Docs](projects/backend/)    |
| `frontend` | Web application for end users/admin                | [Frontend Docs](projects/frontend/)  |
| `mobile`   | Mobile version of the application (future)         | [Mobile Docs](projects/mobile/)      |

---

## 📐 Architecture Overview

The system follows a **modular hexagonal architecture**:

- **API Layer** → FastAPI + Clerk (authentication)
- **Services Layer** → Business logic, validation, processing
- **Persistence Layer** → PostgreSQL via SQLAlchemy (or equivalent)
- **Frontend** → Angular or React (with Clerk integration)
- **Mobile** → React Native or Flutter (planned)

> Each module is self-contained and documented separately under the `projects/` folder.

---

## 🔄 Versioning & CI/CD

- Documentation auto-generated and deployed via GitHub Actions + Netlify.
- API versioning and changelogs are managed under the `backend` module.
- Infrastructure-as-code planned with Terraform.

---

## 📚 How to Use This Documentation

You can explore the modules from the navigation panel on the left, or jump directly:

- 👉 [Backend APIs](projects/backend/)
- 👉 [Frontend Features](projects/frontend/)
- 👉 [Mobile (coming soon)](projects/mobile/)

---
