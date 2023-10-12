<template>
    <div class="col" v-for="(n) in travellist" :key="n">
     <div class="name">
       <h3>{{ n.name }}</h3>
       <h6>{{ n.text_box }}</h6>
       <p>  ไฮไลต์ของดอยม่อนเงาะ คือ จุดชมวิวบนยอดดอย มีความสูง 1,425 เมตร เหนือระดับน้ำทะเล เป็นมุมภูเขาแบบ 360 องศา ทำให้สามารถมองเห็นพระอาทิตย์ขึ้นและตกได้ในที่เดียวเลย นอกจากนี้ในช่วงที่อากาศเย็น นักท่องเที่ยวก็จะได้ชมทะเลหมอกที่มีความสวยงาม ทอดยาวไปตามหุบเขาต่าง ๆ เป็นระยะทางหลายกิโลเมตรเลยทีเดียว นับเป็นแลนด์มาร์กที่สายหมอกทั้งหลายควรไปเช็กอินเป็นอย่างยิ่ง</p>
      <a :href="n.link">พิกัด</a>
     </div>
     <div class="tipark">
       <RouterLink to="/mongao_tipak">ที่พัก</RouterLink> /
       <RouterLink to="/mongao_tiew">สถานที่เที่ยว</RouterLink>
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
        <p>Facebook : <a :href="near.link">{{ near.Facebook }}</a></p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const travellist=ref([
{name: 'ดอยม่อนเงาะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monngo.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'ม่อนเงาะ' , 
  img: "https://s359.kapook.com//pagebuilder/f830359c-2880-4ee6-b294-2fb97492dc5b.jpg",
  text_box:'เป็นแหล่งท่องเที่ยวเชิงธรรมชาติที่นักท่องเที่ยวสามารถมองเห็นวิวทิวทัศน์ของ 3 ยอดดอยใหญ่ ๆ ของจังหวัดเชียงใหม่ นั่นคือ ยอดดอยผ้าห่มปก ยอดดอยอินทนนท์ และยอดดอยหลวงเชียงดาว รวมถึงทิวเขาน้อยใหญ่ที่สลับลดหลั่นกันไปสุดลูกหูลูกตา อากาศด้านบนจะเย็นสบาย มีลมหนาวพัดผ่าน' ,
  Location:'บ้านม่อนเงาะ ตำบลเมืองก๋าย อำเภอแม่แตง จังหวัดเชียงใหม่' ,
  place:'https://maps.app.goo.gl/zM6sgZnkv64CvWo46',
  Price:'-',
  time:'-',
  phone:'-',
  link:'https://www.facebook.com/royalprojectmonngo/',
  Facebook:'ศูนย์พัฒนาโครงการหลวงม่อนเงาะ'
},
])
</script>