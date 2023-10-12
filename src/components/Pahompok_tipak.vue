<template>
  
    <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
      <h6>{{ n.text_box }}</h6>
      <p>สถานที่ : {{ n.Location }}</p>
      <p>เบอร์ติดต่อ : {{ n.phone }}</p>
    </div>
    <div class="tipark">
      <RouterLink to="/pahompok_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/pahompok_tiew">สถานที่เที่ยว</RouterLink>
    </div>
    <br>
  <br>
  <h3>ที่พัก</h3>
    <div class="col" v-for="(stay, index) in stayy" :key="index">
      <div class="name">
        <div class="name">
        <img :src="stay.img" alt="รูปภาพ 1">
        <img :src="stay.img2" alt="รูปภาพ 2">
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>ราคา : {{ stay.Price }}</p>
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
        <p>พิกัด : <a :href="stay.place">{{ stay.place }}</a></p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const travellist  = ref([
{name: 'ดอยผ้าห่มปก', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-phahompok-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy = ref([
{name:'Hotel Dawa' , 
  img: "https://img.wongnai.com/p/1920x0/2023/01/22/d6548c3bc7f14504917b66ff019dbd3b.jpg",
  img2:"https://img.wongnai.com/p/1920x0/2023/01/22/5432825e93bf4a18bcc0979f3b137037.jpg",
  text_box:'โรงแรมขนาดเล็กสีขาวสะอาดตาสไตล์มินิมอล ตั้งอยู่ริมถนนเลี่ยงเมืองฝาง เดินทางสะดวก ที่จอดรถกว้างขวาง ห้องพักแบ่งเป็น 2 โซน โซนเตียงใหญ่ King Size Bed Room และ โซนเตียงแฝด Twin Bed Room การเดินทางครั้งนี้พักโซนเตียงแฝด ภายในห้องพักสะอาด สิ่งอำนวยความสะดวกมีตามพื้นฐาน สภาพปานกลาง'  ,
  Location:'242 หมู่.1 ถนนหมายเลข 107 เลี่ยงเมืองฝาง ตำบลสันทราย, Amphoe Fang, Thailand, Chiang Mai',
  phone:' 087 576 0838',
  Price:'700',
  link: 'https://www.facebook.com/hoteldawa28/?locale=th_TH',
  Facebook:'HOTEL DAWA',
},

{name:'โรงแรมฝางโมเดิร์น (Fang Modern Hotel)' , 
  img: "https://img.wongnai.com/p/1920x0/2020/03/01/73e52d57abf844658e68b37781b436a7.jpg",
  img2:"https://img.wongnai.com/p/1920x0/2020/03/01/d576b0b6dc3c45ad900ac13b74005722.jpg",
  text_box:'เป็นห้องพักที่อยู่กลางทุ่งนาเป็นห้อง2ห้องและมีห้องส่วนกลางมีความเป็นส่วนตัวมาก ตื่นเช้ามีอาหารเช้าเป็นชุดอาหารเหนือมาส่งถึงที่กินพร้อมแสงตะวันสาดส่องอากาศดีสุดๆที่พักมีหลายแบบ มีที่จอดรถส่วนตัว ทางเข้ามาไม่ยากเข้าซอยมาสุดซอยสั้น'  ,
  Location:'เลขที่405 หมู่3 ต.สันทราย, Amphoe Fang, Thailand, Chiang Mai',
  Price:'เริ่มต้น 400 บาท',
  phone:'086 439 1843',
  link: 'https://www.facebook.com/FangModernHotel/?locale=th_TH',
  Facebook:'โรงแรม ฝาง โมเดิร์น',
},

{name:'โรงแรมพี.เอ็น. (P.N. Hotel)' , 
  img: "https://img.wongnai.com/p/1920x0/2018/03/20/8db2dee1dbd049e3982016cc5d306b52.jpg",
  img2:"https://img.wongnai.com/p/1920x0/2018/03/20/e411e168f0b94240b02c2cf0cb84a0dd.jpg",
  text_box:' การจัดการแบบเรียบง่ายแบบบ้านๆ บริการดี ห้องพักสะอาดดีมาก มีอาหารเช้าบริการ เป็นข้าวต้มร้อนๆ ขนมปังปิ้ง เป็นโรงแรมขนาดเล็กคนไม่พลุกพล่าน'  ,
  Location:' Wiang, Fang District, Chiang Mai 50110',
  place:'https://maps.app.goo.gl/zQhjHKfxwmn2Pyse6',
  Price:'-',
  phone:'053451082',
  link: '-',
  Facebook:'-',
},

{name:'ภูมณีลาหู่โฮมโฮเทล (Phumanee Home Hotel)' , 
  img: "https://www.chuwab.com/images/hotel/1/20/2620/2620_large_201603251501141.jpg",
  img2:"https://www.chuwab.com/images/hotel/1/20/2620/2620_large_201603251500594.jpg",
  text_box:'ภูมณี ลาฮู โฮมโฮเทลตั้งอยู่ใน ฝาง นักเดินทางที่ชอบเรื่องวัฒนธรรมต้องไป พิพิธภัณฑ์โรงงานหลวงที่ 1 (ฝาง) ส่วนใครอยากดื่มด่ำธรรมชาติอันงดงามไม่ควรพลาด อุทยานแห่งชาติดอยผ้าห่มปก และ น้ำพุร้อนฝาง หากมีเวลา ลองมาหากิจกรรมสนุกๆ ที่ได้รับความนิยมของที่นี่ อย่างเช่น น้ำพุร้อน'  ,
  Price:'เริ่มต้นที่ 488',
  Location:'122/1 ม 4 เวียง อำเภอ ฝาง เชียงใหม่ 50110',
  place:'https://maps.app.goo.gl/hA2N8YkBGmW97jpo8',
  phone:'086 431 3564',
  link: 'https://www.facebook.com/Phumaneelahuhomehotel',
  Facebook:'Phumanee Lahu Home Hotel Fang ภูมณี ลาหู่ โฮมโฮเทล ฝาง',
},

{name:'Sleeping Tree' , 
  img: "https://images.trvl-media.com/hotels/20000000/19750000/19744700/19744654/3b9e70f6_z.jpg",
  img2:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/274455995.jpg?k=4a7325d60e2bec8fcf9ff1f649e307e19dd6b19ff8a72c7e19549d41ff549d07&o=",
  text_box:' โรงแรมที่พัก ที่มีทั้งวิวและบรรยากาศ'  ,
  Price:'เริ่มต้น 890 บาท พร้อมอาหารเช้า',
  Location:' 16/1 Moo 4, Tambol Wiang, Fang,, Fang, Thailand, Chiang Mai',
  phone:'Sleeping Tree hotel-โรงแรมสลีพพิงทรี ที่พักสวยในฝาง',
  link: 'https://www.facebook.com/sleepingtreefang/?locale=th_TH',
  Facebook:'Sleeping Tree hotel-โรงแรมสลีพพิงทรี ที่พักสวยในฝาง ',
},
])
</script>

<style>
.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>