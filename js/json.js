

function loadItems(){
    return fetch('js/data.json').then(response => console.log(response));
}

loadItems().then(items=> {

})
.catch(console.log);



/*
let user_text = {
    "key": "user",
    "personnel": 1
}

let json = JSON.stringify(user_text);
console.log(json);
*/
