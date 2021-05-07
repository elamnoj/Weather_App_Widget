var city_input = $('#city-input');
var options = $('#list-of-options')
var final
var contact = document.getElementById('form-handler')
var button = document.getElementById('button2')

$('#form-handler').on('submit', function (e) {
    contact.remove()
    e.preventDefault();
    console.log($('#list-of-options').val())
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city_input.val()}&units=${options.val()}&appid=fff7b5e9db3bb9a75d36e383de9e4ee7`,
        method: "GET",
        success: function(data){
            console.log('success',data);
            var main = data.list[0].main;
            city = data.city.name
            temp = Math.round(main.temp);
            hi = Math.round(main.temp_max);
            low = Math.round(main.temp_min);
            humid = main.humidity
            console.log(city)
            console.log(temp) 
            render(main, data)
        }
    });
});


function render(main, data){
    $('#city').html(`<h1>${data.city.name}</h1>`)
    $('#temp').html(`<h4>Current Temp: ${Math.round(main.temp)}&#176</h4>`)
    $('#humid').html(`<h5>Humidity: ${main.humidity}%</h5>`)
    $('#hi-lo').html(`<h5>High: ${Math.round(main.temp_max)}&#176  Low: ${Math.round(main.temp_min)}&#176</h5>`)
    $('#cond').html(`<h5>Conditions: ${data.list[0].weather[0].description}</h5>`)
    button.style.display = 'block';

}

// $('#button2').on('submit', function (f) {
//     render.remove();
//     contact.add();
// });
