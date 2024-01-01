
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
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Severely Underweight</span>
    }else if(bmi_value >= 16 && bmi_value <= 18.4){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Underweight</span>
    }else if(bmi_value >= 18.5 && bmi_value <= 24.9){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Normal</span>
    }else if(bmi_value >= 25.0 && bmi_value <= 29.9){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Overweight</span>
    }else if(bmi_value >= 30.0 && bmi_value <= 34.9){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Moderately Obese</span>
    }else if(bmi_value >= 35.0 && bmi_value <= 39.9){
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Severely Obese</span>
    }else{
        msg = "Your BMI is " + bmi_value + " " + <span id="msg_status">Morbidly Obese</span>
    }

}

function resetData(){
    console.log("Resetting")

     document.querySelector("#the_height").value = ""
     document.querySelector("#the_weight").value = ""
}