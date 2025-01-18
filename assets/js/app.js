

// LOGIC FOR RATING
// target all stars
const all_stars = document.querySelectorAll("span img")

// add click event listener to each star
all_stars.forEach((star)=>{
     star.addEventListener("click", (event)=>{
         
           let rating = Number(event.target.id)
           all_stars.forEach((star2)=>{
               if(Number(star2.id) <= rating ){
                      star2.src = "./assets/images/gold.png"
               }else{
                     star2.src = "./assets/images/silver.png"
               }
           })
           
     })
})


// LOGIC FOR REVIEW
const submitted_message =  document.querySelector("aside")
const review_body = document.querySelector(".review-body")

// target the review button
const submit_btn = document.querySelector(".submit-btn")
submit_btn.addEventListener("click", ()=>{
  

       if(review_body.value === ""){
              alert("Ooops! pls leave a review")
       }else{
                submitted_message.classList.add("show")
                   setTimeout(()=>{
                submitted_message.classList.remove("show")
                review_body.value = ""
                all_stars.forEach((star)=>{
                     star.src = "./assets/images/silver.png"

                })
                
       }, 2000)
      
       }
    

    

})

