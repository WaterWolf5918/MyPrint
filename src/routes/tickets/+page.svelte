<script lang="ts">
    import { onMount } from "svelte";
    import TicketMaster from "../../components/ticket-Master.svelte";
    import TicketHolderMaster from "../../components/ticketHolder-Master.svelte";
    let tickets: string | any[] = []
    let cTickets: any[] = []
    let hTickets: any[] = []
    let mTickets: any[] = []
    let lTickets: any[] = []
    let nTickets: any[] = []
    onMount(async ()=>{
        tickets = await (await fetch('./api/getTickets',{})).json()
        for(let i = 0; i < tickets.length; i++){
            console.log(tickets[i].priority)
            switch(tickets[i].priority){
                case 5:
                    cTickets = [...cTickets, tickets[i]]
                    break
                case 4:
                    hTickets = [...hTickets, tickets[i]]
                    break 
                case 3:
                    mTickets = [...mTickets, tickets[i]]
                    break
                case 2:
                    lTickets = [...lTickets, tickets[i]]
                    break
                default:
                    nTickets = [...nTickets, tickets[i]]
                    console.log(nTickets)
                    break
            }
        }
    })
    
    const criticalColor = ""
</script>


<main>
    <div id="horizontal-scroll-box">
        <TicketHolderMaster category="Critical Priority" color="rgb(220,0,150)">      
            {#each cTickets as {title,description,link,priority},i}
                <TicketMaster title="{title}" desc="{description}" url="{link}"/>
            {/each}
        </TicketHolderMaster>


        <TicketHolderMaster category="High Priority" color="rgb(255,0,0)">
            {#each hTickets as {title,description,link,priority},i}
                <TicketMaster title="{title}" desc="{description}" url="{link}"/>
            {/each}
        </TicketHolderMaster>


        <TicketHolderMaster category="Medium Priority" color="rgb(230,150,0)">
            {#each mTickets as {title,description,link,priority},i}
                <TicketMaster title="{title}" desc="{description}" url="{link}"/>
            {/each}
        </TicketHolderMaster>


        <TicketHolderMaster category="Low Priority" color="rgb(0,255,0)">
            {#each lTickets as {title,description,link,priority},i}
                <TicketMaster title="{title}" desc="{description}" url="{link}"/>
            {/each}
        </TicketHolderMaster>


        <TicketHolderMaster category="No Priority" color="rgb(20,20,200)">
            {#each nTickets as {title,description,link,priority},i}
                <TicketMaster title="{title}" desc="{description}" url="{link}"/>
            {/each}
        </TicketHolderMaster>
    </div>
</main>

<style>
    #horizontal-scroll-box{
        display: flex;
        flex-direction: row;
        flex-flow: row;
        padding-bottom: 6px;
        overflow-y: scroll;
        overflow-x: scroll;
        overflow: scroll;
        scrollbar-color: rgb(88,88,88) rgb(33,33,33);
        scrollbar-width: thin;
    }
</style>