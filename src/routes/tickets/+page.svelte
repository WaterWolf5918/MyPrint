<script>
import TicketD from "../../components/desktop/Ticket-d.svelte";
	import TicketMaster from "../../components/ticket-Master.svelte";
	import TicketHolderMaster from "../../components/ticketHolder-Master.svelte";
</script>

<main>
    <div id="horizontal-scroll-box">
        <TicketHolderMaster category="Critical Priority" color="rgb(255,0,0)">
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
        </TicketHolderMaster>

        <TicketHolderMaster category="High Priority" color="rgb(230,150,0)">
            <TicketMaster title="Test Print Cube" desc="This is a vary basic cube to print for testing" url="https://google.com"/>
        </TicketHolderMaster>
    </div>
</main>

<style>
    #horizontal-scroll-box{
        display: flex;
        flex-direction: row;
        flex-flow: row;
    }




</style>