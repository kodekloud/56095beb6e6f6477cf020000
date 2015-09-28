function init(e){
    $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
    $('#close_subscribe').click(function(e){
        $('#success_subscribe').fadeOut();
        $('#newsletter_form').trigger('reset');
    });
    $('#newsletter_form').submit(function(e){
        e.preventDefault();
        if ($("#newsletter_agree").prop("checked") != true){
            alert("Please agree to receive newsletters from Midtown Plaza.");
            $("#newsletter_agree").focus();
            return false;
        }
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    alert("Please try again later.");
                } else { // 200
                    $("#success_subscribe").fadeIn();
                }
            }
        );
    });
    var path = window.location.pathname
    var collapse_shopping = ["/stores", "/hours", "/parking"];
    var collapse_promos = ["/promotions_and_events"];
    var collapse_style = ["/blogs", "/fashions/midtown2-shop-the-look"];
    var collapse_guest = ["/pages/midtown2-gift-cards", "/pages/midtown2-accessibility"];
    var collapse_contact = ["/jobs", "/pages/midtown2-contact-us", "/pages/midtown2-leasing"];
    
    if ($.inArray(path, collapse_shopping) >= 0){
        $('#dropdownMenu1').addClass('active_menu');
    }
    if ($.inArray(path, collapse_promos) >= 0){
        $('#promos_menu').addClass('active_menu');
    }
    if ($.inArray(path, collapse_style) >= 0){
        $('#dropdownMenu2').addClass('active_menu');
    }
    if ($.inArray(path, collapse_guest) >= 0){
        $('#dropdownMenu3').addClass('active_menu');
    }
    if ($.inArray(path, collapse_contact) >= 0){
        $('#dropdownMenu4').addClass('active_menu');
    }
}

function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}

function pinIt(){
    var e = document.createElement('script');
    e.setAttribute('type','text/javascript');
    e.setAttribute('charset','UTF-8');
    e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
    document.body.appendChild(e);
    return false;
}

function get_day(id){
    switch(id) {
        case 0:
            return ("Sunday")
            break;
        case 1:
            return ("Monday")
            break;
        case 2:
            return ("Tuesday")
            break;
        case 3:
            return ("Wednesday")
            break;
        case 4:
            return ("Thursday")
            break;
        case 5:
            return ("Friday")
            break;
        case 6:
            return ("Saturday")
            break;
    }
}


function convert_hour(d){
    var h = (d.getUTCHours());
    var m = addZero(d.getUTCMinutes());
    var s = addZero(d.getUTCSeconds());
    if (h >= 12) {
        if ( h != 12) {
            h = h - 12;    
        }
        
        i = "pm"
    } else {
        i = "am"
    }
    return h+":"+m+" "+i;
}



function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function get_month (id){
    switch(id) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
            
    }
    return month;
}

function sortByKey(array, key) {
            return array.sort(function(a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }