<script lang="ts">
	let showing = $state(false)

	const toggleRps = () => {
		showing = !showing
	}
</script>

<div class={["rps-scaffold", { showing }]}>
	<iframe src="https://bunnings.com.au" title="Website"></iframe>
	<button class="rps-launcher" aria-label="Show RapiServe" onclick={toggleRps}>
		<i class="bi bi-chat-text"></i>
	</button>
	<div class="rps-pane">
		<div class="rps-pane-header">
			<i class="rps-pane-close bi bi-x-cirle"></i>
		</div>
		Hi there!
	</div>
</div>
