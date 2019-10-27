window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#search").addEventListener("keyup", searchProduct);
    document.querySelector("#cart").addEventListener("click", cart);
    document.querySelector("#header_home").addEventListener("click", header_home);
    document.querySelector("#home").addEventListener("click", home);
    document.querySelector("#chart").addEventListener("click", chart);
    document.querySelector("#poster").addEventListener("click", poster);
    document.querySelector("#model").addEventListener("click", model);
    document.querySelector("#projectfile").addEventListener("click", projectfile);
    document.querySelector("#fancydress").addEventListener("click", fancydress);
    document.querySelector("#chocolate").addEventListener("click", chocolate);
    document.querySelector("#computer").addEventListener("click", computer);
    document.querySelector("#more").addEventListener("click", more);
    loadProduct();
    // displayAllProducts();
    
}

function cart(){
    if (window.localStorage) {
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('cartList', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="cart.html";
    
}

function header_home(){
    window.location="../../index.html";
}

function home(){
    window.location="../../index.html";
}

function chart(){
    if (window.localStorage) {
        var json = JSON.stringify("chart");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function projectfile(){
    if (window.localStorage) {
        var json = JSON.stringify("projectfile");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function poster(){
    if (window.localStorage) {
        var json = JSON.stringify("poster");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function model(){
    if (window.localStorage) {
        var json = JSON.stringify("model");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function fancydress(){
    if (window.localStorage) {
        var json = JSON.stringify("fancydress");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function chocolate(){
    if (window.localStorage) {
        var json = JSON.stringify("chocolate");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function computer(){
    if (window.localStorage) {
        var json = JSON.stringify("computer");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

function more(){
    if (window.localStorage) {
        var json = JSON.stringify("more");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="category.html";
    
}

var my_product;

function loadProduct(){
    if (window.localStorage) {
        var data = localStorage.getItem('product');
        my_product  = JSON.parse(data);
            displayProducts();
            // displaybanner();
        // cart_total();
    }
}

function searchProduct(){
    var toSearch = event.srcElement.value;
    productArray = productArray.filter(function(obj){
        return obj.name.toLowerCase().includes(toSearch.toLowerCase());
    });
    displayProducts();
}

function displayProducts(){

  var divc = document.querySelector("#carousel");
  var ac1 = document.createElement("a");
  ac1.className="prev-arrow";
  divc.appendChild(ac1);
  for(var i=0;i<productArray.length;i++){
    if(productArray[i].id==my_product){
      for(var j=0;j<productArray[i].images.length;j++){
        var ac2 = document.createElement("a");
        var img = document.createElement("img");
        img.src=productArray[i].images[j];
        img.alt=productArray[i].id+"_"+(j+1);
        img.className="coverflow__image";
        ac2.appendChild(img);
        divc.appendChild(ac2);
      }
    }
  }
  var ac3 = document.createElement("a");
  ac3.className="next-arrow";
  divc.appendChild(ac3);
  carousel();
  console.log("carousel done");
    
    
    var div = document.querySelector("#product-detail");
    for(var i=0;i<productArray.length;i++){
        if(productArray[i].id == my_product){
            var h4 = document.createElement("h4");

            
            var a1 = document.createElement("a");
            a1.className="h1";
            a1.innerHTML=productArray[i].name;
            
            var p1 = document.createElement("p");
            p1.className="text-success";
            var a2 = document.createElement("a");
            a2.innerHTML="Special Price: ";
            var desc1 = document.createElement("desc");

            desc1.innerHTML="₹"+productArray[i].discountprice+" ";
            var span = document.createElement("span");
            span.innerHTML="₹"+productArray[i].price;
            p1.appendChild(a2);
            p1.appendChild(desc1);
            p1.appendChild(span);

            var p2 = document.createElement("p");
            var a3 = document.createElement("a");
            a3.innerHTML="Description: ";
            
            var desc = document.createElement("desc");
            desc.className="text-secondary";
            desc.innerHTML=productArray[i].desc;
            p2.appendChild(a3);
            p2.appendChild(desc);

            var p3 = document.createElement("p");
            var a4 = document.createElement("a");
            a4.innerHTML="Condition: ";
            var desc2 = document.createElement("desc");
            desc2.innerHTML=productArray[i].condition;
            p3.appendChild(a4);
            p3.appendChild(desc2);
            
            var p4 = document.createElement("p");
            var a5 = document.createElement("a");
            a5.innerHTML="Delivery Charges: ";
            var desc3 = document.createElement("desc");
            desc3.innerHTML=productArray[i].deliverycharge;
            p4.appendChild(a5);
            p4.appendChild(desc3);

            var p5 = document.createElement("p");
            var a6 = document.createElement("a");
            a6.innerHTML="Seller: ";
            var desc4 = document.createElement("desc");
            desc4.innerHTML=productArray[i].seller;
            p5.appendChild(a6);
            p5.appendChild(desc4);
            
            h4.appendChild(a1);
            h4.appendChild(p1);
            h4.appendChild(p2);
            h4.appendChild(p3);
            h4.appendChild(p4);
            h4.appendChild(p5);

            var buy_btn = document.createElement("button");
            buy_btn.className="btn mt-5";
            buy_btn.innerHTML="Buy Now";
            
            div.title=productArray[i].id;
            div.appendChild(h4);
            div.appendChild(buy_btn);
            
            buy_btn.addEventListener("click", addtoCart);
        }
    }
    console.log("product desc done "+buy_btn.className);
}

function addtoCart(){
  console.log("add to cart init");
    var id = event.srcElement.parentElement.title;
    // console.log(event.srcElement.parentElement);
    console.log(id);
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.addItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].images,productArray[i].condition,productArray[i].arrival,productArray[i].seller,productArray[i].deliverycharge);
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            window.alert("Product added!!!");
            break
        }
    }
    
    // var div = document.querySelector("#cart-counter");
    // var h6 = document.createElement("h6");
    // h6.innerHTML=obj.itemList.length;
    // div.appendChild(h6);
    console.log("added to cart");
    
}

function displaybanner(){
    var div = document.querySelector("#slide");
    for(var i=0;i<componentsArray.length;i++){
        console.log(componentsArray.length);
    var div1 = document.createElement("div");
    div1.className="slide";

    var div2 = document.createElement("div");
    div2.className="img";
    var img = document.createElement("img");
    img.src=componentsArray[i].image;
    img.alt=componentsArray[i].id;
    div2.appendChild(img);

    var div3 = document.createElement("div");
    div3.className="text-wrapper";
    var div4 = document.createElement("div");
    div4.className="inner-wrapper";
    var div5 = document.createElement("div");
    div5.className="text";
    var h2 = document.createElement("h2");
    h2.className="text-uppercase";
    h2.innerHTML=componentsArray[i].category+"'s ";
    var span = document.createElement("span");
    span.innerHTML=componentsArray[i].banner_name;
    h2.appendChild(span);
    var h4 = document.createElement("h4");
    h4.innerHTML=componentsArray[i].banner_desc;
    var a = document.createElement("a");
    a.className="btn my-2";
    // a.className="my-2";
    a.innerHTML="Shop Now";
    div5.appendChild(h2);
    div5.appendChild(h4);
    div5.appendChild(a);
    div4.appendChild(div5);
    div3.appendChild(div4);

    var div6 = document.createElement("div");   
    div6.className="overlay";

    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div6);

    div.appendChild(div1);
    }
}


function carousel(){
  var a = document.getElementsByTagName("a");
    var cfImg = document.getElementsByClassName("coverflow__image")
    
    var scaleI = 0;
    for (scaleI; scaleI < a.length; scaleI++) {
      if (scaleI === 3) {
        continue;
      } else {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
      }
    }
    
    function prevDef(e) {
      e.preventDefault();
    }
    
    function forScale(coverflowPos) {
      for (scaleI = 0; scaleI < a.length; scaleI++) {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
      }
      for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
        if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
          cfImg[scaleI].parentElement.style.cursor = "pointer";
          cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
        }
      }
    }
    //end added by Chase
    
    function setupCoverflow(coverflowContainer) {
      var coverflowContainers;
    
      if (typeof coverflowContainer !== "undefined") {
        if (Array.isArray(coverflowContainer)) {
          coverflowContainers = coverflowContainer;
        } else {
          coverflowContainers = [coverflowContainer];
        }
      } else {
        coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
      }
    
      coverflowContainers.forEach(function(containerElement) {
        var coverflow = {};
        var prevArrows, nextArrows;
    
        //capture coverflow elements
        coverflow.container = containerElement;
        coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
        coverflow.position = Math.floor(coverflow.images.length / 2) + 1;
    
        //set indicies on images
        coverflow.images.forEach(function(coverflowImage, i) {
          coverflowImage.dataset.coverflowIndex = i + 1;
        });
    
        //set initial position
        coverflow.container.dataset.coverflowPosition = coverflow.position;
    
        //get prev/next arrows
        prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
        nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));
    
        //add event handlers
        function setPrevImage() {
          coverflow.position = Math.max(1, coverflow.position - 1);
          coverflow.container.dataset.coverflowPosition = coverflow.position;
          //call the functin forScale added
          forScale(coverflow.position);
        }
    
        function setNextImage() {
          coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
          coverflow.container.dataset.coverflowPosition = coverflow.position;
          //call the function Chase added
          forScale(coverflow.position);
        }
    
        function jumpToImage(evt) {
          coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
          coverflow.container.dataset.coverflowPosition = coverflow.position;
          //start added by Chase
          setTimeout(function() {
            forScale(coverflow.position);
          }, 1);
          //end added by Chase
        }
    
        function onKeyPress(evt) {
          switch (evt.which) {
            case 37: //left arrow
              setPrevImage();
              break;
            case 39: //right arrow
              setNextImage();
              break;
          }
        }
        prevArrows.forEach(function(prevArrow) {
          prevArrow.addEventListener('click', setPrevImage);
        });
        nextArrows.forEach(function(nextArrow) {
          nextArrow.addEventListener('click', setNextImage);
        });
        coverflow.images.forEach(function(image) {
          image.addEventListener('click', jumpToImage);
        });
        window.addEventListener('keyup', onKeyPress);
      });
    }
    
    setupCoverflow();
    
}