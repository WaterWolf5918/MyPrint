import { createBar } from '$lib/helper';
import type { RequestHandler } from '@sveltejs/kit'
import { QuickDB } from "quick.db";
const db = new QuickDB({ filePath: 'database.sqlite'})
export const POST: RequestHandler = async ({request}) => {
	try {
        // await db.set("userInfo", { difficulty: "Easy" });
        let info = {
            "timestamp":"",
            "title":"",
            "desc":"",
            "link":"",
            "priority":"",
            "userAgent":""
        }
        info = await request.json()
        await db.push("tickets",info)
        // console.table(info)
        console.log(createBar("| New ticket recived {RESTAPI} |"))
        console.log(`Ticket Saved To Database`)
        console.log(`Ticket Data`)
        console.log(`    Title ${info.title}`      )
        console.log(`    Desc ${info.desc}`        )
        console.log(`    Link ${info.link}`        )
        console.log(`    Priority ${info.priority}`)
        console.log(`    Time ${new Date(info.timestamp).toLocaleString()}`)
        console.log(createBar())

		return new Response('')
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}