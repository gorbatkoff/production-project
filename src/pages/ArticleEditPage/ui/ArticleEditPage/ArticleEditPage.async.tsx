import {lazy} from "react"

export const ArticleEditPageAsync = lazy(async () => new Promise((resolve, reject) => {
    setTimeout(() =>
    // @ts-ignore
    {
        // @ts-ignore
        resolve(import("./ArticleEditPage"))
    }
    , 1500)
}))
