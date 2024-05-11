jQuery(function ($) {
    /* GOOGLE MAP SCROLLING FIX */
	   $(".gmap-fix iframe").after('<div class="map_overlay" onClick="style.pointerEvents=\'none\'"></div>');

    /* OPEN SOCIAL IN NEW TAB */
        $(".et-social-icon a").attr('target', '_blank');


        
        firstWord('.firstWord .et_pb_slide_title')
        firstWord('.firstWord .et_pb_module_header')

        
        function firstWord(el) {
        
        
           let element0 = document.querySelectorAll(el)
        
           try{
        
             target = element0
              target.forEach(e=>{
        
                let element = e;
        
                if (e.textContent.includes('//')) {
        
                separator = e.textContent.split('//')
                e.innerHTML = `<span class="light-font">${separator[0]}</span> ${separator[1]}`
                
               } else if(e.textContent.includes('|')){
                separator2 = e.textContent.split('|')
                e.innerHTML = `<span class="light-font">${separator2[0]}</span> <i>|</i> ${separator2[1]}`
    
               }else if(e.textContent.includes('--')){
                separator3 = e.textContent.split('--')
                e.innerHTML = `${separator3[0]} <span class="light-font">${separator3[1]}</span>`
    
               }
           
        
            })
        
          }catch(err){
            err
        }
        
         
        
        }
    
        function getHeight(el, hg){
    
          let container = document.querySelector(el)
          try {
      
              myIt = container
              document.body.style.setProperty(hg,  myIt.offsetHeight )
              //console.log(myIt.offsetHeight)
      
          } catch(e){
              e
          }
      
      
      }
      
            getHeight('.row_blur_w ','--height-menu')

      
      window.addEventListener('resize', function () { 
      
        getHeight('.row_blur_w ','--height-menu')
      
      
      })

});