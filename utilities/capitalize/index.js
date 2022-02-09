const capitalize=(str)=>{
    const arr = str.split( ' ')
    const result=[];
    arr.forEach(word => {
         result.push(word[0].toUpperCase()+ word.slice(1))
    });
   
     return result.join(' ')


}
module.exports=capitalize