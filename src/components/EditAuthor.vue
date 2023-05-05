<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">CẬP NHẬT THÔNG TIN TÁC GIẢ</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Tên tác giả</label>
          <input
            type="text"
            class="form-control"
            v-model="author.name"
          />
        </div>

        <div class="form-group">
          <label>Năm sinh</label>
          <input
            type="text"
            class="form-control"
            v-model="author.year"
            
          />
        </div>

        <div class="form-group">
          <label>Các tác phẩm</label>
          <input
            type="text"
            class="form-control"
            v-model="author.phone"
            
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
      author: {},
    };
  },
  created() {
    let apiURL = `http://localhost:8000/bookstore/author/edit-author/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.author = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:8000/bookstore/author/update-author/${this.$route.params.id}`;

      axios
        .put(apiURL, this.author)
        .then((res) => {
          console.log(res);
          this.$router.push("/author");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>