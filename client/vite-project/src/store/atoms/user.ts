/* eslint-disable @typescript-eslint/no-unused-vars */
import {atom} from "recoil"

export const userState = atom({
    key:'userState',
    default: {
        loadering:true,
        username : ""
    }
})


