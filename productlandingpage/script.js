const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop-150;
    const sectionId = current.getAttribute('id');
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.add('active');
    } else {
      document
        .querySelector('a[href*="' + sectionId + '"]')
        .classList.remove('active');
    }
  });
});


var audio=document.getElementById("mujic");
    function play() {
        audio.play()
    }
    function pause() {
        audio.pause()
    }
    function load() {
        audio.load()
    }

    var typed = new Typed("#multi",{
        strings: ["Game Info:"],typeSpeed: 50,backSpeed: 50,loop:true
      })

      var typed = new Typed("#multi2",{
        strings: ["Buy Games ↓"],typeSpeed: 50,backSpeed: 50,loop:true
      })

      var typed = new Typed("#multi3",{
        strings: ["TANMAY SAMANTA 💀"],typeSpeed: 80,backSpeed: 80,loop:true
      })