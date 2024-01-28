
const URL = "https://thz.vercel.app"
export function generateSiteMap() {
  // const posts = getSortedPostsData.map(({ id, date }) => ({
  //     url: `${URL}/blog/${id}`,
  //     lastModified: date,
  // }));

  // const routes = ["", "/hello"].map((route) => ({
  //     url: `${URL}${route}`,
  //     lastModified: new Date().toISOString(),
  // }));

  // return [...routes];
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
       <loc>${URL}/portfolio</loc>
     </url>
      <url>
       <loc>${URL}/blog</loc>
     </url>
            ${["/hello"].map((route) => {
    return `
            <url><loc>${URL}${route}</loc></url>
            `}).join("")}
   </urlset> 
 `;
}

export async function getServerSideProps({ res }) {
  // const posts = getSortedPostsData();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() { }