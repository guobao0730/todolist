<template>
  <div>
    ============================================文件上传(通过element插件中的el-upload实现上传)============================================


    <el-upload
      drag
      action=""
      multiple
      ref="clickUpload"
      :http-request="uploadRequest"
      :on-success='fileUploadSuccess'
      :on-error="fileUploadError"
      :on-progress="handleProgress"
    >
    </el-upload>

  </div>

</template>

<script>
    export default {
        name: "FileUpload_35",
      data() {
        return {

        };
      },
      methods: {

        fileUploadSuccess(response, file, fileList) {
          console.log("fileUploadSuccess--点击文件上传成功！");
          console.log(response);

        },
        fileUploadError(err, file, fileList) {
          console.log("fileUploadError--点击文件上传失败！")
        },

        /*文件上传时的函数*/
        handleProgress(event, file, fileList) {
          console.log("handleProgress--文件上传时的函数！")
          let _percentage = file._percentage();
          console.log(_percentage);

          let fixed = file.percentage.toFixed(0);
          console.log(fixed);

        },

        uploadRequest(item) {

          let param = new FormData();
          let name = item.file.name;
          console.log("name:" + name);
          //name:2.png
          param.append('file', item.file);
          console.log(param);
          let config = {
            headers:{
              "Authorization":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImNvbnRleHRVc2VySWQiOiIxIiwiY29udGV4dE5hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJyZW5ld2FsVGltZSI6MTUzOTY1NDc0NDI0NSwiZXhwIjoxNTM5NjU4MzQ0fQ.3x7ItqM5ALBVAYTZ_qcX6x9N8fP4XzzHyyAjr7AMBlk",
              'Content-Type': 'multipart/form-data'
            }
          }
          let this_ = this;
          this.$axios.post("http://172.16.5.23:8002/api-master/aml/file/uploadfiles",param,config)
            .then(function (response) {
              console.log(response);
              //{data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
            })
            .catch(function (error) {
              console.log(error);
            })
        },
      }

    }
</script>

<style scoped>

</style>
