<script lang="ts">
import TicketD from "./desktop/Ticket-d.svelte";
export let title: string
export let desc: string
export let url: string

</script>

<div class="mobile-display">
    <TicketD title={title} desc={desc} url={url}/>
</div>

<div class="desktop-display">
    <TicketD title={title} desc={desc} url={url}/>
</div>





<style>
    .mobile-display{display:none}
    .desktop-display{display:block}
    @media (max-width:1024px){
        .desktop-display {display:none}
        .mobile-display {display:block}
    }
</style>