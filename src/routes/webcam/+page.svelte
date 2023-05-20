<script lang=ts>
	import { onMount } from "svelte";


    let h: string
    let w: string

    onMount(() => {
        h = `${Math.floor(screen.height / 720) * 720}px`
        w = `${Math.floor(screen.height / 1280 * 1280)}px`
    })
</script>
<!-- <iframe src="http://falcon.local/webcam/stream" height={h} width={w}></iframe> -->
<img src="http://falcon.local/webcam/stream" >
<style>
    img{
        height: 95%;
        width: 96%;
        overflow: hidden;
        background: black;
        /* width: max-content;
        height: max-content; */
    }
    :global(main){
        max-width: unset !important;
    }
</style>