const random =(min,max)=>{
    return Math.floor(Math.random()* (max -min )+min)
}
for (let i = 0; i < 10; i++) {
    console.log( random(100, 200) );
}


module.exports=random
