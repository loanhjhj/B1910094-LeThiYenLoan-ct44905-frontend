<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">CẬP NHẬT THÔNG TIN SÁCH</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group">
            <label>Tên tác giả</label>
            <input
              type="text"
              class="form-control"
              v-model="book.name"
            />
          </div>
  
          <div class="form-group">
            <label>Ngày xuất bản</label>
            <input
              type="text"
              class="form-control"
              v-model="book.publishedDate"
              
            />
          </div>
  
          <div class="form-group">
            <label>Thể loại</label>
            <input
              type="text"
              class="form-control"
              v-model="book.genres"
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
            <button class="btn btn-danger btn-block">Update</button>
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
        book: {},
      };
    },
    created() {
      let apiURL = `http://localhost:8000/bookstore/book/edit-book/${this.$route.params.id}`;
      axios.get(apiURL).then((res) => {
        this.book = res.data;
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:8000/bookstore/book/update-book/${this.$route.params.id}`;
  
        axios
          .put(apiURL, this.book)
          .then((res) => {
            console.log(res);
            this.$router.push("/book");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>