

Webcam.set({
width:200,
height:250,
image_format:"png",
png_quality:200

})
camera = document.getElementById("camera");
Webcam.attach( "camera" );



function takesnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o9c6y1HKY/" ,modelLoaded)
console.log("ml5 version :", ml5.version);

function modelLoaded(){
    console.log("Model Loaded!")
}


function check(){
img= document.getElementById("captured_image");
classifier.classify(img, gotResult);

}

function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultobject").innerHTML=results[0].label;
        document.getElementById("resultaccuracy").innerHTML=results[0].confidence.toFixed(3);
        //document.getElementById("resultaccuracy").innerHTML=results[1].label;
    }
}








