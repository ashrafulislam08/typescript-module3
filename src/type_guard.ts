// Type Guard

// typeof operator - work on runtime


type Alphanumeric = string | number;

const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if(typeof param1 === "number" && typeof param2 === "number" ) {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

const result1 = add("32", "34")
const result2 = add(42, 66);
const result3 = add("34", 32)
console.log(result1)
console.log(result2)
console.log(result3)


type NormalUser = {
     name: string;
}

type AdminUser = {
    name: string;
    role: "admin";
}


const getUser = (user: NormalUser | AdminUser) => {
    if("role" in user)  {
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else {
        console.log(`My name is ${user.name}`)
    }
}


const normal: NormalUser = {
    name: "Mr. Normal"
}

const admin: AdminUser = {
    name: "Sam Altman",
    role: "admin"
}

getUser(normal);
getUser(admin);

