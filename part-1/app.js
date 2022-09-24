let url = 'http://numbersapi.com'
let num = 9

// // 1.
// axios.get(`${url}/${num}?json`)
//     .then(res => {console.log(res.data)});

// // 2.
// let nums = [2,9]
// axios.get(`${url}/${nums}?json`)
//     .then(res => {console.log(res.data)});

// 3.
Promise.all(
    Array.from({ length: 4 }, () => {
        return axios.get(`${url}/${num}?json`);
    })
).then(res => { 
    console.log(res)
    res.forEach(fact =>
        $('#container').append(`<p>${fact.data.text}</p>`)
    )});