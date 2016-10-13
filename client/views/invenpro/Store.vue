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
  <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Table</h4>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Instrument</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Instrument</th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Misty Abbott</td>
                <td>Bass Guitar</td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>Rhythm Guitar</td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Robert Mikels</td>
                <td>Lead Guitar</td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Karyn Holmberg</td>
                <td>Drums</td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </td>
                <td class="is-icon">
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
