const url = `https://jsonplaceholder.typicode.com/posts`;

function loadDoc() {
  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(`got Success fetching all the posts   `);
      if (response.status == 200) {
        let posts = response;
        console.log("Axios");
        console.log(posts);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(`got   Error`);
      console.log(error);
    });
}

function tempetur() {
  let city = document.getElementById("city").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6abf8802df77ac560227b518149b6d5`,
    { method: "GET" }
  )
    .then((res) => {
      console.log("fetch");
      console.log(res);
      return res.json();
      // if(res.status == 200){
      //     return res.json();
      // }
      console.log("1");
    })
    .then((data) => {
      // console.log(data.main);
      // console.log(data.main.temp);
      // console.log(data.main.temp_max);
      // console.log(data.main.temp_min);

      console.log("2");

      document.body.innerHTML += `<p>temp = ${data.main.temp}</p>`;
      document.body.innerHTML += `<p>temp MAX = ${data.main.temp_max}</p>`;
      document.body.innerHTML += `<p>temp MIN = ${data.main.temp_min}</p>`;
    })
    .catch((err) => {
      // console.log(err);
      // document.body.innerHTML += `<p>${city} NOT EXIST</p>`;
      console.log("3");
    });
}

//targil 5 


// A
function tempeturCoordinates() {
  let latitude = document.getElementById("latitude");
  let longitude = document.getElementById("longitude");
  
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=d6abf8802df77ac560227b518149b6d5`,
    { method: "GET" }
  )
    .then((res) => {
      console.log("fetch");
      console.log(res);
      return res.json();
    })
    .then((data) => {
      document.body.innerHTML += `<p>temp = ${data.main.temp}</p>`;
      document.body.innerHTML += `<p>temp MAX = ${data.main.temp_max}</p>`;
      document.body.innerHTML += `<p>temp MIN = ${data.main.temp_min}</p>`;
    })
    .catch((err) => {
      console.log(err);
      document.body.innerHTML += `<p>${city} NOT EXIST</p>`;
    });
}


//B
// let button = document.getElementById("get-location");
// button.addEventListener("click", function() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     console.log(lat);
//     console.log(long);
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d6abf8802df77ac560227b518149b6d5`,
//       { method: "GET" }
//     )
//       .then((res) => {
//         console.log("fetch");
//         console.log(res);
//         return res.json();
//       })
//       .then((data) => {
//         document.body.innerHTML += `<p>temp = ${data.main.temp}</p>`;
//         document.body.innerHTML += `<p>temp MAX = ${data.main.temp_max}</p>`;
//         document.body.innerHTML += `<p>temp MIN = ${data.main.temp_min}</p>`;
//       })
//       .catch((err) => {
//         console.log(err);
//         document.body.innerHTML += `<p>${city} NOT EXIST</p>`;
//       });
//   });
// });
function show(){

  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d6abf8802df77ac560227b518149b6d5`,
      { method: "GET" }
    )
      .then((res) => {
        console.log("fetch");
        console.log(res);
        return res.json();
      })
      .then((data) => {
        document.body.innerHTML += `<p>temp = ${data.main.temp}</p>`;
        document.body.innerHTML += `<p>temp MAX = ${data.main.temp_max}</p>`;
        document.body.innerHTML += `<p>temp MIN = ${data.main.temp_min}</p>`;
      })
      .catch((err) => {
        console.log(err);
        document.body.innerHTML += `<p>${city} NOT EXIST</p>`;
      });
  });
}