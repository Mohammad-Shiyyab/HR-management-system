'use strict';

var allInformation=[];
function Empinformation(Employee_id,full_name,department,level,image,salary){
    this.Employee_id=Employee_id;
    this.full_name=full_name;
    this.department=department;
    this.level=level;
    this.image=image;
    this.salary=salary;
    allInformation.push(this);
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