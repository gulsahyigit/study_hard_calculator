const getStudyHours = day => {
    if (day === 'Monday'){
        return 8
    }
    else if(day === 'Tuesday'){
        return 8
    }
    else if(day === 'Wednesday'){
        return 8
    }
    else if(day === 'Thursday'){
        return 8
    }
    else if(day === 'Friday'){
        return 8
    }
    else if (day === 'Saturday' || day === 'Sunday'){
        return "It's Holiday"
    }
}

//console.log(getStudyHours('Monday'))
//console.log(getStudyHours('Saturday'))

const getActualStudyHours = () => getStudyHours('Monday') + 
getStudyHours('Tuesday') + getStudyHours('Wednesday') + 
getStudyHours('Thursday') + getStudyHours('Friday')

const getIdealStudyHours = () => {
   let idealHours = 8
   return idealHours * 5 
}

//console.log(getActualStudyHours())
//console.log(getIdealStudyHours())

const calculateStudyDebt = () => {
    let actualStudyHours = getActualStudyHours()
    let idealStudyHours = getIdealStudyHours()
    if(actualStudyHours === idealStudyHours){
        console.log('You got the perfect amount of study.')
    }
    else if(actualStudyHours > idealStudyHours){
        console.log('You got ' +  (actualStudyHours - idealStudyHours) + ' hours more study than planned. You can rest')
    }
    else if(actualStudyHours < idealStudyHours){
        console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hours less study than you needed this week. Create some empty time to study.')
    }
}


calculateStudyDebt()