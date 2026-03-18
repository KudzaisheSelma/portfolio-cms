# Portfolio CMS

A headless content management system tailored for creatives to effortlessly update their portfolios without touching code.

## Tech Stack
- **Frontend**: Vue 3, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB with Mongoose
- **Storage**: AWS S3 for media uploads
- **Auth**: JWT

## Getting Started
```bash
# Backend
cd server && npm install
cp .env.example .env && npm run dev

# Frontend
cd client && npm install && npm run dev
```

## Features
- Drag-and-drop project ordering
- Rich text editor for descriptions
- Image/video upload to AWS S3
- Custom themes and color schemes
- SEO settings per project
- Live preview mode
