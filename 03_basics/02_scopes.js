let a = 10;  //global scope


if(true){
    let a = 1000; //block scope
    // console.log('block scope:', a);
// const b = 20;
// var c = 30
}

// console.log('global scope:', a);
// // console.log(b);
// console.log(c);

// only var c can be used outside scope


function one(){
    const usrname = "ram";

    function two(){
        const website = "youtube";
        console.log(usrname);
    }
    // console.log(website);
    two();
}

one()