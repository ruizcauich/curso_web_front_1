const contenedorRespuesta = document.getElementById("respuesta");
const usersTable = document.getElementById("usersTable");
// let peticion = fetch("https://jsonplaceholder.typicode.com/users"); 

// console.log(peticion);

// peticion.then(function(respuesa){
//     // console.log(respuesa.text())
//     respuesa.text().then(function(json){
        
//         contenedorRespuesta.innerText = json;
//     })
    
// })

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response)=>response.text())
  .then((users)=> {
    contenedorRespuesta.innerHTML = users;
    listUserNames(JSON.parse(users));
  })

function listUserNames(users){
    for(user of users){
        let td = document.createElement("TD");
        let tr = document.createElement("TR");
        td.innerText = user.name;

        tr.appendChild(td);
        usersTable.appendChild(tr);

    }
}


