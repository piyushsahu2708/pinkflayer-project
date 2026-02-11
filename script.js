function timelineOne(){
    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            end:"bottom -250%"
        }
    });
    
    t1
        .to("#circle img", {
            scale: 1,
            rotate: "-180deg",
            duration: 1,
            stagger: 0.1,
            ease: "power1.inOut"
        }, "hello")
    
        .to("#cimage img", {
            scale: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power1.inOut"
        }, "hello")
    
        .to("#centering h5", {
            opacity: 0,
            stagger: 0.1,
            ease: "power1.inOut"
        }, "hello")
    
        .to("#circle", {
            scale: 0.6,
            ease: "power1.inOut"
        }, "hello")
    
        
        .to("#overlay>h1", {
            bottom:"-50%",
            ease: "power1.inOut"
        }, "hello")
        .to("#gola",{
            top:"50%",
            scale:2,
            ease:Power1
        },"hello")
        .to("#gola",{
            opacity:0,
            duration:2.2,
           ease:Power1
        },"hello2")
        .to("#smcircle", {
            scale: 0,
            duration:2,
            ease: "power1.inOut"
        }, "hello2")
    
        .to("#circle", {
            scale: 0,
            duration:2,
            ease: "power1.inOut"
        }, "hello2")
        
        .to("#overlay>h1#pf",{
        rotate:0,
        bottom:"2%",
        ease:Power1
    },"hello2")
     .to("#pinkpart",{
        top:0,
        duration:5,
        ease: Power1
     },"hello2")
     .to("#pinkpart",{
        top:"-100%",
        duration:3,
        ease: Power1
     })
}
function timelineTwo(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            scrub: 1,
            start: "top top",
            end: "bottom-=250",  // Corrected
            pin: true
        }
    });

    tl2
    .to(".circle", {
        top: "60%",
        stagger: 0.3,  // Corrected spelling
        ease: "power1"  // Corrected ease syntax
    })
    
    .to(".circle", {
        left: "50%",
        stagger: 0.1,  // Corrected spelling
        ease: "power1"  // Corrected ease syntax
    })
    .to(".pi", {
        scale: 10,
        stagger: 0.3,  // Increased stagger for a slower effect
        duration: 8,   // Added duration to slow down the scaling
        ease: "power1"
    })
    .to(".pi", {
        background: "linear-gradient(to right,#d5a7b4,#B4AAD5)",
        duration: 5,   // Added duration to slow down the background change
        ease: "power1"
    })
    .to("#stop h1", {
        left: "-150%",
        duration: 20,  // Increased duration for a slower movement
        ease: "power1"
    }, "a")
    

   
  .to("#sbtm #one", {
        
    duration:3,
    opacity:1,
      ease: "power1"  
  },"a")
  .to("#sbtm #two", {
         delay:1,
  duration:3,
    opacity:0,
      ease: "power1"  
  },"a")
}

// Call the function to activate the animation



timelineOne();

timelineTwo();
