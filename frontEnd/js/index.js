

const bannerImg=document.querySelector("#banner-img")
const introTitle=document.querySelector(".intro-content h2")




  

  // banner
  let imgNumber=0
  setInterval(() => {
      imgNumber++
     bannerImg.style.backgroundImage= `url(images/banner/${imgNumber}.jpg)`
  
     if(imgNumber === 7){
      imgNumber=0
     }
     else if(imgNumber === 0){
      imgNumber=1
     }
     else if(imgNumber === 3){
      introTitle.style.right="2rem"
     }
     else{
      introTitle.style.right="-40rem"
     }
  },5000)
  // End of banner


 







