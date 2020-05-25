$(document).ready(function(){
    var url = "https://coronavirus-19-api.herokuapp.com/countries" ;

    $.getJSON(url, function(data){
        console.log(data);

    var total_recovered, total_deaths, total_confirmed;

    total_confirmed = data[0].cases;
    total_active = data[0].active;
    total_recovered = data[0].recovered;
    total_deaths = data[0].deaths;

    $("#confirmed").append(total_confirmed);
    $("#active").append(total_active);
    $("#recovered").append(total_recovered);
    $("#deaths").append(total_deaths);

    var country = [];
    var confirmed = [];
    var active = [];
    var deaths = [];
    var recovered = [];
    var today_cases = [];

    $.each(data,function(id,obj){
        country.push(obj.country);
        confirmed.push(obj.cases);
        active.push(obj.active);
        deaths.push(obj.deaths);
        recovered.push(obj.recovered);
        today_cases.push(obj.todayCases);
    })

    for(var i=1;i<country.length;i++){
        $("#stats").append(
            "<tr>" +
                "<td>"+country[i]+"</td>" +
                "<td>"+confirmed[i]+"<small> (+"+ today_cases[i]+")</small>"+"</td>" +
                "<td>"+active[i]+"</td>" +
                "<td>"+recovered[i]+"</td>" +
                "<td>"+deaths[i]+"</td>" +
            "</tr>"
        );
    }

    })
})