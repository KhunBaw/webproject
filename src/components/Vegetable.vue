<template>
  <div id="Vegetable" class="scop">
      <h1>Vegetable</h1>
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
  name: "Vegetable",
  components: {
    Grid,
  },
  data() {
    return {
      columns: [
        {
          id: "v_id",
          name: "ID",
          //hidden: true,
        },
        {
          id: "v_name",
          name: "v_name",
        },
        {
          id: "v_compass",
          name: "v_compass",
        },
        {
          id: "v_nfv",
          name: "v_nfv",
        },
        {
          id: "v_d1",
          name: "v_d1",
        },
        {
          id: "v_d2",
          name: "v_d2",
        },
        {
          id: "v_d3",
          name: "v_d3",
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
        const response = await axios.get(this.$apiUrl + "vegetable", {
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
