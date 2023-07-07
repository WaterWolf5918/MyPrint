import type { RequestHandler } from '@sveltejs/kit'
import puppeteer from 'puppeteer';
export const GET: RequestHandler<{link: string}> = async ({url,params}) => {
	try {
        console.log(params.link)
        const uncleanedLink = params.link.replaceAll("$","/")
        console.log(uncleanedLink)
        const browser = await puppeteer.launch({headless:"new"});
        const page = await browser.newPage();

        await page.setUserAgent("facebookexternalhit/1.1")
        await page.goto(uncleanedLink,{"waitUntil":"domcontentloaded"});
        await page.setViewport({width: 1080, height: 1024});
        
        const title = await page.$eval('head > meta[property="og:title"]', element => element.content);
        const desc = await page.$eval('head > meta[property="og:description"]', element => element.content);
        const img = await page.$eval('head > meta[property="og:image"]', element => element.content);
        console.log(title)
        console.log(desc)
        console.log(img)
        // browser.close()
		return new Response(JSON.stringify({
            title: title,
            desc: desc,
            img: img
        } as App.previewJSON))
        return new Response('OK')
	}catch(error){
		// console.error(error)
		return new Response('Error')
	}
}