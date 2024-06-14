<script lang="ts">
	import DarkModeButton from './DarkModeButton.svelte';
	import IconLink from './IconLink.svelte';
	import InstagramIcon from './svg/InstagramIcon.svelte';
	import Logo from './svg/Logo.svelte';
	import SubstackIcon from './svg/SubstackIcon.svelte';
</script>

<header
	class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800"
>
	<nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
		<a href="/">
			<Logo class="w-28" />
		</a>
		<div class="flex space-x-1 items-center">
			<DarkModeButton />
			<IconLink href="https://whybhav.substack.com/" target="_blank">
				<SubstackIcon class="w-8 h-8" />
			</IconLink>
			<IconLink href="https://instagram.com/reallywhybhav/" target="_blank">
				<InstagramIcon class="w-8 h-8" />
			</IconLink>
		</div>
	</nav>
</header>
