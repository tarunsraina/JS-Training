

/* Given marks of students of physics , chemistry and maths , predict the college
  that he/she might have a chance to get into */


/*  CUTOFF:

     RV : 95 or above in PCM (phy,che and math).
     PES : 95 or above in atleast two subjects
     BMS : 90 or above in every subject
     RNSIT : 90 or above in atleast two subjects
     NIE : 85 or above in every subject
     SJCE : 90 or above in maths is mandatory, other two subjects should be greater than 80

*/

let rvCollege = false;
let pesCollege  = false;
let bmsCollege = false;
let rnsitCollege = false;
let nieCollege = false;
let sjceCollege = false;

// Enter students marks here

let phy = 95
let chem = 95
let mat = 70

if(phy>=95 && chem>=95 && mat>=95){
  rvCollege = true;
}
if((phy>=95 && chem>=95) ||
        (chem>=95 && mat>=95) ||
        (mat>=95 && phy>=95)){
          pesCollege = true;
}
if(phy>=90 && chem>=90 && mat>=90){
  bmsCollege = false;
}
if((phy>=90 && chem>=90) ||
        (chem>=90 && mat>=90) ||
        (mat>=90 && phy>=90)){
          rnsitCollege = true;
}
if(phy>=85 && chem>=85 && mat>=85){
  nieCollege = true;
}
if(mat>=90 && (phy>=80 && chem>=80)){
  sjceCollege = true;
}

console.log("Shortlisted colleges :")

if(rvCollege==true){
  console.log("RVCE")
}

if(pesCollege==true){
  console.log("PES")
}

if(bmsCollege==true){
  console.log("BMS")
}

if(rnsitCollege==true){
  console.log("RNSIT")
}

if(nieCollege==true){
  console.log("NIE")
}

if(sjceCollege==true){
  console.log("SJCE")
}