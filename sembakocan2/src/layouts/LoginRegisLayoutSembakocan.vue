<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-white text-blue-grey-6">

    </q-header>
    <q-img spinner-color="white" placeholder-src="statics/welcome.png" src="statics/welcome.png"></q-img>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
export default {
  name: 'LoginRegistrasiSembakocanLayout'
}
</script>

<style scoped>

</style>
