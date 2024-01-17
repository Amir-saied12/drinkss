let secWelcome = document.getElementById("sec_welcome")
let secBeer = document.getElementById("sec_beer")
let secSlide = document.getElementById("sec_slide")
let secMiddle = document.getElementById("sec_middle")
let secEvent = document.getElementById("sec_event")
let secGallery = document.getElementById("sec_gallery")
let secSbs = document.getElementById("sec_sbs")
let secBg = document.getElementById("sec_bg")
let secFooter = document.getElementById("sec_footer")
let secHeader = document.getElementById("header")

let container = []

async function api() {
const dataApi = await fetch('../Home.json');
let details = await dataApi.json();
container.push(details)
displayWelcome()
displayBeer()
dislaySlide()
dislaymiddle()
displayevent()
displaygallrey()
displaysbs()
displayBg()
displayfooter()
displayheader()
console.log(container)
}
api()
function displayBg() {
    let bg = ""
    for (let i = 0; i < container.length; i++) {
        bg += `      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active p-0">
            <img src="${container[i][7][0].img_1}" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-flex flex-column align-items-center h-75">
              <p>${container[i][7][0].p_bg_1}</p>
              <span>${container[i][7][0].span_bg}</span>
              <h1>${container[i][7][0].h1_bg_1}<b>&amp;</b>${container[i][7][0].h1_bg_12}</h1>
              <p class="mo5talef">${container[i][7][0].p_bg_2}</p>
            </div>
          </div>
          <div class="carousel-item p-0">
            <img src="${container[i][7][0].img_2}" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-flex flex-column align-items-center h-75">
              <p>${container[i][7][0].p_bg_1}</p>
              <span>${container[i][7][0].span_bg}</span>
              <h1>${container[i][7][0].h1_bg_1}<b>&</b>Love</${container[i][7][0].h1_bg_12}>
              <p class="mo5talef">${container[i][7][0].p_bg_2}</p>
            </div>
          </div>
          <div class="carousel-item p-0">
            <img src="${container[i][7][0].img_3}" class="d-block w-100" alt="">
            <div class="carousel-caption d-none d-md-flex flex-column align-items-center h-75">
              <p>${container[i][7][0].p_bg_1}</p>
              <span>${container[i][7][0].span_bg}</span>
              <h1>${container[i][7][0].h1_bg_1}<b>&amp;</b>${container[i][7][0].h1_bg_12}</h1>
              <p class="mo5talef">${container[i][7][0].p_bg_2}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
    }
    secBg.innerHTML = bg
}
function displayWelcome() {
    let welCome = ""
    for (let i = 0; i < container.length; i++) {
        welCome +=`      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="text-wel">
              <span>${container[i][0][0].title_wel}</span>
              <h3>${container[i][0][0].title_h3_wel}</h3>
              <p>${container[i][0][0].title_p_wel}</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="img-wel">
              <img src="${container[i][0][0].title_img}" class="wow slideInDown" alt="">
            </div>
          </div>
        </div>
        <div class="row position-relative justify-content-between align-items-center">
          <span class="el7rkh my-3">Jz In Reality</span>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="text-side"> <strong class="text-end">${container[i][0][1].txt_2_wel}</strong>
              <p class="text-end">${container[i][0][1].txt_p_wel}</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="text-side text-start"> <strong class="text-start">${container[i][0][1].txt_2_mid}</strong>
              <p>${container[i][0][1].txt_mid_p}</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="text-side"> <strong class="text-end">${container[i][0][1].txt_2_mid2}</strong>
              <p class="text-end">${container[i][0][1].txt_mid2_p}</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="text-side text-start"> <strong class="text-start">${container[i][0][1].txt_2_end}</strong>
              <p>${container[i][0][1].txt_end_p}</p>
            </div>
          </div>
        </div>
      </div>`
        
    }
    secWelcome.innerHTML = welCome
}
function displayBeer() {
    let beer = ""
    for (let i = 0; i < container.length; i++) {
        beer +=`      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="card border-0">
              <div class="img-beer overflow-hidden">
                <img src="${container[i][1][0].img_beer}" alt="">
              </div>
              <div class="card-body">
                <h2><a href="#">${container[i][1][0].h2_card_beer}</a></h2>
                <p>${container[i][1][0].p_card_beer}</p>
              </div>
              <div class="bottom-jocker">
                <ul class="row justify-content-evenly align-items-center py-2 px-4">
                  <li class="w-25"><a href="#">${container[i][1][0].li_1_card}<i class="fa fa-heart"></i></a></li>
                  <li class="w-25"><a href="#">${container[i][1][0].li_2_card}<i class="fa fa-comments"></i></a></li>
                  <li class="w-25"><a href="#">${container[i][1][0].li_3_card}<i class="fa fa-share-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="bottle-beer"><img src="${container[i][1][1].img_2_beer}" alt=""></div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="card border-0">
              <div class="img-beer overflow-hidden">
                <img src="${container[i][1][0].img_2_beer}" alt="">
              </div>
              <div class="card-body">
                <h2><a href="#">${container[i][1][0].h2_card_beer}</a></h2>
                <p>${container[i][1][0].p_card_beer}</p>
              </div>
              <div class="bottom-jocker">
                <ul class="row justify-content-evenly align-items-center py-2 px-4">
                  <li class="w-25"><a href="#">${container[i][1][0].li_1_card}<i class="fa fa-heart"></i></a></li>
                  <li class="w-25"><a href="#">${container[i][1][0].li_2_card}<i class="fa fa-comments"></i></a></li>
                  <li class="w-25"><a href="#">${container[i][1][0].li_3_card}<i class="fa fa-share-alt"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class=" bottom-list row justify-content-between">
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][1][2].ul_0_bot}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][1][2].ul_1_bot}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][1][2].ul_2_bot}</a></li>
        <li class="w-25"><a href="#">${container[i][1][2].ul_3_bot}</a></li>
      </ul>`
    }
    secBeer.innerHTML = beer
}
function dislaySlide() {
    let slide = ""
    for (let i = 0; i < container.length; i++) {
        slide +=`      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4">
            <ul class="row ps-0 borderes flex-column pt-5">
              <li><a href="#" class="slide-bottom">${container[i][2][0].li_1_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][2][0].li_2_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][2][0].li_3_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][2][0].li_4_slide}</a></li>
              <li><a href="#" class="slide-bottom">${container[i][2][0].li_5_slide}</a></li>
            </ul>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-8">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="box pt-5 d-flex flex-column text-center">
                  <p class="title">${container[i][2][1].p_slide}</p>
                  <span class="text-start">${container[i][2][1].span_slide}</span>
                  <p class="mb-5 title2">${container[i][2][1].p_2_slide}</p>
                  <ul class="ps-0">
                    <li class="d-flex justify-content-between">
                      <div class="txt">
                        <span>${container[i][2][2].li_txt_span_1}</span>
                        <p class="title2">${container[i][2][2].li_txt_p_1}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][2][2].h5_cash}</h5>
                      </div>
                    </li>
                    <li class="d-flex my-5 justify-content-between">
                      <div class="txt">
                        <span>${container[i][2][2].li_txt_span_2}</span>
                        <p class="title2">${container[i][2][2].li_txt_p_2}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][2][2].h5_cash_2}</h5>
                      </div>
                    </li>
                    <li class="d-flex justify-content-between">
                      <div class="txt">
                        <span>${container[i][2][2].li_txt_span_3}</span>
                        <p class="title2">${container[i][2][2].li_txt_p_3}</p>
                      </div>
                      <div class="cash">
                        <h5>${container[i][2][2].h5_cash_3}</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="img-slide">
                  <img src="${container[i][2][3].img}" alt="">
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
            <span><b class="mt8yar">${container[i][3][0].mid_1}</b> <br> ${container[i][3][0].mid_12} <b class="mt8yar">&</b> ${container[i][3][0].mid_123} </span>
          </div>
          <div class="col-lg-3 col-md-3 col-md-4">
            <div class="icon-mid">
              <p>${container[i][3][1].p1_mid} &amp; ${container[i][3][1].p2_mid}</p>
                <span><i class="fa-solid fa-phone" style="color: #ffffff;"></i></span>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-md-4">
            <div class="icon-mid flex-row-reverse">
              <p>${container[i][3][2].p1_end} <br> ${container[i][3][2].p2_end}</p>
              <span><i class="fa-solid fa-flag" style="color: #ffffff;"></i></span>
            </div>
          </div>
        </div>
      </div>`
    }
    secMiddle.innerHTML = middle
}
function displayevent() {
    let event = ""
    for (let i = 0; i < container.length; i++) {
        event +=`<div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="px-0 col-lg-7">
              <p><strong>${container[i][4][0].p_event_1}</strong></p>
            <h2><span>${container[i][4][0].h2_event_1}</span></h2>
            <p>${container[i][4][0].p_event_2}</p>
          </div>
          <div class="text-center links">
            <a href="#" class="px-3 border-end">${container[i][4][1].a_event_1}</a>
            <a href="#" class="mx-1">${container[i][4][1].a_event_2}</a>
          </div>
        </div>
      </div>`
    }
    secEvent.innerHTML = event
}
function displaygallrey() {
    let gallery = ""
    for (let i = 0; i < container.length; i++) {
        gallery += `<div class="container-fluid">
        <div class="row">
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][5][0].img_1}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][5][0].img_2}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][5][0].img_3}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][5][0].img_4}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][5][0].img_5}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    secGallery.innerHTML = gallery
}
function displaysbs() {
    let sbs = ""
    for (let i = 0; i < container.length; i++) {
       sbs +=`      <div class="container">
       <div class="row align-items-end">
         <div class="col-lg-6 col-md-6">
           <span class="text-start">${container[i][6][0].span_sbs}</span>
           <h2>${container[i][6][0].h2_sbs}</h2>
         </div>
         <div class="col-lg-6 col-md-6">
           <form action="#">
             <input type="text" class="position-relative">
             <input type="submit" value="Subscribe">
           </form>
         </div>
       </div>
     </div>` 
    }
    secSbs.innerHTML = sbs
}
function displayfooter() {
    let footer = ""
    for (let i = 0; i < container.length; i++) {
        footer +=`    <div class="container">
        <div class="row align-items-baseline justify-content-evenly">
          <div class="logo">
            <img src="${container[i][8][0].logo}" alt="logo w-100">
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][8][0].h2_1}</h2>
              <span>${container[i][8][0].span_1}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][8][1].h2_2}</h2>
              <span>${container[i][8][1].span_2}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][8][2].h2_3}</h2>
              <h2><span>${container[i][8][2].span_3}</span></h2>
            </address>
          </div>
          <p class="copyrights">
          ${container[i][8][3].copy}
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
                <a class="nav-link" href="#">${container[i][9][0].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">${container[i][9][0].li_2}</a>
              </li>
              <li class="hov nav-item position-relative">
                <a class="nav-link" href="#">${container[i][9][0].li_3}</a>
                <ul class="dropp">
                  <li><a class="nav-link" href="./event.html">Events</a></li>
                  <li><a class="nav-link" href="./event.html">Events Details</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./menu.html">${container[i][9][0].li_4}</a>
              </li>
            </ul>
            <div class="logo">
              <a href="#"><img src="${container[i][9][0].logo}" alt="logo"></a>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][9][1].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][9][1].li_2}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][9][1].li_3}</a>
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