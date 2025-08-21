# Apple Store Website (Next.js 15)

![Apple Store](https://i.ibb.co.com/h1fzW33Q/Screenshot-2025-08-22-030318.png)

## Project Description
This project is an **Apple Store website** built using Next.js 15 (App Router).  
- Fully responsive design with Landing Page, Product List, and Product Details pages.  
- User authentication using NextAuth.js.  
- Logged-in users can add new products via the "Add Product" page.  
- Notification system implemented with React Hot Toast.  
- Modern and user-friendly UI using Tailwind CSS and DaisyUI.  

**Primary Goal:** To create a full-stack Next.js website that can handle both public and protected pages.  

---

## Live Demo
[https://my-app-sable-chi-50.vercel.app/](https://my-app-sable-chi-50.vercel.app/)

---

## Features
- Public Landing Page
- Product List Page with search and responsive cards
- Product Details Page
- Protected Add Product Page (Login required)
- Responsive and mobile-friendly design
- React Hot Toast notifications
- Image upload using imgbb API
- Simple and attractive hover animations

---

## Tech Stack
- Next.js 15 (App Router)  
- React 18  
- NextAuth.js (Authentication)  
- Tailwind CSS + DaisyUI  
- React Hot Toast (Notifications)  
- Vercel (Deployment)

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone <your-repo-link>
cd <project-folder>

# 1. NextAuth Uri key for Deployment
NEXTAUTH_URL=your_nextauth_link

# 2. NextAuth secret key for authentication
NEXTAUTH_SECRET=your_nextauth_secret_here

# 3. NextAuth Google client ID (if using Google login)
GOOGLE_CLIENT_ID=your_google_client_id_here

# 4. NextAuth Google client secret (if using Google login)
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

