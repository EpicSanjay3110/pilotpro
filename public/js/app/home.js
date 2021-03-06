$(function(){

  $("body").on('click','#register-submit', function(){

    var data = {
      "firstName" : $('#username_REG').val(),
      "lastName" : $('#username_REG').val(),
      "phone" : "9877001631",
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
            toastr["success"]("User registered successfully");
        		$("#login-form").delay(100).fadeIn(100);
         		$("#register-form").fadeOut(100);
        		$('#register-form-link').removeClass('active');
        		$('#login-form-link').addClass('active');
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
              $.ajax({
                method: 'POST',
                data: JSON.stringify(data),
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                url: "/api/v1/user/appUserLogin",
                success: function(res){
                  console.log(res.Success);
                  if(res.Success){
                    toastr.options = {"positionClass":"toast-top-center"}
                    toastr["success"]("successfully logged");
                    NProgress.done();
                  }else{
                    toastr.options = {"positionClass":"toast-top-center"}
                    toastr["error"]("Login failed");
                    NProgress.done();
                  }

                }, error: function(error){
                  console.log(error);
                  toastr.options = {"positionClass":"toast-top-center"}
                      toastr["error"](error);
                  NProgress.done();
                }
              })
            }, error: function(error){
              console.log(error);
              toastr.options = {"positionClass":"toast-top-center"}
                  toastr["error"](error);
              NProgress.done();
            }
          })
      })


})
