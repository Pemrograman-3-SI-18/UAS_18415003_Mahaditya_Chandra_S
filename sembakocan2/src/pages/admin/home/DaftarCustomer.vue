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
        <span class="text-blue-grey-6" >DAFTAR CUSTOMER SEMBAKOCAN</span>
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
            <q-td key="username" :props="props">
              {{ props.row.username }}
            </q-td>
            <q-td key="namaLengkap" :props="props">{{ props.row.namaLengkap }}</q-td>
            <q-td key="email" :props="props">{{ props.row.email }}</q-td>
            <q-td key="noTelp" :props="props">{{ props.row.noTelp }}</q-td>
            <q-td key="role" :props="props">{{ props.row.role }}</q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaLengkap', align: 'center', label: 'Nama Lengkap', field: 'namaLengkap', sortable: true },
        { name: 'email', align: 'center', label: 'Alamat Email', field: 'email', sortable: true },
        { name: 'noTelp', align: 'center', label: 'NO. Telphone', field: 'noTelp' },
        { name: 'role', align: 'center', label: 'Role', field: 'role', sortable: true }
      ],
      data: []
    }
  },
  methods: {
    // emulate fetching data from server
    getDataCustomer () {
      this.$axios.get('/user/datacustomer/')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataCustomer()
  }
}
</script>

<style scoped>

</style>
