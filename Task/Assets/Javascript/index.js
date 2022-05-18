fetch("https://jsonplaceholder.typicode.com/photos").then((resp =>
    resp.json()
)
).then((datas) => {
    let container = document.querySelector(".container");
    let row = document.createElement("div")
    let index=[]
    if (localStorage.getItem("index")!==null) {
        index=JSON.parse(localStorage.getItem("index"))
    }
    row.className = "row justify-content-between"
    datas.forEach(data => {
       
        if (data.id > 0 & data.id < 21) {

            let card = document.createElement("div")

            let image = document.createElement("img")
            let card_body = document.createElement("div")
            let card_title = document.createElement("h5")
            let card_text = document.createElement("p")
            let card_id = document.createElement("p")
            let tag = document.createElement("a");
            let h5=document.createElement("h5")

            card.className = "card"
            card.style.width = "18rem"
            image.src = data.url
            image.className = "card-img-top image"

            card_body.className = "card-body"
            card_title.className = "card-title"
            card_text.className = "card-text"
            card_id.className="card-id"
            tag.href = "../Html/index1.html"

            tag.className = "btn btn"
            tag.target = "_blank"
           tag.appendChild(h5)
           h5.innerText=("Click")
            card_title.innerText = data.title
            card_text.innerText = data.albumId
            card_id.innerText = data.id
            card_body.appendChild(card_title)
            card_body.appendChild(card_text)
            card_body.appendChild(card_id)
            card_body.appendChild(tag)
            card.appendChild(image)
            card.appendChild(card_body)
            row.appendChild(card)
           

           



  





        }


    });
    
    container.appendChild(row)
   let addbutons=document.querySelectorAll(".btn")
   addbutons.forEach((btns)=>{
    btns.addEventListener("click",function(){
        
        let titles=this.parentNode.querySelector("h5").innerText
      let image=this.parentNode.previousElementSibling.src
      let text=this.parentNode.querySelector("p").innerText
     let textid=this.parentNode.querySelector(".card-id").innerText
      let cards={
          titles,
          image,
          text,
          textid,
          count:1,

      }
      index.push(cards);
      localStorage.setItem("index",JSON.stringify(index))

      


     
    })
   
   })



});








