
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
  console.log(data);  
  
  let active_value = Number(total_value['active']) ;
  let recovered_value = Number(total_value['recovered']) ;
  let death_case = Number( total_value['deaths']);
  let last_update =total_value['lastupdatedtime'] ;
  let total_case = active_value+recovered_value+death_case;

	document.querySelector('#live_content').innerHTML = ` 
    
    
    <div class="row">
              <div class="col-lg-4 col-md-6">
                
                <div class="info-box ">
                  <i class="fa fa-stethoscope" style=" color: rgba(17, 100, 224, 0.685);" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;">	<p>${active_value}</p></div>
                  <div class="title" style="font-family:verdana;">Active</div>
                </div>
               



              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box">
                  <i class="fa fa-heart" style=" color: rgb(231, 37, 37);" aria-hidden="true" ></i>
                  <div class="count" style="font-size:200%;"><p>${recovered_value}</p> </div>
                  <div class="title" style="font-family:verdana;">Recovered</div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box ">
                  <i class="fa fa-industry" style=" color: rgba(32, 53, 85, 0.699);" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%; color: rgb(94, 76, 76);"><p>${total_case}</p></div>
                  <div class="title" style=" color: rgb(97, 87, 87);">Total</div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">                  
                <div class="info-box">
                  <i class="fa fa-certificate" style=" color: rgba(224, 208, 26, 0.548);" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;"><p>${death_case}</p></div>
                  <div class="title">Death</div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">                  
                <div class="info-box ">
                  <i class="fa fa-calendar" style=" color: rgba(40, 238, 195, 0.884);" aria-hidden="true"></i>
                  <div class="count" style="font-size:200%;"><p>${last_update}</p></div>
                  <div class="title">last update</div>
                </div>
              </div>
           
              </div> `;


             
              
  
              let state = [ "Andhra Pradesh",
              "Arunachal Pradesh",
              "Assam",
              "Bihar",
              "Chhattisgarh",
              "Goa",
              "Gujarat",
              "Haryana",
              "Himachal Pradesh",
              "Jammu and Kashmir",
              "Jharkhand",
              "Karnataka",
              "Kerala",
              "Madhya Pradesh",
              "Maharashtra",
              "Manipur",
              "Meghalaya",
              "Mizoram",
              "Nagaland",
              "Odisha",
              "Punjab",
              "Rajasthan",
              "Sikkim",
              "Tamil Nadu",
              "Telangana",
              "Tripura",
              "Uttarakhand",
              "Uttar Pradesh",
              "West Bengal",
              "Andaman and Nicobar Islands",
              "Chandigarh",
              "Dadra and Nagar Haveli",
              "Daman and Diu",
              "Delhi",
              "Lakshadweep",
              "Puducherry"];

              

 
              for (var i = 0; i < state.length; i++) {

                let state_value = data.state_wise.state[i];

                console.log(state_value);



              }  
 



  document.querySelector('#state_live').innerHTML = `
  
              <div class="row">
                <div class="col-lg-12 mbr-col-md-10 text-center">
                  <div class="card wrap">
                    <div class="card-header">
                    
                    <h1><span class="badge badge-secondary">state code</span>state name</h1>
                    
                    </div>
                    <div class=" card-body">
                    
                    




                          <div class="col-lg-2 col-md-4 body-align">
                      
                          <div class=" ">
                            <i class="fa fa-3x fa-stethoscope" style=" color: rgba(17, 100, 224, 0.685);" aria-hidden="true"></i>
                            <div class="count" style="font-size:100%;">	<p>${active_value}</p></div>
                            <div class="title" style="font-family:verdana;">Active</div>
                          </div>

                          </div>
                          <div class="col-lg-2 col-md-4 body-align">                  
                            <div class="">
                              <i class="fa fa-3x fa-heart" style=" color: rgb(231, 37, 37);" aria-hidden="true" ></i>
                              <div class="count" style="font-size:100%;"><p>${recovered_value}</p> </div>
                              <div class="title" style="font-family:verdana;">Recovered</div>
                            </div>
                          </div>
                          <div class=col-lg-2 col-md-4 body-align">                  
                            <div class=" ">
                              <i class="fa fa-3x fa-industry" style=" color: rgba(32, 53, 85, 0.699);" aria-hidden="true"></i>
                              <div class="count" style="font-size:100%; "><p>${total_case}</p></div>
                              <div class="title" >Total</div>
                            </div>
                          </div>
                          <div class="col-lg-2 col-md-4 body-align">                  
                            <div class="">
                              <i class="fa fa-3x fa-certificate" style=" color: rgba(224, 208, 26, 0.548);" aria-hidden="true"></i>
                              <div class="count" style="font-size:100%;"><p>${death_case}</p></div>
                              <div class="title">Death</div>
                            </div>
                          </div>
                          <div class="col-lg-2 col-md-4 body-align">                  
                            <div class=" ">
                              <i class="fa fa-3x fa-calendar" style=" color: rgba(40, 238, 195, 0.884);" aria-hidden="true"></i>
                              <div class="count" style="font-size:100%;"><p>${last_update}</p></div>
                              <div class="title">time</div>
                            </div>
                          </div>


                    </div>
                 
                  </div>
              
                </div>
              <div class="row mbr-justify-content-center">
                <div class="col-lg-12 mbr-col-md-10 text-center">
                  <div class="card wrap">
                    <div class="card-header"></div>
                    <div class="card-body">Content</div>
                    <div class="card-footer">Footer</div>
                  </div>
                </div>
              </div>
              <div class="row mbr-justify-content-center">
                <div class="col-lg-12 mbr-col-md-10 text-center">
                  <div class="card wrap">
                    <div class="card-header"></div>
                    <div class="card-body">Content</div>
                    <div class="card-footer">Footer</div>
                  </div>
                </div>
              </div>
  `;


 });





/* 
for (var i = 0; i < grpd[date_key].length; i++) */










 /* .catch(err => {
  console.error(err);
 }); */




//html injection to be used....
/* 
document.querySelector('#live_content').innerHTML = `

D7E3FC




` */















