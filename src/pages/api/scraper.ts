import * as cheerio from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
const cors = Cors({
    methods: ['GET', 'HEAD'],
  })

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
    const response = await fetch(`https://xkcd.com/`, cors)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('*')

    return res.json({
        title: title,

    })

    } catch(e) {
        return e
    }

}   