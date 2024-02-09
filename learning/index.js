/*              currying & closures        */
// function x(){
//     for(let i=1;i<=4;i++){
//         setTimeout(function(){console.log(i)},1000);
//     }
//     console.log("Hiii");
// }
// x();

/*              XMLHttp Request             */

// get('www',()=>{
//     console.log("Hiii")
// });
// let xhr=new XMLHttpRequest();
// // console.log(xml)

// xhr.open('GET','www');
// xhr.send();
// xhr.onload=function(){
//     console.log(xhr.response);
// }
// xhr.onerror=function(){
//     console.log("Request failed")
// }
/*
function get(url, callback) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url);
    // xhr.setRequestHeader('Content-Type','application/json');
    xhr.send();

    xhr.onload = function () {
        try{
        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log(xhr.getResponseHeader('Content-length'))
            console.log(xhr.getAllResponseHeaders('Content-Type'))
            xhr.abort();      
            callback(xhr.response);
        } else {
            console.error('Request failed with status', xhr.status);
        }
        }
        catch(err){
            console.log(err);
        }
    };
}

get('table.csv', () => {
    console.log('Hiii');
},false);

*/
let xhr = new XMLHttpRequest();

let json = JSON.stringify({
  name: "John",
  surname: "Smith"
});

xhr.open("POST", '/submit')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.send(json);

