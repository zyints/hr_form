<style lang="sass" scoped>

.icon
  width: 4rem;
  cursor: pointer;
h2
  margin-bottom: 1rem;
input
  font-size: 1em;
  padding: 0.2rem 1rem;
  border: 2px solid #555;
  border-radius: 2rem;
  margin-bottom: 1rem;
</style>

<template>
  <div class="text-drak vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
    <h2>登记</h2>
    <input type="text" placeholder="姓名" v-model="name"/>
    <input type="number" placeholder="手机号" v-model="phone" max="99999999999"/>
    <div v-show="errorFlag" style="color: #f44336;">
      {{errorMsg[errorType]}}
    </div>
    <div @click="gotoPage">
        <svg t="1556341450544" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="879"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
            <defs>
                <style type="text/css"></style>
            </defs>
            <path d="M512 992a484.4 484.4 0 0 1-191.856-39.824 36.32 36.32 0 1 1 28.96-66.608 409.248 409.248 0 1 0-173.024-143.344 36.448 36.448 0 0 1-60.096 41.264A480.112 480.112 0 1 1 512 992z" p-id="880"></path>
            <path d="M728.592 551.024H308.944a36.944 36.944 0 1 1 0-73.888h419.648a36.944 36.944 0 1 1 0 73.888z" p-id="881"></path>
            <path d="M540.928 738.672a34.656 34.656 0 0 1-25.856-11.088 36.576 36.576 0 0 1 0-52.464l161.808-161.808-161.808-161.808a37.104 37.104 0 1 1 52.464-52.464l188.4 188.4a37.632 37.632 0 0 1 11.088 25.856 34.656 34.656 0 0 1-11.088 25.856L567.536 727.552a36.8 36.8 0 0 1-26.608 11.12z" p-id="882"></path>
        </svg>
    </div>
  </div>
</template>
<script>


export default {
  data () {
    return {
      name: '',
      phone: '',
      phoneFlag: false,
      errorFlag: false,
      errorType: 'phone',
      errorMsg:{
        all: '请填写姓名与手机号',
        phone: '手机号不符合规则或大于11位',
        name: '姓名未填写',
      }
    }
  },
  watch: {
    phone(val) {
      if(val.length > 11){
        this.errorFlag = true;
      } else if(val.length === 11) {
        this.phoneFlag = true;
      }
    }
  },
  methods: {
    gotoPage() {
      if(this.name.length > 0 && this.phoneFlag){
        this.$store.commit('update', {name: this.name, phone: this.phone});
        console.log(this.$store.stare);
        this.$router.push('/form/list')
      } else if(this.name.length === 0 && !this.phoneFlag){
        this.errorType = 'all';
        this.errorFlag = true;
      } else if(this.name.length === 0) {
        this.errorType = 'name';
        this.errorFlag = true;
      } else if(!this.phoneFlag) {
        this.errorType = 'phone';
        this.errorFlag = true;
      }
    }
  },
  mounted () {
  }
}
</script>

