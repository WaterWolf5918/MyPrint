import { onMount } from "svelte"
import { writable } from "svelte/store"

interface TicketObject {
    timestamp: Date,
    title: string,
    desc: string,
    link: string,
    priority: number
}
// export const dashboardURL = "/dashboard"
export const dashboardURL = false
export function getDashboardURL(){
    return dashboardURL ? `${window.location.origin}/dashboard` : `${window.location.origin}`
}
// console.log(dashboardURL ? `${window.location.origin}/dashboard` : `${window.location.origin}`)
// onMount(() => {
//     dashboardURL = "/dashboard"
//     console.log(dashboardURL)
//     // dashboardURL = window.location.origin
// })
export const messageList = writable <TicketObject[]>([])
export function newTicket(title: string,desc: string, link: string, priority: number){
    messageList.update(t => [...t,{timestamp: new Date(),title:title,desc:desc,link:link,priority:priority}])
}