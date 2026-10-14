import { version as currentVersion } from '@@/package.json'
import { computed } from 'vue'

// This fork doesn't ask jsDelivr for upstream's version: updates come from merging upstream
export function useVersionCheck() {
  const latestVersion = computed<string | undefined>(() => undefined)
  const hasUpdate = computed(() => false)

  return { hasUpdate, currentVersion, latestVersion }
}
