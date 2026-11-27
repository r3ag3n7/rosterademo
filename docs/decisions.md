# Rostera demo decisions

## Profile and collaboration data

- Profile photo, about text, age, department, goals, and skills are currently stored in the user's browser. Photos are resized to small JPEGs before saving.
- Chats, news likes, and comments use synthetic starter content and browser-local storage so demo accounts in the same browser can interact.
- Do not enter real employee data in the public demo. The prepared Supabase schema keeps age, about text, development goals, and skills in a self-readable `profile_details` table, separate from the company-visible directory.
- Cross-device messaging and news sync need a Supabase project URL and public anon key plus `supabase/schema.sql`. The service-role key must remain private and is never used in the browser.

## Static demo storage

The public GitHub Pages version is a static prototype. Registration, profile fields, permission choices, learning progress, points, and reward redemptions are kept in browser `localStorage`. They are not a shared company database and cannot sync across devices. Do not enter real confidential employee data.

## Assistant behavior

The AI Assistant tab provides immediate, rule-based answers from local Rostera help text and downloadable text templates. It does not call an external AI provider, and chat questions are kept in memory only. A production AI integration needs a server-side endpoint, a provider decision, and explicit privacy/security review before employee data can be sent.

## Roles and consent

The seeded demo accounts have fixed roles: Anna is a manager, Alexander is an employee, and Elizabeth is a mentor. New registrations default to employee. Profile sharing and editing require separate user-selected consent toggles. In this static version, consent filtering only works among profiles stored in the same browser.

## Demo rewards

Each sample account starts with a distinct readiness score and point balance. Completing a course, logging a mentorship meeting, and submitting a suggestion award demo points. Redeeming an item records a local point deduction only; no real-world reward or payment is created.

## Public demo credentials

Seeded logins and their shared demo password are visible in client-side JavaScript. They are for usability testing only and must not be treated as secure authentication or reused for another service.
