<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <form>
          <h1 class="title">Create a Store</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Name</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Name">
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Description</label>
              </div>
              <div class="control">
                <textarea class="textarea" placeholder="Description"></textarea>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label"></label>
              </div>
              <div class="control">
                <button type="submit" class="button is-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
        </article>
      </div>
    </div>


  </div>
</template>

<script>

</script>

<style scoped>
.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}
</style>
