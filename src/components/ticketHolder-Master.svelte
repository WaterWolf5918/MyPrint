<script lang="ts">
    import TicketHolderD from "./desktop/ticketHolder-d.svelte";
    export let category: any;
    export let color: string
</script>
    
    <div class="mobile-display">
        <TicketHolderD category="{category}" color="{color}">
            <slot></slot>
        </TicketHolderD>
    </div>
    
    <div class="desktop-display">
        <TicketHolderD category="{category}" color="{color}">
            <slot></slot>
        </TicketHolderD>
    </div>
    
    
    
    
    
    <style>
        .mobile-display{display:none}
        .desktop-display{display:block}
        /* :global(p){font-size: unset} */
        @media (max-width:1024px){
            .desktop-display {display:none}
            .mobile-display {display:block}
            :global(p){font-size: smaller !important;}
        }
    </style>