function order() {
let username = document.getElementById("username").value;
let robux = document.getElementById("robux").value;

if(username == "") {
alert("Username wajib diisi!");
return;
}

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
username: username,
robux: robux,
status: "Pending"
});

localStorage.setItem("orders", JSON.stringify(orders));

alert("Order berhasil! Tunggu admin memproses.");
}