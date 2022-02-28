setInterval(setClock,1000)

const hourHand = document.querySelector('[hour-hand]')
const minuteHand = document.querySelector('[minute-hand]')
const secondHand = document.querySelector('[second-hand]')
function setClock(){
    const currentDate= new Date()
    const secondRotation= currentDate.getSeconds()/60
    const minutRotation= (secondRotation + currentDate.getMinutes())/60
    const hourRotation= (minutRotation + currentDate.getHours())/12
    setRotation(secondHand,secondRotation)
    setRotation(minuteHand,minutRotation)
    setRotation(hourHand,hourRotation)
}

function setRotation(element, rotation){
    element.style.setProperty('--rotation',rotation*360)
}

