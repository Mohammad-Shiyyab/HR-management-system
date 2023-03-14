'use strict';

const allemplyee=[];

let form = document.getElementById("form");
let container = document.getElementById("card-container");

function HrSystem(employeeId,fullName,department,level,imageUrl){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageUrl=imageUrl;
    this.salary=this.netSalary;
    allemplyee.push(this);
    }

HrSystem.prototype.ranSalary = function(){
    if(this.level =="Senior") {
        return(Math.floor(Math.random() * (2000 - 1500) ) + 1500)
    }else if (this.level=="Mid-senior"){
        return(Math.floor(Math.random() * (1500 - 1000) ) + 1000)
    }else if (this.level=="junior"){
        return(Math.floor(Math.random() * (1000 - 500) ) + 500)
    }
}    

HrSystem.prototype.netSalary = function(){
    return ((this.ranSalary()) - (this.ranSalary() * 0.075))
}

HrSystem.prototype.renderHomePage = function(){
    var head = document.getElementsByTagName('head')[0];
 
    // Create new link Element
    var link = document.createElement('link');

    // set the attributes for link element
    link.rel = 'stylesheet';
 
    link.href = 'index.css';

    // Append link element to HTML head
    head.appendChild(link);
    const el = document.getElementById('card-container');

    const div = document.createElement("div");
    div.innerHTML=`
    <div style="display: flex; flex-wrap: wrap;justify-content: space-between;flex-direction:'row'">
    <div class="card">
    <img style="
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 350px;
    color: rgb(0, 0, 0);"  src="${this.imageUrl}" alt="img">
    <p >NAME: ${this.fullName}- ID: ${this.employeeId}- Department : ${this.department}- Level : ${this.level}- Salary ${this.netSalary()}</p>
    </div>
    </div>
    `;
    el.appendChild(div)
}


const ghaziSamer=new HrSystem(1000,"Ghazi Samer","Administration","Senior","Ghazi.jpg");
const lanaAli=new HrSystem(1001,"Lana Ali","Finance","Senior","Lana.jpg");
const TamaraAyoub=new HrSystem(1002,"Tamara Ayyoub","Marketing","Senior","Tamara.jpg");
const safiWalid=new HrSystem(1003,"Safi Waleed","Administration","Mid-senior","Safi.jpg");
const omarZaid=new HrSystem(1004,"Omar Zaid","Development","Senior","Omar.jpg");
const ranaSaleh=new HrSystem(1005,"Rana Saleh","Development","junior","Rana.jpg");
const hadiAhmad=new HrSystem(1006,"Hadi Ahmad","Finance","Mid-senior","Hadi.jpg");



allemplyeeCaller(allemplyee);


function allemplyeeCaller(allemplyee){
    for(let i=0; i < allemplyee.length;i++){
        allemplyee[i].renderHomePage();
    }
}



form.addEventListener("submit" ,eventHandler);


function eventHandler(event){
    event.preventDefault();
    let fullName = (event.target.fullname.value);
    let department = (event.target.depart.value);
    let level = (event.target.level.value);
    let imageUrl = (event.target.imag.value);

    console.log(fullName,department,level,imageUrl)
    
    let newObject = new HrSystem(1100, fullName,department,level,imageUrl)
    newObject.renderHomePage()
}