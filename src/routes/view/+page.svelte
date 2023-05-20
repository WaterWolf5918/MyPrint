<script lang="ts">
	import { onMount } from "svelte";
    let tickets: string | any[] = []
    let cTickets: any[] = []
    let hTickets: any[] = []
    let mTickets: any[] = []
    let lTickets: any[] = []
    let nTickets: any[] = []
    onMount(async ()=>{
        tickets = await (await fetch('./api/getTickets',{})).json()
        console.log(tickets)
        for(let i = 0; i < tickets.length; i++){
            console.log(tickets[i].priority)
            switch(tickets[i].priority){
                case "critical-priority":
                    cTickets = [...cTickets, tickets[i]]
                    break
                case "high-priority":
                    hTickets = [...hTickets, tickets[i]]
                    break 
                case "medium-priority":
                    mTickets = [...mTickets, tickets[i]]
                    break
                case "low-priority":
                    lTickets = [...lTickets, tickets[i]]
                    break
                default:
                    // nTickets.push(tickets[i])
                    nTickets = [...nTickets, tickets[i]]
                    console.log(nTickets)
                    break
            }
        }

        
    })
</script>




<header>
    <p>Current Tickets</p>
</header>

<main>
    <div>
        <p class="category">Critical Priority</p>
        {#each cTickets as {title,desc,link,priority},i}
        <div class="ticket-object">
            <!-- <p class="title">{title}</p> -->
            <span class="material-symbols-outlined">
                close
            </span>
            <div class="title-container">
                <p class="title">{title}</p>
            </div>

            <div class="desc {priority}">
                <p>{desc}</p>
            </div>
            <div class="link">
                <a href="{link}" target="_blank">{link}</a>
            </div>
            <div class="priority-container">
                <div class="priority {priority}" ><p>{priority}</p></div>
            </div>
        </div>
        {/each}
    </div>
    <div>
        <p class="category">High Priority</p>
        {#each hTickets as {title,desc,link,priority},i}
        <div class="ticket-object">
            <!-- <p class="title">{title}</p> -->
            <span class="material-symbols-outlined">
                close
            </span>
            <div class="title-container">
                <p class="title">{title}</p>
            </div>

            <div class="desc {priority}">
                <p>{desc}</p>
            </div>
            <div class="link">
                <a href="{link}" target="_blank">{link}</a>
            </div>
            <div class="priority-container">
                <div class="priority {priority}" ><p>{priority}</p></div>
            </div>
        </div>
        {/each}
    </div>
    <div>
        <p class="category">Medium Priority</p>
        {#each mTickets as {title,desc,link,priority},i}
        <div class="ticket-object">
            <!-- <p class="title">{title}</p> -->
            <span class="material-symbols-outlined">
                close
            </span>
            <div class="title-container">
                <p class="title">{title}</p>
            </div>

            <div class="desc {priority}">
                <p>{desc}</p>
            </div>
            <div class="link">
                <a href="{link}" target="_blank">{link}</a>
            </div>
            <div class="priority-container">
                <div class="priority {priority}" ><p>{priority}</p></div>
            </div>
        </div>
        {/each}
    </div>
    <div>
        <p class="category">Low Priority</p>
        {#each lTickets as {title,desc,link,priority},i}
        <div class="ticket-object">
            <!-- <p class="title">{title}</p> -->
            <span class="material-symbols-outlined">
                close
            </span>
            <div class="title-container">
                <p class="title">{title}</p>
            </div>

            <div class="desc {priority}">
                <p>{desc}</p>
            </div>
            <div class="link">
                <a href="{link}" target="_blank">{link}</a>
            </div>
            <div class="priority-container">
                <div class="priority {priority}" ><p>{priority}</p></div>
            </div>
        </div>
        {/each}
    </div>
    <div>
        <p class="category">No Priority</p>
            {#each nTickets as {title,desc,link,priority},i}
            <div class="ticket-object">
                <!-- <p class="title">{title}</p> -->
                <span class="material-symbols-outlined">
                    close
                </span>
                <div class="title-container">
                    <p class="title">{title}</p>
                </div>
    
                <div class="desc {priority}">
                    <p>{desc}</p>
                </div>
                <div class="link">
                    <a href="{link}" target="_blank">{link}</a>
                </div>
                <div class="priority-container">
                    <div class="priority {priority}" ><p>{priority}</p></div>
                </div>
            </div>
            {/each}
    </div>
</main>


<style>

    .ticket-object > span{
        top: 4px;
        left: 5px;
        position: relative;
    }


    .title-container{
        display: inline-block;
    }
    .category{
        font-size: xx-large;
    }
    .title{
        font-size: x-large;
    }
    header{ 
        text-align: center;
    }

    header > p{
        font-size:50px;
        margin: unset;
    }

    a{
        color: aqua;
        font-size: larger;
    }
    .title{
        margin-left: 0.5rem;
        margin-top: 2px;
        margin-bottom: 2px;
    }
    .desc{
        background-color: rgb(51, 51, 51) !important;
        /* border-left: 2px solid red; */
        margin-top: 10px;
        margin-bottom: unset;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        font-size:large;
        width: max-content;
        height: max-content;
    }

    .link{
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        display: inline-block;
        font-size: larger;
        word-wrap: normal;
    }


    .priority{
        border-left: none !important;
        display: flexbox;
        background-color: black;
        width: max-content;
        height: max-content;
        font-size: larger;
        /* width: 1rem;
        height: 1rem; */
        border-radius: 10px;
    }

    .priority-container{
        display: inline-block;
        
    }
    
    .critical-priority{
        border-left: 3px solid rgb(255, 0, 162);
        padding-left: 2px;
        background-color: rgb(153, 0, 97);
    }

    .high-priority{
        border-left: 3px solid rgb(255, 0, 0);
        padding-left: 2px;
        background-color: rgb(134, 0, 0);
    }

    .medium-priority{
        border-left: 3px solid rgb(255, 162, 0);
        padding-left: 2px;
        background-color: rgb(145, 92, 0);
    }

    .low-priority{
        border-left: 3px solid rgb(17, 255, 0);
        padding-left: 2px;
        background-color: rgb(0, 87, 14);
    }

    .no-priority{
        border-left: 3px solid rgb(0, 81, 255);
        padding-left: 2px;
        background-color: rgb(0, 48, 153);
    }

    

    .ticket-object{
        background-color: rgb(48, 48, 48);
        border-radius: 15px;
        margin-bottom: 15px;
    }
    :global(main){
        max-width: unset !important;
        all: unset;
        overflow: hidden;
    }
</style>