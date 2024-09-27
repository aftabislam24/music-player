let audio = new Audio();

let playList = document.getElementsByClassName("content");
let songs = document.getElementsByTagName("li");
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next");
let volume = document.getElementById("volume");
let songStatus = document.getElementById("songStatus")

currenIndex = 0 ;

play.addEventListener("click",()=>{
    audio.play()
    play.classList.add("hide");
    pause.classList.remove("hide");
})

pause.addEventListener("click",()=>{
    audio.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
})

prev.addEventListener("click",()=>{
    currenIndex = (currenIndex - 1 + songs.length) % songs.length;
    loadSong(currenIndex);
    playSong();
})

next.addEventListener("click",()=>{
    currenIndex = (currenIndex + 1) % songs.length;
    loadSong(currenIndex);
    playSong();
})

let loadSong = (index)=>{
    audio.src = songs[index].getAttribute("data-src");
}

let playSong = ()=>{
    audio.play();
}

Array.from(songs).forEach((item , index) => {
    item.addEventListener("click",()=>{
        currenIndex = index ;
        loadSong(currenIndex) ;
        playSong();
    })
});

loadSong(currenIndex);

let updateVolume = ()=>{
    audio.volume = volume.value;
}

audio.addEventListener("timeupdate",()=>{
    let songProgress=(audio.currentTime / audio.duration) * 100 ;
    
    songStatus.style.width=songProgress + "%";
    // songStatus.style.borderRadius="1rem"
})