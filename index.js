function menu_btn() {
  let a = document.getElementById("myLinks");
  if (a.style.display === "none") {
    a.style.display = "block";

  } else {
    a.style.display = "none";
  }
}

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
  
  const title = document.querySelector(".projectname")
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
   `
   const launch = document.querySelector(".gotoproject")
   launch.innerHTML = `
    <a href=${proyecto1.linkToLive}>
       <button class="btstyle pjbutton" type="button"><span>See Live <img src="./icons/export.png" alt="launch project"></span></button>
       </a>
     <a href=${proyecto1.linkToSource}>
    <button class="btstyle pjbutton" type="button"><span>See Source <img src="./icons/github-w.png" alt="go to repo"></span></button>
       </a>
   `;
   
   }
   