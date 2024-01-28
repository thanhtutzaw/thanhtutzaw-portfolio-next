
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <!-- Add the static URLs manually -->
     <url>
        <loc>https://thz.vercel.app</loc>
        <!-- Starting with the news extension tags -->
        <!-- Next we add image extension tags -->
        <image:image>
            <image:loc>
        https://thz.vercel.app/thanhtutzaw.png
        </image:loc>
        </image:image>
        <!-- Next we add video extension tags -->
        <!-- <video:video>
            <video:thumbnail_loc>https://www.example.com/thumbs/123.jpg</video:thumbnail_loc>
            <video:title>Lizzi is painting the wall</video:title>
            <video:description>
        Gary is watching the paint dry on the wall Lizzi painted.
      </video:description>
            <video:player_loc>
        https://player.example.com/video/987654321
      </video:player_loc>
        </video:video> -->
        <!-- And finally the xhtml tags for hreflang -->
        <xhtml:link
               rel="alternate"
               hreflang="en"
               href="https://github.com/thanhtutzaw"/>
        <xhtml:link
               rel="alternate"
               hreflang="en"
               href="https://www.linkedin.com/in/than-htut-zaw-373954213/"/>
        <xhtml:link
               rel="alternate"
               hreflang="en"
               href="https://t.me/ThanHtutZaw"/>
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