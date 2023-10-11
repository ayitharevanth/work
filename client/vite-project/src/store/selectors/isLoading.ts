/* eslint-disable @typescript-eslint/no-unused-vars */
import {userState} from "../atoms/user"
import { selector } from "recoil"


export const isLoading = selector({
    key:"isLoading",
    get:({get})=>{
        const state = get(userState)
        return state.loadering
    }
})