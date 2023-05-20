
<script lang="ts">
    async function submit(e: SubmitEvent){

		console.log(e)
        var object = {
			title: "",
			desc: "",
			link: "",
			priority: "",
			timestamp: new Date().getTime(),
			userAgent: window.navigator.userAgent
		}
        //@ts-expect-error
		
        const data = new FormData(this);
        data.forEach((value,key) => {
            console.log(`${key}: ${value}`)
            //@ts-expect-error
            object[key] = value
        })

		if (e.target !== null){
			//@ts-expect-error
			e.target[0].value = ""
			//@ts-expect-error
			e.target[1].value = ""
			//@ts-expect-error
			e.target[2].value = ""
			//@ts-expect-error
			e.target[3].value = ""

		}
		
		const res = await fetch("./api/createTicket",{
			method: "POST",
			body: JSON.stringify(object)
		})
		const json = await res.json()
		//@ts-ignore
    }
	function perventEnterkey(e: any	){
		console.log(e)
		if (e.key == 'Enter'){
			e.preventDefault()
			//@TODO add a confirm box insted of just perventing the event

		}
	}
</script>

<header>
	<h1>3d Print Ticket</h1>
</header>



<main>
	<form on:submit|preventDefault={submit} on:keydown={perventEnterkey}>
		<label for="title">Title:</label>
		<input type="text" id="title" name="title" required/><br /><br />
		<label for="desc">Description:</label>
		<textarea id="desc" name="desc" rows="5" required/><br /><br />
		<label for="link">Link</label>
		<input type="link" id="link" name="link" required/><br /><br />
		<label for="priority">Ticket priority:</label><br /><br />
		<select name="priority" id="priority" required> 
			<option value="critical-priority">Critical-priority</option>
			<option value="high-priority">High-priority</option>
			<option value="medium-priority">Medium-priority</option>
			<option value="low-priority">Low-priority</option>
			<option value="no-priority">No-priority</option>
		</select>

		<input type="submit" value="Submit" />
	</form>
</main>

<style>
	header {
		text-align: center;
	}
	input[type='text'] {
		width: 100%;
		font-size: larger;
		background: rgb(35, 35, 35);

		border: none;
		border-bottom: solid 1px;
		border-image: linear-gradient(to left, rgb(0, 255, 225), rgb(0, 8, 255)) 1;
	}
	input[type='link'] {
		width: 100%;
		font-size: larger;
		background: rgb(35, 35, 35);

		border: none;
		border-bottom: solid 1px;
		border-image: linear-gradient(to left, rgb(0, 255, 225), rgb(0, 8, 255)) 1;
	}
	input {
		font-size: larger;
	}
	textarea {
		width: 100%;
		font-size: larger;

		background: rgb(35, 35, 35);

		border: none;
		border-bottom: solid 1px;
		border-image: linear-gradient(to left, rgb(0, 255, 225), rgb(0, 8, 255)) 1;
	}
	label {
		font-size: x-large;
	}
	option {
		font-size: larger;
	}
	select {
		font-size: larger;
	}
</style>
