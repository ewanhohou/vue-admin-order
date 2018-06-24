<template>
<div class="container mt-2">
<div class="top row mt-2">
  <div class="col-sm-1">
   <input type="checkbox" class="form-check-input" id="exampleCheck1">
<i class="fas fa-caret-down"></i>
  </div>
    <div class="col-sm">
    </div>
    <div class="col-sm-auto font-weight-bold">
      <button  class="btn btn-dark">ADD NEW PRODUCT <i>+</i></button>
    </div>
</div>
<div class="orderTable mt-2">
<table class="table table-striped">
  <thead>
    <tr class="font-weight-bold">
      <th scope="col">Product</th>
      <th scope="col">Original</th>
      <th scope="col">Discount</th>
      <th scope="col">Size</th>
      <th scope="col">Color</th>
      <th scope="col">Inventory</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>
        <input type="checkbox">
        <img src="@/assets/logo.png" width="35px">
        lan Madina
      </th>
      <td>$2000</td>
      <td>$2200</td>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">L</div>
            <div class="row">  </div>
          </li>
          <li class="list-group-item">
            <div class="row">M</div>
           <div class="row"></div>
          </li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">Gray</div>
            <div class="row">Black</div>
          </li>
          <li class="list-group-item">
            <div class="row">Gray</div>
           <div class="row">Black</div>
          </li>
        </ul>
      </td>
      <td>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">15</div>
            <div class="row">20</div>
          </li>
          <li class="list-group-item">
            <div class="row">15</div>
           <div class="row">20</div>
          </li>
        </ul>
      </td>
      <td><button  class="btn btn-success">PUBLISHED<i class="fas fa-caret-down"></i></button></td>
    </tr>
    <tr>
      <th>
        <input type="checkbox">
        <img src="@/assets/logo.png" width="35px">
        Teew Ssdsa
      </th>
      <td>$1200</td>
      <td>$1500</td>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">L</div>
            <div class="row">  </div>
          </li>
          <li class="list-group-item">
            <div class="row">M</div>
           <div class="row"></div>
          </li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">Gray</div>
            <div class="row">Black</div>
          </li>
          <li class="list-group-item">
            <div class="row">Gray</div>
           <div class="row">Black</div>
          </li>
        </ul>
      </td>
      <td>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">15</div>
            <div class="row">20</div>
          </li>
          <li class="list-group-item">
            <div class="row">15</div>
           <div class="row">20</div>
          </li>
        </ul>
      </td>
      <td><button  class="btn btn-dark">UNPUBLISHED<i class="fas fa-caret-down"></i></button></td>
    </tr>
  </tbody>
</table>
</div>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.list-group-flush > .list-group-item {
  background-color: rgba(242, 242, 242, 1);
}
</style>
