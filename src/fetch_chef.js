import https from "https";

const options = {
  hostname: "commons.wikimedia.org",
  path: "/w/api.php?action=query&list=search&srsearch=chef%20portrait&srnamespace=6&utf8=&format=json",
  headers: { "User-Agent": "MyTestApp/1.0 (test@example.com)" },
};

https.get(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    const result = JSON.parse(data);
    const titles = result.query.search.map((s) => s.title);

    titles.slice(0, 5).forEach((title) => {
      const options2 = {
        hostname: "commons.wikimedia.org",
        path: `/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`,
        headers: { "User-Agent": "MyTestApp/1.0 (test@example.com)" },
      };
      https.get(options2, (res2) => {
        let data2 = "";
        res2.on("data", (chunk) => {
          data2 += chunk;
        });
        res2.on("end", () => {
          const result2 = JSON.parse(data2);
          const pages = result2.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].imageinfo) {
            console.log(pages[pageId].imageinfo[0].url);
          }
        });
      });
    });
  });
});
