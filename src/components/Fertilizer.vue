<template>
  <div id="Fertilizer" style="border-style: solid none none none;">
    <h1>Fertilizer</h1>
    <div class="d-grid justify-content-md-end col-11 mx-auto Add">
      <button type="button" class="btn btn-success add2">AddData</button>
    </div>
    <div>
      <grid
        :cols="columns"
        :rows="fertilizers"
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
  name: "Fertilizer",
  components: {
    Grid,
  },
  data() {
    return {
      columns: [
        {
          id: "fertilizer_id",
          name: "ID",
          hidden: true,
        },
        {
          id: "fertilizer_type",
          name: "Type",
        },
        {
          id: "fertilizer_amount",
          name: "Amount",
        },
        {
          id: "time",
          name: "Time",
        },
        {
          id: "day_times",
          name: "Day_times",
        },
        {
          id: "times_day",
          name: "Times_day",
        },
        {
          id: "num_first",
          name: "Num_first",
        },
        {
          id: "num_pick",
          name: "Num_pick",
        },
        {
          data: (row) => row.unit.unit_th,
          name: "Unit_th",
        },
        {
          data: (row) => row.unit.unit_eng,
          name: "Unit_eng",
        },
        {
          width: "50px",
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
          width: "50px",
          sort: {
            enabled: false,
          },
          formatter: (cell, row) => {
            return this.$gridjs.h(
              "button",
              {
                className: "btn btn-outline-danger",
                onClick: () => Delete(`${row.cells[0].data}`),
              },
              "Del"
            );
          },
        },
      ],
      fertilizers: [],
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
        const response = await axios.get(this.$apiUrl + "fertilizer", {
          headers: { Authorization: `bearer ${accessToken}` },
        });
        this.fertilizers = await response.data;
        this.fertilizerssearch = await this.fertilizers;
      } catch {
        this.$router.push("/login");
        localStorage.removeItem("user");
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
async function Delete(id) {
  let accessToken = await localStorage.getItem("accessToken")
  alert(accessToken)
      if (confirm("Do you want to delete this id : " + id)) {
        await axios.delete("http://localhost:3000/api/v1/fertilizer/"+ id,{ headers: {"Authorization" : `bearer ${accessToken}`} });
        location.reload();
      }
    }
</script>

<style scoped>
.Add {
  margin-top: 5px;
}
</style>
