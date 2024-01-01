
function calculateData(){

    let height = Number(document.querySelector("#the_height").value)
    let weight = Number(document.querySelector("#the_weight").value)

    console.log("Calculating")
    console.log(height)
    console.log(weight)
}

function resetData(){
    console.log("Resetting")

     document.querySelector("#the_height").value = ""
     document.querySelector("#the_weight").value = ""
}