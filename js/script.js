document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    })

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    // Open modal on click
    videoButton.addEventListener('click', function() {
        modal.style.display = 'block';
        // replace src for URL
        videoPlayer.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=Xb96f4roDCuDUbhE';
    })

    // Close Modal on button click
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        videoPlayer.src = '';
    })

    // Close Modal on outer click
    window.addEventListener('click', function() {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    })

})

// Nav on scroll
window.addEventListener('scroll', function() {
    const navbar = this.document.querySelector('.navbar');

    if (this.window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})