var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}





recognition.onresult = function(event) {

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    if (Content = "take my selfie") {
        speak();
    }

    speak();

    Webcam.attach(camera);

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking a selfie for you in five seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        takesnapshot();
       save();
    } , 5000);

}

Webcam.set({
    width: 250,
    height: 350,
    image_format: "jpeg" ,
    png_quality: 90
})

camera = document.getElementById("camera");

 function newpage() {
    window.location = "info.html";
}

function takesnapshot() {
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link_href = image;
    link.click()
}

