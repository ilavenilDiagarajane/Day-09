var request= new XMLHttpRequest();
request.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function() {
    var data= JSON.parse(request.response)
    console.log(data)
      

       var totalpopulation=data.reduce((acc, element,) =>acc+element.population,0)
       console.log(totalpopulation)

   
    

}