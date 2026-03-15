import https from "https";

function searchImage(query) {
  return new Promise((resolve, reject) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&pithumbsize=800`;
    https
      .get(url, { headers: { "User-Agent": "Node.js" } }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            const pages = json.query?.pages;
            if (pages) {
              const urls = Object.values(pages)
                .map((p) => p.thumbnail?.source)
                .filter(Boolean);
              resolve(urls.slice(0, 3));
            } else {
              resolve([]);
            }
          } catch (e) {
            resolve([]);
          }
        });
      })
      .on("error", reject);
  });
}

async function run() {
  console.log("Engineer:", await searchImage("civil engineer portrait"));
  console.log("Worker:", await searchImage("construction worker portrait"));
  console.log("Woman:", await searchImage("business woman portrait"));
  console.log("Gym:", await searchImage("gym workout man"));
  console.log("Chef:", await searchImage("chef portrait"));
}
run();
