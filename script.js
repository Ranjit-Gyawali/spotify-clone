const pills = document.querySelectorAll(".active");

pills.forEach(pill => {
    pill.addEventListener('click', () => {

        pills.forEach(p => p.classList.remove('active'));

        pills.forEach(p => p.classList.add('active'));
    });

});

let songIndex=0;


let masterPlay=document.getElementById('masterPlay');
let masterPlay1=document.getElementById('masterPlay1');
let range=document.getElementById('range');
let gif=document.getElementById('gif');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let songBtn=document.querySelectorAll('fa-solid fa-circle-play');




let songs=[
    {songName:"Ordinary",songPath:"Songs/Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"A Thousand Years",songPath:"Songs/A Thousand Years - Christina Perri.mp3",coverPath:"ordinary.jpeg"},
    {songName:"deathbed",songPath:"Songs/deathbed.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Lose Yourself",songPath:"Songs/Eminem - Lose Yourself [HD].mp3",coverPath:"ordinary.jpeg"},
    {songName:"The Real Slim Shady ",songPath:"Songs/Eminem The Real Slim Shady Official Video Clean Version.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Victory Lap",songPath:"Songs/Fred Again, Skepta, PlaqueBoyMax - Victory Lap (Clean Radio Edit).mp3",coverPath:"ordinary.jpeg"},
    {songName:"Humble",songPath:"Songs/Kendrik Lamar - Humble.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Sorry",songPath:"Songs/SpotiDown.App - Sorry - Justin Bieber.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Starboy",songPath:"Songs/SpotiDown.App - Starboy - The Weeknd.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Dandelions",songPath:"Songs/SpotiDownloader.com - Dandelions - Ruth B..mp3",coverPath:"ordinary.jpeg"},
]
// audioElement.play();

let audioElement = new Audio(songs[songIndex].songPath);

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
   
})


audioElement.addEventListener('timeupdate',()=>{
    //update to seekbar 
    progress=(parseFloat(audioElement.currentTime/audioElement.duration)*100);
    range.value=progress;
})

range.addEventListener('input',()=>{
    audioElement.currentTime=range.value * audioElement.duration/100;
})

function loadSong(index) {
    audioElement.src = songs[index].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
}


prev.addEventListener('click', () => {
    songIndex -= 1;
    if(songIndex < 0) {
        songIndex = songs.length - 1; // loop to last song
    }

    audioElement.src = songs[songIndex].songPath; // use songPath, not filePath
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

    // Optional: update song name display if you have an element for it
    // document.getElementById('songName').innerText = songs[songIndex].songName;
});

next.addEventListener('click', () => {
    songIndex += 1;
    if(songIndex >= songs.length) {
        songIndex = 0; // loop to first song
    }

    audioElement.src = songs[songIndex].songPath;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;

    // Optional: update song name display
    // document.getElementById('songName').innerText = songs[songIndex].songName;
});




   





