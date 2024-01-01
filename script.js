
function calculateData(){

    let height = Number(document.querySelector("#the_height").value)
    let weight = Number(document.querySelector("#the_weight").value)

    let bmi_value = weight/Math.pow(height,2) * 10000

    console.log("Calculating")
    console.log(height)
    console.log(weight)
    console.log("BMI", bmi_value)
}

function resetData(){
    console.log("Resetting")

     document.querySelector("#the_height").value = ""
     document.querySelector("#the_weight").value = ""
}