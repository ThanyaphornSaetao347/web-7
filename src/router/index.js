import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../views/mainView.vue'
import Newcard from '../components/AllCard.vue'
import FavoRite from '../components/FavoRite.vue'
import footer from '../views/FotTer.vue'
import signIn from '../views/SignIn.vue'
import RegisTer from '../views/RegisTer.vue'

import travelListDetail_1 from '../components/travelListDetail1.vue';
import travelListDetail_2 from '../components/travelListDetail2.vue';
import travelListDetail_3 from '../components/travelListDetail3.vue';
import travelListDetail_4 from '../components/travelListDetail4.vue';
import travelListDetail_5 from '../components/travelListDetail5.vue';
import travelListDetail_6 from '../components/travelListDetail6.vue';
import travelListDetail_7 from '../components/travelListDetail7.vue';
import travelListDetail_8 from '../components/travelListDetail8.vue';
import travelListDetail_9 from '../components/travelListDetail9.vue';
import travelListDetail_10 from '../components/travelListDetail10.vue';
import travelListDetail_11 from '../components/travelListDetail11.vue'; 
import travelListDetail_12 from '../components/travelListDetail12.vue';
import travelListDetail_13 from '../components/travelListDetail13.vue';
import travelListDetail_14 from '../components/travelListDetail14.vue';
import travelListDetail_15 from '../components/travelListDetail15.vue';
import travelListDetail_16 from '../components/travelListDetail16.vue';                                

import angkhang_tiew from '../components/Angkhang_tiew.vue'
import angkhang_tipak from '../components/Angkhang_tipak.vue'
import doiluang_tiew from '../components/Doiluang_tiew.vue'
import doiluang_tipak from '../components/Doiluang_tipak.vue'
import intanon_tiew from '../components/Intanon_tiew.vue'
import intanon_tipak from '../components/Intanon_tipak.vue'
import kumfa_tipak from '../components/Kumfa_tipak.vue'
import meatho_tipak from '../components/Maetho_tipak.vue'
import monjam_tiew from '../components/Monjam_tiew.vue'
import monjam_tipak from '../components/Monjam_tipak.vue'
import phaphongpheang_tiew from '../components/Phaphongpheang_tiew.vue'
import phaphongpheang_tipak from '../components/Phaphongpheang_tipak.vue'
import sunphakea_tipak from '../components/Sanphakhea_tipak.vue'
import changkain_tiew from '../components/Changkain_tiew.vue'
import changkain_tipak from '../components/Changkain_tipak.vue'
import doipui_tiew from '../components/Doipui_tiew.vue'
import monjong_tipak from '../components/Monjong_tipak.vue'
import monlan_tiew from '../components/Monlan_tiew.vue'
import monlan_tipak from '../components/Monlan_tipak.vue'
import mongao_tipak from '../components/Monngao_tipak.vue'
import noname_tipak from '../components/Noname_tipak.vue'
import sutep_tipak from '../components/Sutep_tipak.vue'
import sutep_tiew from '../components/Sutep_tiew.vue'
import pahompok_tiew from '../components/Pahompok_tiew.vue'
import pahompok_tipak from '../components/Pahompok_tipak.vue'
import doipui_tipak from '../components/Doipui_tipak.vue'
import kumfa_tiew from '../components/Kumfa_tiew.vue'
import meatho_tiew from '../components/Meatho_tiew.vue'
import monjong_tiew from '../components/Monjong_tiew.vue'
import mongao_tiew from '../components/Monngao_tiew.vue'
import noname_tiew from '../components/Noname_tiew.vue'
import sunphakea_tiew from '../components/Sunphakhea_tiew.vue'

const mountain = [
  { name: 'doi_1', component: travelListDetail_1, station: 'ดอยหลวงเชียงดาว' },
  { name: 'doi_2', component: travelListDetail_2, station: 'ดอยแม่โถ' },
  { name: 'doi_3', component: travelListDetail_3, station: 'ดอยอ่างขาง'},
  { name: 'doi_4', component: travelListDetail_4, station: 'ดอยอินทนนท์'},
  { name: 'doi_5', component: travelListDetail_5, station: 'ดอยค้ำฟ้า'},
  { name: 'doi_6', component: travelListDetail_6, station: 'สันป่าเกี๊ยะ'},
  { name: 'doi_7', component: travelListDetail_7, station: 'ป่าปงเปียง'},
  { name: 'doi_8', component: travelListDetail_8, station: 'ดอยม่อนแจ่ม' },
  { name: 'doi_9', component: travelListDetail_9, station: 'ดอยม่อนจอง'},
  { name: 'doi_10', component: travelListDetail_10, station: 'ดอยม่อนล้าน'},
  { name: 'doi_11', component: travelListDetail_11, station: 'ดอยม่อนเงาะ'},
  { name: 'doi_12', component: travelListDetail_12, station: 'ดอยผ้าห่มปก'},
  { name: 'doi_13', component: travelListDetail_13, station: 'ดอยปุย'},
  { name: 'doi_14', component: travelListDetail_14, station: 'ดอยสุเทพ' },
  { name: 'doi_15', component: travelListDetail_15, station: 'ขุนช่างเคี่ยน' },
  { name: 'doi_16', component: travelListDetail_16, station: 'ดอยไม่มีชื่อ'}
];


const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/fav',
    name: 'fav',
    component: FavoRite
  },
  {
    path: '/signIn',
    name: 'name',
    component: signIn
  },
  {
    path: '/RegisTer',
    name: 'RegisTer',
    component: RegisTer
  },
  {
    path: '/footer',
    name: 'footer',
    component: footer
  },
  {
    path: '/angkhang_tiew',
    name: 'angkhang_tiew',
    component: angkhang_tiew
  },
  {
    path: '/angkhang_tipak',
    name: 'angkhang_tipak',
    component: angkhang_tipak
  },
  {
    path: '/doiluang_tiew',
    name: 'doiluang_tiew',
    component: doiluang_tiew
  },
  {
    path: '/doiluang_tipak',
    name: 'doiluang_tipak',
    component: doiluang_tipak
  },
  {
    path: '/intanon_tiew',
    name: 'intanon_tiew',
    component: intanon_tiew
  },
  {
    path: '/intanon_tipak',
    name: 'intanon_tipak',
    component: intanon_tipak
  },
  {
    path: '/kumfa_tipak',
    name: 'kumfa_tipak',
    component: kumfa_tipak
  },
  {
    path: '/meatho_tipak',
    name: 'meatho_tipak',
    component: meatho_tipak
  },
  {
    path: '/monjam_tiew',
    name: 'monjam_tiew',
    component: monjam_tiew
  },
  {
    path: '/monjam_tipak',
    name: 'monjam_tipak',
    component: monjam_tipak
  },
  {
    path: '/phaphongpheang_tiew',
    name: 'phaphongpheang_tiew',
    component: phaphongpheang_tiew
  },
  {
    path: '/phaphongpheang_tipak',
    name: 'phaphongpheang_tipak',
    component: phaphongpheang_tipak
  },
  {
    path: '/sunphakea_tipak',
    name: 'sunphakea_tipak',
    component: sunphakea_tipak
  },
  {
    path: '/changkain_tiew',
    name: 'changkain_tiew',
    component: changkain_tiew
  },
  {
    path: '/changkain_tipak',
    name: 'changkain_tipak',
    component: changkain_tipak
  },
  {
    path: '/doipui_tiew',
    name:'doipui_tiew',
    component: doipui_tiew
  },
  {
    path: '/monjong_tipak',
    name: 'monjong_tipak',
    component: monjong_tipak
  },
  {
    path: '/monlan_tiew',
    name: 'monlan_tiew',
    component: monlan_tiew
  },
  {
    path: '/monlan_tipak',
    name: 'monlan_tipak',
    component: monlan_tipak
  },
  {
    path: '/mongao_tipak',
    name: 'mongao_tipak',
    component: mongao_tipak
  },
  {
    path: '/noname_tipak',
    name: 'noname_tipak',
    component: noname_tipak
  },
  {
    path: '/sutep_tipak',
    name: 'sutep_tipak',
    component: sutep_tipak
  },
  {
   path: '/sutep_tiew', 
   name: 'sutep_tiew',
   component: sutep_tiew
  },
  {
    path: '/pahompok_tiew',
    name: 'pahompok_tiew',
    component: pahompok_tiew
  },
  {
    path: '/pahompok_tipak',
    name: 'pahompok_tipak',
    component: pahompok_tipak
  },
  {
    path: '/doipui_tipak',
    name: 'doipui_tipak',
    component: doipui_tipak
  },
  {
    path: '/kumfa_tiew',
    name: 'kumfa_tiew',
    component: kumfa_tiew
  },
  {
    path: '/meatho_tiew',
    name: 'meatho_tiew',
    component: meatho_tiew
  },
  {
    path: '/monjong_tiew',
    name: 'monjong_tiew',
    component: monjong_tiew
  },
  {
    path: '/mongao_tiew',
    name: 'mongao_tiew',
    component: mongao_tiew
  },
  {
    path: '/noname_tiew',
    name: 'noname_tiew',
    component: noname_tiew
  },
  {
    path: '/sunphakea_tiew',
    name: 'sunphakea_tiew',
    component: sunphakea_tiew
  }
  
];

mountain.forEach((route) => {
  routes.push({
    path: `/doi/${encodeURIComponent(route.station)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
