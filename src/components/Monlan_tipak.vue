<template>
  
    <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
      <h6>{{ n.text_box }}</h6>
      <p>การเดินทาง มายัง ดอยม่อนล้าน
     สามารถเดินทางมาบนถนนเชียงใหม่พร้าว หมายเลข 1001 ขับไปเรื่อยๆ ประมาณ 90 กิโลเมตร 
     จากนั้นก็ให้เลี้ยวเข้าเส้นถนนหมายเลข 1150 แล้วจะเจอกับป้ายบอกทางไปแม่ขะจาน จังหวัดเชียงราย จากนั้นจะเจอทางแยกไปบ้านขุนแจ ตรงนี้ก็จะเป็นทางขึ้นไป ดอยม่อนล้าน ซึ่งดอยม่อนล้านจะห่างจากอำเภอพร้าว  40 กิโลเมตรโดยประมาณ</p>
     <p>ที่อยู่ : {{ n.Location }}</p>
     <p>เวลา : {{ n.time }}</p>
     <a :href="n.link">พิกัด</a>
    </div>
  </div>
  <br>
  <div class="tipark">
      <RouterLink to="/monlan_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/monlan_tiew">สถานที่เที่ยว</RouterLink>
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
        <p>Facebook : <a :href="stay.link">{{ stay.Facebook }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยม่อนล้าน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monlan-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'ที่พัก ดอยม่อนล้าน' , 
  img: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/01/05/20180105b9405a13d7a19194ecccb492f7c5e954153746.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Joe/Scoop/10%20Mon%20Chiangmai/Monlarn2.jpg",
  text_box:'ดอยม่อนล้านมีที่พักของโครงการเกษตรที่สูงม่อนล้าน ให้บริการประมาณ 6 หลัง พร้อมเครื่องนอน พักได้ 4-5 คน มี ไฟฟ้าใช้ตลอดวัน ไม่มีเครื่องทำน้ำอุ่น ค่าบริการแล้วแต่จะให้เป็นค่าบำรุงสถานที่ (*ช่วงที่มีคนมาพักเยอะๆธ.ค-ม.ค ทางโครงการขอความร่วมมือค่าห้องพักประมาณ500บาทต่อคืน) รวมถึงสถานที่กางเต้นท์สามารถ นำเต้นท์มาเองได้ ไม่มีร้านอาหารต้องเตรียมมาเอง ต'  ,
  Location:'อำเภอพร้าว จังหวัดเชียงใหม่',
  phone:'อ.แจ๊ค 089 554 1025',
  link: 'https://www.facebook.com/MODOlMONLAN/',
  Facebook:'ดอยม่อนล้าน',
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