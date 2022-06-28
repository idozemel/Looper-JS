//-------------------Buffer------------------------//

$(".sound").click((event) => {
    singlePlay(event.currentTarget.name,event.currentTarget.value);
})

//-------------------Mute---------------------------//

$(".mute").click((event) => {
    muteAudio(event.currentTarget.value);
})

function muteAudio(key){
    !audios[key].audio.muted ? audios[key].audio.muted = true : audios[key].audio.muted = false ;
}

//-----------------Play a single tune---------------//

$(".pBtn").click((event) => {
    singlePlay(event.currentTarget.value);
});

function singlePlay(key, value){
    var audi = audios[key].audio
    audi.play();
    var slider = document.querySelector("#myRange"+key); //Choosing where the audio starts by clicking on scrollbar
    if( typeof value !== 'undefined'){
        slider.value = value;
    }
    // Set max value when you know the duration
    slider.max = audi.duration;
    audi.onloadedmetadata = () => slider.max = audi.duration;
    // update audio position
    slider.onchange = () => audi.currentTime = slider.value;
    // update range input when currentTime updates
    audi.ontimeupdate = () => slider.value = audi.currentTime;
    value = 'undefined';
};


//---------------------Play--------------------------//

$(".play").click(Play);

function Play() {
    for(i=0;i<audios.length;i++){
        singlePlay(i);
    };
};
//---------------------Loop--------------------------//

$(".loop").click(Loop);

function Loop(){
    if(document.querySelector(".loop").checked){
        audios.forEach(item => item.audio.loop = true);
    }
    else{
        audios.forEach(item => item.audio.loop = false);
    }
}

//---------------------Stop--------------------------//

$(".stop").click(Stop);

function Stop() {
    audios.forEach(item => {
        item.audio.pause();
        item.audio.currentTime =0;});
}

//---------------------Audio files -----------------//
const audios = [
    {
        name: "_tambourine_shake_higher",
        audio: new Audio("Loop files/_tambourine_shake_higher.mp3")
    },
    {
        name: "ALL TRACK",
        audio: new Audio("Loop files/ALL TRACK.mp3"),
        //duration: this.audio.duration
    },
    {
        name: "B VOC",
        audio: new Audio("Loop files/B VOC.mp3")
    },
    {
        name: "DRUMS",
        audio: new Audio("Loop files/DRUMS.mp3")
    },
    {
        name: "HE HE VOC",
        audio: new Audio("Loop files/HE HE VOC.mp3")
    },
    {
        name: "HIGH VOC",
        audio: new Audio("Loop files/HIGH VOC.mp3")
    },
    {
        name: "JIBRISH",
        audio: new Audio("Loop files/JIBRISH.mp3")
    },
    {
        name: "LEAD 1",
        audio: new Audio("Loop files/LEAD 1.mp3")
    },
    {
        name: "UUHO VOC",
        audio: new Audio("Loop files/UUHO VOC.mp3")
    }
];
