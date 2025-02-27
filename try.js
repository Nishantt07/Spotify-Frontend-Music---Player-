// const { arrayBuffer } = require("stream/consumers");

// const { run } = require("node:test");

let sidebar  = document.getElementsByClassName("sidebar")[0];
let volumebarwrapper  = document.getElementsByClassName("volume-bar-wrapper")[0];
let volumenbar  = document.getElementsByClassName("volume-bar")[0];


let footer  = document.getElementsByClassName("footer")[0];
let container  = document.getElementsByClassName("container")[0];
let progressWrapper = document.getElementsByClassName("progress-bar-wrapper")[0];
let progressBar  = document.getElementsByClassName("progress-bar")[0];
let mainbar = document.getElementsByClassName("mainbar")[0];
let extra = document.getElementsByClassName('extra-div')[0];
let extraa = document.getElementsByClassName('extra-div')[1];
let extraaa = document.getElementsByClassName('extra-div')[2];
let play = document.getElementsByClassName("playy")[0];
let pause = document.getElementsByClassName("pausee")[0];
let footer_music_name = document.getElementsByClassName("song-name-footer")[0];
let footer_singer_name = document.getElementsByClassName("singer-name-footer")[0];
let footer_image = document.getElementsByClassName("footer-image")[0];
let footer_audio = document.getElementsByTagName("audio")[0];
let shuffle = document.getElementsByClassName("shuffle")[0];
let repeat = document.getElementsByClassName("repeat")[0];
let repeat_one = document.getElementsByClassName("repeat_one")[0];
let music_number;
let music_singer;
let minimum_music_songs;
let maximum_music_songs;



function music_list_show(button){
button.nextElementSibling.classList.toggle("show");
button.lastElementChild.classList.toggle("rotate");



if(mainbar.classList.contains("mainbarShow") && sidebar.classList.contains("sidebarShow")){
    sidebar.classList.toggle("sidebarShow");
    mainbar.classList.toggle("mainbarShow");
   
}

}

function sidebar_show(thiss){
   sidebar.classList.toggle("sidebarShow");
   mainbar.classList.toggle("mainbarShow");
   thiss.classList.toggle("moveit");
   extra.classList.toggle('showitalso');
   extraa.classList.toggle('showitalsoo');
   extraaa.classList.toggle('showitalsooo');

   

   let elements = document.getElementsByClassName('show');
   let elementss = document.getElementsByClassName('rotate');

   Array.from(elements).forEach(elem => {
    elem.classList.toggle("show");
   })


   Array.from(elementss).forEach(elemt => {
    elemt.classList.toggle("rotate");
   })
   
}
function musiconof(){
play.classList.toggle("displayit");
pause.classList.toggle("displayit");
playthemusic(footer_audio);
// playtheaudio(music_value)

// if(play.classList.contains("displayit")){
//     audio.play()
// }
// else if (pause.classList.contains("displayit")){
//     audio.pause()
// }
}

// function playmusic(thiss){

//     let image = document.getElementsByClassName("footer-image")[0];
//     let image_name = thiss.firstElementChild.classList.value;
//     music_value = image_name;
//     let music_name = thiss.firstElementChild.firstElementChild.textContent;
//     let singer_name = thiss.parentElement.previousElementSibling.children[1].textContent;
//     let footer_music_name = document.getElementsByClassName("song-name-footer")[0];
//     let footer_singer_name = document.getElementsByClassName("singer-name-footer")[0];
//     footer_music_name.innerText = music_name;
//     footer_singer_name.innerText = singer_name;
//     image.src = `${[image_name]}.jpg`;
//     play.classList.remove("displayit");
//     pause.classList.add("displayit");

//     audio = document.getElementsByTagName("audio")[0];
// audio.src = `${[image_name]}.mp3`;
//     musiconof();

// }
function change_music_icon(){
 
 if (shuffle.classList.contains("doNotDisplayIt") && !repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
    shuffle.classList.remove("doNotDisplayIt");
    repeat.classList.add("doNotDisplayIt");
}

else if (!shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
    shuffle.classList.add("doNotDisplayIt");
    repeat_one.classList.remove("doNotDisplayIt");
}


else if (shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && !repeat_one.classList.contains("doNotDisplayIt")){
    repeat.classList.remove("doNotDisplayIt");
    repeat_one.classList.add("doNotDisplayIt");
}

// else if (!shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && !repeat_one.classList.contains("doNotDisplayIt")){
//     shuffle.classList.remove("donotDisplayIt");
//     repeat_one.classList.add("doNotDisplayIt");
//     repeat.classList.add("doNotDisplayIt");
}
let rowHeight = ['50px', '1fr'];
let isFooterVisible = false;
function showFooterr(){
if(isFooterVisible == false){
rowHeight.push('120px');
container.style.gridTemplateRows = rowHeight.join('');
footer.style.display = 'block';
isFooterVisible = true;
}
}

function playmusic(thiss){
    maximum_music_songs = thiss.getAttribute("maximum_music_songs");
    minimum_music_songs = thiss.getAttribute("minimum_music_songs");
    maximum_music_songs = Number.parseInt(maximum_music_songs);
    minimum_music_songs = Number.parseInt(minimum_music_songs);


    let current_music = document.getElementsByClassName("music_playing");
    Array.from(current_music).forEach(current=>{
        current.classList.remove("music_playing")
    })
    thiss.classList.add("music_playing");
    play.classList.add("displayit");
    pause.classList.remove("displayit");
    music_number = thiss.firstElementChild.classList.value;
    music_singer = thiss.firstElementChild.lastElementChild.textContent;
    music_number = Number.parseInt(music_number);
    let music_name = allMusic[music_number].name;
    let music_artist = allMusic[music_number].artist;
    let music_image = allMusic[music_number].img;
    let music_source = allMusic[music_number].src;


    const downloadLink = `<a href="" download="music-${music_number+1}.mp3"><span><i class="fa-solid fa-cloud-arrow-down downloadsong"></i></span></a>`;
    
    const downloadIcon = document.querySelector('.downloadsong').parentElement.parentElement;
    downloadIcon.outerHTML = downloadLink;

   showFooterr();

    insertTheValues(music_name,music_artist,music_image,music_source);

}

function insertTheValues(music_name,music_artist,music_image,music_source){
footer_music_name.innerText = music_name;
footer_singer_name.innerText = music_artist;
footer_image.src = `${music_image}.jpg`;
footer_audio.src = `${music_source}.mp3`;
playthemusic(footer_audio)
}

function playthemusic(footer_audio){
    if(play.classList.contains("displayit")){
        footer_audio.play()
    }
    else if (pause.classList.contains("displayit")){
        footer_audio.pause();
}
}


function playnextsong(){

    if(shuffle.classList.contains("doNotDisplayIt") && !repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
        let current_music = document.getElementsByClassName("music_playing");
        Array.from(current_music).forEach(current=>{
            current.classList.remove("music_playing")
        })
    
        if(music_number>=minimum_music_songs && music_number<maximum_music_songs){
            music_number = music_number+1;
            runit(music_number);
        }
    
        else if (music_number>=maximum_music_songs){
            music_number = minimum_music_songs;
            runit(music_number);
        }
            
            function runit(music_number){
    
                let music_name = allMusic[music_number].name;
                let music_artist = allMusic[music_number].artist;
                let music_image = allMusic[music_number].img;
                let music_source = allMusic[music_number].src;
                
                insertTheValues(music_name,music_artist,music_image,music_source);
            }
    
            let current_song = document.getElementsByClassName([music_number])[0];
            current_song.parentElement.classList.add("music_playing");
    
    }

    else if(!shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
        music_number = Math.floor(Math.random() * (maximum_music_songs - minimum_music_songs + 1)) + minimum_music_songs;
        console.log(music_number);
        let current_music = document.getElementsByClassName("music_playing");
        Array.from(current_music).forEach(current=>{
            current.classList.remove("music_playing")
        })

        
        runit(music_number);

            function runit(music_number){
    
                let music_name = allMusic[music_number].name;
                let music_artist = allMusic[music_number].artist;
                let music_image = allMusic[music_number].img;
                let music_source = allMusic[music_number].src;
                
                insertTheValues(music_name,music_artist,music_image,music_source);
            }
    
            let current_song = document.getElementsByClassName([music_number])[0];
            current_song.parentElement.classList.add("music_playing");

    }


    else if(shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && !repeat_one.classList.contains("doNotDisplayIt")){
        runit(music_number);

        function runit(music_number){

            let music_name = allMusic[music_number].name;
            let music_artist = allMusic[music_number].artist;
            let music_image = allMusic[music_number].img;
            let music_source = allMusic[music_number].src;
            
            insertTheValues(music_name,music_artist,music_image,music_source);
        }

        let current_song = document.getElementsByClassName([music_number])[0];
        current_song.parentElement.classList.add("music_playing");

    }
    

   
}

function playprevioussong(){

    if(shuffle.classList.contains("doNotDisplayIt") && !repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
        let current_music = document.getElementsByClassName("music_playing");
        Array.from(current_music).forEach(current=>{
            current.classList.remove("music_playing")
        })
    
        if(music_number>minimum_music_songs && music_number<=maximum_music_songs){
            music_number = music_number-1;
            runit(music_number);
        }
    
        else if (music_number<=minimum_music_songs){
            music_number = maximum_music_songs;
            runit(music_number);
        }
            
            function runit(music_number){
    
                let music_name = allMusic[music_number].name;
                let music_artist = allMusic[music_number].artist;
                let music_image = allMusic[music_number].img;
                let music_source = allMusic[music_number].src;
                
                insertTheValues(music_name,music_artist,music_image,music_source);
            }
    
            let current_song = document.getElementsByClassName([music_number])[0];
            current_song.parentElement.classList.add("music_playing");
    }


    
    else if(!shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && repeat_one.classList.contains("doNotDisplayIt")){
        music_number = Math.floor(Math.random()*maximum_music_songs+1)
        console.log(music_number);
        let current_music = document.getElementsByClassName("music_playing");
        Array.from(current_music).forEach(current=>{
            current.classList.remove("music_playing")
        })

        
        runit(music_number);

            function runit(music_number){
    
                let music_name = allMusic[music_number].name;
                let music_artist = allMusic[music_number].artist;
                let music_image = allMusic[music_number].img;
                let music_source = allMusic[music_number].src;
                
                insertTheValues(music_name,music_artist,music_image,music_source);
            }
    
            let current_song = document.getElementsByClassName([music_number])[0];
            current_song.parentElement.classList.add("music_playing");

    }


    else if(shuffle.classList.contains("doNotDisplayIt") && repeat.classList.contains("doNotDisplayIt") && !repeat_one.classList.contains("doNotDisplayIt")){
        runit(music_number);

        function runit(music_number){

            let music_name = allMusic[music_number].name;
            let music_artist = allMusic[music_number].artist;
            let music_image = allMusic[music_number].img;
            let music_source = allMusic[music_number].src;
            
            insertTheValues(music_name,music_artist,music_image,music_source);
        }

        let current_song = document.getElementsByClassName([music_number])[0];
        current_song.parentElement.classList.add("music_playing");

    }

}

footer_audio.addEventListener("timeupdate", function(e) {
let starting_Duration = document.getElementsByClassName("first-child")[0];
let current_time = e.target.currentTime;
let total_duration = e.target.duration;
let progressWidth = (current_time/total_duration) * 100;
progressWrapper.style.width = `${progressWidth}%`;

let total_min_first = Math.floor(current_time/60)
let total_sec_first  = Math.floor(current_time%60)
if(total_sec_first<10){
    total_sec_first = `0${total_sec_first}`
}
starting_Duration.innerText = `${total_min_first}:${total_sec_first}`

})

footer_audio.addEventListener("loadeddata" , function(e){
let ending_Duration = document.getElementsByClassName("last-child")[0];

let Audioduration = footer_audio.duration;

let total_min = Math.floor(Audioduration/60);
let total_sec = Math.floor(Audioduration%60);

if(total_sec<10){
 total_sec = `0${total_sec}`;
}
ending_Duration.innerText = `${total_min}:${total_sec}`;



})


progressBar.addEventListener("click", function(e){
    let progressBarWidth = progressBar.clientWidth;
    let clickedPosition = e.offsetX;
    let songDuration = footer_audio.duration;

    footer_audio.currentTime = (clickedPosition/progressBarWidth)*songDuration;


}) 

footer_audio.addEventListener("ended", function() {
    playnextsong();
});

function showfullhamburg(){
    let unorderlisthamburg = document.getElementsByClassName("unorder-list-hamburg")[0];
    unorderlisthamburg.classList.toggle("full-screen-hamburg");
}

volumenbar.addEventListener("click", function(e){
    let volumenbarWidth = volumenbar.clientWidth;
    let clickedPosition = e.offsetX;
    volumebarwrapper.style.width = `${(clickedPosition/volumenbarWidth)*100}%`;
    footer_audio.volume = clickedPosition / volumenbarWidth;

    // footer_audio.volume = volumebarwrapper/100;

    // footer_audio.currentTime = (clickedPosition/progressBarWidth)*songDuration;

}) 
