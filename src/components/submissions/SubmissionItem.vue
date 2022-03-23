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
export default {
  props: ["id", "username", "fileName", "filament", "timestamp"],
};
</script>
