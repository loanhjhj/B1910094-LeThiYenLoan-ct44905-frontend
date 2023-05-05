<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">THÊM SÁCH</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Tên sách</label>
            <input
              type="text"
              class="form-control"
              v-model="book.name"
              required
            />
          </div>
          <div class="form-group">
            <label>Ngày xuất bản</label>
            <input
              type="text"
              class="form-control"
              v-model="book.publishedDate"
              required
            />
          </div>
          <div class="form-group">
            <label>Thể loại</label>
            <input
              type="text"
              class="form-control"
              v-model="book.genres"
              required
            />
          </div>

          <div class="form-group">
            <label>Tác giả</label>
            <input
              type="text"
              class="form-control"
              v-model="book.author"
              
            />
          </div>


          <br>
          <div class="form-group">
            <button class="btn btn-danger btn-block">Create</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        book: {
              name: "",
              publishedDate: "",
              genres: "",
              author: ""

        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:8000/bookstore/book/create-book";
  
        axios
          .post(apiURL, this.book)
          .then(() => {
            this.$router.push("/book");
            this.book = {
                    name: "",
                    publishedDate: "",
                    genres: "",
                    author: ""

            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  