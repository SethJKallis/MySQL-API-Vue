<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/">Product List</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/create">Create Product</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>