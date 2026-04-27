## Image Replacements

Replace generic/duplicate images with thematically relevant ones already in the system's storage bucket and asset library.

### 1. Courses Page — Update DB image URLs (SQL migration)

The Courses page renders images directly from the `courses` table. Two courses currently use generic abstract images shared with other sections.

| Course | Current image | New image | Why |
|---|---|---|---|
| Heal Through Heartbreak with Love | `1765556247954-taibp9.png` (also used as Bookings hero & LifeGallery) | `1766874371978-yck9lk.png` | Already used on Home "Healing Through Breakup or Divorce" card — perfect thematic match |
| Masterclass: The Anxious-Avoidant Dynamic | `1765556247954-iadsk.png` (also used in LifeGallery) | `1766874371978-qwapsn.png` | Already used on Home "Healing Anxious Attachment" card — directly matches anxious/avoidant subject |

These will be applied via a SQL `UPDATE` migration on the `courses` table.

### 2. Bookings Page — Update image imports in `src/pages/Bookings.tsx`

| Service | Current image | New image |
|---|---|---|
| Couples Coaching | `shazmeenMedalTogether` (medals photo) | `src/assets/bookings/couples-coaching.jpg` (purpose-shot couples coaching image already in repo) |
| The Resolution Method | `shazmeenMedal` (medal photo) | `src/assets/bookings/resolution-method.jpg` (purpose-shot resolution method image already in repo) |

The existing `couples-coaching.jpg` and `resolution-method.jpg` files in `src/assets/bookings/` were created specifically for these sections but aren't currently being used — swapping in the right asset.

The 1:1 Attachment Style Healing image (`shazmeenHeart`) stays as is.

### Files changed
- SQL migration to update two rows in `public.courses`
- `src/pages/Bookings.tsx` — swap two image imports and update the two `image:` fields in the `services` array
