$(function() {
    $('.drag').draggable();
    $('.dragdrop').draggable({
      revert: true,
      placeholder: true,
      droptarget: '.drop',
      drop: function(evt, droptarget) {
       var drag_id = $(this)[0].id
        var drop_id = droptarget.getAttribute('id')
        var img = $(this)
        ondropTarget(drag_id , drop_id , img ,droptarget )
        ondropTarget2(drag_id , drop_id , img ,droptarget )
      }
    });

  });
  function ondropTarget(id , data , img ,droptarget ){
    if(id.includes('1') || id.includes('4')){
        if( data.includes('1') || data.includes('4')){
            
            document.getElementById("an1").style.display = "";
        

        }else{
            droptarget.style.background = '';}
    }else if(id.includes('2') ){
        if( data.includes('2')){
        document.getElementById("an2").style.display = "";

        }else{
        droptarget.style.background = '';}
    }
   
}
 function ondropTarget2(id , data , img ,droptarget ){
    if(id.includes('1') || id.includes('4')){
        if( data.includes('2') || data.includes('4')){
            
            document.getElementById("an3").style.display = "";
        

        }else{
            droptarget.style.background = '';}
    }else if(id.includes('2') ){
        if( data.includes('1')){
        document.getElementById("an4").style.display = "";

        }else{
        droptarget.style.background = '';}
    }
   
}