function displayNickProjects() {

    var projectElement = document.getElementById("projects");

    projectElement.scrollIntoView({
        behaivour: 'smooth'
    });

    //Display data stored in other files in the projects div
    document.getElementById("dg").innerHTML = "Just some test shit";
    
  }