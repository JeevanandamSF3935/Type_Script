const galleryList : Array<Gallery>=[];
var iterator :number = 0;
var image,caption;
var imageArea,captionArea;
class Gallery{
    URL:string;
    Caption:string;
    constructor(url:string,caption:string){
        this.URL=url;
        this.Caption=caption;
    }
}
galleryList.push(new Gallery('images/Bike.png','Speed Thrills but kills'));
galleryList.push(new Gallery('images/Networking.png','Network connects us'));
galleryList.push(new Gallery('images/Crown.png','King needs crown, but crown needs no one'));
galleryList.push(new Gallery('images/forest.png','Forest is collection of nature'));
galleryList.push(new Gallery('images/Ritual.png','Ritual is always worship'));
galleryList.push(new Gallery('images/river.png','Running over more hurdles and struggles'));
galleryList.push(new Gallery('images/waterfall.png','Fall from height and serve water'));
galleryList.push(new Gallery('images/tiger.png','National animal of India'));
galleryList.push(new Gallery('images/panda.png','Laziest animal'));
galleryList.push(new Gallery('images/cat.png','Cute as kitty'));
function PageLoad(){
    image = document.createElement("img");
    image.src = galleryList[iterator].URL;
    image.width=400;
    image.height=350;
    imageArea = document.getElementById("contentimg");
    imageArea?.appendChild(image);

    caption = document.createElement("h4");
    caption.textContent = galleryList[iterator].Caption;
    caption.style.backgroundColor='black';
    caption.style.color='white';
    captionArea = document.getElementById("captionarea");
    captionArea?.appendChild(caption);
}

function OnLeftClick(){
    if(iterator==0){
        iterator=galleryList.length-1;
        image.src = galleryList[iterator].URL;
        caption.textContent = galleryList[iterator].Caption;
    }
    else{
        --iterator;
        image.src = galleryList[iterator].URL;
        caption.textContent = galleryList[iterator].Caption;
    }
}

function OnRightClick(){
    if(iterator==galleryList.length-1){
        iterator=0;
        image.src = galleryList[iterator].URL;
        caption.textContent = galleryList[iterator].Caption;
    }
    else{
        ++iterator;
        image.src = galleryList[iterator].URL;
        caption.textContent = galleryList[iterator].Caption;
    }
}
