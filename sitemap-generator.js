const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const hostname = "https://siamvit.com";

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/team-page", changefreq: "monthly", priority: 0.9 },
  { url: "/events", changefreq: "monthly", priority: 0.9 },
  { url: "/domains", changefreq: "weekly", priority: 0.8 },
  { url: "/wrapped", changefreq: "monthly", priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname });

urls.forEach((entry) => sitemapStream.write(entry));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => fs.writeFileSync("./public/sitemap.xml", data.toString()))
  .then(() => console.log("✅ Sitemap generated successfully!"))
  .catch((err) => console.error("❌ Sitemap generation failed:", err));
