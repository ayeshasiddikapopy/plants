

  window.addEventListener('scroll',()=>{

    const scrolling = window.scrollY;
    const navigation = document.querySelector('#navigation');
    const box = document.querySelector('.box');

    // navigation-------->>
    if (scrolling > 0) {
        navigation.classList.add('nav_main')
    } else {
        navigation.classList.remove('nav_main');
    }
    
    // top to bottom---->>
    if (scrolling > 300){
        tops.style.display = 'block' 
        tops.style.transition = '1s'
    } else {
        tops.style.display = 'none' 
        tops.style.transition = '1s'
    }

  })

  let tops = document.querySelector('.top')

  tops.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  })


  // ------------responsive ------------
  let nav_content = document.querySelector('.nav_contents')
  let nav_inner_item = document.querySelector('.nav_inner_item')
  let bar = document.querySelector('.bar')

  window.addEventListener('resize',()=>{

    if(window.innerWidth <= 850){

      nav_content.classList.add('nav_responsive')
      nav_content.classList.remove('nav_contents')
      bar.style.display = 'inline-block' 
    }
    else
    {
      nav_content.classList.remove('nav_responsive')
      nav_content.classList.add('nav_contents')
      nav_inner_item.style.transition = '1s'
      bar.style.display = 'none' 

    }
  })

  // menu bar clicking
  bar.addEventListener('click',()=> {
    
    nav_inner_item.classList.toggle('nav_inner_item')
    nav_inner_item.classList.toggle('nav_inner_item-responsive')
  })


  //shop categoty animation
  


  var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#shop_Category',
        start: '0% 50%',
        end: '50% 70%',
        scrub:2,
        // markers:true,
        duration:2,
        
    }
})

tl.from('.shop_content',{
    y:200,
    duration:1
})
tl.from('.shop_item-animation1',{
  y:250,
  duration:0.5
})
tl.from('.shop_item-animation3',{
  y:100,
  duration:0.4
})
tl.from('.shop_item-animation2',{
  y:200,
  duration:1
})
// responsive--
if (window.innerWidth <= 200 ){
 
  tl.from('.shop_item-animation2',{
    y:10,
    duration:1
  })

}
