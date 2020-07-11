
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/admin/home/DataSembako.vue') },
      { path: 'tambahstoksembakocan', component: () => import('pages/admin/home/Input Data Sembakocan.vue') },
      { path: 'datatransaksipelanggan', component: () => import('pages/admin/home/DataTransaksiSembako.vue') },
      { path: 'daftarcustomer', component: () => import('pages/admin/home/DaftarCustomer.vue') },
      { path: 'editdatasembako/:id', component: () => import('pages/admin/home/EditDataSembako.vue') }
    ]
  },
  {
    path: '/sembakocan',
    meta: {
      auth: true
    },
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('layouts/PembeliLayout.vue') },
      { path: 'daftarsembako', component: () => import('pages/Pembeli/Jenissembako/Daftar Sembako.vue') },
      { path: 'transaksi', component: () => import('pages/Pembeli/Transaksi/transaksi.vue') }
    ]
  },
  {
    path: '/',

    component: () => import('layouts/LoginRegisLayoutSembakocan.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
