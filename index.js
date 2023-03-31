const slider_step = document.querySelector("#range");
const step = 10;

slider_step.addEventListener("input", function() {
  this.value = Math.round(this.value / step) * step;
});
    const range = document.querySelector("#range");
    const SaaS_Spend = document.querySelector(".annualSaaSspend");
   
    




    const slider_container =[...document.querySelectorAll(".slider_container")];
    const next=[...document.querySelectorAll("#next")];
    const prev =[...document.querySelectorAll("#prev")];
    slider_container.forEach((item,i) => {
        let sliderdimension = item.getBoundingClientRect();
        let sliderwidth = sliderdimension.width;
        next[i].addEventListener('click', () => {
            item.scrollLeft += sliderwidth;
        } )
        prev[i].addEventListener('click', () => {
            item.scrollLeft -= sliderwidth;
        } )
    })
    const rangeInputs = document.querySelectorAll('input[type="range"]')


function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})



    function updateText()
    {
        var selectElement = document.getElementById("dropdown_window");
        var savings= document.getElementById("savings")
        var monthlyprice=document.getElementById("monthly_price");
        var selectedIndex = selectElement.selectedIndex;


        switch(selectedIndex) {
          case 0:
            {
            savings.textContent = "$150,000";
            monthlyprice.textContent="$1,500";
            break;}
          case 1:
          savings.textContent = "$300,000";
            monthlyprice.textContent="$2,500";
            break;
          case 2:
          savings.textContent = "$600,000";
            monthlyprice.textContent="$3,500";
            break;
            case 3:
            savings.textContent = "$900,000";
            monthlyprice.textContent="$4,500";
            break;
            case 4:
            savings.textContent = "$1.2M";
            monthlyprice.textContent="$5,500";
            break;
            case 5:
            savings.textContent = "$1.5M";
            monthlyprice.textContent="$6,500";
            break;

        }
      }
    const slider = document.getElementById("range");
    //MAIN HEADING OF THE DIV WITH THE ICON
    const heading = document.getElementById("savings_heading");
    const SaaS_spend_amount = document.querySelector(".SaaS_spend_amount");

    slider.addEventListener("input", function() {
    const value = parseInt(slider.value);
    if (value==0) {
        heading.innerText = "$0";
        SaaS_spend_amount.innerText = "$0";
        SaaS_Spend.style.marginLeft = -690 + "px";
    } else if (value > 0 && value <= 10) {
        heading.innerText = "$150,000";
        SaaS_spend_amount.innerText = "$500k";
        SaaS_Spend.style.marginLeft = -450 + "px";
    } else if (value > 10 && value <= 20) {
        heading.innerText = "$300,000";
        SaaS_spend_amount.innerText = "$1M";
        SaaS_Spend.style.marginLeft = -225 + "px";
    } 
 else if (value > 20 && value <= 30) {
        heading.innerText = "$600,000";
        SaaS_spend_amount.innerText = "$2M";
        SaaS_Spend.style.marginLeft = 0 + "px";
    }
    else if (value > 30 && value <= 40) {
        heading.innerText = "$900,000";
        SaaS_spend_amount.innerText = "$3M";
        SaaS_Spend.style.marginLeft = 220 + "px";
    }  
    else if (value > 40 && value <= 50) {
        heading.innerText = "$1,200,000";
        SaaS_spend_amount.innerText = "$4M";
        SaaS_Spend.style.marginLeft = 450 + "px";
    } 
    else {
        heading.innerText = "$1,500,000";
        SaaS_spend_amount.innerText = "$5M";
        SaaS_Spend.style.marginLeft = 670 + "px";
    }
    })