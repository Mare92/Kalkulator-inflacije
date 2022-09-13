function inflationCalculator(){
   let stopaInflacije = document.querySelector('#inflationRate');
   let novac = document.querySelector('#money');
   let godine = document.querySelector('#yares');

   stopaInflacije = parseFloat(stopaInflacije.value);

   novac = parseFloat(novac.value);
   
   godine = parseFloat(godine.value);


   let vrednost = novac + (novac * (stopaInflacije / 100));
 // console.log(vrednost);

for(i = 1; i < godine; i++){
    vrednost += vrednost * (stopaInflacije / 100);
    }
    //console.log(vrednost);
    vrednost = vrednost.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${novac}€ vredi isto kao ${vrednost}€ za ${godine} godina.`;

    document.querySelector('.container').appendChild(newElement);
}