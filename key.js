var a;
var capss = true;
$('.solsag button,.orta button').click(function () {
    if (capss == false) {
        $('#area').append(`${$(this).text().toUpperCase()}`)

    } else {
        $('#area').append(`${$(this).text().toLowerCase()}`)
    }

})
$('#enter').click(function () {
    $('#area').append('<br>')
})
$('#backspace').click(function () {
    $('#area').html($('#area').html().slice(0,-1))
    
    // a = $('#area').html()
    // if(a.slice(-4)=='<br>'){
    //     $('#area').html(a.slice(0, -3))
    // }
    // $('#area').html(a.slice(0, -1))
})
$('#capslock').click(function () {
    capss = !capss
})
