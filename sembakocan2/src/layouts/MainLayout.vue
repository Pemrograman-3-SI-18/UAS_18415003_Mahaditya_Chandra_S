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
                <q-item-label class="text-h6">Hello, {{dataUser.namaLengkap}}</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{dataUser.username}}</div>
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
                  icon="exit_to_app"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popupto to="/auth/login">
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white text-bold">
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
            Data Sembako
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Daftar Stok Sembako
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/tambahstoksembakocan">
            <q-item-section avatar>
              <q-icon name="control_point" />
            </q-item-section>
            <q-item-section>
              Tambah Stok Sembako
            </q-item-section>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Data Customer
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/daftarcustomer">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Daftar Customer
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/datatransaksipelanggan">
            <q-item-section avatar>
              <q-icon name="monetization_on" />
            </q-item-section>
            <q-item-section>
              Daftar Transaksi Pelanggan
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
  name: 'MainLayout',

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
