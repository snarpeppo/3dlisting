<template>
  <!-- <base-card> -->
  <!-- <li>
      <h3>{{ username }}</h3>
      <h4>{{ fileName }}</h4>
      <p>{{ filament }}</p>
      <p>{{ timestamp }}</p>
    </li> -->
  <!-- </base-card> -->
  <tr>
    <td>{{ username }}</td>
    <td>{{ fileName }}</td>
    <td>{{ filament }}</td>
    <td>{{ timestamp }}</td>
  </tr>
</template>

<script>
import BaseCard from "../base/BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["id", "username", "fileName", "filament", "timestamp"],
};
</script>