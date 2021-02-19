
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

var reader = new XMLHttpRequest();
	reader.open('GET', G_CONTEXT_PATH + '/data/sample.txt', true);
	reader.overrideMimeType('text/plain; charset=utf-8');
	reader.onload = function() {
		if (reader.status == 200) {
			console.log(reader.responseText);
		};
	};
reader.send(null);