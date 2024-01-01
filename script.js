const calculateBMI = document.querySelector("#calculateBMI")

calculateBMI.onclick = () => {

    const heightCM = document.querySelector("#the_height").value
    const weightKG = document.querySelector("#the_weight").value

    console.log("Height", heightCM)
    console.log("Weight", weightKG)
}