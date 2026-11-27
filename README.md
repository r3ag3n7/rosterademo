# Rostera

Rostera is a mobile-first career-growth demo for manufacturing teams.

## Run locally

Install Node.js, then run:

```powershell
node serve.mjs
```

Open `http://localhost:8000`. Keep the terminal open while using the demo. The website currently has a local demo mode; profiles and collaboration do not sync to another device yet.

## Public site

GitHub Pages is configured to publish the `main` branch from the repository root. Push changes to `main` to update the site. The address is `https://r3ag3n7.github.io/rosterademo/`.

## Demo limitations and privacy

- The built-in Rostera assistant uses local help text and does not call an AI service. Chat messages are not saved or sent to a third party.
- Registration, profiles, points, and consent choices are stored in the visitor's browser. They do not sync between devices or people.
- The team chat and news feed use synthetic starter content and browser-local storage until Supabase is connected. Do not use them for real employee communication yet.
- Profile photos are resized in the browser before they are saved locally. Age, goals, skills, and photos are demo data only.
- New demo passwords are stored as browser-side hashes. The three seeded demo passwords remain visible in the public JavaScript and must never be reused elsewhere.
- Do not enter real sensitive employee information. Production use requires a trusted backend, real authentication, access controls, and a reviewed AI/data-sharing setup.
- Rewards only subtract demo points; no real prize is issued.

See [docs/decisions.md](docs/decisions.md) for implementation decisions and limits.

## Supabase setup for shared accounts and collaboration

The prepared database schema is in [supabase/schema.sql](supabase/schema.sql). Create a Supabase project, run the SQL once in its SQL Editor, then configure the browser client with the project URL and public `anon` key. Never put a `service_role` key in this repository or website. Until those client settings exist, the UI labels chats and reactions as local demo data.
