var modalInfo = {
  1: {
    title: "Robotics Club Location",
    info: "JSU Robitics presents our new room, to work on projects within the Engineering Building. Included within this area is a study area, mutiple hardware and software workspaces, and a microprocessing lab.",
    link: "#",
    github: "#"
  },
  2: {
    title: "VEX Robot",
    info: "THEE JSU Robotics club consist of building vex robots with th eprogram language of Python.",
    link: "#",
    github: "#"
  },
  3: {
    title: "Machine",
    info: "Check out our cool machine!",
    link: "#",
    github: "#"
  },
  4: {
    title: "Other Robots",
    info: "Here are some other robots that THEE JSU Robotics team has built.",
    link: "#",
    github: "#"
  }
};

// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function(){
    modal.style.display = "none";
  }
  document.getElementById("github").onclick = function(){
    window.open(modalInfo[id].github,'_blank');
  }
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}