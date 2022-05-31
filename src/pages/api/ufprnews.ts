import * as cheerio from "cheerio"


export default async function handler(req, res) {

    const response = await fetch(`https://www.ufpr.br/portalufpr/mais-noticias-sobre-gestao/`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('.titulo').first().text()
    const abstract = $('div.chamada').first().text()

    res.status(200).json({ title, abstract })
  }