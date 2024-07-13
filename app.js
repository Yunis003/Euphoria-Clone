
//! For Men
let menContainer=document.querySelector('.men-container')
let data1
function getMenData(){
    fetch('http://localhost:3000/men')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data1=data
        displayMen(data)
    })
    
}
getMenData()

function displayMen(clothes){
    menContainer.innerHTML=""
    clothes.forEach((cloth)=>{
        let displayCard=document.createElement('div')

        displayCard.innerHTML=`
        <div class="cards-d">
        <img src=${cloth.img}>
        <p>${cloth.title}</p>
        <a href="#">Explore Now!</a>
        </div>
        `

        menContainer.append(displayCard)
    })
}

//! For Women
let womenContainer=document.querySelector('.women-container')
let data2
function getWomenData(){
    fetch('http://localhost:3000/womenSimple')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data2=data;
        displayWomen(data)
    })
}
getWomenData()

function displayWomen(clothes){
    womenContainer.innerHTML=""
    clothes.forEach((cloth)=>{
        let displayWoman=document.createElement('div')
        displayWoman.innerHTML=`
        <div class="cards-d">
        <img src=${cloth.img}>
        <p>${cloth.title}</p>
        <a href="#">Explore Now!</a>
        </div>
        `

        womenContainer.append(displayWoman)
    })
}

//? Login
let login=document.querySelector('.login')
login.addEventListener('click',()=>{
  window.location.href="./login.html"
})