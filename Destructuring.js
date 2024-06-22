const college={                                     //Object destructuring
    name :'Imarticus',
    est:'2014',
    isPvt:true
}

let{name,est,isPvt}=college;
console.log(`Name of the organization: ${name}`);
console.log(`Year Starts at: `);
console.log(`Private sector: ${isPvt}`);

console.log(college.name);

//Array Destructuring

const arr=['one','two','three'];
let [a1,a2,a3] = arr;
console.log(`value1: ${a1}`);