<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p class="social">
          <a href="https://github.com/niradler/vue-invenpro">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
        </p>
        <p><span class="icon"><i class="fa fa-code"></i></span> with <span class="icon"><i class="fa fa-heart"></i></span> by <a href="https://github.com/niradler">Nir Adler</a>.</p>
        <p>Code licensed under <a href="https://github.com/fundon/vue-admin/blob/master/LICENSE">MIT</a>.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
