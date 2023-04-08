import {lazy, memo} from "react"

export const ArticleDetailsPageAsync = lazy(async () => new Promise((resolve, reject) => {
    setTimeout(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        resolve(import("./ArticleDetailsPage"))
    }
    , 1500)
}))

