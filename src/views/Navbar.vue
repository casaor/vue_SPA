<template>
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SPA</a>
          
          <div class="row">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/home" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/clients" class="nav-link">Clients</router-link>
              </li>
              <li>
                <router-link to="/proveidors" class="nav-link">Proveïdors</router-link>
              </li>
              <li>
                <router-link to="/botiga" class="nav-link">Botiga</router-link>
              </li>
              <li>
                <router-link to="/magatzem" class="nav-link">Magatzem</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
</template>

<script>

export default {
  props: ['currentComponent']
}

</script>



<style>
.navbar {
    width: 100% !important;
} 
.dropdown-menu {
  right:0;
  position: absolute;
}
</style>
