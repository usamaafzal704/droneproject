let drone = document.querySelector(".helicopter"),
    move = 15,
    blade = document.querySelector('#bladeMove'),
    tail = document.querySelector('.tail-rotor'),
    music = new Audio('./fly-sound.mp3'),
    body = document.querySelector('body');

window.addEventListener('load', ()=>{
    drone.style.position = 'absolute';
    drone.style.left = "245px";
    drone.style.bottom = "-100px";
});

window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'ArrowLeft':
        if(parseInt(drone.style.left) > -105 && parseInt(drone.style.bottom) > -100){
            drone.style.left = parseInt(drone.style.left) - move + "px";
        }
        drone.style.transform = "scaleX(1)" //left Face
        break;
        case 'ArrowRight':
            if(parseInt(drone.style.left) < 1170 && parseInt(drone.style.bottom) > -100){
                drone.style.left = parseInt(drone.style.left) + move + "px";
            }
            drone.style.transform = "scaleX(-1)" //Right Face
        break;
        case 'ArrowUp':
            if(parseInt(drone.style.bottom) < 510){
                drone.style.bottom = parseInt(drone.style.bottom) + move + "px";
            }
        break;
        case 'ArrowDown':
            if(parseInt(drone.style.bottom) > -70){
                drone.style.bottom = parseInt(drone.style.bottom) - move + "px";
            }
        break;
    }
});

let gravity = ()=>{
    if(drone.style.bottom > "-101px") {
        drone.style.bottom = parseInt(drone.style.bottom) - 5 + "px";
        blade.classList.add('bladeMove');
        tail.classList.add('tailMove');
        music.play();
        body.classList.add('bganim');
    }else{
        blade.classList.remove('bladeMove');
        tail.classList.remove('tailMove');
        music.pause();
        body.classList.remove('bganim');
    }
}   

    setInterval(gravity, 200);


// score


    

    
    const targetScore = 1000000; // 1 million
    const increment = 1; // Increase by 1 each time
    
    let currentScore = 0;
    
    
    
    function increaseScore() {
        if (currentScore < targetScore && drone.style.top < 100) {
            currentScore += increment;
        updateScoreDisplay();
        setTimeout(increaseScore, 50); // Adjust speed by changing the delay (in milliseconds)
    }
}

function updateScoreDisplay() {
    // Assuming you have an HTML element with an id of 'scoreDisplay'
    document.getElementById('scoreDisplay').innerHTML = currentScore.toLocaleString();
}

// Start increasing the score

    increaseScore();


