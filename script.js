const calculateBMI = document.querySelector("#calculateBMI")

const heightCM = document.querySelector("#the_height").value
const weightKG = document.querySelector("#the_weight").value

calculateBMI.onclick = () => {
    alert("Calculate")
    console.log("Height", heightCM)
    console.log("Weight", weightKG)
}