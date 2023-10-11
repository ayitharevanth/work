/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom"

export function Stocks(){
    const {stock} = useParams()
    return<>
        {stock}
        <br />
        hi
    </>
}