<h1>Adventure Details</h1>


<script>
	export let data;
	const { adventure } = data;
</script>

{#each adventure as adventureDetail}
<h2>{adventureDetail.activity}</h2>
{/each}
