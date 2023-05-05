<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">THÊM TÁC GIẢ</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Tên tác giả</label>
          <input
            type="text"
            class="form-control"
            v-model="author.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Năm sinh</label>
          <input
            type="text"
            class="form-control"
            v-model="author.year"
            required
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
      author: {
        name: "",
        year: ""
        
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:8000/bookstore/author/create-author";

      axios
        .post(apiURL, this.author)
        .then(() => {
          this.$router.push("/author");
          this.author = {
            name: "",
            year: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
