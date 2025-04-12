var scripts = document.getElementsByTagName("script");
var src = scripts[scripts.length-1].src;
var endpoint = "https://api.startupindia.gov.in/sih/";
var cssEndpoint = 'https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/css/outhlogin.css';

if(src.indexOf("startupindia.gov.in") > 0){
    endpoint = "https://api.startupindia.gov.in/sih/";
    cssEndpoint = 'https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/css/outhlogin.css';
}else if (src.indexOf("sih.qa.intelligrape.net") > 0){
    endpoint = "https://sih.qa.intelligrape.net/sihdev/";
    cssEndpoint = 'https://sih.qa.intelligrape.net/etc/designs/invest-india/investindialibs/css/outhlogin.css';
}
$(document).ready(function () {
    //loadcss();
    $('.oauth-login').on('click', function () {
        initiateLogin(sih_auth_api_key,sih_auth_callback_uri);
    });

    $('#sih-auth-login-btn').on('click', function (e) {
        initiateIIlogin(e);
    });
});

var initiateLogin = function (clientId,callback) {
    var request = $.ajax({
        url: endpoint+"api/noauth/sihLogin/authclient?clientid="+clientId+"&callback="+callback,
        type: "GET"
    });

    request.done(function (msg) {
        console.log(msg);
        window.location = msg.loginURL;
    });

    request.fail(function (jqXHR, textStatus) {
       console.error("Request failed: " + textStatus);
    });

};

function get(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
        return decodeURIComponent(name[1]);
}

var initiateIIlogin = function (e) {
    e.preventDefault();
    var form = $("#login-form");
    var recaptchaContainerId = $(".login-signup-modal").is(":visible") ? headerLoginCaptchaId : loginPageCaptchaId;
    if(isValid(form)) {
        var username = $('#username_login').val();
        var password = $('#password_login').val();
        var grantType = "STATE_LOGIN";
        var captchaResponse = null;
        if(window.location.href.indexOf("startupindia.gov.in") > 0){
            captchaResponse = grecaptcha.getResponse(recaptchaContainerId);
        }
        //username = "ekta99@yopmail.com";
        //password = "Test@123";
        localStorage.setItem("callback", get("callback"));
        localStorage.setItem("jwtToken", get("jwt"));
        var request = $.ajax({
            url: endpoint + "api/noauth/sihLogin/auth",
            type: "POST",
            data: JSON.stringify({
                username: username,
                password: password,
                grantType: grantType,
                captchaResponse: captchaResponse
            }),
            dataType: "json",
            contentType: "application/json"
        });

        request.done(function (data) {
            console.log(data);
            var callback = localStorage.getItem("callback");
            var jwt = data.token; //localStorage.getItem("jwtToken");
            var refreshToken = data.refreshToken;
            localStorage.removeItem("callback");
            localStorage.removeItem("jwtToken");

            window.location = callback + "?auth_token=" + jwt + "&refreshToken=" + refreshToken;

        });
        request.fail(function (jqXHR, textStatus) {
            $(".login-container .error-message .error-content").html(jqXHR.responseText).show();
            $(".login-container .error-message").show();
            //alert("Request failed: " + textStatus);
        });
    }
};


function loadcss(){
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssEndpoint;
    head.appendChild(link);
}