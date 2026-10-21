# VKA Sample Fulfillment Form

A single-page form for requesting samples and submitting order intake, built with Next.js App Router and Tailwind CSS v4.

**Status:** Prototype. The form has its fields, required checks and UI components, but submitting it only logs the payload to the console and shows an alert. Nothing is stored or sent.

## The problem

Customers asking for product samples need one form that captures their details, what they want and where to ship it, in a format the fulfillment team can act on. This repo is the front-end attempt at that intake form.

## What it does

- A single page (`app/page.tsx`, about 630 lines) with the sample request and order intake fields.
- Required-field checks on the inputs through the HTML `required` attribute.
- Select, checkbox, textarea and input controls built from Radix primitives (`components/ui/`).
- A submit handler that builds a payload object from the form state (`handleSubmit`).

## How it's built

- Next.js with the App Router and Turbopack for dev and build.
- React 19 and TypeScript.
- Tailwind CSS v4 through PostCSS, with global styles in `app/globals.css`.
- Component primitives follow the shadcn layout (`components.json`): Button, Checkbox, Input, Label, Select and Textarea in `components/ui/`, using `@radix-ui` packages for checkbox, label, select and slot.

## Running it locally

```bash
pnpm install
pnpm dev     # next dev --turbopack, then open http://localhost:3000
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # ESLint
```

## What's left

- Submitting does not save or send anything. `handleSubmit` calls `console.log` and then `alert`, and the alert text says it is for development only.
- There is no API route, database or email step, so the fulfillment team gets nothing from a submission.
- Validation is only the HTML `required` attribute. There is no schema check, and no tests.
- The page is one large file, so the form fields and the layout would need splitting before the form can grow.
