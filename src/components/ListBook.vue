<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>TÊN SÁCH</th>
              <th>NGÀY XUẤT BẢN</th>
              <th>THỂ LOẠI</th>
              <th>TÁC GIẢ</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in Books" :key="book._id">
              <td>{{ book.name }}</td>
              <td>{{ book.publishedDate }}</td>
              <td>{{ book.genres }}</td>
              <td>{{ book.authors }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit-book', params: { id: book._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteBook(book._id)"
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
        Books: [],
      };
    },
    created() {
      let apiURL = "http://localhost:8000/bookstore/book/";
      axios
        .get(apiURL)
        .then((res) => {
          this.Books = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      deleteBook(id) {
        let apiURL = `http://localhost:8000/bookstore/book/delete-book/${id}`;
        let indexOfArrayItem = this.Books.findIndex((i) => i._id === id);
  
        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.Books.splice(indexOfArrayItem, 1);
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
  