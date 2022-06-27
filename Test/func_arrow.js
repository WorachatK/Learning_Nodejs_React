//Arrow Function

//Original

function fullname(fname,lname){
    return fname+lname
}

console.log(fullname("Worachat","Kengthanakun"));

//Arrow

myname=(fname,lname)=>fname+lname
setAge=(age)=>"Age = "+age

console.log(myname("Kwanjira","Kengthankun"));
console.log(setAge(50));