// Hamburger Button //

function menu_btn() {
  let a = document.getElementById("myLinks");
  if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

// Project Popup //

const proyecto1 = {
  name: "Multi-Post Stories",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive:
    "https://alexpuente0https://github.com/alexpuente0/My-Portfolio/blob/main/README.md.github.io/My-Portfolio/",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto2 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto3 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto4 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto5 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto6 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

const proyecto7 = {
  name: "Professional Art Printing Data",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "image.jpg",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive: "https://github.com/alexpuente0/My-Portfolio/blob/main/README.md",
  linkToSource: "https://github.com/alexpuente0",
};

let allProjects = [
  proyecto1,
  proyecto2,
  proyecto3,
  proyecto4,
  proyecto5,
  proyecto6,
  proyecto7,
];

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");

  const title = document.querySelector(".projectname");
  title.innerHTML = `
   <h3>${proyecto1.name}</h3>
  `;

  const theList = document.querySelector(".ulist");
  theList.innerHTML = `
                 <ul class="poplist">
                  <li class="popitem">${proyecto1.technologies[0]}</li>
                  <li class="popitem">${proyecto1.technologies[1]}</li>
                  <li class="popitem">${proyecto1.technologies[2]}</li>
                </ul>
  `;

  const theImage = document.querySelector(".imagesub");
  theImage.innerHTML = `
   <img class="popimage" src="./icons/popsnapshot.png" alt="default image of the project">
  `;

  const theText = document.querySelector(".projectext");
  theText.innerHTML = `
   <p>
    ${proyecto1.description}
   </p>;
   `;
  const launch = document.querySelector(".gotoproject");
  launch.innerHTML = `
    <a href=${proyecto1.linkToLive}>
       <button class="btstyle pjbutton insidebt" type="button"><span>See Live <img src="./icons/export.png" alt="launch project"></span></button>
       </a>
     <a href=${proyecto1.linkToSource}>
    <button class="btstyle pjbutton insidebt" type="button"><span>See Source <img src="./icons/github-w.png" alt="go to repo"></span></button>
       </a>
   `;
}

// email validation //

const contact = document.getElementById("sendmessage");
const error = document.querySelector(".error-message");
const mail = document.getElementById("user-email");

contact.addEventListener("submit", (event) => {
  event.preventDefault();
  if (mail.value !== mail.value.toLowerCase()) {
    error.style.display = "block";
    error.textContent = "Please use lowercase characters for your email";
    error.style.color = "#e05304";
    error.style.fontFamily = "Roboto, sans-serif";
  } else {
    contact.submit();
  }
});

const theName = document.querySelector(".contact-name");
const yourMessage = document.querySelector(".contact-message");

// listen for inputs to create form objects

contact.addEventListener("input", () => {
  const dataObject = {
    gotYourName: theName.value,
    gotYourMail: mail.value,
    gotYourMessage: yourMessage.value,
  };

  // saving to local storage

  localStorage.setItem("formData", JSON.stringify(dataObject));
});

// retrieving data from local storage

const fetchdata = JSON.parse(localStorage.getItem("formData"));
if (fetchdata) {
  theName.value = fetchdata.gotYourName;
  mail.value = fetchdata.gotYourMail;
  yourMessage.value = fetchdata.gotYourMessage;
  }
