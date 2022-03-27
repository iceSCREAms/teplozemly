const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {

        let menuBtn = document.querySelector('.menu__icon');
        let menu = document.querySelector('.nav');

        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');

        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


    });
};