let data=[
    {
        id:1,
        name:"shirt",
        cost:400
    }, {
        id:2,
        name:"pant",
        cost:200
    },
    {
        id:3,
        name:"watch",
        cost:300
    }, 
    {
        id:4,
        name:"shoes",
        cost:700
    }
]
let products=data.map((val)=>{
    return `
    <div >
        <h1>${val.nme}</h1>
        <h2>${val.price}</h2>
        <button class='btn onclick="addToCart()">addToCart</button>
    </div>
    `
})
function addToCart(){
    let newarr=[]
    btn.addEventListener("click", function () {
    newarr.push(val);
    sessionStorage.setItem("arr", JSON.stringify(newarr));
  });

}