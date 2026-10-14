import { computed } from 'vue'

// No GitHub API request from the browser: fixed numbers for upstream's page elements
export function useGithubStats() {
  const rawStats = computed(() => ({ stars: 7000, forks: 4000 }))

  return { rawStats }
}
