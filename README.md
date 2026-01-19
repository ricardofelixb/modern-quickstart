# Next.js B2B Starter Kit

A production-ready B2B SaaS template built with Next.js, Convex, Stripe, WorkOS, and Base UI.

## Tech Stack

| Layer          | Technology     |
| -------------- | -------------- |
| Framework      | Next.js 16     |
| Database       | Convex         |
| Authentication | WorkOS AuthKit |
| Payments       | Stripe         |
| UI Components  | Base UI        |
| Styling        | Tailwind CSS 4 |

## Features

- Marketing splash page with pricing tiers
- Stripe Checkout integration for subscriptions
- Role-based access control (Admin / Member)
- Admin dashboard with user management
- SSO configuration panel
- Billing management via Stripe Customer Portal
- Audit logs (Enterprise plan only)
- Webhook syncing between WorkOS, Stripe, and Convex

## Prerequisites

Before starting, create accounts on the following platforms:

1. [Convex](https://convex.dev) - Database and backend
2. [WorkOS](https://workos.com) - Authentication
3. [Stripe](https://stripe.com) - Payments

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

This project uses pnpm as the package manager.

```bash
pnpm install
```

### 3. Run the Setup Script

The setup script guides you through configuring all required services interactively.

```bash
pnpm run setup
```

The script will prompt you to:

1. Enter your Stripe test secret key
2. Generate Stripe test products (Basic, Standard, Enterprise)
3. Connect Stripe to WorkOS in the WorkOS dashboard
4. Enter your WorkOS API key and Client ID
5. Create audit log schemas in WorkOS
6. Set the redirect URI in WorkOS (`http://localhost:3000/callback`)
7. Create the "Admin" role in WorkOS
8. Configure the JWT Template in WorkOS with `{ "aud": "<your-client-id>" }`
9. Log into Convex and create a new project
10. Configure Stripe and WorkOS webhooks

### 4. Start the Development Server

```bash
pnpm run dev
```

This runs both Next.js and Convex development servers concurrently.

The application will be available at `http://localhost:3000`.

## Environment Variables

The setup script creates a `.env.local` file with the following variables:

| Variable                          | Description                   |
| --------------------------------- | ----------------------------- |
| `STRIPE_API_KEY`                  | Stripe secret key             |
| `WORKOS_API_KEY`                  | WorkOS API key                |
| `WORKOS_CLIENT_ID`                | WorkOS Client ID              |
| `WORKOS_COOKIE_PASSWORD`          | Auto-generated session secret |
| `NEXT_PUBLIC_BASE_URL`            | Application base URL          |
| `NEXT_PUBLIC_WORKOS_REDIRECT_URI` | OAuth callback URL            |
| `NEXT_PUBLIC_CONVEX_URL`          | Convex deployment URL         |
| `CONVEX_DEPLOYMENT`               | Convex deployment identifier  |

The following are set as Convex deployment environment variables:

| Variable                | Description                   |
| ----------------------- | ----------------------------- |
| `STRIPE_API_KEY`        | Stripe secret key             |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `WORKOS_API_KEY`        | WorkOS API key                |
| `WORKOS_CLIENT_ID`      | WorkOS Client ID (for JWT)    |
| `WORKOS_WEBHOOK_SECRET` | WorkOS webhook signing secret |

## Available Scripts

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `pnpm run dev`      | Start Next.js and Convex dev servers             |
| `pnpm run build`    | Build the Next.js application                    |
| `pnpm run start`    | Start the production server                      |
| `pnpm run setup`    | Run the interactive setup wizard                 |
| `pnpm run validate` | Run format, typecheck, lint, and dead code check |

## Application Flow

1. Users visit the marketing page (`/`) and pricing page (`/pricing`)
2. Users sign up before selecting a subscription plan
3. After signup, an organization is created and linked to a Stripe customer
4. Admin users access the dashboard (`/dashboard`) for user management, SSO config, billing, and audit logs
5. Non-admin users are redirected to the product page (`/product`)

## Testing Payments

Use these Stripe test card details:

| Field       | Value               |
| ----------- | ------------------- |
| Card number | 4242 4242 4242 4242 |
| CVC         | Any 3 digits        |
| Expiration  | Any future date     |
| ZIP         | Any 5 digits        |

## Project Structure

```
.
├── convex/              # Convex backend (schema, queries, mutations, webhooks)
├── src/
│   ├── actions/         # Server actions
│   ├── app/             # Next.js App Router pages and components
│   └── lib/             # Shared utilities
├── public/              # Static assets
└── scripts/             # Setup and utility scripts
```

## Deployment

1. Set up a production Convex deployment following the [Convex documentation](https://docs.convex.dev/production)
2. Configure production environment variables in your hosting platform
3. Update WorkOS and Stripe to use production API keys
4. Update webhook URLs to point to your production domain

## License

MIT
