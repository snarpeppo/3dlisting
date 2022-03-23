<template>
  <tr v-bind:id="filament_id">
    <td>{{ filament_id }}</td>
    <td>{{ filamentProducer }}</td>
    <td>{{ filamentColor }}</td>
    <td>{{ filamentMaterial }}</td>
  </tr>
</template>

<script>
export default {
  props: [
    "filament_id",
    "filamentProducer",
    "filamentColor",
    "filamentMaterial",
  ],
};
</script>

<style>
</style>