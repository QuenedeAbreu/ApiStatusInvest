import axios from "axios"
import * as cheerio from "cheerio"
const url = 'https://statusinvest.com.br/fundos-imobiliarios/'
export const getInfoStatusInvest = async (req, res) => {
  try {
    const fundo = req.params.fundo
    // console.log(fundo)
    const response = await axios({
      method: 'get',
      url: url.concat(fundo),
      headers: { 'User-Agent': 'Apache HTTPClient' }

    })
    const resultCherrio = cheerio.load(response.data)
    const tituloFundo = resultCherrio('#main-header > div.container.pl-2.pr-1.pl-xs-3.pr-xs-3 > div > div:nth-child(1) > h1').text()
    const valorAtual = resultCherrio('#main-2 > div.container.pb-7 > div.top-info.d-flex.flex-wrap.justify-between.mb-3.mb-md-5 > div.info.special.w-100.w-md-33.w-lg-20 > div > div:nth-child(1) > strong').text()
    res.status(200).json({
      TituloFundo: tituloFundo,
      ValorAtual: valorAtual
    })
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "Deu erro!",
      error
    })

  }
}