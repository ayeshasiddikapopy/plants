

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

