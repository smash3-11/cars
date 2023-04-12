let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5 
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 7 
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4 
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]


let userInput = prompt("Введите модель или компанию машины:");

let filteredCars = cars.filter(c => c.model === userInput || c.company === userInput);

if (filteredCars.length === 0) {
  alert("Машина не найдена");
} else if (filteredCars.length === 1) {
  let car = filteredCars[0];
  let userPrice = +prompt(`Цена ${car.model} от ${car.price}. Введите сумму:`);
  while (userPrice < car.price) {
    alert("Недостаточно средств");
    userPrice = +prompt(`Цена ${car.model}: ${car.price}. Введите сумму:`);
  }
  let change = userPrice - car.price;
  alert(`Ваша сдача: ${change}`);
} else {
  let companyModels = filteredCars.map(c => c.model).join(", ");
  let chosenModel = prompt(`Какую из машин хотите? Доступные модели: ${companyModels}`);
  let car = filteredCars.find(c => c.model === chosenModel);
  let userPrice = +prompt(`Цена ${car.model} от ${car.price}. Введите сумму:`);
  while (userPrice < car.price) {
    alert("Недостаточно средств");
    userPrice = +prompt(`Цена ${car.model}: ${car.price}. Введите суму:`);
  }
  let change = userPrice - car.price;
  alert(`Ваша сдача: ${change}, Спасибо за покупку!`);
}










// let userInput = prompt("Введите модель или компанию машины:");
// let matchingCars = cars.filter(car => car.model === userInput || car.company === userInput);

// if (matchingCars.length === 0) {
//     alert("Машина не найдена");
// } else if (matchingCars.length === 1) {
//     let carPrice = matchingCars[0].price;
//     let userPayment = prompt(`Цена автомобиля ${carPrice}. Введите сумму:`);

//     if (userPayment < carPrice) {
//         alert("Недостаточно средств");
//         // alert(`Цена автомобиля ${carPrice}`);
//         alert(userPayment)
//     } else if (userPayment > carPrice) {
//         let change = userPayment - carPrice;
//         alert(`Ваша сдача ${change}`);
//     } else {
//         alert("Спасибо за покупку!");
//     }
// } else {
//     let chosenCar = prompt(`Найдено несколько машин (${matchingCars.map(car => car.model).join(", ")}). Какую из них вы хотите купить?`);
//     let car = matchingCars.find(car => car.model === chosenCar);
//     let carPrice = car.price;
//     let userPayment = prompt(`Цена автомобиля ${carPrice}. Введите сумму:`);

//     if (userPayment < carPrice) {
//         alert("Недостаточно средств");
//         alert(`Цена автомобиля ${carPrice}`);
//     } else if (userPayment > carPrice) {
//         let change = userPayment - carPrice;
//         alert(`Ваша сдача ${change}`);
//     } else {
//         alert("Спасибо за покупку!");
//     }
// }
















// let input = prompt("Введите модель или компанию машины");
// let car = cars.find(item => item.model === input || item.company === input);

// if (car) {
//   let price = car.price;
//   let amount = prompt(`Введите сумму больше ${price}`);

//   if (amount >= price) {
//     let change = amount - price;
//     alert(`Ваша сдача ${change}`);
//   } else {
//     alert(`Недостаточно средств, цена машины ${price}`);
//     // return (`${price}`);
//     // alert(`Введите сумму больше ${price}`)
//     // return amount;
//     prompt(`Введите сумму больше ${price}`);
//   }
// } else {
//   let filteredCars = cars.filter(item => item.company === input);
  
//   if (filteredCars.length > 1) {
//     alert("Какую из машин хотите?");
//   } else {
//     alert("Машина не найдена");
//   }
// }


// let requestedCompany = prompt("Введите название компании машины:");
// let requestedModel = prompt("Введите модель машины:");

// let filteredCars = cars.filter(function(car) {
//     return car.company === requestedCompany && car.model === requestedModel;
// });

// if (filteredCars.length === 0) {
//     alert("Такой машины нет в наличии");
// } else if (filteredCars.length === 1) {
//     let car = filteredCars[0];
//     let requestedPrice = prompt(`Цена ${car.company} ${car.model}: ${car.price}. Введите сумму оплаты:`);
//     if (requestedPrice < car.price) {
//         alert(`Недостаточно средств. Стоимость машины: ${car.price}. Необходимо оплатить еще ${car.price - requestedPrice}`);
//     } else {
//         let change = requestedPrice - car.price;
//         alert(`Ваша сдача: ${change}`);
//     }
// } else {
//     let modelNameList = filteredCars.map(function(car) {
//         return car.model;
//     });
//     let chosenIndex = prompt(`Какую из машин ${requestedCompany} вы выбираете?\nМодели: ${modelNameList.join(", ")}`);
//     let chosenCar = filteredCars[chosenIndex - 1];
//     let requestedPrice = prompt(`Цена ${chosenCar.company} ${chosenCar.model}: ${chosenCar.price}. Введите сумму оплаты: `);
//     if (requestedPrice < chosenCar.price) {
//         alert(`Недостаточно средств. Стоимость машины: ${chosenCar.price}. Необходимо оплатить еще ${chosenCar.price - requestedPrice}`);
//     } else {
//         let change = requestedPrice - chosenCar.price;
//         alert(`Ваша сдача: ${change}`);
//     }
// }

























// let userInput = prompt("Введите модель или компанию машины:");
// let matchingCars = cars.filter(car => car.model === userInput || car.company === userInput);

// if (matchingCars.length === 0) {
//     alert("Машина не найдена");
// } else if (matchingCars.length === 1) {
//     let carPrice = matchingCars[0].price;
//     let userPayment = prompt(`Цена автомобиля ${carPrice}. Введите сумму:`);

//     if (userPayment < carPrice) {
//         alert("Недостаточно средств");
//         let missingAmount = carPrice - userPayment;
//         alert(`Необходимо оплатить еще ${missingAmount}`);
//     } else if (userPayment > carPrice) {
//         let change = userPayment - carPrice;
//         alert(`Ваша сдача ${change}`);
//     } else {
//         alert("Спасибо за покупку!");
//     }
// } else {
//     let chosenCar;
//     let carCompany = matchingCars[0].company;
//     let companyMatch = matchingCars.filter(car => car.company === carCompany);
//     if (companyMatch.length > 1) {
//         let models = "";
//         companyMatch.forEach(car => models += `${car.model}, `);
//         models = models.slice(0, -2);
//         chosenCar = prompt(`Какую машину от компании ${carCompany} вы хотите купить? Доступные модели: ${models}`);
//     } else {
//         let models = "";
//         matchingCars.forEach(car => models += `${car.model}, `);
//         models = models.slice(0, -2);
//         chosenCar = prompt(`Какую машину вы хотите купить? Доступные модели: ${models}`);
//     }
//     let car = matchingCars.find(car => car.model === chosenCar);
//     let carPrice = car.price;
//     let userPayment = prompt(`Цена автомобиля ${carPrice}. Введите сумму:`);

//     if (userPayment < carPrice) {
//         alert("Недостаточно средств");
//         let missingAmount = carPrice - userPayment;
//         alert(`Необходимо оплатить еще ${missingAmount}`);
//     } else if (userPayment > carPrice) {
//         let change = userPayment - carPrice;
//         alert(`Ваша сдача ${change}`);
//     } else {
//         alert("Спасибо за покупку!");
//     }
// }
























// let input = prompt("Введите модель или компанию машины");
// let filteredCars = cars.filter(item => item.model === input || item.company === input);

// if (filteredCars.length === 1) {
//   let car = filteredCars[0];
//   let price = car.price;
  
//   while (true) {
//     let amount = parseInt(prompt(`Введите сумму больше ${price}`));
    
//     if (amount >= price) {
//       let change = amount - price;
//       alert(`Ваша сдача ${change}`);
//       break;
//     } else {
//       alert(`Недостаточно средств, цена машины ${price}`);
//       let newAmount = parseInt(prompt(`Введите сумму больше ${price}`));
//       if (newAmount >= price) {
//         let change = newAmount - price;
//         alert(`Ваша сдача ${change}`);
//         break;
//       }
//     }
//   }
// } else if (filteredCars.length > 1) {
//   let companyCars = filteredCars.map(item => item.model);
//   let companyCarsString = companyCars.join(", ");
//   let modelInput = prompt(`Какую из машин компании ${input} вы хотите? Доступные модели: ${companyCarsString}`);
//   let modelCars = filteredCars.filter(item => item.model === modelInput);
  
//   if (modelCars.length === 1) {
//     let car = modelCars[0];
//     let price = car.price;
    
//     while (true) {
//       let amount = parseInt(prompt(`Введите сумму больше ${price}`));
      
//       if (amount >= price) {
//         let change = amount - price;
//         alert(`Ваша сдача ${change}`);
//         break;
//       } else {
//         alert(`Недостаточно средств, цена машины ${price}`);
//         let newAmount = parseInt(prompt(`Введите сумму больше ${price}`));
//         if (newAmount >= price) {
//           let change = newAmount - price;
//           alert(`Ваша сдача ${change}`);
//           break;
//         }
//       }
//     }
//   } else {
//     alert("Ошибка! Машина не найдена");
//   }
// } else {
//   alert("Ошибка! Машина не найдена");
// }










// //  !чутка не правильно 
// let userInput = prompt("Введите модель или компанию машины:");

// let car = cars.find(c => c.model === userInput || c.company === userInput);

// if (!car) {
//   alert("Машина не найдена");
// } else {
//   let userPrice = +prompt(`Цена ${car.model} от ${car.price}. Введите сумму:`);
//   if (userPrice < car.price) {
//     alert("Недостаточно средств");
//     alert(`Цена ${car.model}: ${car.price}`);
//   } else {
//     let change = userPrice - car.price;
//     alert("Ваша сдача: " + change);
//   }
// }















// !не работает
// let input = prompt("Введите модель или компанию машины");
// let car = cars.find(item => item.model === input || item.company === input);

// if (car) {
//   let price = car.price;
//   let amount = prompt(`Введите сумму больше ${price}`);

//   if (amount >= price) {
//     let change = (amount - price);
//     alert(`Ваша сдача ${change}`);
//   } else {
//     alert(`Недостаточно средств, цена машины ${price}`);
//     return price;
//   }
// } else {
//   let filteredCars = cars.filter(item => item.company === input);
  
//   if (filteredCars.length > 1) {
//     alert("Какую из машин хотите?");
//   } else {
//     alert("Машина не найдена");
//   }
// }






















// let input = prompt("Введите модель или компанию машины:");

// let car = cars.find(
//   (car) =>
//     car.model.toLowerCase() === input.toLowerCase() ||
//     car.company.toLowerCase() === input.toLowerCase()
// );

// if (car) {
//   let amount = prompt(`Цена ${car.model} - ${car.price}. Введите сумму:`);
//   if (amount < car.price) {
//     alert("Недостаточно средств");
//   } else if (amount > car.price) {
//     alert(`Ваша сдача: ${amount - car.price}`);
//   } else {
//     alert("Спасибо за покупку!");
//   }
// } else {
//   alert("Машина не найдена");
// }