<script setup lang="ts">
// The site's root is a static page (public/index.html), served before the app. Reaching this route
// means a client-side navigation to "/": load that page instead (/index.html, so the dev server
// can't hand this route back to the app).
onMounted(() => {
  window.location.replace('/index.html')
})
</script>

<template>
  <div />
</template>
