# T3000

This is an implementation of the [T3 Stack](https://create.t3.gg/) project ([Discord](https://t3.gg/discord)) bootstrapped with [create-t3-app](https://github.com/t3-oss/create-t3-app). It is an expansion of this repository [t3-complete](https://github.com/juliusmarminge/t3-complete) to include more opinionated technologies and patterns that are being used more frequently by its creator, [@jonhmchan](https://github.com/jonhmchan) for new projects.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)

## Technologies

**Server**

- [x] [Next.js](https://nextjs.org), for React based web development

**Storage**

- [x] [PostgreSQL](https://www.postgresql.org/), for relational database storage
- [x] [Prisma](https://prisma.io), for object relational mapping (ORM), migrations, database GUI
- [x] [Docker Compose](https://docs.docker.com/compose/), setup for local database

**Data transfer**

- [x] [tRPC](https://trpc.io), for type-safe data transfer
- [x] [superjson](https://github.com/blitz-js/superjson), for JS serialization on a superset of JSON
- [x] [NextAuth.js](https://next-auth.js.org), for authentication

**State management**

- [ ] [zustand](https://github.com/pmndrs/zustand), simple flex style state management

**User interface**

- [x] [Tailwind CSS](https://tailwindcss.com), for styling, user interface, design system
- [x] [Radix UI](https://radix-ui.com), for base user interface components
- [x] [Storybook](https://storybook.js.org/), for user interface management
- [x] [react-hook-form](https://react-hook-form.com), for hooks-based forms
- [x] [`@next/font`], for optimized fonts
- [x] [lucide](https://lucide.dev/), for icons
- [ ] [Autoanimate](https://auto-animate.formkit.com/), for drop-in React animations

**Testing**

- [x] [Playwright](https://playwright.dev), for end-to-end (e2e) testing
- [x] [Vitest](https://vitest.dev), for unit/integration tests, has API compatibility with [Jest](https://jestjs.io/)

**Analytics**

- [x] [Plausible](https://plausible.io/), for analytics and event tracking
- [x] [Sentry](https://sentry.io/), for monitoring

**Messaging**

- [x] [Twilio](https://twilio.com/), for SMS
- [x] [SendGrid](https://sendgrid.com/), for emails

**Billing**

- [ ] [Stripe](https://stripe.com/)

**Machine learning**

- [x] [Open AI](https://openai.com/)

**Deployment**

- [x] [GitHub](https://github.com/), for version control and CI/CD
- [x] [Vercel](https://vercel.com/), for highly integrated Next deployment
- [x] [Neon](https://neon.tech/), for serverless branchable Postgres

## Getting Started

1. Install deps

```bash
pnpm install
```

2. Start the db

```bash
docker compose up -d
```

3. Update env and push the schema to the db

```bash
cp .env.example .env
pnpm prisma db push
```

4. Start the dev server

```bash
pnpm dev
```

5. Run the tests

```bash
pnpm test:unit:watch
```

## Local Development

**Open Prisma Studio for local database GUI**

```bash
npx prisma studio
```

**Open Storybook for local component GUI**

```bash
pnpm run storybook
```

**Connect to production database**

```bash
psql -h pg.neon.tech
```

### Testing

There are several `pnpm test` commands you can use for local testing:

**Run all tests with a coverage report**

This will run all unit tests, e2e tests, and provide a coverage report. `pnpm dev` should **not** be running.

```bash
pnpm test
```

**Unit tests**

```bash
pnpm test:unit
```

While watching for changes while `pnpm dev` is running:

```bash
pnpm test:unit:watch
```

**End-to-end (e2e) tests**

`pnpm dev` should **NOT** be running when running e2e tests locally. This is because Playwright will start the server on
the same port and there may be unexpected side effects due to conflicts.

```bash
pnpm test:e2e
```

There is no support for e2e tests in watch mode.

**Coverage report**

Testing uses [c8](https://vitest.dev/guide/coverage.html) for coverage support. To get a report:

```bash
pnpm test:unit:coverage
```

While watching for changes while `pnpm dev` is running:

```bash
pnpm test:unit:coverage:watch
```

## Deployment

This repository is attached to GitHub and requires all new code to be built in a branch with all tests, linting, and type checking to pass before merging and deploying automatically. These rules also apply to GitHub administrators.

1. Ensure prettier has run with `pnpm format`
2. Ensure tests pass with `pnpm test`
3. Push to remote branch and wait for tests to pass (see `.github/workflows/ci.yml`)
4. Merge into main, triggering automatic deploy by Vercel

**Pull Requests**

We use the following conventions when naming branches:

1. `feat/*` is for net new features
2. `bug/*` is for a bug fix
3. `test/*` is for any tests, typically for the pipeline

All pull requests should have a description.
