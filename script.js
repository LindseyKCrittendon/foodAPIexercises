fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    });

    fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods =>{
       
        parsedFoods.forEach(food => {
           //Print foods to DOM
        //    console.log(parsedFoods[0])
           document.querySelector(".foodList").innerHTML += `<h4>${food.name}</h4>
           <p>${food.category}</p>
           <p>${food.ethnicity}</p>`
        })
    })