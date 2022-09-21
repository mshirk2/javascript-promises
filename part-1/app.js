let url = 'http://numbersapi.com/'
let num = 9

// 1.
axios.get(`${url}${num}?json`)
    .then(data => {console.log(data)});

// 2.
let nums = [2,9]
axios.get(`${url}${nums}?json`)
    .then(data => {console.log(data)});

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return axios.get(`${url}${num}?json`);
    })
).then(data => {console.log(data)})
.then(res => { 
    res.forEach(data => 
        document.getElementById('container')
        .append(`${data.text}`)
    );
});