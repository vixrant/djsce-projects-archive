<<<<<<< HEAD




module.exports.guess = (bpm,osl,bp,sl,temp) => {



    var problems = [];

    if(osl < 80) {
        problems.push("Oxygen Levels are less than 80%");
    }

    if(temp > 100) {
        problems.push("Body Temperature is more than 100F")
    }


    if(sl > 140) 
        problems.push("Sugar Level is more than 140 indicating Hypertension Level 2")
    else if(sl > 130)
        problems.push("Sugar Level is more than 130 indicating Hypertension Level 1")
    else if(sl > 120)
        problems.push("Sugar Level is elevated")
    else if(sl < 60)
        problems.push("Sugar Level less than 60mg/dl")

    
    var sbp = parseInt(bp.substr(0,bp.indexOf("/")));
    var dbp = parseInt(bp.substr(bp.indexOf("/") + 1));


    if(sbp < 90 && dbp < 60) {
        problems.push("Low Blood Pressure")
    } else if(sbp > 140 && dbp > 60) {
        problems.push("High Blood Pressure")
    }
    
    if(problems.length != 0 || bpm < 30)
        problems.push("The Patients HR is at "+bpm);
     


    return problems;
=======




module.exports.guess = (bpm,osl,bp,sl,temp) => {



    var problems = [];

    if(osl < 80) {
        problems.push("Oxygen Levels are less than 80%");
    }

    if(temp > 100) {
        problems.push("Body Temperature is more than 100F")
    }


    if(sl > 140) 
        problems.push("Sugar Level is more than 140 indicating Hypertension Level 2")
    else if(sl > 130)
        problems.push("Sugar Level is more than 130 indicating Hypertension Level 1")
    else if(sl > 120)
        problems.push("Sugar Level is elevated")
    else if(sl < 60)
        problems.push("Sugar Level less than 60mg/dl")

    
    var sbp = parseInt(bp.substr(0,bp.indexOf("/")));
    var dbp = parseInt(bp.substr(bp.indexOf("/") + 1));


    if(sbp < 90 && dbp < 60) {
        problems.push("Low Blood Pressure")
    } else if(sbp > 140 && dbp > 60) {
        problems.push("High Blood Pressure")
    }
    
    if(problems.length != 0 || bpm < 30)
        problems.push("The Patients HR is at "+bpm);
     


    return problems;
>>>>>>> 9743f7ff29913c901690b7ca7b692572afda67cd
};