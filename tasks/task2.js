
let users = []

function addUser(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    if(name,age,phone,address){
        let user = {
            name: name,
            age: age,
            phone: phone,
            address: address
        };
        users.push(user);
        displayUsers();
    }
}

function displayUsers() {
    let tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
    users.forEach(function(user) {
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let ageCell = row.insertCell(1);
        let phoneCell = row.insertCell(2);
        let addressCell = row.insertCell(3);

        nameCell.innerHTML = user.name;
        ageCell.innerHTML = user.age;
        phoneCell.innerHTML = user.phone;
        addressCell.innerHTML = user.address;
    });
}
