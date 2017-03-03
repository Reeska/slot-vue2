<style scoped>
</style>

<template>
  <div class="panel panel-info">
    <div class="panel-heading"><h2>My order</h2></div>

    <form class="panel-body" @submit.prevent="order()">
      <div class="input-group">
        <span class="input-group-addon">Name *</span>
        <input type="text" class="form-control" placeholder="Name" v-model.trim="info.name" required/>
      </div>

      <div class="input-group">
        <span class="input-group-addon">E-mail</span>
        <input type="email" class="form-control" placeholder="Email" v-model="info.email" />
      </div>

      <div class="input-group">
        <span class="input-group-addon">Street number</span>
        <input type="number" class="form-control" placeholder="Num" v-model="info.addressNum" />
      </div>

      <div class="input-group">
        <span class="input-group-addon">Street name *</span>
        <input type="text" class="form-control" placeholder="Street" v-model="info.addressStreet" required />
      </div>

      <div class="input-group">
        <span class="input-group-addon">City*</span>
        <input type="text" class="form-control" placeholder="City" v-model="info.addressCity" required />
      </div>

      <button class="btn btn-success" :disabled="!valid()">Confirm</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'basket',
    data () {
      return {
        info: {
          name: '',
          email: '',
          addressNum: '',
          addressStreet: '',
          addressCity: ''
        }
      };
    },
    beforeUpdate () {
      console.log(this.info);
    },
    methods: {
      order () {
        this.$router.push({ path: '/checkout', query: this.info });
      },
      valid () {
        return Number.isInteger(this.info.addressNum);
      }
    }
  };
</script>
