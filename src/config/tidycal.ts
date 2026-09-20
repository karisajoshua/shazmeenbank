// TidyCal booking configuration
//
// Replace each `path` with the part of your TidyCal link that comes after
// tidycal.com/ — e.g. for https://tidycal.com/shazmeenbank/1-1-session
// the path is "shazmeenbank/1-1-session".
// Prices are set inside TidyCal, which also collects payment at booking time.

export const TIDYCAL_BASE_URL = "https://tidycal.com";

export type TidyCalServiceKey = "one-on-one" | "couples" | "resolution-method";

export const tidyCalBookings: Record<
  TidyCalServiceKey,
  { path: string; title: string }
> = {
  "one-on-one": {
    path: "shazmeenbank/1-1-attachment-style-healing",
    title: "1:1 Attachment Style Healing",
  },
  couples: {
    path: "shazmeenbank/couples-coaching",
    title: "Couples Coaching",
  },
  "resolution-method": {
    path: "shazmeenbank/the-resolution-method",
    title: "The Resolution Method",
  },
};

// Maps the numeric service ids used on the Bookings page to TidyCal keys.
export const serviceIdToTidyCalKey: Record<number, TidyCalServiceKey> = {
  1: "one-on-one",
  2: "couples",
  3: "resolution-method",
};

export const getTidyCalUrl = (path: string) =>
  `${TIDYCAL_BASE_URL}/${path.replace(/^\/+/, "")}`;
