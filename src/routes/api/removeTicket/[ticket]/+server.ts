import { ServerRemoveTicketByTitle } from '$lib/database';
import type { RequestHandler } from '@sveltejs/kit'
export const DELETE: RequestHandler<{ticket: string}> = async ({url,params}) => {
	try {
        let match = false
        console.log(params.ticket)
        ServerRemoveTicketByTitle(params.ticket)




		return new Response(JSON.stringify({
            "Success": "paramRemoveDatabase",
            "What": `Removed ticket from database.`
        }))
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}