<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/changkain_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/changkain_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
      <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>เวลา : {{ near.time }}</p>
        <p>ราคา : {{ near.Price }}</p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const travellist=ref([
{name: 'ขุนช่างเคี่ยน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/khun-chang-kian-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel =ref([
{ name: 'View Suai Coffee' , 
  img: "https://img.restaurantguru.com/r6e2-Beautiful-Coffee-facade.jpg",
  text_box:'' ,
  Location:'53 ถนน ช้างเผือก Tambon Don Kaeo, Mueang Chiang Mai District, Chiang Mai 50300' ,
  place:'  https://maps.app.goo.gl/NdsWuW8hNQRTJMUE6 ',
  phone:' 081 026 7984',
},
{ name: 'Chong Wa Coffee Shop' , 
  img: "https://img.wongnai.com/p/1920x0/2020/12/12/44a622e01b80440daa1f3031a8fb3a22.jpg",
  text_box:'' ,
  Location:'-' ,
  place:'https://maps.app.goo.gl/PFbjbaTgSo9dzv22A',
  phone:'081 180 4722',
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