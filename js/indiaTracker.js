$(document).ready(function(){
    var url = "https://api.covid19india.org/data.json" ;

    $.getJSON(url, function(data){
        console.log(data);

    var total_recovered, total_deaths, total_confirmed;

    total_confirmed = data.statewise[0].confirmed;
    total_active = data.statewise[0].active;
    total_recovered = data.statewise[0].recovered;
    total_deaths = data.statewise[0].deaths;

    $("#confirmed").append(total_confirmed);
    $("#active").append(total_active);
    $("#recovered").append(total_recovered);
    $("#deaths").append(total_deaths);

    var states = [];
    var confirmed = [];
    var active = [];
    var deaths = [];
    var recovered = [];
    var delta_confirmed = [];

    $.each(data.statewise,function(id,obj){
        states.push(obj.state);
        confirmed.push(obj.confirmed);
        active.push(obj.active);
        deaths.push(obj.deaths);
        recovered.push(obj.recovered);
        delta_confirmed.push(obj.deltaconfirmed);
    })

    for(var i=1;i<states.length;i++){
        $("#stats").append(
            "<tr>" +
                "<td>"+states[i]+"</td>" +
                "<td>"+confirmed[i]+"<small> (+"+ delta_confirmed[i]+")</small>"+"</td>" +
                "<td>"+active[i]+"</td>" +
                "<td>"+recovered[i]+"</td>" +
                "<td>"+deaths[i]+"</td>" +
            "</tr>"
        );
    }

    })
})