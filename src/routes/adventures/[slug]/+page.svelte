<script>
	export let data;
	const { adventure } = data;
    import closeBtn from '$lib/images/closebtn.svg';
</script>

<div>
    {#each adventure as adventureDetail}
    <div class="adventure-detail">
            <button class="adventure-detail-close-button">
                <a href="/"><img src="{closeBtn}" alt="Close Button"></a>
            </button>
        <h1 class="adventure-detail-title">{adventureDetail.title}</h1>
        <div class="adventure-detail-info">
            <div class="adventure-detail-info-label">Activity</div>
            <div class="adventure-detail-info-description">{adventureDetail.activity}</div>
            <div class="adventure-detail-info-label">Type</div>
            <div class="adventure-detail-info-description">{adventureDetail.adventureType}</div>
            <div class="adventure-detail-info-label">Trip Length</div>
            <div class="adventure-detail-info-description">{adventureDetail.tripLength}</div>
            <div class="adventure-detail-info-label">Difficulty</div>
            <div class="adventure-detail-info-description">{adventureDetail.difficulty}</div>
            <div class="adventure-detail-info-label">Price</div>
            <div class="adventure-detail-info-description">
                <span class="adventure-detail-info-price">{adventureDetail.price}</span>
            </div>
        </div>
        <div class="adventure-detail-content">
            <img src="{adventureDetail.primaryImage._publishUrl}" class="adventure-detail-primaryimage" alt="adventure image"/>
            <div>
                {@html adventureDetail.description.html}
                <!--<p>{adventureDetail.description.value}</p>-->
                <h2>Itinerary</h2>
                <hr />
                <div class="adventure-detail-itineary">
                    {@html adventureDetail.itinerary.html} 
                </div>
            </div>
        </div>

    </div>


      
    {/each}
</div>
