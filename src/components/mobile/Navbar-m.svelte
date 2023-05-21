<script>
	import { page } from "$app/stores";

</script>



<div id="footer">
    <ul>
        <li >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon" aria-current={$page.url.pathname === '/' ? 'page' : undefined} on:click={() => window.location.href = "./"}>
                <span class="material-symbols-outlined">
                    home
                </span>
            </div>
        </li>
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon" aria-current={$page.url.pathname === '/view' ? 'page' : undefined} on:click={() => window.location.href = "./view"}>
                <span class="material-symbols-outlined">
                    checklist
                    
                </span>
            </div>
        </li>
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon" aria-current={$page.url.pathname === '/newTicket' ? 'page' : undefined} on:click={() => window.location.href = "./newTicket"}>
                <span class="material-symbols-outlined">
                    add_circle
                </span>
            </div>
        </li>
        <li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="icon" aria-current={$page.url.pathname === '/webcam' ? 'page' : undefined} on:click={() => window.location.href = "./webcam"}>
                <span class="material-symbols-outlined">
                    cast
                </span>
            </div>
        </li>
        <li>
            <div class="icon" aria-current={$page.url.pathname === '/we2bcam' ? 'page' : undefined} on:click={() => window.location.href = "./we2bcam"}>
                <span class="material-symbols-outlined">
                    admin_panel_settings
                </span>
            </div>
            
        </li>    

    </ul>
</div>
<style>
    #footer{
        background: rgb(167, 167, 167);
        width: 100%;
        height: 3em;
        position: fixed;
        bottom: 0;
        left: 0;
        margin-top: 5em;

    }
    ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: rgba(54, 54, 54);
		background-size: contain;
	}
    li {
		position: relative;
		height: 50%;
        margin-left: 14px;
        margin-right: 14px;
	}

    .icon{
        background: rgba(54, 54, 54);
        border-radius:5px;
    }

    .icon[aria-current='page']{
        color: rgb(0, 136, 255);
    }
</style>