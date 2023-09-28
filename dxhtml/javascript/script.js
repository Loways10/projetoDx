const imageContainer = document.querySelectorAll('.image-container');

imageContainer.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.opacity = '1'; 
    });

    item.addEventListener('mouseleave', () => {
        item.style.opacity = '0.8'; 
    });
});