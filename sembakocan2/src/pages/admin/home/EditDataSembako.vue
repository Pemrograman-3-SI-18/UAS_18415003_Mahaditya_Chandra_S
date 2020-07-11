<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Edit Data Sembako</span>
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
           val => val !== null && val !== '' || 'Kode Sembako Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Nama Sembako"
            lazy-rules
            color="teal"
            v-model="form.namaSembako"
            :rules="[
           val => val !== null && val !== '' || 'Nama Sembako Dibutuhkan'
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
           val => val !== null && val !== '' || 'Merk Sembako Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Harga Sembako"
            lazy-rules
            color="teal"
            v-model="form.hargaSembako"
            :rules="[
           val => val !== null && val !== '' || 'Harga Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Satuan Sembako"
            lazy-rules
            color="teal"
            v-model="form.satuanSembako"
            :rules="[
           val => val !== null && val !== '' || 'Satuan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gangtiGambar == true"
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
              label="Ubah Data Sembako"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataSembako',
  data () {
    return {
      gangtiGambar: false,
      baseUrl: 'http://localhost:5050/gambar/',
      form: {
        kodesembako: null,
        namaSembako: null,
        merkSembako: null,
        hargaSembako: null,
        satuanSembako: null
      },
      id: null,
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
      formData.append('kodesembako', this.form.kodesembako)
      formData.append('namaSembako', this.form.namaSembako)
      formData.append('merkSembako', this.form.merkSembako)
      formData.append('hargaSembako', this.form.hargaSembako)
      formData.append('satuanSembako', this.form.satuanSembako)
      this.$axios.put('/sembako/ubah/' + this.id, formData)
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
    },
    getDataSembakoByid () {
      this.$axios.get('/sembako/datasembako/' + this.$route.params.id)
        .then((res) => {
          console.log(res)
          this.data = res.data.data
          this.form.kodesembako = this.data.kodesembako
          this.form.namaSembako = this.data.namaSembako
          this.form.merkSembako = this.data.merkSembako
          this.form.hargaSembako = this.data.hargaSembako
          this.form.satuanSembako = this.data.satuanSembako
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataSembakoByid()
  }
}
</script>

<style scoped>

</style>
