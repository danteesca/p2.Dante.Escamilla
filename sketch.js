

class Box{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(this.text, this.posX + (this.s/2), this.posY + (this.s2/2)) 
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}


class Clock{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(24)
        text(hr + ":" + mins + ":" + sec + " " + meridian, this.posX + (this.s/2), this.posY + (this.s2/2 ))
        
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class Noti{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(20)
        text(this.text, this.posX + this.s2, this.posY + (this.s2/2)) 
    }

    displayBigger(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(15)
        let temp = 70
        for (let i = 0; i < notiMess.length; i++){
            text(notiMess[i], this.posX + this.s/2, this.posY + temp)
            imageMode(CENTER)
            if (notiIcon[i] == "text"){
                image(textMess, this.posX + this.s/5, this.posY + temp, 40, 40)
            } else if (notiIcon[i] == "email"){
                image(email, this.posX + this.s/5, this.posY + temp, 30, 30)
            }
            temp += 40
        }
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class GIone{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        textSize(32)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(curr_temp, this.posX + this.s/2, this.posY + this.s2/2.4)
        textSize(24)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(curr_short_forecast,  this.posX + this.s/2, this.posY + this.s2/1.8)
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class GItwo{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(20)
        text("Daily Calander", this.posX + this.s/2, this.posY + 30)
        let temp = 70
        for (let i = 0; i < calTime.length; i++){
            text(calTime[i] + ":" + calEvent[i], this.posX + this.s/2, this.posY + temp)
            temp += 30
        }
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class News{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(15)
        text("Daily News", this.posX + this.s/2, this.posY + 30)
        let temp = 70
        for (let i = 0; i < newsSource.length; i++){
            text(newsSource[i] + ":" + "\n" + newsTitle[i], this.posX + this.s/2, this.posY + temp)
            temp += 40
        }
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class HealthOne{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(24)

        text("Current Weight:\n" + currWeight, this.posX + (this.s/2), this.posY + (this.s2/3))
        text("Week Average:\n" + avgWeight, this.posX + (this.s/2), this.posY + (this.s2/1.5))
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

    getWeight(){
        for (let i = 0; i < weightVals.length; i++){
            if (i == 0){
                currWeight = weightVals[i]
            }
            weightSum += parseInt(weightVals[i])
            avgWeight = String(Math.round(weightSum/weightVals.length))
        }
    }

}

class HealthTwo{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(15)
        text("Todays Total Sleep:\n" + currSleep, this.posX + this.s/2, this.posY + 30)
        text("Todays Deep Sleep:\n" + sleepDeep[0], this.posX + this.s/2, this.posY + this.s2/2)
        text("Week Average (Total hrs):\n" + avgSleep, this.posX + this.s/2, this.posY + this.s2/1.2)
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

    getSleep(){
        for (let i = 0; i < sleepDay.length; i++){
            if (i == 0){
                currSleep = sleepTotal[i]
            }
            sleepSum += parseInt(sleepTotal[i])
            avgSleep = String(Math.round(sleepSum/sleepDay.length))
        }
    }

}

class MirrorTime{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        fill(this.fill)
        tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        textSize(15)
        text("Daily Mirror Time:\n" + mtTotal[0] + " mins", this.posX + this.s/2, this.posY + 30)
        text("Morning Mirror Time:\n" + mtMorning[0] + " mins", this.posX + this.s/2, this.posY + this.s2/2)
        text("Evening Mirror Time:\n" + mtEvening[0] + " mins", this.posX + this.s/2, this.posY + this.s2/1.2)
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }


}


class RightBox{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        // fill(this.fill)
        noFill()
        // tint(255, 60)
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        imageMode(CENTER)
        image(right, this.posX + (this.s/2), this.posY + (this.s2/2), 50, 50)
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

class LeftBox{
    constructor(s, s2, posX, posY, fill, text, text_fill) {
        this.s = s
        this.s2 = s2
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
        this.text_fill = text_fill
    }

    display(){
        // fill(this.fill)
        // tint(255, 60)
        noFill()
        rect(this.posX, this.posY, this.s, this.s2, 5)
        fill(this.text_fill)
        imageMode(CENTER)
        image(left, this.posX + (this.s/2), this.posY + (this.s2/2), 50, 50)
    }

    check_mouseover(){
        return mouseX >= this.posX && mouseX <= this.posX + this.s && mouseY >= this.posY && mouseY <= this.posY + this.s2;
    }

}

//set up/draw functions
let box1
let box2
let box3
let notiBox
let box5
let box6
let box7
let box8
let mtBox
let giTwo
let healthTwo
let newsBox
let exerBox
let sec
let mins
let hr
let clicked
let giCount
let healthCount
let right
let left
let curr_temp
let curr_short_forecast
let weightVals
let weightDays
let avgWeight
let currWeight
let weightSum 
let sleepTotal
let sleepLight
let sleepDeep
let sleepDay
let currSleep
let avgSleep
let sleepSum
let mtTotal
let mtMorning
let mtEvening
let calTime
let calEvent
let newsSource
let newsTitle
let notiIcon
let notiMess
let notiIndex





function preload() {
    right = loadImage('assets/right arrow.png')
    left = loadImage('assets/left arrow.png')
    weight = loadTable('./weight.csv', 'csv', 'header')
    sleep = loadTable('./sleep.csv', 'csv', 'header')
    mt = loadTable('./mirrortime.csv', 'csv', 'header')
    cal = loadTable('./calendar.csv', 'csv', 'header')
    news = loadTable('./news.csv', 'csv', 'header')
    noti = loadTable("./noti.csv", 'csv', 'header')
    textMess = loadImage('assets/text icon.png')
    email = loadImage('assets/email icon.png')
    cat = loadImage('assets/img.jpeg')
}
function setup() {
    video = createCapture(VIDEO)
    video.size(windowWidth, windowHeight)
    video.hide()
    h = 1200
    w = 1200
    size = 200
    clicked = 0
    giCount = 0
    healthCount = 0
    weightSum = 0
    weightVals = weight.getColumn("weight")
    weightDays = weight.getColumn("days")
    sleepTotal = sleep.getColumn("total")
    sleepLight = sleep.getColumn("light")
    sleepDeep = sleep.getColumn("deep")
    sleepDay = sleep.getColumn("day")
    mtTotal = mt.getColumn("total")
    mtMorning = mt.getColumn("morning")
    mtEvening = mt.getColumn("evening")
    calTime = cal.getColumn("time")
    calEvent = cal.getColumn("event")
    newsSource = news.getColumn("source")
    newsTitle = news.getColumn("title")
    notiIcon = noti.getColumn("icon")
    notiMess = noti.getColumn("message")
    sleepSum = 0
    meridian = hr < 12 ? "AM":"PM"
    createCanvas(windowWidth - 20, windowHeight - 20)
    box1 = new GIone(size, size, 65, windowHeight/2, 190, "GIone", 'black')
    giTwo = new GItwo(size, size, box1.posX, box1.posY, 190, "GItwo", 'black')
    newsBox = new News(size, size, box1.posX, box1.posY, 190, "news", 'black')
    box2 = new HealthOne(size, size, windowWidth - (size + size/4 + 35), windowHeight/2, 190, "weight", 'black')
    healthTwo = new HealthTwo(size, size, box2.posX, box2.posY, 190, "Healthtwo", 'black')
    mtBox = new MirrorTime(size, size, box2.posX, box2.posY, 190, "mirror time", 'black')
    box3 = new Clock(size, size/2, windowWidth/2 - size/2, 100, 190, "clock", 'black')
    notiBox = new Noti(size, size/2, windowWidth/2 - size/2, 205, 190, notiMess[0], 'black')
    box5 = new RightBox(size/4, size, (box1.posX + size + 5), windowHeight/2, 200, "right", 'black')
    box6 = new LeftBox(size/4, size, (box1.posX - size/4 - 5), windowHeight/2, 200, "left", 'black')
    box7 = new RightBox(size/4, size, (box2.posX + size + 5), windowHeight/2, 200, "right", 'black')
    box8 = new LeftBox(size/4, size, (box2.posX - size/4 - 5), windowHeight/2, 200, "left", 'black')
    
    box2.getWeight()
    healthTwo.getSleep()
    notiIndex = notiBox.posX + (notiBox.s/2)
}

function draw() {
    background(200)
    imageMode(CENTER)
    tint(255,255)
    image(video, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    noStroke()
    get_temp()
    sec = second()
    mins = minute()
    hr = hour()
    meridian = hr < 12 ? "AM":"PM"
    if(int(sec) < 10){
        sec = "0" + sec
    }
    if(int(mins) < 10){
        mins = "0" + mins
    }
    if(int(hr % 12) < 10){
        hr = "0" + (hr % 12)
    } else {
        hr = (hr % 12)
    }


    pickedGI = pickGI()
    pickedGI.display()
    pickedHealth = pickHealth()
    pickedHealth.display()


    box3.display()
    if (clicked == 0){
        notiBox.display()
    } else {
        notiBox.displayBigger()
    }
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    //exerBox.display()
}


//API functions
async function get_weather(){
    const response = await fetch('https://api.weather.gov/points/33.5779,-101.8552');
    const json = await response.json()
    console.log(json)
}
get_weather()

async function get_hourly_forecast(){
    const response = await fetch('https://api.weather.gov/gridpoints/LUB/48,32/forecast/hourly');
    const json = await response.json()
    console.log(json)
}
get_hourly_forecast()

async function get_forecast(){
    const response = await fetch('https://api.weather.gov/gridpoints/LUB/48,32/forecast');
    const json = await response.json()
    console.log(json)
}
get_forecast()

//DISPLAY API

async function get_temp(){
    const response = await fetch('https://api.weather.gov/gridpoints/LUB/48,32/forecast/hourly');
    const json = await response.json()
    console.log(json)
    curr_temp = json.properties.periods[0].temperature
    curr_short_forecast = json.properties.periods[0].shortForecast
}


//Page selection fucntions
function pickGI(){
    if (giCount == 0){
        return box1
    } else if (giCount == 1){
        return giTwo
    } else if(giCount == 2){
        return newsBox
    }else if (giCount > 2){
        giCount = 0
        return box1
    } else if (giCount < 0){
        giCount = 2
        return newsBox
    }
}

function pickHealth(){
    if (healthCount == 0){
        return box2
    } else if (healthCount == 1){
        return healthTwo
    } else if (healthCount == 2){
        return mtBox
    } else if (healthCount > 2){
        healthCount = 0
        return box2
    } else if (healthCount < 0){
        healthCount = 2
        return mtBox
    }
}


//mouse functions
function mousePressed() {
    if (box1.check_mouseover()){
        offsetX = mouseX - box1.posX
        offsetY = mouseY - box1.posY
    }
    if (box2.check_mouseover()){
        offsetX = mouseX - box2.posX
        offsetY = mouseY - box2.posY
    }
    if (box3.check_mouseover()){
        offsetX = mouseX - box3.posX
        offsetY = mouseY - box3.posY
    }
    if (notiBox.check_mouseover()){
        // offsetX = mouseX - notiBox.posX
        // offsetY = mouseY - notiBox.posY
        if (clicked == 1){
            notiBox.s = size
            notiBox.s2 = size/2
            notiBox.posX = notiBox.posX + notiBox.s/2
            clicked = 0
        } else if (clicked == 0){
            notiBox.s = notiBox.s * 2
            notiBox.s2 = notiBox.s2 * 2
            notiBox.posX = notiBox.posX - notiBox.s/4
            clicked = 1
        }
        offsetX = mouseX - notiBox.posX
        offsetY = mouseY - notiBox.posY
    } 
    if (box5.check_mouseover()){
        giCount += 1
    }
    if (box6.check_mouseover()){
        giCount = giCount - 1
    }
    if (box7.check_mouseover()){
        healthCount += 1
    }
    if (box8.check_mouseover()){
        healthCount = healthCount - 1
    }
}

function mouseDragged() {
    if (box1.check_mouseover()){
        box1.posX = mouseX - offsetX
        box1.posY = mouseY - offsetY
        box5.posX = (box1.posX + size + 5)
        box5.posY = box1.posY
        box6.posX = (box1.posX - size/4 - 5)
        box6.posY = box1.posY
        giTwo.posX = box1.posX
        giTwo.posY = box1.posY
        newsBox.posX = box1.posX
        newsBox.posY = box1.posY
    }
    if (box2.check_mouseover()){
        box2.posX = mouseX - offsetX
        box2.posY = mouseY - offsetY
        box7.posX = (box2.posX + size + 5)
        box7.posY = box2.posY
        box8.posX = (box2.posX - size/4 - 5)
        box8.posY = box2.posY
        healthTwo.posX = box2.posX
        healthTwo.posY = box2.posY
        mtBox.posX = box2.posX
        mtBox.posY = box2.posY
        exerBox.posX = box2.posX
        exerBox.posY = box2.posY
    }
    if (box3.check_mouseover()){
        box3.posX = mouseX - offsetX
        box3.posY = mouseY - offsetY
    }
    if (notiBox.check_mouseover()){                    //check later as the box movement is weird but works for now
        notiBox.posX = mouseX - offsetX
        notiBox.posY = mouseY - offsetY 
    }
}