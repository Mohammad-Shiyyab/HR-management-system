'use strict';

var Empinformation=[];

// let form =decoment.getElementById("from");
// let container = document.getElementById("card-container");

function Empinformation(Employee_id,full_name,department,level,image,salary){
    this.Employee_id=Employee_id;
    this.full_name=full_name;
    this.department=department;
    this.level=level;
    this.image=image;
    this.salary=salary;
    Empinformation.push(this);
}
function createRandomId(){
    const random= Math.floor(Math.random()* 9000 +1000)
    return random;
}
let randoms = createRandomId()
let randoms1 = createRandomId()
let randoms2 = createRandomId()
let randoms3 = createRandomId()
let randoms4 = createRandomId()
let randoms5 = createRandomId()
let randoms6 = createRandomId()
Empinformation.prototype.printInformation =function(){
    if (this.level === "Senior"){
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
    } else if (this.level === "Mid Senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)
    } else {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500)
    }
    console.log(`${this.full_name} have a ${this.salary} salary amount`);
    return `${this.full_name} have a ${this.salary} salary amount`;
}

const emp1=new Empinformation(randoms,"Ghazi Samer","Administration","Senior","Ghazi.jpg", 0);
const emp2=new Empinformation(randoms1,"Lana Ali","Finance","Senior","Lana.jpg",0);
const emp3=new Empinformation(randoms2,"Tamara Ayyoub","Marketing","Senior","Tamara.jpg",0);
const emp4=new Empinformation(randoms3,"Safi Waleed","Administration","Mid Senior","Safi.jpg",0);
const emp5=new Empinformation(randoms4,"Omar Zaid","Development","Senior","Omar.jpg",0);
const emp6=new Empinformation(randoms5,"Rana Saleh","Development","Junior","Rana.jpg",0);
const emp7=new Empinformation(randoms6,"Hadi Ahmad","Finance","Mid Senior","Hadi.jpg",0);

let empArr = [emp1, emp2, emp3, emp4, emp5, emp6,emp7];

    for (let i = 0 ; i < empArr.length ; i++){
        empArr[i].printInformation();
    }

function displayAllEmployeeDetails (employee, i){
        let image = document.getElementById(`image_${i}`);
        image.src = employee.image;
        image.style.maxWidth = "350px";
        let pEl1=document.getElementById(`full_name_${i}`);
        pEl1.textContent=employee.full_name;
        let pEl2=document.getElementById(`Employee_id_${i}`);
        pEl2.textContent=employee.Employee_id;
        let pEl3=document.getElementById(`department_${i}`);
        pEl3.textContent=employee.department;
        let pEl4=document.getElementById(`level_${i}`);
        pEl4.textContent=employee.level;
        let pEl5=document.getElementById(`salary_${i}`);
        pEl5.textContent=`The Salary is ${employee.salary}`;
}

for (let i = 0 ; i < empArr.length ; i++){
    displayAllEmployeeDetails(empArr[i], i);
}





// 'use strict';

// const allemplyee=[];

// let form =decoment.getElementById("form");
// let container = document.getElementById("card-container");

// function HrSystem(employeeId,fullName,department,level,imageUrl){

//     this.employeeId=employeeId;
//     this.fullName=fullName;
//     this.department=department;
//     this.level=level;
//     this.imageUrl=imageUrl;
//     this.salary=this.netSalary;
//     allemplyee.push(this);
//     }

// HrSystem.prototype.ranSalary = function(){
//     if(this.level =="Senior") {
//         return(Math.floor(Math.random() * (2000 - 1500) ) + 1500)
//     }else if (this.level=="Mid-senior"){
//         return(Math.floor(Math.random() * (1500 - 1000) ) + 1000)
//     }else if (this.level=="junior"){
//         return(Math.floor(Math.random() * (1000 - 500) ) + 500)
//     }
// }    


// HrSystem.prototype.netSalary = function(){
//     return(this.ranSalary()) - (this.ranSalary() * 0.075)
// }


// HrSystem.prototype.renderHomePage = function(){


//     const div = document.createElement("div");
//     div.innerHTML=`
//     <div class ="card">
//     <img src="${this.imageUrl}" alt="img">
//     <p>NAME: ${this.fullName}- ID: ${this.employeeId} Department : ${this.department}-Level : ${this.level}-${this.salary}</p>

//     </div>`;
//     container.appendChild(div);
// }


// const ghaziSamer=new HrSystem(1000,"Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
// const lanaAli=new HrSystem(1001,"Lana Ali","Finance","Senior","./assets/Lana.jpg");
// const TamaraAyoub=new HrSystem(1002,"Tamara Ayyoub","Marketing","Senior","./assets/Tamara.jpg");
// const safiWalid=new HrSystem(1003,"Safi Waleed","Administration","Mid Senior","./assets/Safi.jpg");
// const omarZaid=new HrSystem(1004,"Omar Zaid","Development","Senior","./assets/Omar.jpg");
// const ranaSaleh=new HrSystem(1005,"Rana Saleh","Development","Junior","./assets/Rana.jpg");
// const hadiAhmad=new HrSystem(1006,"Hadi Ahmad","Finance","Mid Senior","./assets/Hadi.jpg");



// allemplyeeCaller(allemplyee);


// function allemplyeeCaller(allemplyee){
//     for(let i=0; i < allemplyee.length;i++){
//         allemplyee[i].renderHomePage();
//     }
// }



// form.addEventListener("submit".eventHandler);


// function eventHandler(event){
//     event.preventDefault();
//     let fullName = (event.target.fullname.value);
//     let Department = (event.target.depart.value);
//     let level = (event.target.level.value);
//     let ImageUrl = (event.target.img.value);

//     console.log(fullName,Department,level,ImageUrl)
// }

// let newObject = new HrSystem(1100, fullName,Department,Level,ImageUrl)
// newObject.renderHomePage()