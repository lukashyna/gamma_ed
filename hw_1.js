const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];

let sum = 0;
nums1.forEach(num1 => {

    sum += num1;

})

console.log(sum);



const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach(name => {

    const obj = {
        name: name[0].toUpperCase()+name.slice(1),
        nameLength: name.length,
    };
    
    namesObject.push(obj);
})

console.log(namesObject);



const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach(num2 => {

    const obj = {
        number: Number(num2),
        square: Number(num2)**2,
        cube: Math.pow(Number(num2), 3)
    }

    numsRes.push(obj);
})

console.log(numsRes);



const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.forEach(everyNumber => {
    reversedNumberRow.unshift(everyNumber);
})

console.log(reversedNumberRow);



const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
];

cars.forEach(car => {

    let string = `This is ${car.color} ${car.make}. It costs ${car.price}.`
    console.log(string);

})