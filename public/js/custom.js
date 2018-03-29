$(document).ready(function() {
    $(".radio-custom-inline input").change(function() {
      var tab_id = $(this).attr('data-id');
      if(tab_id == "loose"){
        $("#packet").hide();
        $("#loose").show();
      }
      else{
        $("#loose").hide();
        $("#packet").show();
        }
    });

    /* jquery for enable input type attribute */

   
      $(' #store').change(function() {
        $('.store-detail').prop('disabled', false);
       });
       $(' #global').change(function() {
           $('.store-detail').prop('disabled', true);
       });


    /* jquery append template1 */

    // /*remove image tumbnail */
    //  $('.remove').click(function(){
    //     $(this).closest('div').slideUp('slow', function(){$(this).remove();});
    // });  


    //  /* file upload */
    // document.getElementById('getval').addEventListener('change', readURL, true);
    // function readURL(){
    //     var file = document.getElementById("getval").files[0];
    //     var reader = new FileReader();
    //     reader.onloadend = function(){
    //         document.getElementById('grocery-image').style.backgroundImage = "url(" + reader.result + ")";        
    //     }
    //     if(file){
    //         reader.readAsDataURL(file);
    //     }else{
    //     }
    // }

});

