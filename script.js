
function calculateData(){

    let height = Number(document.querySelector("#the_height").value)
    let weight = Number(document.querySelector("#the_weight").value)

    let bmi_value = Number((weight/Math.pow(height,2) * 10000).toFixed(2))

    console.log("Calculating")
    console.log(height)
    console.log(weight)
    console.log("BMI", bmi_value)

    let msg = ''

    if(bmi_value < 16){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status"></span>
    }

}

function resetData(){
    console.log("Resetting")

     document.querySelector("#the_height").value = ""
     document.querySelector("#the_weight").value = ""
}