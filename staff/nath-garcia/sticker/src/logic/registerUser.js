function registerUser(name, username, password, callback){
    const xhr = new XMLHttpRequest

    xh.addEventListener('load', event => {
        //const { target: { status } } = event
        const status = event.target.status

        if (status === 201)
        callback(null)
        else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        }else callback(new Error('server error'))
    })

        xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

        xhr.setRequestHeader('Content-Type', 'applicaction/json')

        const data = { name, username, password }

        const json = JSON.stringify(data)

        xhr.send(json)
}

/*function registerUser(name, username, password, callback) {
    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', event => {
        //const { target: { status } } = event
        const status = event.target.status

        if (status === 201)
            callback(null)
        else if (status >= 400 && status < 500) {
            const json = event.target.responseText

            const data = JSON.parse(json)

            callback(new Error(data.error))
        } else callback(new Error('server error'))
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { name, username, password }

    const json = JSON.stringify(data)

    xhr.send(json)
}*/