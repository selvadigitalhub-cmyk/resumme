   // AOS
    AOS.init({duration:1000, once:true});

    // Navbar toggle
    const menuToggle=document.querySelector('.menu-toggle');
    const navLinks=document.querySelector('nav ul');
    menuToggle.addEventListener('click',()=>{navLinks.classList.toggle('active');});

    // Progress bars
    const progressBars=document.querySelectorAll('.progress');
    window.addEventListener('scroll',()=>{progressBars.forEach(bar=>{
      const rect=bar.getBoundingClientRect();
      if(rect.top<window.innerHeight){bar.style.width=bar.dataset.width;}
    });});

    // Back to top
    const backToTop=document.querySelector('.back-to-top');
    window.addEventListener('scroll',()=>{if(window.scrollY>400){backToTop.classList.add('show');}else{backToTop.classList.remove('show');}});

    // 🌙☀️ Theme toggle
    const themeBtn=document.getElementById('themeBtn');
    themeBtn.addEventListener('click',()=>{
      document.body.classList.toggle('dark-mode');
    });

    // Smooth scroll easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'});
      });
    });

    // Hero motion background (floating circles)
    gsap.to(".motion-bg span",{
      x:"random(-300,300)",y:"random(-200,200)",scale:"random(0.5,1.2)",
      duration:10,repeat:-1,yoyo:true,ease:"sine.inOut",stagger:2
    });