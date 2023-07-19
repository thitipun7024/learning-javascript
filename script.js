/* window.onload = function(){
    let msg = "hello world"
    alert(msg)
} */

// ฟังชันโชว์ alert ข้อมูลใน text fiel
/* function shomassage() {
    let mass = document.getElementById("text").value;
    console.log(mass)
    alert(mass);
} */

//ฟังชั่น เปลี่ยนข้อความใน h1 ตามที่กรอกลงใน text fiel
/* function shomassage() {
    let mass = document.getElementById("text").value;
    //console.log(mass)
    let text = document.getElementById("header");
    header.innerHTML = mass;
    alert(mass);
} */

//ฟังชั่นเเจ้ง เมื่อไม่ได้กรอก username or password #1
/* function submitForm() {
    let name = document.forms["form"]["username"].value;
    let pass = document.forms["form"]["password"].value;
    if (name === "" || pass === "") {
        alert("username or password be filled out.")
    }
    return false;
} */


window.onload = function(){
    //เรียกใช้ api
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://www.melivecode.com/api/users");
    xhttp.send();
    //ถ้ามีอะไรเกิดขึ้นเเล้ว หรือเรียกข้อมูล user มาเเล้ว จะให้ทำอะไรต่อ
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            //นำ JSON มาเเปลงจาก text ให้เป็น object เพื่อให้ JS เรียกใช้งานได้ง่ายๆ
            let data = JSON.parse(this.responseText);
            //console.log(data)
            let userlist = document.getElementById("userlist");
            //เป็นฟังชั่น ในการเเจกเเจงค่าใน JSON
            data.map(user => {
                console.log(user.username)
                //เป็นการสร้าง element ขึ้นมาใหม่ ที่เป็นประเภท list
                let newlistitem = document.createElement("li")
                //เป็นคำสั่งที่จะใส้ค่าอะไรลงไปใน listitem 
                //newlistitem.textContent = user.username;
                //เเต่ถ้าเพิ่ม tag <img /> ให้ใช้
                newlistitem.innerHTML = user.fname + " " + user.lname //+ สามารถเพื่มได้เลื่อยๆ
                newlistitem.innerHTML += '<img src="'+user.avatar+'" height="150px" />'
                userlist.appendChild(newlistitem)
                })
            
        }
    }
}
