<script setup lang="ts">
const top = $ref(0)
const bottom = $ref(0)
let leftEdge = $ref(40)
let rightEdge = $ref(300)
const left = $computed(() => Math.min(leftEdge, rightEdge))
const right = $computed(() => Math.max(leftEdge, rightEdge))

const { pressed } = useMousePressed()
const { x, y } = useMouse()
const el = ref<HTMLElement>()
const box = reactive(useElementBounding(el))

useEventListener('mousedown', (e) => {
  leftEdge = x.value - box.left
})
useEventListener('mouseup', (e) => {

})

watchEffect(() => {
  if (!pressed.value)
    return
  rightEdge = x.value - box.left
})

const position = $computed(() => ({
  left: `${left}px`,
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${right - left}px`,
}))

const leftWhiteOut = $computed(() => ({
  left: '0',
  top: `${top}px`,
  bottom: `${bottom}px`,
  width: `${left}px`,
}))

const rightWhiteOut = $computed(() => ({
  right: '0',
  top: `${top}px`,
  bottom: `${bottom}px`,
  left: `${right}px`,
}))
</script>

<template>
  <div v-show="pressed" ref="el" pointer-events-none>
    <div absolute :style="leftWhiteOut" bg-white:80 border />
    <div absolute border="3 green6 rounded" shadow :style="position" />
    <div absolute :style="rightWhiteOut" bg-white:80 border />
  </div>
</template>
