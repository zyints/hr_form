<style lang="sass" scoped>
.buttom
  width: 3rem;
  height: 3rem;
  padding: 0rem 0.5rem;
  margin: 1.2rem;
  border-top: 1px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 3px 4px 2px #e0e0e0c4, -1px -1px 4px 2px #f8f8f8;
  &:active
    border: 1px solid #000;
    box-shadow: 0px 0px 4px 0px #e0e0e0c4, -1px -1px 4px 2px #f8f8f8;
</style>

<template>
  <div class="pr-2rem pl-2rem form text-drak vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="pb-2rem w-100 d-flex flex-column justify-content-center align-items-center">
      <h3 class="pb-1rem">以下30个问题的答案，对应5-1分</h3>
      <div class="w-100 pr-1rem pl-1rem d-flex flex-row justify-content-between">
        <div class="flex-shrink-0">
          <h4>非常同意记5分</h4>
          <h4>比较同意记4分</h4>
          <h4>差不多同意记3分</h4>
          <h4>有一点同意记2分</h4>
          <h4>不同意记1分</h4>
        </div>
        <div class="w-100 d-flex flex-row-reverse align-items-center">
          <div style="font-size: 2.5rem;">{{nextNum + 1}}/30</div>
        </div>
      </div>
    </div>
    <div style="overflow: hidden;" class="vw-100">
      <div id="test" :style="`transform: translateX(${anime.translateX}px);`"  class="d-flex flex-row">
        <div v-for="(item, index) in list" :key="index" style="margin: 2.5rem 0rem; width:100vw" class="text-drak d-flex flex-shrink-0 flex-column justify-content-center align-items-center">
          <h2 v-if="!over">{{item}}</h2>
          <div v-if="over" style="font-size: 2rem;font-weight: bold;">
            感谢你的填写
          </div>
          <div v-else style="font-size: 4rem;" class="">
            {{submitList[index] || 0}}
          </div>
        </div>
      </div>
    </div>

    <div style="font-size: 1.6rem; width: 18rem; flex-wrap: wrap;" class="pt-2rem d-flex flex-row justify-content-center flex-warp">
      <div @click="setNum(1)" class="buttom d-flex flex-column justify-content-center align-items-center">1</div>
      <div @click="setNum(2)" class="buttom d-flex flex-column justify-content-center align-items-center">2</div>
      <div @click="setNum(3)" class="buttom d-flex flex-column justify-content-center align-items-center">3</div>
      <div @click="setNum(4)" class="buttom d-flex flex-column justify-content-center align-items-center">4</div>
      <div @click="setNum(5)" class="buttom d-flex flex-column justify-content-center align-items-center">5</div>
    </div>

  </div>
</template>
<script>
import anime from 'animejs';
// import axios from "@nuxtjs/axios";
const prefix = '';
// const prefix = '/ts/hr';
export default {
  data () {

    return {
      nextNum: 0,
      over: false,
      list: [
        '你是个值得信赖的人吗？',
        '你个性温和吗？',
        '你有活力吗？',
        '你善解人意吗？',
        '你独立吗？',
        '你受人爱戴吗？',
        '做事认真且正直吗？',
        '你富有同情心吗？',
        '你有说服力吗？',
        '你大胆吗？',
        '你精确吗？',
        '你适应能力强吗？',
        '你组织能力好吗？',
        '你是否积极主动吗？',
        '你害羞吗？',
        '你强势吗？',
        '你镇定吗？',
        '你勇于学习吗？',
        '你反应快吗？',
        '你外向吗？',
        '你注意细节吗？',
        '你爱说话吗？',
        '你的协调能力好吗？',
        '你勤劳吗？',
        '你慷慨吗？',
        '你小心翼翼吗？',
        '你令人愉快吗？',
        '你传统吗？',
        '你亲切吗？',
        '你工作足够有效率吗？',
      ],
      submitList: [],
      bottonFlag: true,
      anime: {
        translateX: 0,
      },
      pushForm: {
        name: this.$store.state.name,
        phone: this.$store.state.phone,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
      }
    }
  },
  methods: {
    async outAnime() {
      let _test = window.innerWidth;
      let _vue = this;
      let _translateX = this.anime.translateX - _test;
      let _anime = await anime({
        targets: '#test',
        translateX: _translateX,
        easing: 'easeInOutQuart',
        delay: 300,
        complete: function(anim) {
          _vue.bottonFlag = true;
          _vue.anime.translateX = _translateX;
        }
      });
    },
    setNum(num) {
      if(!this.bottonFlag) {
        return ;
      }

      let _over = false;
      if(this.submitList.length < 29){
        this.outAnime();
      } else {
        _over = true;
      }
      this.bottonFlag = false;
      console.log(this.list.length);
      this.submitList.push(num);
      if(this.nextNum < this.list.length - 1){

          if(_over) {
            setTimeout(() => {
              this.nextNum = this.nextNum + 1;
              this.bottonFlag = true
            }, 500);
          } else {
            this.nextNum = this.nextNum + 1;
          }

        } else {

          if (_over) {
            setTimeout(() => {
              alert('已经填写完啦~');
              this.over = true;
              this.bottonFlag = true;
              this.statistics();
            }, 500);
          } else {
            this.over = true;
            this.bottonFlag = true;
            this.statistics();
          }


      }
    },
    statistics() {
      let A = this.submitList[0] + this.submitList[6] + this.submitList[10] + this.submitList[15] + this.submitList[20] + this.submitList[25];
      let B = this.submitList[1] + this.submitList[7] + this.submitList[14] + this.submitList[16] + this.submitList[24] + this.submitList[27];
      let C = this.submitList[2] + this.submitList[5] + this.submitList[12] + this.submitList[19] + this.submitList[21] + this.submitList[28];
      let D = this.submitList[3] + this.submitList[8] + this.submitList[11] + this.submitList[18] + this.submitList[22] + this.submitList[26];
      let E = this.submitList[4] + this.submitList[9] + this.submitList[13] + this.submitList[17] + this.submitList[23] + this.submitList[29];
      console.log('结果', A, B, C, D, E);
      this.pushForm.A = A;
      this.pushForm.B = B;
      this.pushForm.C = C;
      this.pushForm.D = D;
      this.pushForm.E = E;
      this.postForm();
    },
    postForm() {
      let _pushForm = this.pushForm
      console.log(this.$axios);
      this.$axios.post('http://ml-dm.eziyan.top/api/hrForm/', _pushForm)
      .then((res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    // alert(window.innerWidth);
    let _test = window.innerWidth;
    if(this.$store.state.name.length === 0 && this.$store.state.phone.length === 0 ){
      this.$router.push(prefix + '/pdp/')
    }
    // this.anime.translateX = 375 * 29 / 2;
    // console.log(window.innerWidth);
    // console.log(this.$store.state);
  },
}
</script>
