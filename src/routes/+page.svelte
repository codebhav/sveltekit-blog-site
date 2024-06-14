<script lang="ts">
	import { page } from '$app/stores';
	import PostListing from '$lib/components/PostListing.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>whybhav</title>
	<meta name="description" content="Guu Guu Gaa Gaa" />
	<meta property="og:title" content="whybhav" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:description" content="Guu Guu Gaa Gaa" />
</svelte:head>

<section class="px-4 py-6">
	<div class="h-40 w-40 overflow-hidden rounded-full">
		<img src="/profile-pic-for-blog.jpg" alt="Profile" class="object-cover" />
	</div>

	<div class="space-y-2 py-4">
		<h2 class="text-4xl font-bold">Hey! I'm whybhav</h2>
		<p class="text-2xl font-light">
			It's 2am right now, I started building this yesterday afternoon at around 4pm. Give me 10
			hours and a new framework (Sveltekit) I've never used before, and I'll build you a brand new
			blog site.
		</p>
		<p class="text-2xl font-thin">
			This was a pain in the ass, but the good kind. I had fun building this, honestly. I might
			repurpose this site on a later date, until then, goodbye!
		</p>
	</div>
</section>

<section class="pb-6">
	<header
		class="mx-4 mb-4 inline-block
      border-b py-2 dark:border-gray-700"
	>
		<h2 class="text-3xl font-semibold">Blog Posts</h2>
	</header>

	<section class="divide-y dark:divide-gray-700">
		{#each data.posts as post}
			<PostListing {post} />
		{/each}
	</section>
</section>
