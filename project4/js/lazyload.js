

const targets = document.querySelectorAll("img");
const headers = document.querySelectorAll(".display-2");
const icon = document.querySelectorAll("i");
const socialBar = document.getElementById("social_icons_list");
const h3 = document.querySelectorAll("h3");

//var categoryList = document.getElementById("news-grid-2").children;


var imageFiles = '/images/';
//console.log(categoryList)






const lazyLoad = (target)=>{
  const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              const img=entry.target;
             
              

            
           //   img.classList.add("show");
              observer.disconnect();
          }
      })
  },{threshold:[0.4]});

  io.observe(target);
}


targets.forEach(lazyLoad);
//h3.forEach(lazyLoad);



