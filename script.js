//Text File Data
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',function() {
    //Create on AJAX Requeat
    let xhr = new XMLHttpRequest();

    //prepare the request
    xhr.open('GET','A.text',true);

    //send the request
    xhr.send();

    //process the request
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            displayTextData(data);
        }
    };
});

//display the Text File Data
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function() {
    //Create on Ajax Request
    let xhr = new XMLHttpRequest();

    //prepare the request
    xhr.open('GET','mobile.json',true);

    //send the request
    xhr.send();

    //process the request
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJsonData(mobile);
        }
    };

});
//display the json (mobile.json) File Data
let displayJsonData = (mobile) => {
    let htmlTemplate = ' ';
        htmlTemplate = `<ul class="list-group"> 
                            <li class="list-group-item active">Brand: ${mobile.brand}</li>
                            <li class="list-group-item ">Modal: ${mobile.model}</li>
                            <li class="list-group-item active">Price: ${mobile.price}</li>
                            <li class="list-group-item ">Colour: ${mobile.color}</li>
                            <li class="list-group-item active">Storage: ${mobile.storage}</li>
                            <li class="list-group-item ">release_year: ${mobile.release_year}</li>
                        </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

//API file Data
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',function(){
    //Create on Ajax Request
    let xhr = new XMLHttpRequest();

    //prepare the request
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);

    //send the request
    xhr.send();

    //process the request
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = xhr.responseText;
            let users = JSON.parse(data);
            displayApiData(users);
        }
    };
});

//display api function
let displayApiData = (users) => {
    let htmlTemplate = '';
    //array object ko accessss karne ke liye loop and +=
    for(let api of users) {
        htmlTemplate += `<ul class="list-group">
                            <li class="list-group-item active">ID: ${api.id}</li>
                            <li class="list-group-item ">Name: ${api.name}</li>
                            <li class="list-group-item active">Username: ${api.username}</li>
                            <li class="list-group-item ">Email: ${api.email}</li>
                            <li class="list-group-item active">Street: ${api.address.street}</li>
                            <li class="list-group-item ">Suite: ${api.address.suite}</li>
                            <li class="list-group-item active">City: ${api.address.city}</li>
                            <li class="list-group-item ">Zipcode: ${api.address.zipcode}</li>
                        </ul>`;
    }
        document.querySelector('#api-card').innerHTML = htmlTemplate;
};