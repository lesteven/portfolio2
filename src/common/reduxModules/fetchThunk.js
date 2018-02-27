require('es6-promise').polyfill();
require('isomorphic-fetch');
// action thunk

export function fetchData(url, cb) {
    return (dispatch) => {
        fetch(url, {credentials: 'same-origin'})
            .then(res => res.json())
            .then(data => {
                cb(data)
            })
    }
}

export function postData(url, method, data, cb) {
    console.log('postData called');
    return (dispatch) => {
        fetch(url, {
            method: method,
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (cb) {
                cb(data)
            }
        })
        .catch(function(err) {
            console.log('there was an error', err);
        });
    }
}
