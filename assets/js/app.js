var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//task = [conpanny name,catogory]
//using forEach 

let result1=[];
for(let i=0; i<companies.length; i++){
	result1.push(`${companies[i].name},${companies[i].category}`)
}
console.log(result1)



//using forEach() 

let result2=[];
companies.forEach((para)=>{
	result2.push(`${para.name},${para.category}`)
});
console.log(result2);


//usin map()

let result3=companies.map((para1)=>{
	return `${para1.name},${para1.category}`
});
console.log(result3);



//---------------------------task 2--------------------------------------------------

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
//task =[company name,life span];

//using for loop 
  
let result201=[];
for (let i=0; i<companies.length; i++){
	result201.push(`${companies[i].name},${companies[i].start} - ${companies[i].end}`)
}
console.log(result201);



//using forEach()

let result202=[];
companies.forEach((para)=>{
	result202.push(`${para.name},${para.start} - ${para.end}`)
});
console.log(result202);

//using map();

let result203=companies.map((para)=>{
	return `${para.name},${para.start}-${para.end}`
});
console.log(result203);



//------------------------------------------task 3-----------------------------

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//task =[company name , age];

//using forloop 

let result301=[];
for (let i=0; i<companies.length; i++){
	result301.push(`${companies[i].name},${companies[i].end - companies[i].start}`)
};
console.log(result301);


//using forEach()

let result302=[];
companies.forEach((para)=>{
	result302.push(`${para.name}-${para.end-para.start}`)
});
console.log(result302)



