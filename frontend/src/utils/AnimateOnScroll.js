const AnimateOnScroll = () => {
    const reveal = document.querySelectorAll('.reveal');

    for(let i = 0 ; i < reveal.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveal[i].getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.add('active');
      }
    }
}

export default AnimateOnScroll