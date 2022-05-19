fetch('https://fakestoreapi.com/products')
            .then(res=>res.json()).then((datas)=>{
               let row=document.querySelector(".row") 
              
                
                datas.forEach(data => {

               if (data.id>0&data.id<11) {
                   console.log(datas);
let photos=document.createElement("div")
let image=document.createElement("img")
let product=document.createElement("div")
let category=document.createElement("div")
let title=document.createElement("p")
let star_icon=document.createElement("div")
let  icon_span1=document.createElement("span")
let icon_span2=document.createElement("span")
let price =document.createElement("div")
let Model=document.createElement("ul")
let Brand=document.createElement("li")
let Markas=document.createElement("span")
let hr=document.createElement("hr")
let form=document.createElement("form")
let label=document.createElement("label")
let input1=document.createElement("input")
let input2=document.createElement("input")
let button=document.createElement("button")

               //Classlarin adlandirilmasi 
               photos.className="photos col-lg-6"
              image.className="image"
              product.className="product col-lg-6"
              category.className="category"
              title.className="title"
              star_icon.className="star-icon"
              icon_span1.className="icon-span1"
              icon_span2.className="icon-span2"
              

               }
                });
            })
