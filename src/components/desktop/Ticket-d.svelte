<script lang="ts">
export let title: string
export let desc: string
export let url: string
    
</script>

<div class="container">
    <div class="ticket-titlebar">
        <p>{title}</p>
    </div>
    <div class="ticket-body">
        <p>{desc}</p>
    </div>
    <div class="ticket-footer">
        <a href="{url}" target="_blank">{url}</a>
    </div>

</div>

<style>
	.ticket-titlebar {
		background: rgb(44, 44, 44);
		height: min-content;
		text-align: center;
		top: 0px;
		border: 0px;
	}
	.ticket-titlebar > p {
		margin-top: 0px;
		margin-bottom: auto;
		font-size: large;
	}
    .ticket-body{
        padding-bottom: 2px;
    }
    .ticket-body > p{
        margin-top: 2px;
        margin-bottom: 30px;

    }
    .ticket-footer{
        background: rgb(77, 77, 77);
        background: linear-gradient(to top, rgb(50, 50, 50),rgba(70,70,70,50));
        padding-bottom: 2px;
    }

    .container{
        background: rgb(70,70,70);
        margin-bottom: 10px;
    }

</style>
