var tl = gsap.timeline()

tl.from("nav", {
    opacity: 0,
    delay: 0.5
})

tl.from(".nav-part1, .nav-part2, .nav-part3", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.4
})

tl.from(".left", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger:0.3
})

tl.from(".left h1", {
    x: -100,
    opacity: 0,
    stagger:0.3
})

tl.from(".right img", {
    y: -100,
    opacity: 0,
})

gsap.from(".page2 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".page2 #box",
        scroller: "body",
        // scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 50%"
    }
})


