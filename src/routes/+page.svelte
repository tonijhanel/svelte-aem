<script>
	export let data;
	const { adventures } = data;
</script>

<h2>Current Adventures</h2>
<div class="adventures">
<ul class="adventure-items">
  {#each adventures as adventure}
    <li class="adventure-item">
        <a href="/adventures/{adventure.slug}"><img src={adventure.primaryImage._publishUrl} alt="imagetxt" class="adventure-item-image" /></a>
           <div class="adventure-item-length-price">
              <div class="adventure-item-label">
                <div class="adventure-item-length">{adventure.tripLength}</div>
                <div class="adventure-item-price">{adventure.price}</div>
              </div>
              <div class="adventure-item-title">{adventure.title}</div>
          </div>

    </li>
{/each}
</ul>
</div>