<!-- <script lang=ts>
	import { onMount } from "svelte";


    let h: string
    let w: string
    let src: string
    onMount(() => {
        h = `${screen.height / 2}px`
        w = `${screen.width / 2 }px`
        src = window.location.origin
    })
</script>
<div>
    <div id="player">
        <iframe src={src} width={w} height={h}></iframe>
    </div>
</div>


<style>
    div{
        display: flex;
        height: 100%;
    }
    div #player{
        flex-grow: 1;
    }
    :global(main){
        max-width: unset !important;
    }
</style> -->
<script lang=ts>
	import { onMount } from "svelte";

    onMount(() => {
        window.open(window.location.origin,"_blank")
    })
</script>