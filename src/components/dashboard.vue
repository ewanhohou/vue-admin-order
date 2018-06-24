<template>
<div class="container mt-2">
    <div class="overview row mt-2">
      <div class="overviewTitle col-sm-auto font-weight-bold">OVERVIEW</div>
      <div class="col-sm"></div>
      <div class="date col-sm-auto">
        <div class="row">
         <div class="col-sm-auto">
           2018/6/6<i class="fas fa-caret-down"></i>
        </div>
      <div class="col-sm">2018/6/13</div>
      <div class="col-sm">Weekly
        <i class="fas fa-caret-down"></i>
      </div>
      </div>
      </div>
    </div>
    <div class="topCard mt-2">
  <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <div class="title">
          <div class="fas fa-hand-holding-usd">TOTAL REVENUE</div>
        </div>
        <div class="money text-success">54,540</div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <div class="title">
          <div class="fas fa-boxes">TOTAL COST</div>
        </div>
        <div class="money text-danger">12,600</div>
      </div>
    </div>
  </div>
    <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <div class="title">
          <div class="fas fa-money-bill">NET INCOME</div>
        </div>
        <div class="money text-primary">41,880</div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="middleCard mt-2">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title text-left">Activity</h5>
    <div id="chart" ></div>
      </div>
      </div>
</div>
<div class="bottomCard mt-2">
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
             <h5 class="card-title text-left">Transaction Website</h5>
         <ul class="list-group list-group-flush">
  <li class="list-group-item">
    <div class="row align-items-center">
      <div class="col-sm-1">
            <img src="@/assets/logo.png" width="45px">
      </div>
      <div class="col-sm">
        Facebook.com
      </div>
      <div class="font-weight-bold col-sm-auto">
        45,836
      </div>
      <div class="col-sm-3 text-success">
        <i class='fas fa-arrow-up'></i>
          20%
      </div>
    </div>
  </li>
    <li class="list-group-item">
    <div class="row align-items-center">
      <div class="col-sm-1">
            <img src="@/assets/logo.png" width="45px">
      </div>
      <div class="col-sm">
        Google.com
      </div>
      <div class="font-weight-bold col-sm-auto">
        21,321
      </div>
      <div class="col-sm-3 text-success">
        <i class='fas fa-arrow-up'></i>
          12%
      </div>
    </div>
  </li>
    <li class="list-group-item">
    <div class="row align-items-center">
      <div class="col-sm-1">
            <img src="@/assets/logo.png" width="45px">
      </div>
      <div class="col-sm">
        Shopify.com
      </div>
      <div class="font-weight-bold col-sm-auto">
        2,489
      </div>
      <div class="col-sm-3 text-danger">
        <i class='fas fa-arrow-down'></i>
          15%
      </div>
    </div>
  </li>
    <li class="list-group-item">
    <div class="row align-items-center">
      <div class="col-sm-1">
            <img src="@/assets/logo.png" width="45px">
      </div>
      <div class="col-sm">
        Wordpress.com
      </div>
      <div class="font-weight-bold col-sm-auto">
        1,057
      </div>
      <div class="col-sm-3 text-danger">
        <i class='fas fa-arrow-down'></i>
          30%
      </div>
    </div>
  </li>
</ul>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-left">Latest Orders</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item">
    <div class="row">
      <div class="col-sm-auto">
            <img src="@/assets/logo.png" width="70px">
      </div>
      <div class="col-sm align-self-end">
        <div class="col">
          <div class="row">Vintage T-shirt</div>
          <div class="row greyText mt-1">
            <div class="fas fa-clock">2018/6/13 13:42</div>
          </div>
          <div class="row greyText mt-1">
            <span class="fas fa-male"> Belle Willis</span>
          </div>
        </div>
      </div>
      <div class="col-sm-2 align-self-end">
           <div class="row greyText">
             Total
          </div>
          <div class="row">
            3,200
          </div>
      </div>
    </div>
    </li>
  <li class="list-group-item">
 <div class="row">
      <div class="col-sm-auto">
            <img src="@/assets/logo.png" width="70px">
      </div>
      <div class="col-sm align-self-end">
        <div class="col">
          <div class="row">Vintage T-shirt</div>
          <div class="row greyText mt-1">
            <div class="fas fa-clock">2018/6/13 13:42</div>
          </div>
          <div class="row greyText mt-1">
            <span class="fas fa-male"> Belle Willis</span>
          </div>
        </div>
      </div>
      <div class="col-sm-2 align-self-end">
           <div class="row greyText">
             Total
          </div>
          <div class="row">
            3,200
          </div>
      </div>
    </div>
  </li>
  <li class="list-group-item">
 <div class="row">
      <div class="col-sm-auto">
            <img src="@/assets/logo.png" width="70px">
      </div>
      <div class="col-sm align-self-end">
        <div class="col">
          <div class="row">Vintage T-shirt</div>
          <div class="row greyText mt-1">
            <span class="fas fa-clock">2018/6/13 13:42</span>
          </div>
          <div class="row greyText mt-1">
            <span class="fas fa-male"> Belle Willis</span>
          </div>
        </div>
      </div>
      <div class="col-sm-2 align-self-end">
           <div class="row greyText">
             Total
          </div>
          <div class="row">
            3,200
          </div>
      </div>
    </div>
  </li>
</ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {};
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
          ["Year", "Sales", "Expenses"],
          ["2004", 1000, 400],
          ["2005", 1170, 460],
          ["2006", 660, 1120],
          ["2007", 1030, 540],
          ["2008", 2030, 340]
        ]);
        var options = {
          title: "Activity",
          curveType: "function",
          legend: { position: "bottom" }
        };
        var chart = new google.visualization.LineChart(
          document.getElementById("chart")
        );
        chart.draw(data, options);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  // border: black solid;
  .overview {
    .date {
      .row {
        font-size: 2px;
        color: gray;
      }
    }
  }
  .topCard {
    .money {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.greyText {
  color: grey;
  font-size: 8px;
}
</style>

