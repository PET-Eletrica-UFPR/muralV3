import * as cheerio from "cheerio"


export default async function handler(req, res) {

    const response = await fetch(`https://ufpr.br/reitor-da-ufpr-recebe-prefeituras-para-parcerias-de-pesquisa-e-extensao-em-palotina/`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('.h1').first().text()
    const abstract = $('.p').first().text()

    res.status(200).json({ title, abstract })
  }
