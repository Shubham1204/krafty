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
    document.querySelector("submit").addEventListener("click",addproductdetail);
}

function addproductdetail(){  
    var name = document.querySelector("#inputName");
    var seller = document.querySelector("#inputSeller");
    var desc = document.querySelector("#inputDesc");
    var discPrice = document.querySelector("#inputDiscountedPrice");
    var price = document.querySelector("#inputPrice");
    var delivery = document.querySelector("#inputDelivery");
    var condition = document.querySelector("#inputCondition");
    var category = document.querySelector("#inputCategory");
    var image = document.querySelector("#inputImage");
    console.log(name+seller+desc+discPrice+price+delivery+condition+category+image);
}