let x = 1;
let menu = [];

let num = 5;
function menuObj(e, i) {
    this.item = e;
    this.image = i;
}

menu.push(
    new menuObj(
        "Pizza",
        "https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
    ),
    new menuObj(
        "Burger",
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg"
    ),
    new menuObj(
        "Cocacola",
        "https://wallpaperaccess.com/full/3410620.jpg"
    ),
    new menuObj(
        "Momos",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg"
    ),
    new menuObj(
        "French Fries",
        "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg"
    ),
    new menuObj(
        "Shakes",
        "https://www.cheetos.com/sites/cheetos.com/files/2021-07/ChocolateShake.jpg"
    )
);
console.log(menu);


function orderFood() {
    console.log(order);
    let status = "open";

    let mypromise = new Promise(function (resolve, reject) {
        let time = Math.random() * 8 * 1000;

        setTimeout(function () {
            if (status == "open") {
                let data = document.querySelector("#food").value;
                for (i = 0; i < menu.length; i++) {
                    if (menu[i].item == data) {

                        resolve(i);

                    }
                }
            } else {
                reject();
            }
        }, time);
    });

    mypromise.then(function (i) {

        console.log(`${i} is ready`);
        document.querySelector("#orderbox").innerHTML = `Order No. ${i + 1} is ready`;
        // document.querySelector("#orderbox").setAttribute("id","orderno")

        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = menu[i].image;

        let p = document.createElement("h1");
        p.innerText = menu[i].item;

        box.append(img, p);
        document.querySelector("#orderbox").append(box);
    });
}