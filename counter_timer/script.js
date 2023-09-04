// console.log('hiii')
// document.write('helllo')
const day_ele=document.querySelector('#Days')
const hour_ele=document.querySelector('#Hours')
const min_ele=document.querySelector('#Minutes')
const sec_ele=document.querySelector('#Seconds')
const heading=document.querySelector('h1')
const valuebox=document.querySelector('.values')
const sec=1000, 
min=sec*60,
hr=min*60,
day=24*hr;
// let hh;
const counter=()=>{

let now = new Date();
let entered_date = String(now.getDate()).padStart(2,"0");
let entered_month = String(now.getMonth()+1).padStart(2,"0");
let entered_year = now.getFullYear();

const enterDate=prompt("enter the date").padStart(2,"0");
const enterMonth=prompt("enter Month").padStart(2,"0");

now=`${entered_month}/${entered_date}/${entered_year}`;
let targetDate=`${enterMonth}/${enterDate}/${entered_year}`

if(now > targetDate )
{
    targetDate= `${enterMonth}/${enterDate}/${entered_year+1}`
}

    setInterval(()=>{

        let today=new Date().getTime();
        let timer=new Date(targetDate).getTime();
        
        let diff= timer - today;
        
        
        const dd=Math.floor(diff/day);
        var hh=Math.floor((diff%day)/hr);
        let mm=Math.floor((diff%hr)/min);
        let ss=Math.floor((diff%min)/sec);
        
        day_ele.innerText= dd;
        hour_ele.innerText= hh;
        min_ele.innerText= mm;
        sec_ele.innerText= ss;

        if(diff<0){
            valuebox.style.display='none';
            heading.innerText=" Time Over !"
        }
       
    },1000)
   
};
counter();

