<template>
  <div class="vacation">
    <h1>VacationPicker</h1>
    <p class="text-danger">jsdfjsdfnhd bjkbef hkb k</p>

    <p> Aantal = {{count}}</p>
    <button v-on:click="plus()" class="btn btn-success">Plus</button>
    <button @click="min()" class="btn btn-danger">Min</button>

    <ul class="list-group">
      <li v-for="(number, index) in numberList" v-bind:key="index" :title="index" class="list-group-item">
        {{number}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VacationPicker',
  data(){
    return{
      count:0,
      numberList: [1,2,3,4]
    }
  },
  methods:{
    plus(){
      this.count++;
    },
    min(){
      this.count--;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
