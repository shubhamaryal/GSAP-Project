function page1Animation(){
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button",{
            y:-30,
            opacity:0,
            delay:0.5,
            duration:0.7,
            stagger:0.2,
    })

    tl.from(".center-part1",{
        x:-200,
        opacity:0,
        duration:0.5,
    })

    tl.from(".center-part1 p",{
        x:-100,
        opacity:0,
        duration:0.4,
    })

    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.4,
    },"-=0.3")

    tl.from(".center-part2 img",{
        opacity:0,
        duration:0.5,
        x:200,
    },"-=0.7") //timeline lai delay dina yesari diney

    tl.from(".section1bottom img",{
        opacity:0,
        y:30,
        stagger:0.15,
        duration:0.6,
    })
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top 0%",
            scrub:2,
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5,
    })
    
    tl2.from(".elem.line1.left",{
        opacity:0,
        x:-300,
        duration:1,
    },"up")
    
    tl2.from(".elem.line1.right",{
        opacity:0,
        x:300,
        duration:1,
    },"up")
    
    tl2.from(".elem.line2.left",{
        opacity:0,
        x:-300,
        duration:1,
    },"down")
    
    tl2.from(".elem.line2.right",{
        opacity:0,
        x:300,
        duration:1,
    },"down") /* yesari same name deko le timeline bypass grxa ani paxi sngai animate hunxa */
}

page1Animation();
page2Animation();