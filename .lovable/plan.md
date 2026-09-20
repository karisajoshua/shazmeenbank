# TidyCal Booking Integration

Replace the current in-house booking flow (date/time picker, manual approval, PayPal) with TidyCal scheduling for all three offers: 1:1 Attachment Style Healing, Couples Coaching, and The Resolution Method. Payment is collected inside TidyCal at the moment of booking.

## What changes for visitors

- Clicking any "Book" button opens a TidyCal scheduling panel instead of the custom multi-step form.
- People pick a time, enter their details, and pay inside TidyCal in one flow.
- Confirmation emails, calendar invites, and reminders come from TidyCal, so the old "we'll email you payment instructions" step disappears.

## What changes for you as admin

- No more approving bookings or marking payments paid — TidyCal handles that.
- The admin Bookings section stays available so past bookings and revenue history remain visible, marked as historical records.
- Availability is managed in TidyCal, so the coach availability screen is no longer the source of truth; it stays in place but is labelled as unused for new bookings.

## Setup needed from you

One TidyCal booking link per offer (for example `tidycal.com/yourname/1-1-session`). You mentioned sending the links later — until they arrive I will wire everything up with placeholders in one settings file, so swapping in the real links is a one-line change each.

Each TidyCal booking type should have its price set inside TidyCal with payments connected there (Stripe or PayPal in your TidyCal account).

## Technical approach

1. **New config file** `src/config/tidycal.ts` — maps each service (1:1, Couples, Resolution Method) to its TidyCal booking path, with placeholder values to replace once links are supplied.
2. **New component** `src/components/bookings/TidyCalEmbed.tsx` — loads the TidyCal embed script once (`https://asset-tidycal.b-cdn.net/js/embed.js`), renders the `data-tidycal-embed` container, and handles a loading state plus an "open in new tab" fallback if the script is blocked.
3. **New component** `src/components/bookings/TidyCalModal.tsx` — Dialog wrapper (single close button, matching the dark/#FD0061 theme) that hosts the embed, replacing `BookingModal` as the entry point.
4. **Wire up call-to-actions**:
   - `src/pages/Bookings.tsx` — `handleBookService` opens the TidyCal modal for all three services; keeps the existing `?service=` URL parameter working.
   - `src/pages/OneOnOneCoaching.tsx` and `src/pages/CouplesCoaching.tsx` — their booking buttons open the TidyCal modal for the matching offer.
   - Other booking CTAs (home sections, about CTA, navbar) continue to route to `/bookings` or the landing pages as they do now.
5. **Retire the old flow**: stop rendering `BookingModal`, `DateTimeSelector`, `PayPalButton`, `BookingSteps`, `BookingConfirmation`, `BookingComplete`, `DiscountOffer` on the public path. Files stay in the repo (no database changes) so nothing breaks in the admin/dashboard views that read existing `bookings` rows.
6. **Admin/dashboard copy**: add a short note in the admin Bookings screen and the user dashboard's My Bookings that new sessions are scheduled through TidyCal, so records shown there are historical.
7. No database migration, no new secrets — the embed is client-side and needs only the public booking links.

## Optional follow-up (not in this plan)

If you later want new TidyCal bookings mirrored into your own database for admin reporting, that needs a TidyCal webhook plus a backend function and its API token. Say the word and I'll plan it separately.
