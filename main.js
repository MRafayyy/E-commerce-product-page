let addToCart_option = document.getElementsByClassName("addToCart-option")[0];
let cart_items = document.getElementsByClassName("cart-items")[0];
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let quantity = document.getElementById("quantity");
let full_image = document.getElementsByClassName("full-image")[0];
let absolute_full_image = document.getElementById("absolute-full-image");
let thumbnails = document.getElementsByClassName("thumbnails");
let section_2 = document.getElementsByClassName("section-2")[0];
let patty = document.getElementsByClassName("patty");
let hamburger = document.getElementsByClassName("hamburger")[0];
let side_bar = document.getElementsByClassName("side-bar")[0];
let main_container = document.getElementsByClassName("main-container")[0];
let close_icon = document.getElementsByClassName("close-icon")[0];
let slide_right_icon_container = document.getElementsByClassName("slide-right-icon-container")[0];
let slide_left_icon_container = document.getElementsByClassName("slide-left-icon-container")[0];
let cart = document.getElementById("cart");
let cart_box = document.getElementsByClassName("cart-box")[0];
let item_quantity = document.getElementById("item-quantity");
let item_price = document.getElementById("item-price");
let item_container = document.getElementsByClassName("item-container")[0];
let item_delete = document.getElementsByClassName("item-delete")[0];



let q = 0;
quantity.innerHTML = q

const x = () => {
    quantity.innerHTML = ++q;
}

const y = () => {
    if (q == 0) {
        return
    }
    quantity.innerHTML = --q;
}

plus.addEventListener('click', x)
minus.addEventListener('click', y)





addToCart_option.addEventListener('click', () => {
    if (q == 0) {
        return
    } else {

        cart_items.classList.remove("none");
    }

    cart_items.innerHTML = +cart_items.innerHTML + parseInt(q);
    // cart_items.innerHTML = cart_items.innerHTML * 1 + parseInt(q); both ways of avoiding string concatenation
    c.remove();
    item_container.classList.remove("none")
    item_quantity.innerHTML = cart_items.innerHTML;
    item_price.innerHTML = cart_items.innerHTML * 125.00;
    item_price.innerHTML = `$${item_price.innerHTML}`;


    q = 0;
    quantity.innerHTML = q;
})

// -------------------------------------





let clearSlideshow;

let count = 0;



slide_right_icon_container.addEventListener('click', () => {

    console.log("clearing this " + clearSlideshow)
    clearTimeout(clearSlideshow)
    count++;
    if (count > 4) {
        count = 1;
    }

    full_image.src = `images/image-product-${count}.jpg`;
    absolute_full_image.src = `images/image-product-${count}.jpg`;


    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".absolute-thumbnail-container img")[i].classList.remove("opacityAndBorder");
    }

    document.querySelectorAll(".absolute-thumbnail-container img")[count - 1].classList.add("opacityAndBorder");


})






slide_left_icon_container.addEventListener('click', () => {

    clearTimeout(clearSlideshow + 3)

    count--;
    if (count < 1) {
        count = 4;
    }
    full_image.src = `images/image-product-${count}.jpg`;
    absolute_full_image.src = `images/image-product-${count}.jpg`;

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".absolute-thumbnail-container img")[i].classList.remove("opacityAndBorder");
    }

    document.querySelectorAll(".absolute-thumbnail-container img")[count - 1].classList.add("opacityAndBorder");

})



// -------------------------------------

thumbnails[0].classList.add("opacityAndBorder");

let slideShowStoppedHere;
slideShowStoppedHere = 1;

Array.from(thumbnails).forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', () => {

        full_image.style.opacity = "0"
        clearSlideshow = setTimeout(() => {
            console.log(clearSlideshow)


            full_image.src = `images/image-product-${index + 1}.jpg`
            full_image.style.opacity = "1";

            for (let i = 0; i < 4; i++) {
                thumbnails[i].classList.remove("opacityAndBorder");
            }

            thumbnail.classList.add("opacityAndBorder");
            slideShowStoppedHere = index + 1;

        }, 200)

    })

})






full_image.addEventListener('click', open_full_image)

function open_full_image() {
    count = slideShowStoppedHere;
    section_2.classList.remove("none");
    absolute_full_image.src = `${full_image.getAttribute("src")}`;

    for (let i = 0; i < 4; i++) {
        document.querySelectorAll(".absolute-thumbnail-container img")[i].classList.remove("opacityAndBorder");
    }

    document.querySelectorAll(".absolute-thumbnail-container img")[count - 1].classList.add("opacityAndBorder");
    slide_left_icon_container.classList.remove("none");
    slide_right_icon_container.classList.remove("none");
}









let j = 0;
let delay = 4000;

window.onload = setInterval(() => {

    j++;

    if (j == 4) {
        j = 0;
    }

    thumbnails[j].click();

}, delay)






hamburger.addEventListener('click', () => {

    patty[0].classList.toggle("turn1")
    patty[1].classList.toggle("turn2")
    patty[2].classList.toggle("turn3")
    side_bar.classList.toggle("translate");
    main_container.classList.toggle("m-translate")
    // main_container.classList.toggle("relative");
    // main_container.classList.toggle("fixed");
document.body.classList.toggle("fixed");
    if (document.body.classList.contains("fixed")) {
        full_image.removeEventListener("click", open_full_image);
    }
    else {
        full_image.addEventListener('click', open_full_image)
    }

})








Array.from(document.querySelectorAll(".absolute-thumbnail-container img")).forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', () => {

        absolute_full_image.src = `images/image-product-${index + 1}.jpg`
        count = index + 1;

        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(".absolute-thumbnail-container img")[i].classList.remove("opacityAndBorder");
        }

        document.querySelectorAll(".absolute-thumbnail-container img")[count - 1].classList.add("opacityAndBorder");

    })

})




close_icon.addEventListener('click', () => {

    section_2.classList.add("none");
    slide_left_icon_container.classList.add("none");
    slide_right_icon_container.classList.add("none");
})








let c;
c = document.createElement("div");
let no_cart = "<div style='padding:3rem; text-align:center;' >no cart items to show </div>";



const open_cart = () => {
    cart_box.classList.toggle("none");
    if (cart_items.innerHTML != 0) {
        if (cart_box.classList.contains("none")) {

            item_container.classList.add("none");
        }
        else {
            item_container.classList.remove("none");
            c.remove();

        }
    }
    else

        // item_container.classList.toggle("none");
        // cart_box.insertAdjacentHTML("beforeend","<div style='padding:3rem'>no cart items to show </div>")
        cart_box.insertAdjacentElement("beforeend", c)
    c.innerHTML = no_cart;
    // item_container.innerHTML = "<div style='padding:3rem'>no cart items to show </div>"
}
cart.addEventListener('click', open_cart)
cart_items.addEventListener('click', open_cart)









item_delete.addEventListener('click', () => {

    if (cart_items.innerHTML == 1) {
        item_container.classList.add("none");
        cart_items.classList.add("none");
        cart_box.insertAdjacentElement("beforeend", c)
        c.innerHTML = no_cart;
    }
    cart_items.innerHTML--;
    item_quantity.innerHTML = cart_items.innerHTML;
    item_price.innerHTML = cart_items.innerHTML * 125.00;
    item_price.innerHTML = `$${item_price.innerHTML}`;
})