
fetch("korteles.json")
.then(res => res.json())
.then(data => {
    // console.log(data);

    let page = document.querySelector("#page");
    data.korteles.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")


        let image_div = document.createElement("div");
        // image_div.style.position = relative;
        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        // image.style.position = "relative";
        let p0 = document.createElement("p");
        let tekstas0 = document.createTextNode("Duration: " + element.trukme + " hours");
        p0.append(tekstas0);
        p0.classList.add("ago");

        image_div.append(image,p0);



        let title_div = document.createElement("div");
        title_div.style.display = "flex";
        title_div.style.alignItems = "center";

        // title_div.style.marginTop = "20px";
        let ikona = document.createElement("img");
        ikona.classList.add("ikona");
        ikona.setAttribute("src", element.ikona);
        let title = document.createElement("h2");
        let tekstas = document.createTextNode(element.pavadinimas);
        title.append(tekstas);
        title_div.append(ikona,title);



        let info = document.createElement("div");
        info.style.marginBottom = "20px";
        info.style.marginLeft = "20px";

        let channel = document.createElement("span");
        let tekstas1 = document.createTextNode("Channel:" + element.channel + " ");
        channel.append(tekstas1);

        let views = document.createElement("span");
        let tekstas2 = document.createTextNode("Views:" + element.views + " ");
        views.append(tekstas2);

        let ago = document.createElement("span");
        let tekstas3 = document.createTextNode("Uploaded:" + element.ago + " hours ago");
        ago.append(tekstas3);

        let br = document.createElement("br");
        info.append(channel,br,views,ago);
        
        card.append(image_div,title_div,info);
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
