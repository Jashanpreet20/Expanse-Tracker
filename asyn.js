// console.log('person 1: show ticked ');
// console.log('person 2: show ticker ');

// const getticket=new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// })

// const getpopcorn=getticket.then((t) =>{
//     console.log('husband: we should go in');
//     console.log('wife: i am hungry');
//     return new Promise((resolve,reject) =>{ resolve(`${t}`);   })
// })
// const butter =getpopcorn.then((t) =>{
//     console.log('i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve,reject) =>{ resolve(`${t} popcorn`);   })
// })

//     butter.then((t) => console.log(t));

// console.log('person 4: show ticket ');
// console.log('person 5: show ticket ');

 console.log('person 1: show ticked ');
 console.log('person 2: show ticker ');

 const premovie= async () => { 
    const getticket=new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
})

const getpopcorn=new Promise((resolve,reject) => resolve(`popcorn`)); 
const getbutter=new Promise((resolve,reject) => resolve(`butter`));
const getcolddrinks=new Promise((resolve,reject)=> resolve('cold-drinks'));

let ticket=await getticket;
// let popcorn=await getpopcorn;
// let butter=await getbutter;
// let colddrinks=await getcolddrinks;
// console.log(`wife:i have the ${ticket}`);
// console.log('husband: we should go in');
// console.log('wife: i am hungry');

// console.log(`Husband: i got some ${popcorn}`);
// console.log('husband: we should go in');
// console.log('wife: i need butter on my popcorn');

// console.log(`Husband: i got some ${butter}  on popcorn`);
// console.log('husband: we should go in');
// console.log('wife: i need butter on my popcorn');

// console.log(`husband: Anything else except ${colddrinks}`)
// console.log('wife: i feel thristy');
// console.log('husband: i got some cold-drinks');
let [popcorn,butter,colddrinks] =await Promise.all([getpopcorn,getbutter,getcolddrinks]);
console.log(`${popcorn},${butter},${colddrinks}`);
return ticket;
  }

 premovie().then((m) => console.log(`person 3: show ${m}`));
 

 console.log('person 4: show ticket ');
 console.log('person 5: show ticket ');