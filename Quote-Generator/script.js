const api = fetch(
  "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino' "
);
api
  .then((p) => {
    console.log(p);
  })
  .catch((error) => {
    console.log(error);
  });
