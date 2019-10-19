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

    // var div = document.querySelector("#carousel-slides");
    // for(var i=0;i<productArray.length;i++){
    //     if(productArray[i].id == my_product){
    //         for(var j=0;j<productArray[i].images.length;j++){
    //             var div1 = document.createElement("div");
    //             // li.data-slide-to =j; 
    //             div1.className="item";
    //             var  img = document.createElement("img");
    //             // if(productArray[i].images[1]){
    //             //     div1.className="active";
    //             //     img.src = productArray[i].image;
    //             //     div1.appendChild(img);
    //             // }
    //             // li.data-slide-to=j;
    //             // var  img = document.createElement("img");
    //             // else{
    //             img.src=productArray[i].images[j];
    //             img.alt=productArray[i].id;
    //             div1.appendChild(img);
    //             // }
    //             div.appendChild(div1);
    //         }
    //     }
    // }

 
    
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
            desc.innerHTML="lorem isgvhjbkngfhcvfbmnvjkb bv jhgbdfh gvjhdfsvchjgesdfhvgdsfv";
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

            var a7 = document.createElement("a");
            a7.className="btn mt-5";
            a7.innerHTML="Buy Now";

            div.appendChild(h4);
            div.appendChild(a7);
            
        }
    }
}

function viewProduct(){
    var id = event.srcElement.parentElement.title;
    // console.log(productArray[id]);
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.viewItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].image);
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            break
        }
    }

    // window.location,href="../pages/cart.html;  
    
    // console.log(id);   
}

function addtoCart(){
    var id = event.srcElement.parentElement.title;
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.addItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].image,productArray[i].condition,productArray[i].arrival,productArray[i].seller,productArray[i].deliverycharge);
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            break
        }
    }
    
    var div = document.querySelector("#cart-counter");
    var h6 = document.createElement("h6");
    h6.innerHTML=obj.itemList.length;
    div.appendChild(h6);
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