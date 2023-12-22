let numberOne = prompt('Введи число', 0), numberTwo = prompt('Введи число', 0), total, difference,product, division, modulo;

total = Number(numberOne) + Number(numberTwo); //нахождение суммы 
difference = Number(numberOne) - Number(numberTwo); //нахождение разности
product = Number(numberOne) * Number(numberTwo); //произведение двух чисел
division = Number(numberOne)/Number(numberTwo) //деление первого числа на второе
modulo= Number(numberOne) % Number(numberTwo) //нахождение остатка от деления


//вывод всех результатов арифметических операций

alert(`Сложение: ${numberOne}+${numberTwo}=${total}`+ '\n'
 +`Разность: ${numberOne}-${numberTwo}=${difference}`+ '\n'
 +`Произведение: ${numberOne}*${numberTwo}=${product}` + '\n'
 +`Деление: ${numberOne}:${numberTwo}=${division}`+ '\n'
 +`Остаток от деления: ${numberOne}%${numberTwo}=${modulo}`+ '\n');
