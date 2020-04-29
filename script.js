// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     });

    // fetch("http://localhost:8088/food")
    // .then(foods => foods.json())
    // .then(parsedFoods =>{
       
    //     parsedFoods.forEach(food => {
    //        //Print foods to DOM
    //     //    console.log(parsedFoods[0])
    //        document.querySelector(".foodList").innerHTML += `<div><h4>${food.name}</h4>
    //        <p>${food.category}</p>
    //        <p>${food.ethnicity}</p></div>`
    //     })
    // });

    fetch("https://world.openfoodfacts.org/api/v0/product/0011150479547.json")
    .then(response => response.json())
    .then(productInfo => {
        console.log(productInfo)
    });

    fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food.barcode) // Should have a `barcode` property

            // Now fetch the food from the Food API

            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
             .then(response => response.json())
            .then(productInfo => {
                     if (productInfo.product.ingredients_text) {
                       food.ingredients = productInfo.product.ingredients_text
                     } else {
                       food.ingredients = "no ingredients listed"
                     }

                    // Build HTML string for individual food
                    // Add HTML string to DOM
                    document.querySelector(".foodList").innerHTML += `<div><h4>${food.name}</h4>
                    <p>${food.category}</p>
                    <p>${food.ethnicity}</p>
                    <p>${food.barcode}</p>
                    <p>${food.ingredients}</p></div>`
                })
        })
    })