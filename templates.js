const htmlsOld = [
    `<div class="left" id="left">
    <div class="title">
        <h5>Redefining</h5>
        <h1>UX Strategy</h1>
        <h5 class="float-end">and UI design</h5>
    </div>
    <div class="title2">
        <h1>ABC 456</h1>
        <p>We are the best <br> web development company <br> in the world</p>
        <br><br>
        <a href="#">View Case Study ⟶ </a>
        <a href="#" class="float-end">SKIP</a>
    </div>
</div>
<div class="right" id="right">
    <img src="images/pizza_box.png" id="pizza_box">
    <img src="images/dominos-bread.png" id="dominos-bread">
    <img src="images/domi-img1.png" id="domi-img1">
    <img src="images/domi-img2.png" id="domi-img2">
    <img src="images/dominos-bread1.png" id="dominos-bread1">
</div>`,
    `<div class="left" id="left">
    <div class="nasa-title">
        <h5>Powered by advance</h5>
        <img src="images/nasa-mobile-app.png" id="nasa-mobile-app">
        <h5 class="float-end">algorithms</h5>
    </div>
    <div class="title2">
        <h1>ABC 345</h1>
        <p> We are the best <br> web development company <br> in the world</p>
        <br><br>
        <a href="#">Coming Soon </a>
        <a href="#" class="float-end">SKIP</a>
    </div>
</div>
<div class="right" id="right">
    <img src="images/nasa-fitness-tracking-mobile-app.png" id="nasa-fitness-tracking-mobile-app">
    <img src="images/measure-total-body-weight-through-fitness-app.png"
        id="measure-total-body-weight-through-fitness-app">
</div>`,
    `<div class="left" id="left">
<div class="title downloads">
    <h1>25M+ Downloads</h1>
    <h5 class="float-end">an appstore & google playstore</h5>
</div>
<div class="title2">
    <img src="images/world-communication-awards-for-best-digital-experience.png" id="year">
    <h1>ABC 345</h1>
    <p>We are the best web development <br> company in the world</p>
    <br><br>
    <a href="#">Coming Soon </a>
    <a href="#" class="float-end">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/nexgtv-entertainment-mobile-app-development.png" id="nexgtv-entertainment-mobile-app-development">
<img src="images/nexgtv-mobile-app-ui-design.png" id="nexgtv-mobile-app-ui-design">
</div>`,
    `<div class="left" id="left">
<div class="title">
    <h5>The Next big</h5>
    <h1>Blockchain</h1>
    <h5 class="float-end">Revolution</h5>
</div>
<div class="title2">
    <h1>ABC 234</h1>
    <p>We are the best web development <br> company in the world</p>
    <br><br>
    <a href="#">Coming Soon </a>
    <a href="#" class="float-end">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/block1.png" id="block1">
<img src="images/block2.png" id="block2">
</div>`,
    `<div class="left" id="left">
<div class="title text-head">
    <h5>Text Headline</h5>
    <h1>Text Headline</h1>
    <h5 class="float-end">Footer Headline</h5>
</div>
<div class="title2">
    <h1>ABC 567</h1>
    <p>We are the best AR <br> development <br> company in the world</p>
    <br><br>
    <a href="#">View Case Study ⟶ </a>
    <a href="#" class="float-end">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/text1.png" id="text1">
<img src="images/text2.png" id="text2">
<img src="images/text3.png" id="text3">
<img src="images/text4.png" id="text4">
<img src="images/text5.png" id="text5">
</div>`,
    `<div class="left" id="left">
<div class="title text-head2">
    <h5>Developing ERP Solution For</h5>
    <h1>Text Headline</h1>
    <h5 class="float-end">in furniture industry</h5>
</div>
<div class="title2">
    <h1>ABC 678</h1>
    <p>Best since 2017 <br> We offer wide range of <br> web development and app development.</p>
    <br><br>
    <a href="#">View Case Study ⟶ </a>
    <a href="#" class="float-end">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/web.png" id="web">
</div>`,
    `<div class="left" id="left">
<div class="title asia">
    <h5>Biggest Classifields</h5>
    <h1>East Asia</h1>
    <h5 class="float-end">Countries</h5>
</div>
<div class="title2">
    <img src="images/year.png" id="year">
    <h1>ABC 23478</h1>
    <p>We are the best web development <br> company in the world</p>
    <br><br>
    <a href="#">Coming Soon </a>
    <a href="#" class="float-end">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/asia2.png" id="asia2">
<img src="images/asia1.png" id="asia1">
</div>`
]

const htmls = [
    `<div class="left" id="left">
    <div class="title d-md-none">
        <h5>Redefining</h5>
        <h1>UX Strategy</h1>
        <h5 class="float-end">and UI design</h5>
    </div>
    <div class="title2">
        <h1 class="d-md-none">ABC 456</h1>
        <h1 class="d-lg-none">ABC 3</h1>
        <p class="d-lg-none">This is the sample text for ABC 3</p>
        <p class="d-md-none">We are the best <br> web development company <br> in the world</p>
        <br><br class="d-md-none">
        <a href="#">View Case Study ⟶ </a>
        <a href="#" class="float-end d-md-none">SKIP</a>
    </div>
</div>
<div class="right" id="right">
    <img src="images/pizza_box.png" id="pizza_box">
    <img src="images/dominos-bread.png" id="dominos-bread">
    <img src="images/domi-img1.png" id="domi-img1">
    <img src="images/domi-img2.png" id="domi-img2">
    <img src="images/dominos-bread1.png" id="dominos-bread1">
</div>`,
`<div class="left" id="left">
<div class="nasa-title d-md-none">
    <h5>Powered by advance</h5>
    <img src="images/nasa-mobile-app.png" id="nasa-mobile-app">
    <h5 class="float-end">algorithms</h5>
</div>
<div class="title2">
    <h1 class="d-md-none">ABC 345</h1>
    <h1 class="d-lg-none">ABC 2</h1>
    <p class="d-lg-none"> This is sample text for ABC 2</p>
    <p class="d-md-none"> We are the best <br> web development company <br> in the world</p>
    <br><br class="d-md-none">
    <a href="#" class="d-lg-none"> CASE STUDY ⟶</a>
    <a href="#" class="anchor-button">Coming Soon </a>
    <a href="#" class="float-end d-md-none">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/nasa-fitness-tracking-mobile-app.png" id="nasa-fitness-tracking-mobile-app">
<img src="images/measure-total-body-weight-through-fitness-app.png"
    id="measure-total-body-weight-through-fitness-app">
</div>`,
`<div class="left" id="left">
<div class="title downloads d-md-none">
    <h1>25M+ Downloads</h1>
    <h5 class="float-end">an appstore & google playstore</h5>
</div>
<div class="title2">
    <img src="images/world-communication-awards-for-best-digital-experience.png" id="year">
    <h1 class="d-md-none">ABC 345</h1>
    <h1 class="d-lg-none">ABC 123</h1>
    <p class="d-lg-none">This is the sample text for ABC 123. This is the sample text for ABC 123</p>
    <p class="d-md-none">We are the best web development <br> company in the world</p>
    <br><br class="d-md-none">
<a calss="d-lg-none" href="#">View Case Study ⟶ </a>

    <a class="d-md-none" href="#">Coming Soon </a>
    <a href="#" class="float-end d-md-none">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/nexgtv-entertainment-mobile-app-development.png" id="nexgtv-entertainment-mobile-app-development">
<img src="images/nexgtv-mobile-app-ui-design.png" id="nexgtv-mobile-app-ui-design">
</div>`,
`<div class="left" id="left">
<div class="title d-md-none">
    <h5>The Next big</h5>
    <h1>Blockchain</h1>
    <h5 class="float-end">Revolution</h5>
</div>
<div class="title2">
    <h1 class="d-lg-none">ABC 1</h1>
    <h1 class="d-md-none">ABC 234</h1>
    <p class="d-lg-none">This is sample text for ABC 1</p>
    <p class="d-md-none">We are the best web development <br> company in the world</p>
    <br><br class="d-md-none">
    <a href="#" class="d-lg-none"> CASE STUDY ⟶</a>
    <a href="#" class="anchor-button" id="pink">Coming Soon </a>
    <a href="#" class="float-end d-md-none">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/block1.png" id="block1">
<img src="images/block2.png" id="block2">
</div>`,
`<div class="left" id="left">
<div class="title d-md-none text-head">
    <h5>Text Headline</h5>
    <h1>Text Headline</h1>
    <h5 class="float-end">Footer Headline</h5>
</div>
<div class="title2">
    <h1 class="d-lg-none">ABC 4</h1>
    <h1 class="d-md-none">ABC 567</h1>
    <p class="d-lg-none">This is a sample text for ABC 4.</p>
    <p class="d-md-none">We are the best AR <br> development <br> company in the world</p>
    <br><br class="d-md-none">
    <a href="#">View Case Study ⟶ </a>
    <a href="#" class="float-end d-md-none">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/text1.png" id="text1">
<img src="images/text2.png" id="text2">
<img src="images/text3.png" id="text3">
<img src="images/text4.png" id="text4">
<img src="images/text5.png" id="text5">
</div>`,
`<div class="left" id="left">
<div class="title d-md-none text-head2">
    <h5>Developing ERP Solution For</h5>
    <h1>Text Headline</h1>
    <h5 class="float-end">in furniture industry</h5>
</div>
<div class="title2">
    <h1 class="d-lg-none">ABC 4</h1>
    <h1 class="d-md-none">ABC 678</h1>
    <p class="d-lg-none">This is sample text for ABC4</p>
    <p class="d-md-none">Best since 2017 <br> We offer wide range of <br> web development and app development.</p>
    <br><br class="d-md-none">
    <a href="#">View Case Study ⟶ </a>
    <a href="#" class="float-end d-md-none ">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/web.png" id="web">
</div>`,
`<div class="left" id="left">
<div class="title d-md-none asia">
    <h5>Biggest Classifields</h5>
    <h1>East Asia</h1>
    <h5 class="float-end">Countries</h5>
</div>
<div class="title2">
    <img src="images/year.png" style="border: none;" id="year">
    <h1 class="d-lg-none">XYZ 123</h1>
    <h1 class="d-md-none">ABC 23478</h1>
    <p class="d-lg-none">This is the sample textfor XYZ 123</p>
    <p class="d-md-none">We are the best web development <br> company in the world</p>
    <br><br class="d-md-none">
<a href="#" class="d-lg-none">View Case Study ⟶ </a>
<a href="#" class="anchor-button" id="green" >Coming Soon </a>
    <a href="#" class="float-end d-md-none">SKIP</a>
</div>
</div>
<div class="right" id="right">
<img src="images/asia2.png"id="asia2">
<img src="images/asia1.png" id="asia1">
</div>`
]

const colorsLeft = [
    "#5e11a1",
    "#4d27cd",
    "#0e123a",
    "#16263b",
    "#10479a",
    "#012c91",
    "#00834c"
]

const colorsRight = [
    "#ccccce",
    "#170252",
    "#11133c",
    "#0c1118",
    "#3cc9c6",
    "#ccccce",
    "#009e5b"
]