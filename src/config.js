export const animesPerPage = 12;
export const defaultPage = 1;
export const baseUrl = "https://api.jikan.moe/v4";

// Fetch paths based on url
export const recentObj = {
  path: "/anime?&status=airing&order_by=rank&sfw",
  title: "Top Airing Anime",
};
export const popularObj = {
  path: "/top/anime?&order_by=popularity&sfw",
  title: "Popular Anime",
};
export const upcomingObj = {
  path: "/anime?&status=upcoming&order_by=popularity&sfw",
  title: "Upcoming Anime",
};
export const mangaObj = { path: "/top/manga?&sfw", title: "Popular Manga" };
