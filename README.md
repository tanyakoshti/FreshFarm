# FreshFarm

FreshFarm is a multi-app platform with a NestJS backend, a Next.js admin dashboard, and Expo mobile apps for customers and delivery.

## Structure
- backend: NestJS API
- apps/admin: Next.js admin dashboard
- apps/customer: Expo customer app
- apps/delivery: Expo delivery app
- packages/api-client: shared client utilities

## Quick start
1. Install dependencies: npm install
2. Backend: cd backend && npm run start:dev
3. Admin: cd apps/admin && npm run dev
4. Mobile: cd apps/customer && npm run start

## Environment
See each app's .env.example for required variables.