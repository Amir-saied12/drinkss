let secSlide = document.getElementById("sec_slide")
let secMiddle = document.getElementById("sec_middle")
let secFooter = document.getElementById("sec_footer")
let secHeader = document.getElementById("header")
let secMenu = document.getElementById("menu")
let secBeers = document.getElementById("beers")

let container = []

async function api() {
const dataApi = await fetch('../menu.json');
let details = await dataApi.json();
container.push(details)
dislaySlide()
displayfooter()
displayheader()
dislaymiddle()
dislayMenu()
displayBeers()
console.log(container)
}
api()

function displayfooter() {
    let footer = ""
    for (let i = 0; i < container.length; i++) {
        footer +=`    <div class="container">
        <div class="row align-items-baseline justify-content-evenly">
          <div class="logo">
            <img src="${container[i][3][0].logo}" alt="logo w-100">
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][3][0].h2_1}</h2>
              <span>${container[i][3][0].span_1}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][3][1].h2_2}</h2>
              <span>${container[i][3][1].span_2}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][3][2].h2_3}</h2>
              <h2><span>${container[i][3][2].span_3}</span></h2>
            </address>
          </div>
          <p class="copyrights">
          ${container[i][3][3].copy}
          </p>
          <div class="spcial-footer">
            <ul class="p-0 row text-center justify-content-center">
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-glasses"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
            </ul>
          </div>
        </div>
      </div>`
    }
    secFooter.innerHTML = footer
}
function displayheader() {
    let header = ""
    for (let i = 0; i < container.length; i++) {
        header +=`    <nav class="navbar navbar-expand-lg p-0">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarText">
            <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">${container[i][4][0].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">${container[i][4][0].li_2}</a>
              </li>
              <li class="hov nav-item position-relative">
                <a class="nav-link" href="#">${container[i][4][0].li_3}</a>
                <ul class="dropp">
                  <li><a class="nav-link" href="./event.html">Events</a></li>
                  <li><a class="nav-link" href="./event.html">Events Details</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./menu.html">${container[i][4][0].li_4}</a>
              </li>
            </ul>
            <div class="logo">
              <a href="#"><img src="${container[i][4][0].logo}" alt="logo"></a>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][4][1].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][4][1].li_2}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][4][1].li_3}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span><i class="fa-solid fa-magnifying-glass" style="color: #c5a059;"></i></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span><i class="fa-solid fa-bars" style="color: #c5a059;"></i></span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
    }
    secHeader.innerHTML = header
}
function dislaySlide() {
    let slide = ""
    for (let i = 0; i < container.length; i++) {
        slide +=`      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4">
            <ul class="row ps-0 borderes flex-column pt-5">
              <li><a href="#" class="slide-bottom">${container[i][1][0].li_1_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][1][0].li_2_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][1][0].li_3_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][1][0].li_4_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][1][0].li_5_slide}</a></li>
            </ul>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-8">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="box pt-5 d-flex flex-column text-center">
                  <p class="title">${container[i][1][1].p_slide}</p>
                  <span class="text-start">${container[i][1][1].span_slide}</span>
                  <p class="mb-5 title2">${container[i][1][1].p_2_slide}</p>
                  <ul class="ps-0">
                    <li class="d-flex justify-content-between">
                      <div class="txt">
                        <span>${container[i][1][2].li_txt_span_1}</span>
                        <p class="title2">${container[i][1][2].li_txt_p_1}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][1][2].h5_cash}</h5>
                      </div>
                    </li>
                    <li class="d-flex my-5 justify-content-between">
                      <div class="txt">
                        <span>${container[i][1][2].li_txt_span_2}</span>
                        <p class="title2">${container[i][1][2].li_txt_p_2}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][1][2].h5_cash_2}</h5>
                      </div>
                    </li>
                    <li class="d-flex justify-content-between">
                      <div class="txt">
                        <span>${container[i][1][2].li_txt_span_3}</span>
                        <p class="title2">${container[i][1][2].li_txt_p_3}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][1][2].h5_cash_3}</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="img-slide">
                  <img src="${container[i][1][3].img}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    secSlide.innerHTML = slide
}
function dislaymiddle() {
    let middle = ""
    for (let i = 0; i < container.length; i++) {
        middle += `<div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-10  col-md-10 col-sm-12">
            <span><b class="mt8yar">${container[i][2][0].mid_1}</b> <br> ${container[i][2][0].mid_12} <b class="mt8yar">&</b> ${container[i][2][0].mid_123} </span>
          </div>
          <div class="col-lg-3 col-md-3 col-md-4">
            <div class="icon-mid">
              <p>${container[i][2][1].p1_mid} &amp; ${container[i][2][1].p2_mid}</p>
                <span><i class="fa-solid fa-phone" style="color: #ffffff;"></i></span>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-md-4">
            <div class="icon-mid flex-row-reverse">
              <p>${container[i][2][2].p1_end} <br> ${container[i][2][2].p2_end}</p>
              <span><i class="fa-solid fa-flag" style="color: #ffffff;"></i></span>
            </div>
          </div>
        </div>
      </div>`
    }
    secMiddle.innerHTML = middle
}
function dislayMenu() {
    let menu = ''
    for (let i = 0; i < container.length; i++) {
        menu +=`<div class="container">
        <div class="row text-center justify-content-center align-content-center">
            <div class="col-lg-3">
                <h2>${container[i][0][0].h2}</h2>
                <p class="text-center"><a href="./index.html" class="border-end px-2">${container[i][0][0].p_1}</a> <a href="./menu.html" aria-disabled="true" class="px-2">${container[i][0][0].p_12}</a></p>
            </div>
        </div>
    </div>`
    }
    secMenu.innerHTML = menu
}
function displayBeers() {
    let beers = ""
    for (let i = 0; i < container.length; i++) {
        beers += `        <div class="container">
        <div class="row justify-content-center">
            <h2><span>${container[i][5][0].h2_span}</span></h2>
            <h2>${container[i][5][0].h2}</h2>
            <img src="${container[i][5][0].img}" alt="">
        </div>
    </div>
    <ul class=" bottom-list row justify-content-between">
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][1].li_1}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][1].li_2}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][1].li_3}</a></li>
        <li class="w-25"><a href="#">${container[i][5][1].li_4}</a></li>
      </ul>`
    }
    secBeers.innerHTML = beers
}