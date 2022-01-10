export const animesPerPage = 16;
export const defaultPage = 1;
export const baseUrl = "https://api.jikan.moe/v4";

// Fetch paths based on url
export const pathRecent = "/anime?&status=airing&order_by=rank&sfw";
export const pathPopular = "/top/anime?&order_by=popularity&sfw";
export const pathUpcoming = "/anime?&status=upcoming&order_by=popularity&sfw";
export const pathManga = "/top/manga?&sfw";
