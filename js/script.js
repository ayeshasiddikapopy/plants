

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
  
  let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#shop_Category',
        start: '0% 50%',
        end: '50% 70%',
        scrub:2,
        // markers:true,
        duration:2,
        stagger:1
        
    }
})

tl.from('.shop_content',{
    y:200,
    duration:1
})
tl.from('.shop_item-animation1',{
  y:250,
  duration:1
})
tl.from('.shop_item-animation3',{
  y:100,
  duration:1
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

//------ shop_colection--------

var t2 = gsap.timeline({
  scrollTrigger:{
      trigger:'#shop_collection',
      start: '0% 50%',
      end: '0% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})

t2.from('.shop_collection_img',{
  x:-400,
  duration:2
})
t2.from('.shop_collection_Items',{
  x:400,
  duration:1
})
t2.from('.shop_collection_subHeading',{
  y:10,
  duration:1
})
t2.from('.shop_collection_Text',{
  y:3,
  duration:0.5
})
t2.from('.shop_collection_inner',{
  y:10,
  duration:1
})

// ----community----
var t3 = gsap.timeline({
  scrollTrigger:{
      trigger:'#community',
      start: '-60% 50%',
      end: '-60% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})
t3.from('.community_contents',{
  y:20,
  duration:2
})
// ----testimonial----
var t3 = gsap.timeline({
  scrollTrigger:{
      trigger:'#testimonial',
      start: '-60% 50%',
      end: '-60% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})
t3.from('.testmonial_contents',{
  y:40,
  duration:2
})
// ----products----
var t4 = gsap.timeline({
  scrollTrigger:{
      trigger:'#products',
      start: '-10% 50%',
      end: '-10% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})
t4.from('.product_contents',{
  y:100,
  duration:2,
  // delay:1
})
t4.from('.product_Heading',{
  y:40,
  duration:2,
  delay:1

})
// ----newsletter----
var t3 = gsap.timeline({
  scrollTrigger:{
      trigger:'#newsletter',
      start: '-60% 50%',
      end: '-60% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})
t3.from('.news_content',{
  y:20,
  duration:2
})
t3.from('.news_content',{
  y:20,
  duration:2
})
// ----support----
var t3 = gsap.timeline({
  scrollTrigger:{
      trigger:'#support',
      start: '-60% 50%',
      end: '-60% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:true
      
  }
})
t3.from('.support_contents',{
  y:20,
  duration:2
})
// ----community----
var t3 = gsap.timeline({
  scrollTrigger:{
      trigger:'#footer',
      start: '-60% 50%',
      end: '-60% 70%',
      scrub:2,
      // markers:true,
      duration:2,
      stagger:1
      
  }
})
t3.from('.footer_contents',{
  y:20,
  duration:2
})