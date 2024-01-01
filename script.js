
function calculateData(){

    let height = Number(document.querySelector("#the_height").value)
    let weight = Number(document.querySelector("#the_weight").value)

    let bmi_value = Number((weight/Math.pow(height,2) * 10000).toFixed(2))

    console.log("Calculating")
    console.log(height)
    console.log(weight)
    console.log("BMI", bmi_value)

    let msg = ''
    let msg_status = ''

    if(bmi_value < 16){
        msg = "Your BMI is " + bmi_value
        msg_status = "Severely Underweight"
    }else if(bmi_value >= 16 && bmi_value <= 18.4){
        msg = "Your BMI is " + bmi_value
        msg_status = "Underweight"
    }else if(bmi_value >= 18.5 && bmi_value <= 24.9){
        msg = "Your BMI is " + bmi_value
        msg_status = "Normal"
    }else if(bmi_value >= 25.0 && bmi_value <= 29.9){
        msg = "Your BMI is " + bmi_value
        msg_status = "Overweight"
    }else if(bmi_value >= 30.0 && bmi_value <= 34.9){
        msg = "Your BMI is " + bmi_value
        msg_status = "Moderately Obese"
    }else if(bmi_value >= 35.0 && bmi_value <= 39.9){
        msg = "Your BMI is " + bmi_value
        msg_status = "Severely Obese"
    }else{
        msg = "Your BMI is " + bmi_value
        msg_status = "Morbidly Obese"
    }
    document.getElementById("report_msg").innerHTML += msg
    document.getElementById("msg_status").innerHTML +=  msg_status
}

function resetData(){
    console.log("Resetting")

     document.querySelector("#the_height").value = ""
     document.querySelector("#the_weight").value = ""
    document.getElementById("report_msg").innerHTML = " "
    document.getElementById("msg_status").innerHTML = " "
}