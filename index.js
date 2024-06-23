
// Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    // the toggle method adds a new class to the element if it doesnt have it and removes the class if it has it. In order to add a new class to an element use the property classList, it gives all the classes the element has and also allows access to different methods like add remove and toggle. Below the class 'change' is being added to navbar and the menu icon
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

// using classList, you can add or remove a class without affecting any others the element may have. But if you assign className, it will wipe out any existing classes while adding the new one, or if you assign an empty string it will wipe out all of them. Assigning className can be a convenience for cases where you are certain no other classes will be used on the element but usually you would normally use the classList method exclusively
const playPause = ()=>{
    if(video.paused){
        video.play()
        btn.className = "far fa-pause-circle"
        video.style.opacity = '.7'
    }else{
        video.pause()
        btn.className = "far fa-play-circle"
        video.style.opacity = '.3'
    }

}
btn.addEventListener('click', ()=>{
    playPause()
})

video.addEventListener('timeupdate', ()=>{
    const barWidth = video.currentTime/video.duration
    bar.style.width =  `${barWidth * 100}%`
    if(video.ended){
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3' 

    }
})
// End of Section 2 Video
//Secion 3 Pricing Cards
// script.js

const images = [
    { src: 'image/pic10.jpg' },
    { src: 'image/pic5.jpg' },
    { src: 'image/pic8.jpg' },
    { src: 'image/pic5.jpg' }
];

let currentIndex = 0;
const totalImages = images.length;

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    if (!lightboxImg || !thumbnailContainer) {
        console.error('Lightbox image or thumbnail container element not found.');
        return;
    }

    lightboxImg.src = images[currentIndex].src;

    thumbnailContainer.innerHTML = '';

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => updateMainImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    const thumbnails = document.querySelectorAll('.thumbnail');
    if (thumbnails.length > 0) {
        thumbnails[currentIndex].classList.add('active-thumbnail');
    }
}

function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}

function openLightbox(event) {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach((img, index) => {
        if (img === event.target) {
            currentIndex = index;
        }
    });
    document.getElementById('lightbox').style.display = 'flex';
    updateLightboxImage();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

updateLightboxImage();

document.addEventListener('keydown', function (e) {
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});


//End of Secion 3 Pricing Cards 
