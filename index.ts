const randomBtn = document.querySelector<HTMLButtonElement>("#randomBtn");
const inputElement = document.querySelector<HTMLInputElement>("#inputElement");
const addListBtn = document.querySelector<HTMLButtonElement>("#addListBtn");
const deletListBtn = document.querySelector<HTMLButtonElement>("#deletListBtn");

const list:number[] =[];

randomBtn?.addEventListener("click",()=>{
   const randomNumber = Math.floor(Math.random()*89999)+10000;
   inputElement!.value =  randomNumber.toString();
})

addListBtn?.addEventListener("click",()=>{
   const number = +(inputElement!.value);
   for(let i=2; i<= number ;i++){
      let count=0 ;
      for(let j=1; j<=i; j++){
         if(i%j===0)  
         count+=1
      }
      if(count === 2){
         list.push(i)
      }
   }
   console.log(list);
})
deletListBtn?.addEventListener("click",()=>{
   list.length=0;
   inputElement!.value = "";
   console.log(list);
})


