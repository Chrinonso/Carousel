const reviews = [
    {
      id: 1,
      name: "susan Jacob",
      job: "web developer",
      img:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Jacob Mara",
      job: "Teacher",
      img:
        "https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Rachi Rachi",
      job: "Intern",
      img:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/07/internship.jpeg.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Dotun Atolagbe",
      job: "the boss",
      img:
        "https://media.istockphoto.com/id/1193290387/photo/portrait-of-young-businessman-standing-in-his-office-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=DdgYzd4WTTtlhKMM2dBqUxSxobWs7MC-rZZxflyF6oY=",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id:5,
      name: "Ukaegbu Chinonso",
      Job: "Software Developer",
      img: "https://www.telecomasia.net/upload/resize_cache/iblock/893/200_200_2/8936d5a1a68424e9f8877df676890c3e.png",
      text: "My name is Nonso and i am trying to rack my head around this Tech .",
    },
  ];


let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let prevButton = document.querySelector(".prev-btn");
let nextButton = document.querySelector(".next-btn");
let randButton = document.querySelector(".random-btn");


let currentItem = 0;


function showPerson() {
    img.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
    currentItem = (currentItem + 1) % reviews.length;

}  

prevButton.addEventListener("click", function (){
    currentItem = (currentItem + reviews.length -1) % reviews.length;
    showPerson();
})

nextButton.addEventListener("click", function (){
    currentItem = (currentItem + reviews.length + 1) % reviews.length;
    showPerson();
})

randButton.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})


setInterval(showPerson, 3000);

window.addEventListener("DOMContentLoaded", showPerson);



