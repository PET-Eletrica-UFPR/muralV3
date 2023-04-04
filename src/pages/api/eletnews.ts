import * as cheerio from "cheerio"


export default async function handler(req, res) {

    const response = await fetch(`https://ufpr.br/mais-noticias/`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const title = $('div.uc_post_list_title').eq(1).text()
    const abstract = $('div.uc_post_content').eq(1).text()
    res.status(200).json({ title, abstract })
  }
