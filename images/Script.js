// Array of photo data (update with your images and captions)
const photos = [
    {
        src: "images/photo1.jpg",
        caption: "Dad teaching me to ride a bike, 2010. He never let go!"
    },
    {
        src: "images/photo2.jpg",
        caption: "Our epic fishing trip—caught nothing but laughs."
    },
    {
        src: "images/photo3.jpg",
        caption: "Dad’s famous BBQ skills. Nobody grills like him!"
    },
    // Add more photos here...
];

const gallery = document.querySelector('.gallery');

// Generate photo cards dynamically
photos.forEach(photo => {
    const photoCard = document.createElement('div');
    photoCard.className = 'photo-card';
    
    photoCard.innerHTML = `
        <img src="${photo.src}" alt="Memory with dad">
        <div class="caption">${photo.caption}</div>
    `;
    
    gallery.appendChild(photoCard);
});

// Easter egg: Console message for your dad!
console.log("%c❤️ Happy Father's Day, Dad! ❤️", "color: #e74c3c; font-size: 18px;");