import {lazy} from "react"

export const MainPageAsync = lazy(async () => new Promise((resolve, reject) => {
    setTimeout(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import("./MainPage"))
    }
    , 1500)
}))
