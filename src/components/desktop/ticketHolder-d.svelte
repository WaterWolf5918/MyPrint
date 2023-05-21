<script lang="ts">
    export let category: any;
    export let color: string
</script>

<div class="vertical-ticket-holder">
    <div class="vertical-titlebar" style="border-bottom: 2px solid {color};">
        <p>{category}</p>
    </div>
    <slot>

    </slot>
</div>

<style>
    .vertical-ticket-holder{
        margin-top: 10px;
        /* background: green; */
        min-width: 350px;
        margin-left:20px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        /* border: 5px solid rgb(100,100,100); */
        background: rgb(100,100,100);
        padding: 8px;
        border-radius: 10px;
        
    }
    .item{
        margin-bottom: 10px;
    }
	.vertical-titlebar {
		background: rgb(44, 44, 44);
		height: min-content;
		text-align: center;
		top: 0px;
		border: 0px;
		border-bottom: 2px solid red;
        margin-bottom: 10px;
	}
	.vertical-titlebar > p {
		margin-top: 0px;
		margin-bottom: auto;
		font-size: large;
	}
</style>