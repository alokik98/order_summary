const d = new Date();


let getDate = document.getElementById("date");
let btn1 = document.getElementById("btn");
let getitemname = document.getElementById("itemname");
let getseller = document.getElementById("sellername");
let getquan = document.getElementById("quantity");
let getperquan = document.getElementById("perquan");
let gettime = document.getElementById("time");
let input11 = document.getElementById("input1");

getDate.innerText =
  d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getMonth() + 1);

function setTimeIn() {
  if (btn1.innerText == "Clock In") {
    btn1.style.backgroundColor = "red";
    btn1.innerText = "Clock Out";
    btn1.style.borderColor = "white";
    document.getElementById("timeshow").innerText = "";
    document.getElementById("timeshow").innerText =
      d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById("timeshow").style.color = "darkgreen";
  } else {
    btn1.style.backgroundColor = "darkgreen";
    btn1.innerText = "Clock In";
    btn1.style.borderColor = "white";
    document.getElementById("timeshow").innerText +=
      "-" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById("timeshow").style.color = "red";
  }
}

function addrow() {
  console.log("row added");
  document.getElementById("rowdiv").innerHTML += `
    <div class="row bg-light p-2 mx-2 box_radius mt-2" >
    <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
        <div>
            <p class="text-center fw-bold pt-1" style="line-height: 9px; font-size: 16px;">Item</p>
        </div>
        <div>
            <input type="text" style="width: 97%;" id="itemname">
        </div>
    </div>
    <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
     <div>
         <p class="text-center fw-bold pt-1"
         style="line-height: 9px; font-size: 16px;">Seller Name</p>
     </div>
     <div>
         <input type="text" style="width: 97%;" id="sellername">
     </div>
 </div>
 <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
     <div>
         <p class="text-center fw-bold pt-1" style="line-height: 9px; font-size: 16px;">Time</p>
     </div>
     <div>
         <input type="text" style="width: 97%;" id="time">
     </div>
 </div>
 <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
     <div>
         <p class="text-center fw-bold pt-1" style="line-height: 9px; font-size: 16px;">Qty.</p>
     </div>
     <div>
         <input type="text" style="width: 97%;" id="quantity">
     </div>
 </div>
 <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
     <div>
         <p class="text-center fw-bold pt-1" style="line-height: 9px; font-size: 16px;">Rs./Qty.</p>
     </div>
     <div>
         <input type="text" style="width: 97%;" id="perquan">
     </div>
 </div>
 <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
     <div>
         <p class="text-center fw-bold pt-1"
         style="line-height: 9px; font-size: 16px;">Amount</p>
     </div>
     <div>
         <input type="text" style="width: 97%;" id="amnt">
     </div>
 </div>
</div> 
    `;
}

function deleterow() {
  if (document.getElementById("rowdiv").childElementCount > 1) {
    var select = document.getElementById("rowdiv");
    select.removeChild(select.lastElementChild);
  }
}

function mouse() {
  console.log("mouse down");
  input11.style.borderColor = "white";
}

function savedetails() {
  console.log("button clicked!");
  // console.log(gettime.value);
  console.log(getitemname.value);
  console.log(getseller.value);
  console.log(getquan.value);
  console.log(getperquan.value);
  createTable();
  getitemname.value = "";
  getseller.value = "";
  getquan.value = "";
  getperquan.value = "";
  document.getElementById("amnt").value = "";
}

function calamount() {
  // console.log("amount is selected");
  // console.log(getquan.value);
  document.getElementById("amnt").value = getquan.value * getperquan.value;
}

function createTable() {
  console.log("table will be created");
}

function mousover() {
  console.log("mouse over");
}

function savePaymentDetails() {
  var item = document.getElementById("p_itemname");
  var date = document.getElementById("p_date");
  var time = document.getElementById("p_time");
  var totalAmount = document.getElementById("p_amount");
  console.log(item.value);
  console.log(date.value);
  console.log(time.value);
  console.log(totalAmount.value);
}

