/* eslint-disable @typescript-eslint/no-unused-vars */
import {atom} from "recoil"

export const SentimentState = atom({

    key:'SentimentState',
    default:{
        sentiment_value:0
    }
})
