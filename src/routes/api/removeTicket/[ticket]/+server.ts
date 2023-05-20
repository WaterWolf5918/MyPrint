import type { RequestHandler } from '@sveltejs/kit'
import { QuickDB } from "quick.db";
const db = new QuickDB({ filePath: 'database.sqlite'})
export const DELETE: RequestHandler<{ticket: string}> = async ({url,params}) => {
	try {
        let match = false
        console.log(params.ticket)
        const tickets = await db.get("tickets")
        // params.ticket = ""
        for(let i=0;i< tickets.length; i++){
            console.log(tickets[i].title + " | " + i)
            if (tickets[i].title == params.ticket){
                match = true
                console.log(`[${i}]${tickets[i].title} == #param{${params.ticket}} | removing from database`)
                tickets.splice(i,1)
                db.set('tickets',tickets)
            }
        }
        if (match == false){
            return new Response(JSON.stringify({
                "Error": "paramNoDatabase",
                "What": "The ticket provided can't be found in the datebase. Did you spelled it right?"
            }))
        }
		return new Response(JSON.stringify({
            "Success": "paramRemoveDatabase",
            "What": `Removed ticket from database.`
        }))
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}