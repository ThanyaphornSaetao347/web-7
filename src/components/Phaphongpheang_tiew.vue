<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h3>{{ n.name }}</h3>
    </div>
    <div class="tipark">
      <RouterLink to="/phaphongpheang_tipak">ที่พัก</RouterLink> /
      <RouterLink to="/phaphongpheang_tiew">สถานที่เที่ยว</RouterLink>
    </div>
  </div>
    <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <img :src="near.img2" alt="รูปภาพ 2">
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>พิกัด : <a :href="near.place">{{ near.place }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const travellist=ref([
{name: 'ป่าปงเปียง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/Pa-Pong-Piang.png", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const neartravel=ref([
{ name: 'บ้านป่าบงเปียง',
  img: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam35.jpg",
  img2: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam38.jpg",
  text_box: 'ไม่ได้เป็นเพียงแค่ที่เที่ยวแม่แจ่มที่ห้ามพลาดเท่านั้น แต่ยังเป็นจุดหมายปลายทางที่ต้องมาสัมผัสกันสักครั้งของเมืองเชียงใหม่เลยล่ะ ด้วยความงดงามของนาขั้นบันไดบนเขาสูงที่ไร่เรียงซ้อนกันลงไปตามไหล่เขาอย่างสวยงาม พร้อมกับบรรยากาศอันเงียบสงบที่โอบล้อมรอบ ๆ ทำให้บ้านป่าบงเปียงน่าหลงใหล ไม่ว่าจะมาเที่ยวในฤดูกาลไหน ที่นี่ก็สวยงามน่าประทับใจ ไม่ต้องไปไกลถึงบาหลี ก็มีนาข้าวขั้นบันไดสวยตรึงใจให้ชมกันที่นี่',
  place:'https://maps.app.goo.gl/B8XJFNr5sSxTZTgw5',
},

{
  name:'นาขั้นบันไดบ้านตีนผา',
  img: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam39.jpg",
  img2: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam40.jpg",
  text_box: 'นาข้าวขั้นบันไดที่นี่ก็สวยงามไม่แพ้บ้านป่าบงเปียง อยู่ท่ามกลางหุบเขา เราสามารถถ่ายภาพมุมสูงได้จากถนน หรือจะลงเดินไปถ่ายด้านล่างก็ได้ โดยจุดถ่ายภาพนาข้าวขั้นบันไดบ้านตีนผานี้จะมีอยู่ 2 ฝั่ง มีความสวยงามแตกต่างกันออกไป หรือใครจะนอนโฮมสเตย์ในหมู่บ้านตีนผาก็ได้เช่นกัน',
  place: 'https://maps.app.goo.gl/eNbN5ZK4f4W2H6Ui6',

},

{
  name: 'วัดป่าแดด',
  img: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam23.jpg",
  img2: "https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam11.jpg",
  text_box: 'เป็นวัดเก่าแก่แห่งหนึ่งของเมืองแม่แจ่ม มีสิ่งที่น่าสนใจมากมาย หนึ่งในนั้นก็คือภาพจิตรกรรมฝาผนังภายในวิหารไม้เก่าแก่ที่ยังคงมีความสมบูรณ์ ซึ่งวาดโดยช่างแต้ม (วาด) ชาวไทยใหญ่ โดยได้วาดเรื่องราวพุทธประวัติไว้อย่างสวยงามมาก ๆ นอกจากนี้ยังมีพระอุโบสถกลางน้ำ และพระธาตุวัดป่าแดดให้ได้ชมกันอีกด้วย',
  Location:'ตำบลท่าผา อำเภอแม่แจ่ม จังหวัดเชียงใหม่',
  place:'https://maps.app.goo.gl/6EaELuSxKrYiikxU9',
},

{
  name:'วัดยางหลวง',
  img: "https://img.kapook.com/u/2017/pattra/pataugust2017/DSC_5111.JPG",
  img2: "https://www.gplace.com/include/img_gal/6/19/gp5e1309d904faa.jpg",
  text_box: 'วัดเล็ก ๆ แต่มีความสำคัญมากที่สุดแห่งหนึ่งของเมืองแม่แจ่ม ภายในโบสถ์เก่าของวัดจะมีสิ่งที่น่าสนใจอยู่ 2 สิ่ง คือ กู่ปราสาทกิจกูฏ และเงาสะท้อนภาพเสมือนจริงของพระวิหารอีกหลัง ซึ่งสามารถเที่ยวชมได้ตลอดทั้งวันในช่วงที่มีแสงสว่าง',
  Location:'ตำบลท่าผา อำเภอแม่แจ่ม จังหวัดเชียงใหม่',
  place: 'https://maps.app.goo.gl/rBgcF2eEbxjN62ib9',
},

{
  name: 'หมู่บ้านหัตถกรรมผ้าซิ่นตีนจกแม่แจ่ม',
  img:"https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam31.jpg",
  img2:"https://img.kapook.com/u/2017/Tanapol/travel/august/maejam/maejam18.jpg",
  text_box:'สำหรับใครที่ชอบผ้าไทยสวย ๆ ทอมืออย่างประณีต ต้องไม่พลาดไปเที่ยวชมหมู่บ้านหัตถกรรมผ้าซิ่นตีนจกแม่แจ่ม ซึ่งตั้งอยู่ที่ตำบลท่าผา ภายในหมู่บ้านชาวบ้านจะเปิดหน้าบ้านขายผ้าซิ่นกันเต็มทั้งสองฝั่งถนน มีผ้าซิ่นหลากหลายแบบหลากหลายราคาให้เลือกซื้อกันอย่างจุใจ และยังมีผลิตภัณฑ์จากผ้าทอมือให้เลือกซื้อไปเป็นของฝากของที่ระลึกอีกมากมาย',
  Location:'ตำบล ช่างเคิ่ง อำเภอแม่แจ่ม เชียงใหม่ 50270',
  place:'https://maps.app.goo.gl/5fbLLgvBUKrGRec6A',

}
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
