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

# Loading.tsx 
=> This is file help us create loading state that users see while waiting for content to
load in a specific route segment
=> The loading state appear instantly when navigating, letting users know that the application 
is responsive and actively loading content

# Intercepting routes conventions
(.) to match segments on the same level
(..) to match segments one level above
(..)(..) to match segments two levels above
(...) to match segments from the root app directory

# Headers in route handles
HTTP headers represent the metadata associated with an API request and response.

* Request Headers
These are sent by the client, such as a web browser, to the server. They contain essential information about the request, 
which helps the server understand and process it correctly

# Middleware
Middleware in Next.js is a powerful feature that lets you intercept and control the flow of requests and responses
throught your application

It does this at a global level, significationtly enhancing features like redirects, URL rewrites, authentication, headers,
cookies, and more

Middleware lets you specify paths where it should be active:

# Routing section summary
- Route definition
- Pages and layouts
- Dynamic routes
- Route Group
- Linking and navigation
- Loading and error state
- Parallel and intercepting routes
- Route handles ans middleware

# Data fetching and mutations
- Section 1: Routing
- Section 2: Rendering
- Section 3: Data fetching and mutations

# Data fetching in App Router
- So far, we've been working with hard-code content in out routes and components
-  In actual enterprise apps, you're usually data from external sources

# Data mutation
 When we work with data, we've typically performing what we call CRUD operations:
 - Create
 - Read
 - Update
 - Delete

 # Server Actions
 