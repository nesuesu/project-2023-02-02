
fetch("korteles.json")
.then(res => res.json())
.then(data => {
    // console.log(data);

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

    });

    let subscriptions = document.querySelector("#subscriptions");
    data.subscriptions.forEach(element => {

        let div = document.createElement("div");
        div.classList.add("container"); 
        div.style.gap = "5px";

        let ikona = document.createElement("img");
        ikona.setAttribute("src", element.ikona);
        ikona.classList.add("ikona");

        let sub = document.createElement("a");
        sub.setAttribute("href", "#");
        let tekstas = document.createTextNode(element.pavadinimas);
        sub.append(tekstas);

        div.append(ikona,sub);
        subscriptions.append(div);
        subscriptions.classList.add("slepti");

    })
})
