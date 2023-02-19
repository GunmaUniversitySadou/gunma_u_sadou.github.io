'use strict';
{
    function callback(entrirs, obs) {
        entrirs.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
        });
    };

    const observer = new IntersectionObserver(callback, {
        threshold: .3,
    });
    const animates = document.querySelectorAll('.animate');
    animates.forEach(animate => {
        observer.observe(animate);
    });
    
}