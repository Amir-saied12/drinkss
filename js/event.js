let secGallery = document.getElementById("sec_gallery")
let secSbs = document.getElementById("sec_sbs")
let secBg = document.getElementById("sec_bg")
let secFooter = document.getElementById("sec_footer")
let secHeader = document.getElementById("header")
let secEvent = document.getElementById("event")
let secBeer = document.getElementById("beer")

let container = [];

async function api() {
    const dataApi = await fetch('../event.json');
    let details = await dataApi.json();
    container.push(details)
    console.log(container)
    displaygallrey()
    displaysbs()
    displayfooter()
    displayheader()
    displayEvent()
    displayBeer()
}
api()

function displaygallrey() {
    let gallery = ""
    for (let i = 0; i < container.length; i++) {
        gallery += `<div class="container-fluid">
        <div class="row">
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][0][0].img_1}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][0][0].img_2}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][0][0].img_3}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][0][0].img_4}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][0][0].img_5}" alt="sora">
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
};
function displaysbs() {
    let sbs = ""
    for (let i = 0; i < container.length; i++) {
       sbs +=`      <div class="container">
       <div class="row align-items-end">
         <div class="col-lg-6 col-md-6">
           <span class="text-start">${container[i][1][0].span_sbs}</span>
           <h2>${container[i][1][0].h2_sbs}</h2>
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
};
function displayfooter() {
    let footer = ""
    for (let i = 0; i < container.length; i++) {
        footer +=`    <div class="container">
        <div class="row align-items-baseline justify-content-evenly">
          <div class="logo">
            <img src="${container[i][2][0].logo}" alt="logo w-100">
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][2][0].h2_1}</h2>
              <span>${container[i][2][0].span_1}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][2][1].h2_2}</h2>
              <span>${container[i][2][1].span_2}</span>
            </address>
          </div>
          <div class="col-lg-4 col-md-4">
            <address class="text-center">
              <h2>${container[i][2][2].h2_3}</h2>
              <h2><span>${container[i][2][2].span_3}</span></h2>
            </address>
          </div>
          <p class="copyrights">
          ${container[i][2][3].copy}
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
};
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
                <a class="nav-link" href="../index.html">${container[i][3][0].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">${container[i][3][0].li_2}</a>
              </li>
              <li class="hov nav-item position-relative">
                <a class="nav-link" href="#">${container[i][3][0].li_3}</a>
                <ul class="dropp">
                  <li><a class="nav-link" href="./event.html">Events</a></li>
                  <li><a class="nav-link" href="./event.html">Events Details</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./menu.html">${container[i][3][0].li_4}</a>
              </li>
            </ul>
            <div class="logo">
              <a href="#"><img src="${container[i][3][0].logo}" alt="logo"></a>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0 text-uppercase align-items-center">
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][3][1].li_1}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][3][1].li_2}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">${container[i][3][1].li_3}</a>
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
};
function displayEvent() {
    let event = ""
    for (let i = 0; i < container.length; i++) {
        event +=`<div class="container">
        <div class="row text-center justify-content-center align-content-center">
            <div class="col-lg-3">
                <h2>${container[i][4][0].h2}</h2>
                <p class="text-center"><a href="./index.html" class="border-end px-2">${container[i][4][0].p_1}</a> <a href="./about.html" aria-disabled="true" class="px-2">${container[i][4][0].p_12}</a></p>
            </div>
        </div>
    </div>`
    }
    secEvent.innerHTML = event
};
function displayBeer() {
    let beer = ""
    for (let i = 0; i < container.length; i++) {
        beer +=`<div class="container">
        <div class="row justify-content-center">
            <h2><span>${container[i][5][0].h2_span}</span></h2>
            <h2>${container[i][5][0].h2}</h2>
            <div class="col-lg-10 col-md-8 col-md-6">
                <p class="text-center">${container[i][5][0].p}</p>
            </div>
            <div class="col-lg-12 col-md-10 col-md-8">
                <div class="card border-0">
                    <div class="img-event overflow-hidden">
                        <img src="${container[i][5][1].img}" alt="sora">
                    </div>
                    <div class="card-body">
                        <h3><a href="#"><span class="text-start">${container[i][5][1].h3_a}</span></a></h3>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="pragraph">
                                    <p>${container[i][5][1].p}</p>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <ul class="d-flex justify-content-around">
                                    <li>${container[i][5][1].li_1}</li>
                                    <li>${container[i][5][1].li_2}</li>
                                    <li>${container[i][5][1].li_3}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-body d-flex justify-content-between align-items-baseline">
                        <div class="rtl w-50">
                            <p>${container[i][5][2].p}</p>
                            <a href="#">${container[i][5][2].a}</a>
                        </div>
                        <div class="ltr text-end w-25">
                            <i class="fa fa-heart">${container[i][5][2].i_1}</i>
                            <i class="fa fa-share-alt">${container[i][5][2].i}</i>
                            <button>${container[i][5][2].btn}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul class=" bottom-list row justify-content-between">
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][3].li_1}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][3].li_2}</a></li>
        <li class="w-25"><a href="#" class="border-end border-white">${container[i][5][3].li_3}</a></li>
        <li class="w-25"><a href="#">${container[i][5][3].li_4}</a></li>
      </ul>`
    }
    secBeer.innerHTML = beer
}