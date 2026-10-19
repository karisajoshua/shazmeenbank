// TidyCal booking configuration
//
// Each `path` is the verified owner-provided part of the TidyCal link after
// tidycal.com/ — e.g. for https://tidycal.com/shazmeen/1-1-session
// the path is "shazmeen/1-1-session".
// Prices are set inside TidyCal, which also collects payment at booking time.

export const TIDYCAL_BASE_URL = "https://tidycal.com";

export type TidyCalServiceKey = "one-on-one" | "couples" | "resolution-method";

export const tidyCalBookings: Record<
  TidyCalServiceKey,
  { path: string; title: string }
> = {
  "one-on-one": {
    path: "shazmeen/1-1-attachment-style-healing",
    title: "1:1 Attachment Style Healing",
  },
  couples: {
    path: "shazmeen/couples-coaching",
    title: "Couples Coaching",
  },
  "resolution-method": {
    path: "shazmeen/the-resolution-method-9-week-couples-transformation-program",
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
