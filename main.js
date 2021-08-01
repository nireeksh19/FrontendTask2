
let dots = 0;

(async function () {
    document.getElementById('container').innerHTML = htmls[0];
    if(window.innerWidth>768)
    animate()
    document.getElementById('mDots1').classList.add('mdotfill');
    document.getElementById('left').style.backgroundColor = colorsLeft[dots];
    document.getElementById('round-div').style.backgroundColor = colorsLeft[dots];
    document.getElementById('right').style.backgroundColor = colorsRight[dots];
    document.addEventListener('wheel', function (e) {
        if (e.deltaY > 0) {
            if (window.innerWidth > 768) {
                if(dots!=6)
                    animateRev();
                setTimeout(nextItem, 150)
            }
            else
                nextItem();
        }
        else {
            if (window.innerWidth > 768) {
                if(dots!=0)
                    animateRev();
                console.log("reversed")
                setTimeout(prevItem, 150)
            }
            else
                prevItem();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowDown' || e.key == "ArrowRight") nextItem();
        else if (e.key == 'ArrowUp' || e.key == "ArrowLeft") prevItem()
    });

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* right swipe */
                nextItem();
            } else {
                /* left swipe */
                prevItem();
            }
        } else {
            if (yDiff > 0) {
                /* down swipe */
            } else {
                /* up swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
})();



function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function nextItem() {
    const o = document.getElementById('Opaque_Ring');

    const x = parseInt(o.style.strokeDasharray.split()[0]) + 135;
    if (x < 947) {
        o.style.strokeDasharray = `${x} 1000`;
        dots += 1;
        mdotnext()
        document.getElementById('container').innerHTML = htmls[dots];
        document.getElementById('left').style.backgroundColor = colorsLeft[dots];
        document.getElementById('round-div').style.backgroundColor = colorsLeft[dots];
        if (window.innerWidth > 768)
            animate()
        document.getElementById('right').style.backgroundColor = colorsRight[dots];
        dotEle = document.getElementById("Dots" + `${dots == 0 ? '' : dots}`);
        dotEle.getElementsByTagName('path')[1].classList.add('opacity-1');
        dotEle.firstElementChild.firstElementChild.classList.add('dotfillin1');
    }
}

function prevItem() {
    const o = document.getElementById('Opaque_Ring');

    const x = parseInt(o.style.strokeDasharray.split()[0]) - 135;
    if (x > 0) {
        o.style.strokeDasharray = `${x} 1000`;
        dotEle = document.getElementById("Dots" + `${dots == 0 ? '' : dots}`);
        dotEle.getElementsByTagName('path')[1].classList.remove('opacity-1');
        dotEle.firstElementChild.firstElementChild.classList.remove('dotfillin1')
        mdotprev()
        dots -= 1;
        document.getElementById('container').innerHTML = htmls[dots];
        document.getElementById('left').style.backgroundColor = colorsLeft[dots];
        document.getElementById('round-div').style.backgroundColor = colorsLeft[dots];
        document.getElementById('right').style.backgroundColor = colorsRight[dots];
        if (window.innerWidth > 768)
            animate()
    }
}

function mdotnext() {
    let idNext = `mDots${dots + 1}`;
    let idPrev = `mDots${dots}`;
    document.getElementById(idNext).classList.add('mdotfill');
    document.getElementById(idPrev).classList.remove('mdotfill');
}

function mdotprev() {
    let idNext = `mDots${dots}`;
    let idPrev = `mDots${dots + 1}`;
    document.getElementById(idNext).classList.add('mdotfill');
    document.getElementById(idPrev).classList.remove('mdotfill');
}

function animate() {
    new TimelineMax()
        .add(TweenMax.from(".title2 p,.title2 a,.title2 h1,.title h5,.title h1,#nasa-mobile-app,.nasa-title h5", .4, { y: "-50%" }, { y: "0%", ease: Linear.easeNone }))
    new TimelineMax()
        .add(TweenMax.from("#text4,#text5,#text3,#asia1,#web,#block2,#nexgtv-entertainment-mobile-app-development,#measure-total-body-weight-through-fitness-app,#pizza_box,#domi-img1,#dominos-bread1", .5, { y: "100%" }, { y: "0%", ease: Linear.easeNone }))
    new TimelineMax()
        .add(TweenMax.from("#text1,#text2,#asia2,#block1,#nexgtv-mobile-app-ui-design,#nasa-fitness-tracking-mobile-app,#dominos-bread,#domi-img2", .5, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }))
    new TimelineMax()

}

function animateRev() {
    new TimelineMax()
        .add(TweenMax.to(".title2 p,.title2 a,.title2 h1,.title h5,.title h1,#nasa-mobile-app,.nasa-title h5", .2, { y: "50%" }, { y: "0%", ease: Linear.easeNone })); // in from top
    new TimelineMax()
        .add(TweenMax.to("#text4,#text5,#text3,#asia1,#web,#block2,#nexgtv-entertainment-mobile-app-development,#measure-total-body-weight-through-fitness-app,#pizza_box,#domi-img1,#dominos-bread1", .5, { y: "100%" }, { y: "0%", ease: Linear.easeNone }))
    new TimelineMax()
        .add(TweenMax.from("#text1,#text2,#asia2,#block1,#nexgtv-mobile-app-ui-design, #nasa-fitness-tracking-mobile-app,#dominos-bread,#domi-img2", .5, { y: "100%" }, { y: "0%", ease: Linear.easeNone }))
}

function turnOff() {
    gsap.fromTo("#box", {rotation: 0}, {rotation: 0, repeat: -1});
  }