
function projecttype() {
    
count=0;
var e = document.getElementById("protype");
var strUser = e.options[e.selectedIndex].value;

var ee = document.getElementById("performance");
var strUserr = ee.options[ee.selectedIndex].value;

var eee = document.getElementById("duration");
var strUserrr = eee.options[eee.selectedIndex].value;


if(strUser=="Commerce" && strUserr=="Excellent" && strUserrr=="One"){  
    count=count+3000+"$";
}

else if(strUser=="Commerce" && strUserr=="Excellent" && strUserrr=="Two"){  
    count=count+2900+"$";
}
else if(strUser=="Commerce" && strUserr=="Excellent" && strUserrr=="Three"){  
    count=count+2800+"$";
}
else if(strUser=="Commerce" && strUserr=="Very good" && strUserrr=="One"){  
    count=count+2700+"$";
}
else if(strUser=="Commerce" && strUserr=="Very good" && strUserrr=="Two"){  
    count=count+2600+"$";
}
else if(strUser=="Commerce" && strUserr=="Very good" && strUserrr=="Three"){  
    count=count+2500+"$";
}
else if(strUser=="Commerce" && strUserr=="Good" && strUserrr=="One"){  
    count=count+2400+"$";
}
else if(strUser=="Commerce" && strUserr=="Good" && strUserrr=="Two"){  
    count=count+2300+"$";
}
else if(strUser=="Commerce" && strUserr=="Good" && strUserrr=="Three"){  
    count=count+2100+"$";
}
else if(strUser=="Dynamic" && strUserr=="Excellent" && strUserrr=="One"){  
    count=count+2000+"$";
}

else if(strUser=="Dynamic" && strUserr=="Excellent" && strUserrr=="Two"){  
    count=count+1900+"$";
}
else if(strUser=="Dynamic" && strUserr=="Excellent" && strUserrr=="Three"){  
    count=count+1800+"$";
}
else if(strUser=="Dynamic" && strUserr=="Very good" && strUserrr=="One"){  
    count=count+1700+"$";
}
else if(strUser=="Dynamic" && strUserr=="Very good" && strUserrr=="Two"){  
    count=count+1600+"$";
}
else if(strUser=="Dynamic" && strUserr=="Very good" && strUserrr=="Three"){  
    count=count+1500+"$";
}
else if(strUser=="Dynamic" && strUserr=="Good" && strUserrr=="One"){  
    count=count+1400+"$";
}
else if(strUser=="Dynamic" && strUserr=="Good" && strUserrr=="Two"){  
    count=count+1300+"$";
}
else if(strUser=="Dynamic" && strUserr=="Good" && strUserrr=="Three"){  
    count=count+1100+"$";
}

else if(strUser=="Static" && strUserr=="Excellent" && strUserrr=="One"){  
    count=count+1000+"$";
}

else if(strUser=="Static" && strUserr=="Excellent" && strUserrr=="Two"){  
    count=count+900+"$";
}
else if(strUser=="Static" && strUserr=="Excellent" && strUserrr=="Three"){  
    count=count+800+"$";
}
else if(strUser=="Static" && strUserr=="Very good" && strUserrr=="One"){  
    count=count+700+"$";
}
else if(strUser=="Static" && strUserr=="Very good" && strUserrr=="Two"){  
    count=count+600+"$";
}
else if(strUser=="Static" && strUserr=="Very good" && strUserrr=="Three"){  
    count=count+500+"$";
}
else if(strUser=="Static" && strUserr=="Good" && strUserrr=="One"){  
    count=count+400+"$";
}
else if(strUser=="Static" && strUserr=="Good" && strUserrr=="Two"){  
    count=count+300+"$";
}
else if(strUser=="Static" && strUserr=="Good" && strUserrr=="Three"){  
    count=count+100+"$";
}

}



function calc(){
    
document.getElementById("budget").innerHTML=count;
}


