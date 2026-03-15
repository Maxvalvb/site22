const https = require('https');

const files = [
  'File:Construction_of_the_new_World_Trade_Center.jpg',
  'File:Lakhta_Center_2019.jpg',
  'File:Skolkovo_Technopark.jpg',
  'File:Bill_Gates_2017_(cropped).jpg',
  'File:Elon_Musk_Royal_Society_(crop1).jpg',
  'File:Mark_Zuckerberg_F8_2019_Keynote_(cropped_2).jpg',
  'File:Arnold_Schwarzenegger_1974.jpg',
  'File:Gym_at_the_University_of_Birmingham.jpg',
  'File:Gym_equipment.jpg',
  'File:Gym_interior.jpg',
  'File:Restaurant_interior_-_panoramio.jpg',
  'File:Thomas_Keller_by_David_Schankula.jpg',
  'File:Wine_cellar.jpg'
];

files.forEach(file => {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(file)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId === '-1') {
          console.log(`${file}: NOT FOUND`);
        } else {
          console.log(`${file}: ${pages[pageId].imageinfo[0].thumburl}`);
        }
      } catch (e) {
        console.log(`${file}: ERROR`);
      }
    });
  });
});
