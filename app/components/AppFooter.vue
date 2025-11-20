<script setup lang="ts">
const { footer } = useAppConfig()
const colorMode = useColorMode()
</script>

<template>
  <div>
    <UFooter
      class="z-10 bg-default"
      :ui="{ left: 'text-muted text-xs' }"
    >
      <template #left>
        {{ footer.credits }}
      </template>

      <template #right>
        <template v-if="footer?.links">
          <UButton
            v-for="(link, index) of footer?.links"
            :key="index"
            v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
          />
        </template>
      </template>
    </UFooter>

    <!-- Desarrollado por Nexus -->
    <div class="border-t border-gray-200 dark:border-gray-800 bg-default">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-end">
          <div class="flex items-center gap-2 text-xs text-muted">
            <span>Desarrollado por</span>
            <UTooltip text="Somos el nexo entre tu negocio y la tecnología">
              <a
                href="https://nexusdigital.ar?ref=puntaprop"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center transition-opacity hover:opacity-80"
              >
                <img
                  v-if="colorMode.value === 'dark'"
                  src="/logos/nexus_digital_horizontal.png"
                  alt="Nexus Digital"
                  class="h-4 w-auto"
                >
                <img
                  v-else
                  src="/logos/nexus_digital_horizontal.png"
                  alt="Nexus Digital"
                  class="h-4 w-auto"
                >
              </a>
            </UTooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
