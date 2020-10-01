import {login, logout} from "../../actions/auth";

test('should generate login action object', () => {

    const uid = "odd090989didk900ik"

    const state = login(uid)
    expect(state).toEqual({
        type: 'LOGIN',
        uid: uid
    })
})

test('should generate logout action object', () => {
    const state = logout()
    expect(state).toEqual({
        type: "LOGOUT"
    })
})