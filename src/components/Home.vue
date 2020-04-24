<template>
  <div id="home">
      <h4>Welcome</h4>
    <!-- <ul class="collection with-header">
      <li class="collection-header"><h4>Contributers</h4></li>
      <li v-for="contributer in contributers" v-bind:key="contributer.id" class="collection-item">
        <div class="chip">{{contributer.name}}</div>
        {{contributer.contributer_id}}: {{contributer.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { contributer_id: contributer.contributer_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div> -->
  </div>
</template>

<script>
  import db from 'firebase'
  export default {
    name: 'home',
    data () {
      return {
        contributers: [],
        loading: true
      }
    },
    created () {
      db.collection('contributers').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'contributer_id': doc.data().contributer_id,
            'name': doc.data().name,
            // 'dept': doc.data().dept,
            // 'position': doc.data().position
          }
          this.contributers.push(data)
        })
      })
    }
  }
</script>