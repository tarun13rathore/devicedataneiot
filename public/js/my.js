
function ACV(id, min, max) {
         const newAC = document.getElementById("jv-" + id).value;
         const newGaugeValue = Math.floor(((newAC - min) / (max - min)) * 100);
         document.getElementById(id).style.setProperty('--ac-display-value', newAC);
         document.getElementById(id).style.setProperty('--ac-value', newGaugeValue);
     }
 function updateGauge(id, min, max) {
         const newGaugeDisplayValue = document.getElementById("gv-" + id).value;
         const newGaugeValue = Math.floor(((newGaugeDisplayValue - min) / (max - min)) * 100);
         document.getElementById(id).style.setProperty('--dc-display-value', newGaugeDisplayValue);
         document.getElementById(id).style.setProperty('--dc-value', newGaugeValue);
     }
