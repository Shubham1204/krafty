window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#search").addEventListener("keyup", searchProduct);
    document.querySelector("#cart").addEventListener("click", cart);
    document.querySelector("#projectfile").addEventListener("click", projectfile);
    document.querySelector("#chart").addEventListener("click", chart);
    document.querySelector("#poster").addEventListener("click", poster);
    document.querySelector("#model").addEventListener("click", model);
    document.querySelector("#fancydress").addEventListener("click", fancydress);
    document.querySelector("#chocolate").addEventListener("click", chocolate);
    document.querySelector("#computer").addEventListener("click", computer);
    document.querySelector("#more").addEventListener("click", more);
    displayAllProducts();
    displaybanner();
    
}

function cart(){
    if (window.localStorage) {
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('cartList', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/cart.html";
    
}

// function home(){
    // window.location="index.html";
// }

function chart(){
    if (window.localStorage) {
        var json = JSON.stringify("chart");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function projectfile(){
    if (window.localStorage) {
        var json = JSON.stringify("projectfile");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function poster(){
    if (window.localStorage) {
        var json = JSON.stringify("poster");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function model(){
    if (window.localStorage) {
        var json = JSON.stringify("model");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function fancydress(){
    if (window.localStorage) {
        var json = JSON.stringify("fancydress");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function chocolate(){
    if (window.localStorage) {
        var json = JSON.stringify("chocolate");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function computer(){
    if (window.localStorage) {
        var json = JSON.stringify("computer");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function more(){
    if (window.localStorage) {
        var json = JSON.stringify("more");
        localStorage.setItem('category', json);
    } else {
        alert("Localstorage not supported");
    }
    window.location="../krafty/assets/pages/category.html";
    
}

function searchProduct(){
    var toSearch = event.srcElement.value;
    productArray = productArray.filter(function(obj){
        return obj.name.toLowerCase().includes(toSearch.toLowerCase());
    });
    displayAllProducts();
}

function displayAllProducts(){
    var ul = document.querySelector("#main-product");
    ul.innerHTML="";
     for(var i=0;i<11;i++){
        if(productArray[i].arrival=="new"){
        
        var li = document.createElement("li");
        li.className = "product pointer";    
        var div1 = document.createElement("div");
        div1.className = "img";
        var a1 = document.createElement("a");
        // a1.href="cart.html";
        // a1.addEventListener("click",viewProduct);
        var img = document.createElement("img");
        img.src=productArray[i].images[0];
        img.alt=productArray[i].id;
        
        li.title = productArray[i].id;
        // console.log("id : "+img.alt);
        a1.appendChild(img);
        var div2  =document.createElement("div");
        div2.className="view";
        // li.className="pointer";   
        var span1 = document.createElement("span");
        span1.innerHTML="Quick View";
        div2.appendChild(span1);
        div1.appendChild(a1);
        div1.appendChild(div2);

        var div3 = document.createElement("div");
        div3.className="desc";
        var h4 = document.createElement("h4");
        var a2 = document.createElement("a");
        a2.href="#";
        a2.innerHTML=productArray[i].name;
        var p = document.createElement("p");
        p.innerHTML="₹"+productArray[i].discountprice;
        var span2 = document.createElement("span");
        span2.innerHTML="₹"+productArray[i].price;
        if(span2.innerHTML=="₹undefined"){
            span2.innerHTML="";
        }else if(span2.innerHTML=="₹0"){
            span2.innerHTML="";
        }
        p.appendChild(span2);
        h4.appendChild(a2);
        h4.appendChild(p);
        div3.appendChild(h4);

        var cart_btn = document.createElement("button");
        cart_btn.className="btn";
        cart_btn.innerHTML="Add to Cart";
        
        
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(cart_btn);
        ul.appendChild(li);
        // cart_btn.baseURI="../pages/cart.html";
        cart_btn.addEventListener("click", addtoCart);
        div1.addEventListener("click",viewProduct);    
    }
}

}

function viewProduct(){
    var id = event.srcElement.parentElement.title;
    // console.log(productArray[id]);
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].id == id) {
            obj.viewItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].images,productArray[i].condition,productArray[i].arrival,productArray[i].seller,productArray[i].deliverycharge);
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            if (window.localStorage) {
                var json = JSON.stringify(productArray[i].id);
                localStorage.setItem('product', json);
            } else {
                alert("Localstorage not supported");
            }
            window.location="../krafty/assets/pages/product.html";
            
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
            obj.addItem(productArray[i].category,productArray[i].id, productArray[i].name,productArray[i].price,productArray[i].discountprice,productArray[i].images,productArray[i].condition,productArray[i].arrival,productArray[i].seller,productArray[i].deliverycharge);
            window.alert("Product added!!!");
            // console.log(productArray[i].category+" "+productArray[i].id+" "+ productArray[i].name+" "+productArray[i].price+" "+productArray[i].discountprice+" "+productArray[i].image);
            break
        }
    }
    
    var div = document.querySelector("#cart-counter");
    var h6 = document.createElement("h6");
    h6.innerHTML=obj.itemList.length;
    div.appendChild(h6);
    // addtoCart.href="../pages/cart.html";
    // location.href="../pages/cart.html";
    
    // console.log(id);
    // console.log(id.innerHTML);
    // displayCart()
    // if (window.localStorage) {
    //     var json = JSON.stringify(obj.itemList);
    //     localStorage.setItem('cartList', json);
    // } else {
    //     alert("Localstorage not supported");
    // }
    // window.location="../elite/assets/pages/cart.html";
    // // displayCart()
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
    h2.innerHTML=componentsArray[i].category;
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
    // div.className="width:500%";
    }
}