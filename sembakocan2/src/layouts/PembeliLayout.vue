<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-white text-blue-grey-6">

      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">Hello, {{dataUser.namaLengkap }}!</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div>Nama : {{dataUser.namaLengkap}} </div>
                  <div>Email :  {{dataUser.email}} </div>
                  <div>No Telpon : {{dataUser.noTelp}} </div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img src="statics/logo.png">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>

                <q-btn
                  color="teal"
                  label="Keluar"
                  unelevated
                  icon="exit_to_app"
                  @click="keluar() "
                  size="sm"
                  v-close-popup to="/auth/login">
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-img spinner-color="white"  placeholder-src="statisc/sembakocan.png" src="statics/sembakocanlogin.png"></q-img>
    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold" to="/sembakocan">
            <q-item-section>
              SEMBAKOCAN APPS
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/logo.png" alt="">
              </q-avatar>
              <div class="text-weight-bold">{{dataUser.username}}</div>
              <div>{{dataUser.namaLengkap}}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
           Sembako
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/daftarsembako">
            <q-item-section avatar>
              <q-icon name="label" />
            </q-item-section>
            <q-item-section>
              Daftar Sembako
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi
          </q-item-label>

          <q-item clickable active-class="active" exact v-ripple to="/sembakocan/transaksi">
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>
            <q-item-section>
              Lakukan Transaksi
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>

export default {
  name: 'PembeliLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}
</script>
