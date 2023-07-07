<script lang="ts">
	let previewTitle = '';
	let previewDesc = '';
	let previewImg = '';

	let inputTitle = '';
	let inputDesc = '';
	let inputLink = '';
	let inputPriority = '';

	async function preSubmit(e: SubmitEvent) {
		(document.getElementById('confirm-box') as HTMLDivElement).classList.remove("hidden")
	}
	async function submit(e: any) {
		console.log(inputDesc);
		e.target.style.animation = 'buttonClicked 0.2s';
		setTimeout(() => {
			e.target.style.animation = '';
			(document.getElementById('confirm-box') as HTMLDivElement).classList.add('hidden')
		}, 200);
		const body = {
			title: inputTitle,
			desc: inputDesc,
			link: inputLink,
			priority: inputPriority,
			timestamp: new Date().getTime(),
			userAgent: window.navigator.userAgent
		}
		inputTitle = '';
		inputDesc = '';
		inputLink = '';
		inputPriority = '';
		const res = await fetch('./api/createTicket', {
			method: 'POST',
			body: JSON.stringify(body)
		});
		const json = await res.json();
		console.log(json.succes)
		if(json.succes){
			(document.getElementById('confirm-box2') as HTMLDivElement).classList.remove('hidden')
		}
		
		// (document.getElementById('confirm-box2') as HTMLDivElement).classList.remove('hidden')
	}
	function perventEnterkey(e: any) {
		if (e.key == 'Enter') {
			e.preventDefault();

			//@TODO add a confirm box insted of just perventing the event
		}
	}

	async function inputLinkChange(e: any) {
		let type = 'NONE';
		const thingiverseRegex = /https:\/\/www\.thingiverse\.com\/thing:([0-9]+)/gm;
		const printablesRegex = /https:\/\/www\.printables\.com\/model\/([0-9]+)-([a-zA-Z\-]+)/gm;
		if (thingiverseRegex.test(inputLink)) {
			type = 'thingiverse';
		}
		if (printablesRegex.test(inputLink)) {
			type = 'printables';
		}
		switch (type) {
			case 'thingiverse':
				console.log('thingiverse');
				updatePreview(inputLink);
				break;
			case 'printables':
				console.log('printables');
				updatePreview(inputLink);
				break;
			case 'NONE':
				console.log('link not supported');
				break;
		}
		console.log(inputLink);
	}

	async function updatePreview(link: string) {
		let cleanLink = link.replaceAll('/', '$');
		let response = await fetch(`./api/previewProxy/${cleanLink}/`);
		let json: App.previewJSON = await response.json();
		previewTitle = json.title;
		previewDesc = json.desc;
		previewImg = json.img;
		console.log(response);
	}
	function buttonPress(e: any) {
		console.log(e);
		e.srcElement.style.animation = 'buttonClicked 0.2s';
		setTimeout(() => {
			e.srcElement.style.animation = '';
			(document.getElementById('confirm-box') as HTMLDivElement).classList.remove("hidden")
		}, 200);
	}
	function buttonPress2(e: any) {
		console.log(e);
		e.srcElement.style.animation = 'buttonClicked 0.2s';
		setTimeout(() => {
			e.srcElement.style.animation = '';
			(document.getElementById('confirm-box2') as HTMLDivElement).classList.add("hidden")
		}, 200);
	}
</script>

<header>
	<h1>3d Print Ticket</h1>
</header>

<div id="ticket">
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<form on:submit|preventDefault={preSubmit} on:keydown={perventEnterkey}>
		<label for="title">Title:</label>
		<input bind:value={inputTitle} type="text" id="title" name="title" required /><br /><br />
		<label for="desc">Description:</label>
		<textarea bind:value={inputDesc} id="desc" name="desc" rows="5" required /><br /><br />
		<label for="link">Link</label>
		<input
			bind:value={inputLink}
			on:input={inputLinkChange}
			type="link"
			id="link"
			name="link"
			required
		/><br />
		<label for="priority">Ticket priority:</label><br />
		<select bind:value={inputPriority} name="priority" id="priority" required>
			<option value="critical-priority">Critical-priority</option>
			<option value="high-priority">High-priority</option>
			<option value="medium-priority">Medium-priority</option>
			<option value="low-priority">Low-priority</option>
			<option value="no-priority">No-priority</option>
		</select>
		<input type="submit" value="Submit" />
	</form>

	<div id="preview-desktop">
		<p id="preview-info">Link Preview</p>
		<p>{previewTitle}</p>
		<div>
			<p>{previewDesc}</p>
		</div>
		<div id="previewImageDiv">
			<img src={previewImg} />
		</div>
	</div>
</div>
<div id="preview-mobile">
	<p id="preview-info">Link Preview</p>
	<p>{previewTitle}</p>
	<div>
		<p>{previewDesc}</p>
	</div>
	<div id="previewImageDiv">
		<img src={previewImg} />
	</div>
</div>

<div id="overlay">
	<div id="confirm-box" class="hidden">
		<p id="confirm-title">MyPrint</p>
		<p id="confirm-desc">Are you sure you want to submit this form?</p>
		<div id="confirm-buttons">
			<div id="confirm-cancel" on:click={buttonPress}>
				<p>Cancel</p>
			</div>
			<div id="confirm-yes" on:click={submit}>
				<p>Submit</p>
			</div>
		</div>
	</div>
	<div id="confirm-box2" class="">
		<p id="confirm-title">MyPrint</p>
		<p id="confirm-desc2">Print Submited</p>
		<span class="material-symbols-outlined">done</span>
		<div id="confirm-buttons">
			<div id="confirm-cancel2" on:click={buttonPress2}>
				<p>Ok</p>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--confirm-background: rgba(255, 255, 255, 0.802);
		--confirm-plainText: black;
		--confirm-button-border: 1px solid rgba(189, 189, 189, 0.908);
		--confirm-button-border-thick: 2px solid rgba(189, 189, 189, 0.908);
	}

	@keyframes -global-buttonClicked {
		0% {
			background: var(--confirm-background);
		}
		50% {
			background: var(--confirm-background-select);
		}
		100% {
			background: var(--confirm-background);
		}
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--confirm-background: rgba(55, 55, 55, 0.782);
			--confirm-background-select: rgb(60, 60, 60);
			--confirm-plainText: white;
			--confirm-button-border: 1px ridge rgba(100, 100, 100, 0.908);
			--confirm-button-border-thick: 2px ridge rgba(100, 100, 100, 0.902);
		}
	}

	.hidden {
		display: none;
	}

	#overlay {
		pointer-events: none;
		/* background: red; */
		display: flex;
		top: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		align-content: center;
		justify-content: center;
	}

	#confirm-box2 {
		color: var(--confirm-plainText);
		position: relative;
		background: var(--confirm-background);
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);	
		height: max-content;
		font-size: larger;
		justify-self: center;
		align-self: center;
		border-radius: 15px;
		width: 250px;
		text-align: center;
	}

	#confirm-cancel2 {
		border-radius: 0px 0px 15px 15px;
		width: 100% !important;
		/* border-right: var(--confirm-button-border); */
	}


	#confirm-desc2 {
		
		display: inline-block;
		margin-top: 10px;
		padding-left: 5px;
		padding-right: 5px;
	}


	#confirm-box {
		width: 350px;
		color: var(--confirm-plainText);
		position: relative;
		background: var(--confirm-background);
		backdrop-filter: blur(4px);
		height: max-content;
		font-size: larger;
		justify-self: center;
		align-self: center;
		border-radius: 15px;
	}




	#confirm-title {
		text-align: center;
		font-size: larger;
		margin-top: 10px;
		margin-bottom: 1px;
	}
	#confirm-desc {
		margin-top: 10px;

		padding-left: 5px;
		padding-right: 5px;
	}

	#confirm-buttons {
		height: max-content;
		display: flex;
		width: 100%;
	}

	#confirm-buttons > div {
		display: block;
		width: 50%;
		text-align: center;
		border-top: var(--confirm-button-border-thick);
		color: rgb(0, 106, 255);
		pointer-events: all;
	}

	#confirm-buttons > div:hover {
		background: var(--confirm-background-select);
	}

	#confirm-buttons > div > p {
		margin-top: 14px;
		margin-bottom: 14px;
		pointer-events: none;
	}

	#confirm-cancel {
		border-radius: 0px 0px 0px 15px;
		border-right: var(--confirm-button-border);
	}
	#confirm-yes {
		border-radius: 0px 0px 15px 0px;
		border-left: var(--confirm-button-border);
	}

	#preview-mobile {
		display: none;
	}
	#preview-desktop {
		display: block;
	}
	@media (max-width: 1024px) {
		#preview-desktop {
			display: none;
		}
		#preview-mobile {
			display: block;
		}
	}
	form {
		width: 50%;
		max-width: 80%;
	}
	@media (max-width: 1024px) {
		form {
			width: 95%;
			max-width: 100%;
		}
	}

	#preview-info {
		margin-top: 0;
		padding-bottom: 2px;
		border: none;
		border-bottom: solid 1px;
		border-image: linear-gradient(to right, rgb(0, 255, 225), rgb(0, 8, 255)) 1;
		text-align: center;
		font-size: larger;
	}

	#preview-desktop {
		/* display: flex; */
		margin-left: 30px;
		background: rgb(35, 35, 35);
		padding: 10px;
		height: max-content;
		max-width: 40%;
		width: 40%;
	}

	#previewImageDiv {
		float: left;
	}
	#previewImageDiv > img {
		width: 100%;
		overflow: hidden;
	}


	#ticket {
		display: flex;
		justify-content: center;
	}


	header {
		text-align: center;
	}
	input {
		margin-bottom: 10px;
	}
	textarea {
		margin-bottom: 10px;
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
