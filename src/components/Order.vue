<template>
  <div id="Order" class="scop">
      <h1>Order</h1>
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
  name: "Order",
  components: {
    Grid,
  },
  data() {
    return {
      columns: [
        {
          id: "od_id",
          name: "ID",
          //hidden: true,
        },
        {
          id: "od_name",
          name: "od_name",
        },
        {
          id: "od_lname",
          name: "od_lname",
        },
        {
          id: "od_address",
          name: "od_address",
        },
        {
          id: "od_road",
          name: "od_road",
        },
        {
          id: "od_locality",
          name: "od_locality",
        },
        {
          id: "od_district",
          name: "od_district",
        },
        {
          id: "od_province",
          name: "od_province",
        },
        {
          id: "od_phnum",
          name: "od_phnum",
        },
        {
          id: "od_date",
          name: "od_date",
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
        const response = await axios.get(this.$apiUrl + "order", {
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
