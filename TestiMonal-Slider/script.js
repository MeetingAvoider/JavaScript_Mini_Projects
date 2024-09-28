const testimonials = [
  {
    name: "John Doe",
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "You guys are the best! Keep up the great work!",
  },
  {
    name: "Sam Alex",
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I love your services",
  },
  {
    name: "Christine",
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Thanks for all your help! Your services are truly upstanding. I will recommend you to all my friends.",
  },
  {
    name: "Harish Chandra",
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "You guys are the best! Keep up the great work!",
  },
  {
    name: "Sam Alex",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I love your services",
  },
  {
    name: "Christine",
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Thanks for all your help! Your services are truly upstanding. I will recommend you to all my friends.",
  },
];
let idx = 0;
const img = document.querySelector("img");
const author = document.querySelector("#user-name");
const info = document.querySelector("#review");

function handler() {
  const item = testimonials[idx];
  img.src = item.url;
  author.textContent = item.name;
  info.textContent = item.text;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(handler, 3000);
