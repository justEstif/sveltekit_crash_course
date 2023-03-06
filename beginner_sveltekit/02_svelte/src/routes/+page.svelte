<script>
	let quantity = 0;
	const addToCart = () => {
		quantity = ++quantity;
		inventory = [...inventory, quantity];
		user.name = 'Lee';
	};
	let inventory = [1, 2, 3];
	let user = { name: 'Steph' };
	$: remaining = 10 - quantity;
	let price = 5;
	$: totalCost = quantity * price; // dependent on both quantity and price
	const increasePrice = () => {
		price = price + 2;
	};
	$: if (quantity >= 10) {
		console.log(`The quantity is ${quantity}`);
	}
</script>

<h1>Your shopping cart has {quantity} items.</h1>
<button on:click={addToCart}>Add To Cart</button>
<h2>{inventory}</h2>
<h3>{user.name}</h3>
<div>remaining: {remaining}</div>
<div>item price: {price}</div>
<button on:click={increasePrice}>increase price</button>
<div>total cost: {totalCost}</div>
