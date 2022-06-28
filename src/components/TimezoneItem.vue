<script setup lang="ts">
import { homeOffset } from '../composables/state'
import type { Timezone } from '~/types'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  weekday: 'short',
  month: 'short',
  day: '2-digit',
})

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' ') || '')
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})
const time = $computed(() => timeFormatter.format(now.value))
const date = $computed(() => dateFormatter.format(now.value))
</script>

<template>
  <div flex="~ col md:row" gap3 py1>
    <div flex="~ wrap" gap3>
      <div
        w-8 ma op80 font-bold text-center
        :title="`${timezone.offset} GMT`"
      >
        <div v-if="timezone.name === homeZone.value" i-ri-home-2-fill ma op50 />
        <div v-else>
          {{ offset }}
        </div>
      </div>
      <div flex="~ col" text-left flex-auto w-30>
        <div>
          <span of-hidden text-ellipsis mr1>{{ city }}</span>
          <sup border="~ base rounded" px1>{{ timezone.abbr }}</sup>
        </div>
        <div text-sm op50 leading-1em>
          {{ state }}
        </div>
      </div>
      <div flex="~ col" text-right flex-auto>
        <div> {{ time }} </div>
        <div text-sm op50 leading-1em w-25>
          {{ date }}
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
