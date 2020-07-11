<template>
<q-page>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-md" v-for="(sembako, i) in data" :key="i">
        <q-card flat class="bg-white text-blue-grey-14">
          <q-card-section>
            <div class="text-h6">
              {{ sembako.namaSembako }} {{sembako.merkSembako}}
            </div>
          </q-card-section>
          <q-card-section>
            <q-img spinner-color="white" style="height: 100%; max-width: 100%" :src="baseUrl + sembako.gambar" />
          </q-card-section>
          <q-card-section>
            <div>
              Kode Sembako : {{sembako.kodesembako}}
            </div>
            <div>
              Harga : Rp. {{ sembako.hargaSembako }}
            </div>
            <div>
              Satuan :  {{sembako.satuanSembako}}
            </div>

          </q-card-section>
          <q-card-section>

          </q-card-section>

        </q-card>
      </div>

    </div>
  </div>

</q-page>
</template>

<script>
export default {
  name: 'beras',
  data () {
    return {
      data: null,
      baseUrl: 'http://localhost:5050/gambar/'

    }
  },
  methods: {
    getDataSembako () {
      this.$axios.get('/sembako/datasembako')
        .then((res) => {
          this.data = res.data.data
          console.log(this.data)
        })
    }
  },
  mounted () {
    this.getDataSembako()
  }
}
</script>

<style scoped>

</style>
