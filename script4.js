function makePizza(aantal){
    console.log("maak deeg")
    console.log("toppings op pizza")
    console.log("in de oven")
    if (aantal>0){
        makePizza(aantal-1)
    }
}

// makePizza()
// makePizza(3)


function makeSushi(aantal){
    console.log("snijd vis")
    console.log("kook de sushi")
    console.log("doe de vis in de sushi")
    if (aantal>0){
        makeSushi(aantal-1)
    }
}

makeSushi(3)
makePizza(2)