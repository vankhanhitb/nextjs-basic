This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Special files
- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx

- Loading.tsx 
=> This is file help us create loading state that users see while waiting for content to
load in a specific route segment
=> The loading state appear instantly when navigating, letting users know that the application 
is responsive and actively loading content

- Intercepting routes conventions
(.) to match segments on the same level
(..) to match segments one level above
(..)(..) to match segments two levels above
(...) to match segments from the root app directory

- Advanced Route on