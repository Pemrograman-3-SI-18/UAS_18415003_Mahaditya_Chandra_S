<template>
  <q-layout class="bg-blue-grey-1" view="hHr Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md  q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                 <div class="col-md-6 col-xs-12">
                <div class="row q-pt-md q-pb-md bg-white-5">
                  <div class="col-md-8 offset-2 col-xs-8">

                  </div>
               </div>
              </div>
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h1">REGRISTRASI</div>
                </q-card-section>
              <div class="col-md-12 col-xs-12 q-pt-md">
                <div class="q-pa-md">

                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      filled
                      v-model="form.Username"
                      label="Username*"
                      hint="username"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kososng ']"
                    />
                    <q-input
                      filled
                      v-model="form.namaLengkap"
                      label="Nama Lengkap"
                      hint="Nama Lengkap"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kososng ']"
                    />

                    <q-input
                      filled
                      v-model="form.email"
                      label="Email"
                      hint="Email"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kososng ']"
                    />

                    <q-input
                      filled
                      v-model="form.nomortelp"
                      label="nomor telp"
                      hint="nomor telp"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kososng ']"
                    />

                    <q-input
                      filled
                      type="Password"
                      v-model="form.Password"
                      label="Password"
                      hint="Password"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data tidak boleh kososng ']"
                    />

                    <div>
                      <q-btn label="Registrasi" type="submit" color="primary"/>
                      <q-btn label="Login"  to="/auth/login" color="primary" flat class="q-ml-sm" />
                    </div>
                  </q-form>

                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      form: {
        Username: null,
        namaLengkap: null,
        email: null,
        nomortelp: null,
        Password: null
      },

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        username: this.form.Username,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        noTelp: this.form.nomortelp,
        role: '2',
        password: this.form.Password

      })
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('login')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
