

function calculate() {
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var depth = document.getElementById('depth').value;


    if(!Number.isNaN(parseFloat(height)) && !Number.isNaN(parseFloat(width)) && !Number.isNaN(parseFloat(depth))) {
        var valNeeded = (parseFloat(height) * parseFloat(width) * (parseFloat(depth) / 12)) / 27;

        if(valNeeded < 1) {
            if(valNeeded <= .25) {
                valNeeded = .25;
            } else if(valNeeded <= .5) {
                valNeeded = .5;
            } else if(valNeeded <= .75) {
                valNeeded = .75;
            } else if(valNeeded <= 1) {
                valNeeded = 1;
            }
        } else if(valNeeded > 1) {
            valNeeded = Math.ceil(valNeeded * 2) / 2;
        }

        document.getElementById('output').innerHTML = "<p> You will need <b>" + valNeeded + "</b> cubic yards (yd<sup>3</sup>) of gravel/soil";
    } else {
        document.getElementById('output').innerHTML = "<p> Please enter <b>valid</b> numbers into the fields above";
    }
    
    
    return false;

}

function calculateSod() {
    var height = document.getElementById('height2').value;
    var width = document.getElementById('width2').value;


    if(!Number.isNaN(parseFloat(height)) && !Number.isNaN(parseFloat(width))) {
        var valNeeded = (parseFloat(height) * parseFloat(width)) / 9;

        document.getElementById('output2').innerHTML = "<p> You will need <b>" + Math.ceil(valNeeded) + "</b> cubic yards (yd<sup>3</sup>) of sod";
    } else {
        document.getElementById('output2').innerHTML = "<p> Please enter <b>valid</b> numbers into the fields above";
    }
    

    return false;
}