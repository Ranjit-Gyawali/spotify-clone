const pills = document.querySelectorAll(".active");

pills.forEach(pill => {
    pill.addEventListener('click', () => {

        pills.forEach(p => p.classList.remove('active'));

        pills.forEach(p => p.classList.add('active'));
    });

});

let songIndex=0;
let audioElement=new Audio('Alex warren - Ordinary.mp3');
let masterPlay=document.getElementById('masterPlay');
let masterPlay1=document.getElementById('masterPlay1');
let range=document.getElementById('range');



let songs=[
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
    {songName:"Ordinary",songPath:"Alex warren - Ordinary.mp3",coverPath:"ordinary.jpeg"},
]
// audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play');
        masterPlay.classList.add(' fa-solid fa-pause');
    }
   
})


range.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})


