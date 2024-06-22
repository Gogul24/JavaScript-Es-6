// patch api
fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'gokul',
        email: 'gokul@gmail.com' 
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))