<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>TÊN TÁC GIẢ</th>
            <th>NĂM SINH</th>
            <th>TÁC PHẨM</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in Authors" :key="author._id">
            <td>{{ author.name }}</td>
            <td>{{ author.year }}</td>
            <td>{{ author.books }}</td>
            <td>
              <router-link
                :to="{ name: 'edit-author', params: { id: author._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteAuthor(author._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Authors: [],
    };
  },
  created() {
    let apiURL = "http://localhost:8000/bookstore/author/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Authors = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteAuthor(id) {
      let apiURL = `http://localhost:8000/bookstore/author/delete-author/${id}`;
      let indexOfArrayItem = this.Authors.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Authors.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
