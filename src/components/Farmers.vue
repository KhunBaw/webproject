<template>
  <div id="Farmers" class="scop">
      <h1>Farmers</h1>
      <div class="d-grid justify-content-md-end col-11 mx-auto Add">
          <button type="button" class="btn btn-success add2" > AddData </button>
      </div>
      <div>
        <grid
      :cols="columns"
      :rows="data"
      :sort="sort"
      :auto-width="autoWidth"
      :search="search"
      :pagination="pagination"
      :width="width"
      :language="language"
      :class-names="classNames"
    ></grid>
      </div>
  </div>
</template>

<script>
import Grid from "gridjs-vue";
import axios from "axios";
export default {
  name: "Farmers",
  components: {
    Grid,
  },
  data() {
    return {
      columns: [
        {
          id: "username",
          name: "username",
          //hidden: true,
        },
        {
          data: (row) => row.fm_name+' '+row.fm_lname,
          name: "name",
        },
        {
          id: "fm_address",
          name: "fm_address",
        },
        {
          id: "fm_phnum",
          name: "fm_phnum",
        },
        {
          id: "position",
          name: "position",
        },
        {
          width: '50px',
          sort: {
            enabled: false,
          },
          formatter: (cell, row) => {
            return this.$gridjs.h(
              "button",
              {
                className: "btn btn-outline-warning",
                onClick: () => alert(`Editing "${row.cells[0].data}"`),
              },
              "Edit"
            );
          },
        },
        {
            width: '50px',
          sort: {
            enabled: false,
          },
          formatter: (cell, row) => {
            return this.$gridjs.h(
              "button",
              {
                className: "btn btn-outline-danger",
                onClick: () => alert(`Del "${row.cells[0].data}"`),
              },
              "Del"
            );
          },
        },
      ],
      data: [],
      classNames: {},
      autoWidth: true,
      search: true,
      sort: true,
      width: "100%",
      theme: "mermaid",
      pagination: { limit: 5 },
      language: {
        search: {
          placeholder: "🔍 ค้นหา...",
        },
        pagination: {
          previous: "⬅️",
          next: "➡️",
          showing: "😃 หน้าที่",
          to: "จาก",
          of: "ทั้งหมด",
          results: () => "รายการ",
        },
      },
    };
  },

  async mounted() {
    let accessToken = this.$accessToken;
    if (await accessToken) {
      try {
        const response = await axios.get(this.$apiUrl + "Farmers", {
          headers: { Authorization: `bearer ${accessToken}` },
        });
        this.data = await response.data;
      } catch {
        this.$router.push("/login");
    localStorage.removeItem('user');
      }
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert(event);
    },
  },
};
</script>

<style scoped>

</style>
