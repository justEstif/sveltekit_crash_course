<script lang="ts">
	function handleClick(event: MouseEvent) {
		console.log(event);
	}

	let checked = false;
	let searchedValue = '';
</script>

<h1>Element Directives</h1>
<button on:click={() => alert('Clicked')}>Click Me!</button>

<div on:mousemove|self|once={(e) => handleClick(e)} style="background: green; padding: 20px;">
	You can click the green
	<div style="background: orangered; padding: 20px;">You can't click the red</div>
</div>

<div>
	<input bind:value={searchedValue} type="text" />
	<p>searchedValue:{searchedValue}</p>

	<input bind:checked type="checkbox" />
	<p>checked:{checked}</p>
</div>
