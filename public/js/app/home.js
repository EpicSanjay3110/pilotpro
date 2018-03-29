$(function(){

  $("body").on('click','#register-submit', function(){

    var data = {
      "firstName" : $('#username_REG').val(),
      "lastName" : $('#username_REG').val(),
      "phone" : "9488101641",
      "email" : $('#email_REG').val(),
      "password" : $('#password_REG').val(),
      "imageUrl" : "testHTTP:"
    };
  			NProgress.start();
  			$.ajax({
  				method: 'POST',
  				data: JSON.stringify(data),
  				dataType : "json",
  				contentType: "application/json; charset=utf-8",
  				url: "/api/v1/user/newAppUser",
  				success: function(res){
  					console.log(res);

            toastr.options = {"positionClass":"toast-top-center"}

  					NProgress.done();
  				}, error: function(error){
  					console.log(error);
  					toastr.options = {"positionClass":"toast-top-center"}
  							toastr["error"](error);
  					NProgress.done();
  				}
  			})
  	})

    $("body").on('click','#login-submit', function(){
      console.log("entered reg...................");
      var data = {
        "email" : $('#username_LOG').val(),
        "password" : $('#password_LOG').val()
      };
      console.log(data);
          NProgress.start();
          $.ajax({
            method: 'POST',
            data: JSON.stringify(data),
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            url: "/api/v1/user/appUserLogin",
            success: function(res){
              console.log(res);
              toastr.options = {"positionClass":"toast-top-center"}
              NProgress.done();
            }, error: function(error){
              console.log(error);
              toastr.options = {"positionClass":"toast-top-center"}
                  toastr["error"](error);
              NProgress.done();
            }
          })
      })


})
