<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
          <q-space />
          <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >DAFTAR STOK SEMBAKO</span>
      </span>
          <!---<q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />--->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodesembako" :props="props">
              {{ props.row.kodesembako }}
            </q-td>
            <q-td key="namaSembako" :props="props">{{ props.row.namaSembako }}</q-td>
            <q-td key="merkSembako" :props="props">{{ props.row.merkSembako }}</q-td>
            <q-td key="hargaSembako" :props="props">{{ props.row.hargaSembako }}</q-td>
            <q-td key="satuanSembako" :props="props">{{ props.row.satuanSembako }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodesembako)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataSembako(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
      <q-btn color="teal" :disable="loading" icon="add" label="Tambah Stok Sembako" to="/tambahstoksembakocan"  />
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodesembako',
          required: true,
          label: 'Kode Sembako',
          align: 'left',
          field: row => row.kodesembako,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaSembako', align: 'center', label: 'Nama Sembako', field: 'namaSembako', sortable: true },
        { name: 'merkSembako', align: 'center', label: 'Merk', field: 'merkSembako', sortable: true },
        { name: 'hargaSembako', align: 'center', label: 'Harga Sembako', field: 'hargaSembako' },
        { name: 'satuanSembako', align: 'center', label: 'Satuan', field: 'satuanSembako' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    // emulate fetching data from server
    getDataSembako () {
      this.$axios.get('/sembako/datasembako')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataSembako (id) {
      this.$axios.delete('/sembako/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataSembako()
        })
    },
    edit (kodesembako) {
      this.$router.push('/EditDataSembako/' + kodesembako)
    }

  },
  mounted () {
    this.getDataSembako()
  }
}
</script>
