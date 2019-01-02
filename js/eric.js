//JS for displaying Eric's projects

var projectData;

function reqListener () {
    console.log(this.responseText);
  }

function loadJSON() {

    var url = "https://erickulchycki.github.io/CompSciClique/js/eric.json";
    req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.addEventListener("load", reqListener);
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == "200") {
            //Action to be performed when the document is ready
            returnArr = JSON.parse(this.responseText); //get the XML as a JSON object
            
            projectData = returnArr;

            console.log(projectData);

            for(var key in projectData) {

                console.log(key);
        
                //Display data stored in other files in the projects div
                document.getElementById("dg").innerHTML += `
        
                <div class="container">
                    <div class="row">
        
                        ${projectData[0].name} 
        
        
                    </div>
                </div>
            
            
            
            `;
        
            }
        }
    }
    req.open("GET", url, true);
    req.send(null);
}


function displayEricProjects() {

    loadJSON();

    var projectElement = document.getElementById("projects");

    projectElement.scrollIntoView({
        behaivour: 'smooth'
    });


  }

