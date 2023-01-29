<script>
	export let data;
	const { adventures } = data;
    console.log("data = " + adventures);
	import wkndlogo from '$lib/images/wknd-logo-dk.svg';

</script>

<div>
<img src={wkndlogo} alt="WKND LOGO"  class="logo"/>
  <hr>
  <h2>Current Adventures</h2>
</div>
<!--
<div class="adventures">
<ul class="adventure-items">
  {#each adventures as adventure}
    <li class="adventure-item">
        <a href="/"><img src={adventure.primaryImage._publishUrl} alt="imagetxt" class="adventure-item-image" /></a>
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
-->
<style>


    
</style>