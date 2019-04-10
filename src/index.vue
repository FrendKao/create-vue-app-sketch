<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {

};

</script>

<style lang="scss">
ul {
  background-color: #F90;
}
</style>
