const mainDiv = document.querySelector(".maindiv");
console.log(mainDiv);

const secondaryDiv = mainDiv.querySelector(".secondarydiv");
console.log(secondaryDiv);

const sec1 = secondaryDiv.querySelector(".items:nth-of-type(1)");
console.log(sec1);
const sec2 = secondaryDiv.querySelector(".items:nth-of-type(2)");
console.log(sec2);
const sec3 = secondaryDiv.querySelector(".items:nth-of-type(3)");
console.log(sec3);
const sec4 = secondaryDiv.querySelector(".items:nth-of-type(4)");
console.log(sec4);
const sec5 = secondaryDiv.querySelector(".items:nth-of-type(5)");
console.log(sec5);

const text1 = mainDiv.querySelector(".textContent1");
console.log(text1);
const text2 = mainDiv.querySelector(".textContent2");
console.log(text2);
const text3 = mainDiv.querySelector(".textContent3");
console.log(text3);
const text4 = mainDiv.querySelector(".textContent4");
console.log(text4);
const text5 = mainDiv.querySelector(".textContent5");
console.log(text5);


const hide = (text) => {
    if(!text.classList.contains("hide")) {
    text.classList.add("hide")
    }
}

const show = (text) => {
    if(text.classList.contains("hide")) {
        text.classList.remove("hide")
        }
}


sec1.addEventListener("click", ()=> {
    console.log(sec1);
    console.log("intro");
    show(text1);
    hide(text2);
    hide(text3);
    hide(text4);
    hide(text5);
})
sec2.addEventListener("click", ()=> {
    console.log(sec2);
    console.log("HTML");
    hide(text1);
    show(text2);
    hide(text3);
    hide(text4);
    hide(text5);
})
sec3.addEventListener("click", ()=> {
    console.log("CSS");
    hide(text1);
    hide(text2);
    show(text3);
    hide(text4);
    hide(text5);
})
sec4.addEventListener("click", ()=> {
    console.log("JavaScript");
    hide(text1);
    hide(text2);
    hide(text3);
    show(text4);
    hide(text5);
})
sec5.addEventListener("click", ()=> {
    console.log("Animation");
    hide(text1);
    hide(text2);
    hide(text3);
    hide(text4);
    show(text5);
})



















/* class DisplayText{
    constructor(){
        this.texts = Array.from(document.querySelectorAll(".textContent"))
        this.secs = Array.from(document.querySelectorAll(".items"))
        this.showClickedSector();
    }

    hide(text) {
        if(!text.classList.contains("hide")) {
        text.classList.add("hide")
        }
    }

    show(text){
        if(text.classList.contains("hide")) {
            text.classList.remove("hide")
        }
    }


    //Qeky funksion shtohet ne konstruktor
    showClickedSector(){
        //KY funksion i krahason indekset e sektorve edhe t teksteve, edhe e bon SHOW tekstin me index tnjejt me sektorin me indeks tnjejt qe e ke kliku
        //Secili sektor ndegjohet per click, kur e klikon => secilit tekst i bon hide perveq tekstit qe ka index tnjejt me sektorin qe ke kliku
        
        //per secilin sektor ndegjo klik
        this.secs.forEach(sec => {
            sec.addEventListener("click", () => {
                //Per secilin tekst ren
                this.texts.forEach(text => {
                    //Nese indeksi i tekstit osht = me indeksin e secit
                    if(this.texts.indexOf(text) == this.secs.indexOf(sec)){
                        //Tregoje tekstin
                        show(text)
                    }
                    //Perndryshe
                    else {
                        //Mshefe tekstin
                        hide(text);
                    }
                })
            })
        })
    }

}

const display = new DisplayText()
display.showClickedSector() */