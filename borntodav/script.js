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