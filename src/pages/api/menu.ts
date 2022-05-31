import * as cheerio from "cheerio"


export default async function handler(req, res) {

    const response = await fetch(`https://pra.ufpr.br/ru/ru-centro-politecnico/`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const day = $('p').first().html()
    const menu = $('table').first().html()

    res.status(200).json({ day, menu })
  }