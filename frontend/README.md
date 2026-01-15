# Next Items App

A simple full-stack application built with **Next.js 15/16 (App Router)** and **Express.js**.  
The project includes public pages, mock authentication, protected routes, and item management features.

---

## 🚀 Live Demo
👉 https://your-vercel-live-link.vercel.app

---

## 🔐 Login Credentials (Mock Authentication)

- **Email:** admin@example.com  
- **Password:** 123456  

---

## 📦 Features

### ✅ Public Features
- Landing Page with 7 sections
- Item List Page
- Item Details Page

### 🔒 Authentication
- Mock login using hardcoded credentials
- Cookie-based authentication
- Protected routes using Next.js middleware

### 🛡 Protected Feature
- Add Item page (accessible only when logged in)
- Add new items via Express.js API

### ✨ Enhancements
- Toast notification on successful item creation
- Logout functionality
- Clean and responsive UI using Tailwind CSS

---

## 🗺 Route Summary

| Route | Access | Description |
|-----|------|------------|
| `/` | Public | Landing Page |
| `/login` | Public | Login Page |
| `/items` | Public | Item List |
| `/items/[id]` | Public | Item Details |
| `/add-item` | Protected | Add New Item |

---

## 🛠 Technologies Used

### Frontend
- Next.js 15/16 (App Router)
- React
- Tailwind CSS

### Backend
- Express.js
- REST API

### Others
- react-hot-toast
- Cookie-based authentication

---


### 1️⃣ Clone the repository

live link: https://royel-mart-next-js-project.vercel.app/

cd next-items-app
