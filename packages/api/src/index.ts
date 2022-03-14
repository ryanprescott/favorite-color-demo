import express, { Request, Response } from "express"
import { readFile } from "fs/promises"
import { Color } from "@ryanprescott/favorite-color-demo-shared"

import cors from "cors"

const app = express()
const port = 3001

app.use(cors())

readFile('./private/colors.json', {
    encoding: "utf8"
}).then(
    (value) => {

        const colors: Color[] = JSON.parse(value);

        app.get('/colors', (_: Request, res: Response) => {
            res.send(colors)
        })

        app.listen(port,
            () => { console.log(`Server listening on port ${port}`) }
        )

    }
)
