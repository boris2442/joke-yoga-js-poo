const main = document.querySelector("#main");

let exerciceArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 1, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];

class Exercice {}

const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
  handleEventMinutes: function () {
     document.querySelectorAll('input[type="number"]').forEach((input)=>{
     input.addEventListener('input', (e)=>{
      console.log(e)
      exerciceArray.map((exo)=>{
        console.log("test")
        if(exo.pic==e.target.id){
            console.log("yes")
            exo.min=parseInt(e.target.value);
            console.log(exerciceArray);
        }
      })

    })
   
    })

  },
  handleEventArrow: function(){
    document.querySelectorAll(".arrow").forEach((arrow)=>{
        arrow.addEventListener("click", (e)=>{
            let position=0;
            console.log(e);
            exerciceArray.map((exo)=>{
                if(exo.pic==e.target.dataset.pic && position!==0){

                    [exerciceArray[position], exerciceArray[position-1]]=[exerciceArray[position-1], exerciceArray[position]]
                    //  console.log(exerciceArray)
                     page.lobby()
                //   return  console.log("yes")
                }else{
                    position++;
                    // console.log(position)
                }
            })
        })
    })
  }
};

const page = {
  lobby: function () {
    let mapArray = exerciceArray
      .map(
        (exo) =>
 `<li>
          <div class="card-header">
          <input type="number" id=${exo.pic} min="10" max="10"  value=${exo.min}>
           <span>min</span>
           <img src="/img/${exo.pic}.jpg" alt="exercice" />
           <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
           <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
     </div>

</li>`
      )
      .join("");
    utils.pageContent(
      "Parametrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Start <i class='far fa-play-circle'></i></button>"
    );
     utils.handleEventMinutes();
     utils.handleEventArrow();
     utils.deleteItem()
  },

  routine: function () {
    utils.pageContent("Routine", "Exercice avec chrono", null);
  },

  finish: function () {
    utils.pageContent(
      "c'est termine",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='Renitialiser<i class='fas fa-times-circle'></i></button>"
    );
  },
};

page.finish();
