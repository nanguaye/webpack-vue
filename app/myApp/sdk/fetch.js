/**
 * Created by nangua on 16/11/21.
 */

let myFetch = function (url, method) {
    
    let settings = {headers: {
        'Cache-Control': 'no-cache',  
        'Accept': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'token': '**********'}
    }
    if(method === 'GET') {
        settings.method = 'GET'
    }
    if(method === 'POST') {
        settings.method = 'POST'
    }
    // 返回一个promise
    return fetch(url, settings).then((res)=> {
        if (res.ok) {
           return res.json().then((val)=> {
                return val
            })
        } else {
            return res.statusText
        }
    }).catch((err)=> {
        return err
    })
}

export default myFetch