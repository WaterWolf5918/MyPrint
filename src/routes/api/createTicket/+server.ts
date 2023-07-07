import { ServerCreateTicket } from '$lib/database';
import { createBar } from '$lib/helper';
import type { RequestHandler } from '@sveltejs/kit'
export const POST: RequestHandler = async ({request}) => {
	try {

        // await db.set("userInfo", { difficulty: "Easy" });
        let info: ticketBuilder = {
            "timestamp":0,
            "title":"",
            "desc":"",
            "link":"",
            "priority":0,
            "userAgent":""
        }
        info = await request.json()
        ServerCreateTicket({
            "timestamp":info.timestamp,
            "title":info.title,
            "desc":info.desc,
            "link":info.link,
            "priority":info.priority,
            "userAgent":info.userAgent
        })
        // await db.push("tickets",info)
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

		return new Response(JSON.stringify({
            "succes":true
        }))
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}