<template>
  <div class="contact-us-page">
    <form>
      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label class="form-label">Email:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label class="form-label">Subject:</label>
        <input type="text" class="form-control" id="exampleInputPassword1">
      </div>
       <div class="mb-3">
        <label class="form-label">Message:</label>
        <input type="text" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUsPage"
}
</script>

<style>

</style>