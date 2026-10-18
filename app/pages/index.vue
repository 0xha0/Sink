<script setup lang="ts">
// s.gatsby.icu has no home page: the server sends "/" to the dashboard (NUXT_PUBLIC_HOME_URL), and a
// client-side navigation to "/" goes there too, as a full page load (through Cloudflare Access).
await navigateTo('/dashboard', { external: true, replace: true })
</script>

<template>
  <div />
</template>
