//console.log("DANISH")

//stack
let myname = "Danish"
let oldname= myname
console.log(myname);

//heap
let user = {
    email: "dan@gamil.com",
    age: "22",
    phone: "7800004"
}
console.table(user);

let usertwo = user
usertwo.email = "jack@gmail.com"
console.table(user);
