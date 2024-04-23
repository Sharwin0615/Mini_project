// function createTable(data) {
//     var table = document.createElement('table');
//     var thead = table.createTHead();
//     var tbody = table.createTBody();

//     // Create table header
//     var headerRow = thead.insertRow();
//     Object.keys(data[0]).forEach(function(key) {
//         var th = document.createElement('th');
//         th.textContent = key;
//         headerRow.appendChild(th);
//     });

//     // Create table rows
//     data.forEach(function(item) {
//         var row = tbody.insertRow();
//         Object.values(item).forEach(function(value) {
//             var cell = row.insertCell();
//             cell.textContent = value;
//         });
//     });

//     return table;
// }

// // Fetch data from Python file
// fetch('data.py')
//     .then(response => response.text())
//     .then(data => {
//         // Evaluate the Python code to get the data
//         eval(data);

//         // Create and append the table to the HTML body
//         document.body.appendChild(createTable(data));
//     })
//     .catch(error => console.error('Error fetching data:', error));

function submit_button() {
    if(document.getElementById("textinput").value == "") {
        document.getElementById("textinput").placeholder="Please enter some text"
    } else {
        document.getElementById("textinput").remove()
        document.getElementById("submitbutton").remove() 
        const parendiv = document.createElement("div");
        parendiv.style.display = "flex";
        parendiv.style.alignItems = "center";
        parendiv.style.justifyContent = "center";
        parendiv.style.height = "100vh";
        
        const childdiv1 = document.createElement("div");
        const childdiv2 = document.createElement("div");
        
        childdiv1.style.flex = "1";
        childdiv2.style.flex = "1";

        childdiv1.innerHTML = "div1"
        childdiv2.innerHTML = "div2"

        childdiv1.style.alignItems = "center";
        childdiv1.style.justifyContent = "center";

        childdiv2.style.alignItems = "center";
        childdiv2.style.justifyContent = "center";
        
        parendiv.appendChild(childdiv1);
        parendiv.appendChild(childdiv2);
        
        document.body.appendChild(parendiv);
    }
}
const button = document.getElementById("submitbutton")
button.addEventListener("click", submit_button)