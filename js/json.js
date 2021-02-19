
/*
function loadItems(){
    return fetch('data.json').then(response => response.json()).then(json=> console.log(json.key));
}

loadItems().then(key=> {
    console.log(key);
})
.catch(console.log);

*/

/*
let user_text = {
    "key": "user",
    "personnel": 1
}

let json = JSON.stringify(user_text);
console.log(json);
*/

var req = new XMLHttpRequest();
req.open("GET", "https://mapleing.herokuapp.com/");
req.send();
