<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Admin</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Link</a>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="" @click="Logout()">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    Logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
};
</script>

<style>
body {
  background-color: #dddddd;
}
</style>
