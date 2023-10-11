/* eslint-disable @typescript-eslint/no-unused-vars */
import {userState} from "../atoms/user"
import { selector } from "recoil"


export const usernameState = selector({
    key:"usernameState",
    get:({get})=>{
        const state = get(userState)
        return state.username
    }
})