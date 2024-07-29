const api = fetch(
  "https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes?actor=Al%20Pacino' "
);
api
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
