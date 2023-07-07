import type { RequestHandler } from '@sveltejs/kit'
import { QuickDB } from "quick.db";
import * as os from 'os'
import { createBar } from '$lib/helper';
const db = new QuickDB({ filePath: 'database.sqlite'})
export const GET: RequestHandler = async ({url}) => {
	try {

        console.log(createBar("| Heath Check {RESTAPI} |"))
        console.log(`Server Heath OK`)
        console.log(`Term Columns #${process.stdout.columns}`)
        console.log(`Term Rows #${process.stdout.rows}`)
        console.log(`System Uptime ${os.uptime /60 /60} Hours`)
        console.log(createBar())
		return new Response("OK")
	}catch(error){
		console.error(error)
		return new Response('Error')
	}
}