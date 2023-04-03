import * as cheerio from "cheerio"


export default async function handler(req, res) {

    const response = await fetch(`https://ufpr.br/mais-noticias/`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('.a').first().text()
    const abstract = $('.#text').first().text()

    res.status(200).json({ title, abstract })
  }
