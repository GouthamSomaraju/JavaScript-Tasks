let data=[
    {name:'alice',sal:50000},
    {name:'charlie',sal:60000},
    {name:'bob',sal:40000}

]
function bonus(bns=0.1){
    return this.sal*bns
}

let alice=bonus.call(data[0])


function calculateBns() {
    return data.map(val => {
        val.bonus = bonus.call(val);  
        return val;  
    });
}


function highest(){
    return data.filter(val=>val.sal>45000)
    //  high.map(val=>`${val.name} earns ₹${val.sal} and got a bonus of ₹${val.bonus}`)

}
let allData=data.map(val=>{
    let bonuses=bonus.call(val)
    return {...val,bonuses}
})
let highEarner=data.filter(val=>val.sal>45000)


let incBns=highEarner.map(val=>{
    let bonuses=bonus.call(val)
    return {...val,bonuses}
})

incBns.map(({name,sal,bonuses})=>{
    console.log(`${name} earns ₹${sal} and got a bonus of ₹${bonuses}`);
    
})

// total Bonus
let total=allData.reduce((acc,{bonuses})=> acc+bonuses,0)
console.log(`Total Bonus Given: ₹${total}`);