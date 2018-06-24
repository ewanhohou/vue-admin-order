<template>
<div class="container mt-2">
<div class="top row mt-2">
  <div class="col-sm-1">
   <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <i class="fas fa-caret-down"></i>
  </div>
    <div class="col-sm">
    </div>
    <div class="col-sm-2 font-weight-bold">
      EDIT SECTION
      <i class="fas fa-caret-down"></i>
    </div>
</div>
<div class="orderTable mt-2">
<table class="table table-striped">
  <thead>
    <tr class="font-weight-bold">
      <th scope="col">Customer</th>
      <th scope="col">Product List</th>
      <th scope="col"></th>
      <th scope="col">Total</th>
      <th scope="col">Add to Cart</th>
      <th scope="col">Check-out</th>
      <th scope="col">Address</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><input type="checkbox">lan Madina</th>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">Vestbulm</div>
            <div class="row">$1400</div>
          </li>
          <li class="list-group-item">
            <div class="row">Budfo</div>
           <div class="row">$2300</div>
          </li>
        </ul>
      </td>
      <td>1</td>
      <td>$2200</td>
      <td>2018/06/08 13:22</td>
      <td>2018/06/08 13:22</td>
      <td>396 Wign drive Apt.358</td>
      <td><button  class="btn btn-primary">DONE<i class="fas fa-caret-down"></i></button></td>
    </tr>
    <tr>
      <th><input type="checkbox">Msad adsad</th>
      <td>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row">Vestbulm</div>
            <div class="row">$1200</div>
          </li>
          <li class="list-group-item">
            <div class="row">Budfo</div>
           <div class="row">$3400</div>
          </li>
        </ul>
      </td>
      <td>2</td>
      <td>$1200</td>
      <td>2018/06/03 13:22</td>
      <td>2018/06/04 13:22</td>
      <td>232 Wign drive Apt.123</td>
      <td><button  class="btn btn-success">PAID<i class="fas fa-caret-down"></i></button></td>
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
