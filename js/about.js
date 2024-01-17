let secEvent = document.getElementById("sec_event")
let secGallery = document.getElementById("sec_gallery")
let secSbs = document.getElementById("sec_sbs")
let secBg = document.getElementById("sec_bg")
let secFooter = document.getElementById("sec_footer")
let secHeader = document.getElementById("header")
let secAbout = document.getElementById("about")
let secMidd = document.getElementById("midd")

let container = [];

async function api() {
    const dataApi = await fetch('../about.json');
    let details = await dataApi.json();
    container.push(details)
    displayevent()
    displaygallrey()
    displaysbs()
    displayfooter()
    displayheader()
    displayAbout()
    dislayMidd()
    console.log(container)
};
api()

function displayevent() {
    let event = ""
    for (let i = 0; i < container.length; i++) {
        event +=`<div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="px-0 col-lg-7">
              <p><strong>${container[i][0][0].p_event_1}</strong></p>
            <h2><span>${container[i][0][0].h2_event_1}</span></h2>
            <p>${container[i][0][0].p_event_2}</p>
          </div>
          <div class="text-center links">
            <a href="#" class="px-3 border-end">${container[i][0][1].a_event_1}</a>
            <a href="#" class="mx-1">${container[i][0][1].a_event_2}</a>
          </div>
        </div>
      </div>`
    }
    secEvent.innerHTML = event
};
function displaygallrey() {
    let gallery = ""
    for (let i = 0; i < container.length; i++) {
        gallery += `<div class="container-fluid">
        <div class="row">
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][1][0].img_1}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][1][0].img_2}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][1][0].img_3}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][1][0].img_4}" alt="sora">
            <div class="overley d-flex justify-content-center align-items-center">
              <div class="rott">
                <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
                <a href="#"><span><i class="fa-solid fa-link"></i></span></a>
              </div>
            </div>
          </div>
          <div class="image-bottom overflow-hidden p-0">
            <img src="${container[i][1][0].img_5}" alt="sora">
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
           <span class="text-start">${container[i][2][0].span_sbs}</span>
           <h2>${container[i][2][0].h2_sbs}</h2>
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
                <a class="nav-link" href="../index.html">${container[i][4][0].li_1}</a>
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
};
function displayAbout() {
    let about = ""
    for (let i = 0; i < container.length; i++) {
        about +=`        <div class="container">
        <div class="row text-center justify-content-center align-content-center">
            <div class="col-lg-3">
                <h2>${container[i][5][0].h2}</h2>
                <p class="text-center"><a href="./index.html" class="border-end px-2">${container[i][5][0].p_1}</a> <a href="./about.html" aria-disabled="true" class="px-2">${container[i][5][0].p_12}</a></p>
            </div>
        </div>
    </div>`
    }
    secAbout.innerHTML = about
};
function dislayMidd() {
    let midd = ""
    for (let i = 0; i < container.length; i++) {
        midd += `        <div class="container">
        <div class="row text-center justify-content-center">
            <h2><span>${container[i][6][0].h2_span}</span></h2>
            <h2>${container[i][6][0].h2}</h2>
            <div class="col-lg-10 col-md-9 col-sm-8">
                <p class="text-center">
                ${container[i][6][0].p}
                </p>
                <div class="img_2">
                    <img src="${container[i][6][0].img}" alt="about">
                </div>
            </div>
            <div class="cards">
                <h2><span>${container[i][6][1].h2_span}</span></h2>
                <h2>${container[i][6][1].h2}</h2>
                <div class="row beer">
                      <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="card border-0">
                          <div class="img-beer overflow-hidden">
                            <img src="${container[i][6][1].img_1}" alt="">
                          </div>
                          <div class="card-body">
                            <h2><a href="#">${container[i][6][1].h2_card}</a></h2>
                            <p>${container[i][6][1].p_card}</p>
                          </div>
                          <div class="bottom-jocker">
                            <ul class="row justify-content-evenly align-items-center py-2 px-4">
                              <li class="w-25"><a href="#">${container[i][6][1].li_1}<i class="fa fa-heart"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_2}<i class="fa fa-comments"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_3}<i class="fa fa-share-alt"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="card border-0">
                          <div class="img-beer overflow-hidden">
                            <img src="./img/tab-img-2.jpg" alt="">
                          </div>
                          <div class="card-body">
                            <h2><a href="#">${container[i][6][1].h2_card}</a></h2>
                            <p>${container[i][6][1].p_card}</p>
                          </div>
                          <div class="bottom-jocker">
                            <ul class="row justify-content-evenly align-items-center py-2 px-4">
                              <li class="w-25"><a href="#">${container[i][6][1].li_1}<i class="fa fa-heart"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_2}<i class="fa fa-comments"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_2}<i class="fa fa-share-alt"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="card border-0">
                          <div class="img-beer overflow-hidden">
                            <img src="${container[i][6][1].img_1}" alt="">
                          </div>
                          <div class="card-body">
                            <h2><a href="#">${container[i][6][1].h2_card}</a></h2>
                            <p>${container[i][6][1].p_card}</p>
                          </div>
                          <div class="bottom-jocker">
                            <ul class="row justify-content-evenly align-items-center py-2 px-4">
                              <li class="w-25"><a href="#">${container[i][6][1].li_1}<i class="fa fa-heart"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_1}<i class="fa fa-comments"></i></a></li>
                              <li class="w-25"><a href="#">${container[i][6][1].li_1}<i class="fa fa-share-alt"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>`
    }
    secMidd.innerHTML = midd
};