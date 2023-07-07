import { ServerGetTickets } from '$lib/database';
import { createBar } from '$lib/helper';
import type { RequestHandler } from '@sveltejs/kit'
export const GET: RequestHandler = async ({url}) => {
	try {
        const tickets = await ServerGetTickets()
		
        for(let i=0;i < tickets.length;i++){
			console.log(createBar(`| Ticket [${i}] |`,"="))
			console.log(`    Title "${tickets[i].title}"`    )
			console.log(`    Desc "${tickets[i].description}"`)
			console.log(`    Link @${tickets[i].link}`       )
			console.log(`    Priority ${tickets[i].priority}`)
			console.log(`    Time ${new Date(tickets[i].timestamp).toLocaleString()}`)
			console.log(createBar("","="))
		}
		return new Response(JSON.stringify(tickets))
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}