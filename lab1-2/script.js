let cat1 = prompt("Введите первый катет", " ");
let cat2 = prompt("Введите второй катет", " ");
let num_cat1 = parseFloat(cat1);
let num_cat2 = parseFloat(cat2);
let result =Math.sqrt( num_cat1*num_cat1+num_cat2*num_cat2);
alert("Гипотенуза " + result);