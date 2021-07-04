
const fetch = require("node-fetch");

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
 "method": "GET",
 "headers": {
  "x-rapidapi-key": "fe48bc223fmsh7d39186cb92b0b2p146eb6jsna451a24296fe",
  "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
 }
})
 .then(response => response.json())
 .then(data => {

  let total_value = data.total_values;
  console.log(total_value);

		document.querySelector('#live_content').innerHTML = ` <h1>hello</h1> `;


  /* const html = total_value
   .map(user => {
    return `
    
    d
    
    `


   }) */


 })
 .catch(err => {
  console.error(err);
 });




//html injection to be used....
/* 
document.querySelector('#live_content').innerHTML = `


<div class="row">
              <div class="col-lg-4 col-md-6">
                
                <div class="info-box lavender-bg ">
                  <i class="fa fa-stethoscope" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;">	<p ></p></div>
                  <div class="title" style="font-family:verdana;">Active</div>
                </div>
               



              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box red-bg">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;">15684406</div>
                  <div class="title" style="font-family:verdana;">Recovered</div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box purple-bg">
                  <i class="fa fa-industry" style=" color: rgb(95, 80, 80);" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%; color: rgb(94, 76, 76);">19164969</div>
                  <div class="title" style=" color: rgb(97, 87, 87);">Total</div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box dark-bg">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;">211853</div>
                  <div class="title">Death</div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box dark-bg">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;">21/06/21</div>
                  <div class="title">last update</div>
                </div>
              </div>
           
              </div>




` */















