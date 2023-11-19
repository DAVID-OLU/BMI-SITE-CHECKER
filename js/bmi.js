
$("#mybutton").click(function() {
    var wei = parseFloat(document.getElementById("input-weight").value);
    var hei = parseFloat(document.getElementById("input-height").value);

    

    function bmiCalculator(wei, hei) {
        

        var bmi = wei / Math.pow(hei, 2);
        return Math.round(bmi);
    }
    var bmi = bmiCalculator(wei, hei);

    if (bmi < 18.5) {
        $("#result").addClass("under").text(`Your bmi value is ${bmi}. Underweight`);
    } 
    if (bmi > 18.5 && bmi <= 24.9) {
        $("#result").addClass("good").text(`Your bmi value is ${bmi}. Good value,
        you have a normal bmi`);
    }
    if (bmi > 24.9) {
        $("#result").addClass("over").text(`Your bmi value is ${bmi}. Overweight,
        You are overweight.`);
    }
    
});
    
    
    