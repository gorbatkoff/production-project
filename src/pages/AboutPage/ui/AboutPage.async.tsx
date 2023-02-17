import {lazy} from "react"

export const AboutPageAsync = lazy(async () => new Promise((resolve, reject) => {
    setTimeout(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import("./AboutPage"))
    }
    , 1500)
}))
