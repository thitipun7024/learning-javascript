/* var fname = "thitipun"
var lname = "pecharut"
console.log(fname,lname)
var total = fname + " " + lname
alert(total)
 */

/* var t = true
console.log(typeof t) */

//คำสั่งใช้ในการ ให้เรากรอก ข้อมูล เเล้วจะโชว์ alert
/* let t = prompt("กรอกซะ !");
if (t === "") {
    console.log("Input is empty");
    alert("not data")
} else {
    console.log("Input is not empty");
    alert("hello" + " " + t)
} */

/* let lnum = prompt("กรอกสิ่งที่อยากได้")
//ฟังชั่นการสุ่มตัวเลข # *10 เป็นการสุ่มตัวเลข 0-9 เเละปัดเศษลงให้เป็น เลขจำนวนเต็ม
 console.log(Math.floor(Math.random() * 100)); */

 //ฟังชั่น สุ่มตัวเลขเเล้วเปลี่ยนข้อความใน h1 ตามที่กรอกลงใน text fiel
 /* function shomassage() {
    let mass = document.getElementById("text").value;
    //console.log(mass)
    let text = document.getElementById("header");
    var t = Math.floor(Math.random() * 100)
    header.innerHTML = t;
    //alert(mass); 
} */

//โปรเเกรมสุ่มตัวเลข
/* function shomassage() {
    let mass = document.getElementById("text").value;
    console.log(mass)
    let text1 = document.getElementById("head2");
    console.log(text1)
    head2.innerHTML = mass;
    let text = document.getElementById("header");
    console.log(text)
    var t = Math.floor(Math.random() * 100)
    header.innerHTML = t
} */

/* console.log(2 === 2) */

//โปรเเกรมสุ่มตัวเลข
/* let loto_number = prompt("กรอกตัวเลขท่ี่จะซื้อ :")
document.getElementById("loto_number").innerHTML = loto_number
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
if (loto_number == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วย"
} else{
    document.getElementById("result").innerHTML ="เสียใจด้วย"
} */

//โปรเเกรมคำนวนเกรดง่าบที่สุด
/* let score = prompt("กรอกคะเเนน :")
if(score >= 80){
    document.getElementById("result").innerHTML = "คุณได้เกรด 4"
} else if (score >=70 ) {
    document.getElementById("result").innerHTML = "คุณได้เกรด 3"
}else if (score >=60 ) {
    document.getElementById("result").innerHTML = "คุณได้เกรด 2"
}else if (score >=50 ) {
    document.getElementById("result").innerHTML = "คุณได้เกรด 1"
}else{
    document.getElementById("result").innerHTML = "คุณไม่ผ่านในรายวิชานี้"
}
 */

//การวนลูบ
/* for (var counter = 0; counter < 5; counter ++){
   alert("hello" + counter)
}
console.log("hello wold" + counter) */

//โปรเเกรมคำนวนสินค้า
/* let qrt = prompt("จำนวนสินค้า")
for(var i = 1; i <= qrt; i ++){
    //console.log(i)
    let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
    document.getElementById("price").innerHTML += "รายการสินค้าชินที่" + i + ":" + item_price + "บาท" + "<br>"
} */


/* โปรเเกรมาสุ่มหัวก้อย*/
/* let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
for(var i = 1; i <= round ; i++){
    //console.log(i)
    var answer = prompt("หัว หริอ ก้อย")
    var random_answer = ""
    if(Math.floor(Math.random()*10) <= 4){
        console.log(random_answer)
        random_answer = "a"
    }else{
        random_answer = "s"
    }

    if(answer == random_answer){
        document.getElementById("game-list").innerHTML += "รอบที่" + i + ":" + "true" + "<br>"
    }else{
        document.getElementById("game-list").innerHTML += "รอบที่" + i + ":" + "false"+ "<br>"
    }
} */
/* โปรเเกรม loop while */
/* while(prompt("พืมพ์  exit") != "exit"){
    document.getElementById("result").innerHTML += "ไม่พิมพ์ exit" + "<br>"
} */

/* โปรเเกรม คำนวน flh เป็น celsius*/
/* function tocelsius(){
    let flh = prompt("flh :")
    let value = (flh - 32) * 5 / 9
    document.getElementById("value-flh").innerHTML = value.toFixed(1) + " " + "celsius"
}
tocelsius() */

/* โปรเเกรม คำนวน celsius เป็น flh*/
/* function toflh(){
    let c = prompt("°C :")
    let value = (c * 9/5) + 32
    document.getElementById("value-flh").innerHTML = value.toFixed(1) + " " + "°F"
}
toflh() */

/* โปรเเกรม Function */
/* function sh(userName, last){
    return "hello " + userName + " " + last
}
let ui = prompt("input name :")
alert(sh(ui, "SAK")) */

/* โปรเเกรม คำนวน flh เป็น celsius*/
/* function tocelsius(flh){
    let value = (flh - 32) * 5 / 9
    return value.toFixed(1) + " " + "celsius"
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
} */
/* โปรเเกรม คำนวน celsius เป็น flh*/
/* function toflh(){
    let value = (c * 9/5) + 32
    return value.toFixed(1) + " " + "°F"
}
alert(tocelsius(150))
display("tocelsius", tocelsius(150))
alert(tocelsius(60))
display("toflh", tocelsius(60)) */

/* โปรเเกรม onload, onclick */
/* function sayhello(){
    alert('Hello3')
}

function sayhello4(){
    alert('Hello4')
} */

/* โปรเเกรม คำนวน celsius เป็น flh*/
/*  function tocelsius(){
    let inputValue = document.getElementById("fa").value;
    let value = (inputValue - 32) * 5 / 9
    console.log(value);
    //return value.toFixed(1) + " " + "celsius"
    //console.log(value);
    display("sca", value.toFixed(1) + " " + "celsius")
} 

function toflh(){
    let inputValue2 = document.getElementById("ce").value;
    let value = (inputValue2 * 9/5) + 32
    console.log(value);
    //return value.toFixed(1) + " " + "celsius"
    //console.log(value);
    display("sflh", value.toFixed(1) + " " + "fahrenheit")
} 

function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
} */

//display("sca", tocelsius())
//console.log(display)


function bmi(){
    //console.log(weight,height)
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let floats = (height / 100).toFixed(2);
    let sumbmi =  weight / (floats * floats);
    display("value", sumbmi.toFixed(2));
    if(sumbmi < 18.5){
        display("result","ผอมเกินไป");
    }else if(sumbmi >= 18.6 && sumbmi <=24.9){
        display("result","น้ำหนักปกติ");
    }else if(sumbmi >= 25.0 && sumbmi <=29.9){
        display("result","อ้วน");
    }else{
        display("result","อ้วนมาก");
    }
   /*  if((sumbmi < 18.5)){
        display("result","ผอมเกินไป");
    }else {if ((sumbmi >= 18.5 && sumbmi <= 24.9 )) {
            display("result","น้ำหนักปกติ");
        }}; */
    //console.log(sumbmi)

}

function display(elementId, sumbmi){
    document.getElementById(elementId).innerHTML = sumbmi
}
