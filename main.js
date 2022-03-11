function bedroom(){
    window.location = "index_bedroom.html";
}

function bottles(){
    window.location = "index_bottles.html";
}

function desk(){
    window.location = "index_desk.html";
}

function fruit_basket(){
    window.location = "index_fruit_basket.html";
}

function tv_ac(){
    window.location = "index_tv_ac.html";
}

img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('bedroom.jpg');
}

function draw(){
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status : Object Detected";

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}











img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('desk.jpg');
}

function draw(){
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status : Object Detected";

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}








img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('fruit_basket.jpg');
}

function draw(){
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status : Object Detected";

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}






img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('tv_ac.jpg');
}

function draw(){
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status : Object Detected";

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}









img = "";
status = "";
objects = [];

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('water_bottles.jpg');
}

function draw(){
    if(status != "")
    {
       for(i = 0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status : Object Detected";

           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }
}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

