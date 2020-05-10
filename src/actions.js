import moment from "moment"
import {store} from './index'

export const SET_USER = 'SET_USER'
export const LOADING_LOGIN = 'LOADING_LOGIN'
export const LOADING_SIGNUP = 'LOADING_SIGNUP'
export const SET_REQUEST_VALIDITY = 'SET_REQUEST_VALIDITY'

export const apiurl = 'https://bukata-server.herokuapp.com'
// export const apiurl = 'http://localhost:8080'

export function getBukataList (){
    return dispatch => {
        fetch(`${apiurl}/api/bukata/all`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(error => {
                // console.log(error)
            })
    }
  }

export function signup (objs, success, error) {
    return dispatch => {
        dispatch({ type: LOADING_SIGNUP })
        fetch(`${apiurl}/api/users/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(objs),
          })
            .then((raw) => raw.json())
            .then((data) => {
                dispatch({ type: LOADING_SIGNUP })
                if(data.success) {
                    // console.log(data)
                    dispatch(
                        login(
                            objs.user_phone, 
                            objs.password,
                            (data) => {
                                success(data)
                                const { user, token } = data
                                dispatch({ type: SET_USER, payload: user })
                                localStorage.setItem('bk_token', JSON.stringify(token))
                            },
                            err => {
                                error(err)
                            }
                        )
                    )
                } else {
                    let msg = Object.values(data)[0]
                    // console.log('err', msg)
                    error(msg)
                }
            })
            .catch((error) => {
                dispatch({ type: LOADING_SIGNUP })
                // console.log(error)
            });
    }
}

export function login (phone, password, success, error) {
    return dispatch => {
        dispatch({ type: LOADING_LOGIN })
        fetch(`${apiurl}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_phone: phone, password })
        })
        .then(raw => raw.json())
        .then(data => {
            dispatch({ type: LOADING_LOGIN })
            if(data.success) {
                // console.log(data)
                success(data)
                const { user, token } = data
                dispatch({ type: SET_USER, payload: user })
                dispatch(getLastRequestDate(user.id))
                console.log('got here', user.id)
                localStorage.setItem('bk_token', JSON.stringify(token))
            } else {
                let msg = Object.values(data)[0]
                // console.log('err', msg)
                error(msg)
            }
        })
        .catch(err => {
            dispatch({ type: LOADING_LOGIN })
            // console.log(err)
        })
    }
}

export function init(history, callback) {
    return dispatch => {
        let token = localStorage.getItem('bk_token')

        if(token) {
            token = JSON.parse(token)
            /**
             * Token present 
             * verifyToken */
            getUserProfile(
                token,
                data => {
                    /** 
                     * Token is valid
                     * navigate user to dashboard */
                    callback()
                    const { user } = data
                    dispatch({ type: SET_USER, payload: user })
                    dispatch(getLastRequestDate(user.id))
                    history.push('/dashboard')
                },
                err => {
                    /** 
                     * Token is invalid
                     * navigate user to auth */
                    callback()
                    // console.log(err)
                    localStorage.removeItem('bk_token')
                    history.push('/')
                    console.log('Token expired')
                }
            )
        } else {
            /** 
             * No token found
             * navigate user to auth page
             */
            callback()
            history.push('/')
        }
    }
}

function getUserProfile(token, success, error) {
    // console.log(token)
    fetch(`${apiurl}/api/users/profile`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    .then(raw => raw.json())
    .then(data => {
        if(data.success) {
            // console.log(data)
            success(data)
        } else {
            // let msg = Object.values(data)[0]
            // console.log('err', data)
            error(data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

export function makeProtectedGetRequest(url, success, error) {
    let token = JSON.parse(localStorage.getItem('bk_token'))

    if(token) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
        .then(raw => raw.json())
        .then(data => {
            if(data.success) {
                // console.log(data)
                success(data.results)
            } else {
                console.log('err', data)
                error(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getLastRequestDate = (id) => {
    return dispatch => {
        // const { id } = store.getState().user
        makeProtectedGetRequest(
            `${apiurl}/api/bukata/last/${id}`,
            ({ date }) => {
              if(date) {
                let validDate = moment(date).add(15, 'days');
      
                let result = validDate.isBefore(moment())
                console.log(validDate.format('DD-MM-YYYY'), result)
                dispatch({ type: SET_REQUEST_VALIDITY, payload: result})
              }
            },
            err => {
              console.log(err)
            }
          )
    }
  }