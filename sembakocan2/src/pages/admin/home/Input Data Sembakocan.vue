<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">

      <div></div>
      <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
      <q-space />
      <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >TAMBAH SEMBAKO</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Sembako"
            lazy-rules
            color="teal"
            v-model="form.kodesembako"
            :rules="[
           val => val !== null && val !== '' || 'Kode Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="assignment_late"/>
            </template>
          </q-input>

          <q-input
            label="Nama Sembako"
            lazy-rules
            color="teal"
            v-model="form.namaSembako"
            :rules="[
           val => val !== null && val !== '' || 'Nama Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Merk Sembako"
            lazy-rules
            color="teal"
            v-model="form.merkSembako"
            :rules="[
           val => val !== null && val !== '' || 'Merk Sembako Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="copyright"/>
            </template>
          </q-input>

          <q-input
            label="Harga"
            lazy-rules
            color="teal"
            v-model="form.hargaSembako"
            :rules="[
           val => val !== null && val !== '' || 'Harga Sembako Harus Terisi'
           ]">
              <template v-slot:append>
                <q-icon name="attach_money"/>
              </template>
            </q-input>
          <q-input
            label="Satuan"
            lazy-rules
            color="teal"
            v-model="form.satuanSembako"
            :rules="[
           val => val !== null && val !== '' || 'Satuan Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="model_training"/>
            </template>
          </q-input>
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="Tambahkan Sembako"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodesembako: null,
        namaSembako: null,
        merkSembako: null,
        hargaSembako: null,
        satuanSembako: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('namaSembako', this.form.namaSembako)
      formData.append('kodesembako', this.form.kodesembako)
      formData.append('merkSembako', this.form.merkSembako)
      formData.append('hargaSembako', this.form.hargaSembako)
      formData.append('satuanSembako', this.form.satuanSembako)
      this.$axios.post('/sembako/input', formData)
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
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
