import https from "https";

const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fit_young_man_caucasian_running_on_machine_treadmill_workout_in_gym.jpg/960px-Fit_young_man_caucasian_running_on_machine_treadmill_workout_in_gym.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chef_Pep%C3%ADn%2C_portrait_sculpture_and_sculptor_Zenos_Frudakis.jpg/960px-Chef_Pep%C3%ADn%2C_portrait_sculpture_and_sculptor_Zenos_Frudakis.jpg",
];

urls.forEach((url) => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
});
