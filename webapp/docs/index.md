# Backend – Instant Invoice Generator

Welcome to the **Backend** documentation for the Instant Invoice Generator project. This service is built with **FastAPI**, and it exposes a secure, extensible REST API for managing invoices and templates.

---

## 🚀 Overview

The backend is responsible for:

- Authenticating users (via [Clerk.dev](https://clerk.dev))
- Serving protected API routes
- Managing invoice templates and generation
- Logging, monitoring, and versioning endpoints

It follows a modular and enterprise-ready architecture based on services and repositories.

---

## 🛠️ Technologies

- Python 3.12+
- FastAPI
- Pydantic
- Clerk.dev for authentication/authorization
- Uvicorn (as ASGI server)
- [Prometheus (optional)] for monitoring

---

## 📁 Project Structure

