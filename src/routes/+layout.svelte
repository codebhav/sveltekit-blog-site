<script lang="ts">
	import '../app.css';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import MainHeader from '$lib/components/MainHeader.svelte';
</script>

<ThemeInitializer>
	<MainHeader />
	<main class="pt-24 max-w-5xl mx-auto">
		<slot />
	</main>
</ThemeInitializer>
