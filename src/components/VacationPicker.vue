<template>
  <div class="vacationpicker">
    <h1>vacationpicker</h1>
    <p class="text-danger">yassine</p>
    
    
    <p>Aantal = {{ count }}</p>
    <button> v-on:click="plus()" class="btn btn-success">Plus</button>
    <button @click="min()" class="btn btn-danger">min</button>

    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item"> v-on:

          </li>
        </ul>
      </div>
    </div>
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






































