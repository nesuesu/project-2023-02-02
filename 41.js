
fetch("korteles.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    let page = document.querySelector("#page");
    data.korteles.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")

        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let title = document.createElement("h1");
        let tekstas = document.createTextNode(element.pavadinimas);
        title.append(tekstas);

        card.append(image,title);
        page.append(card);
    })
})
