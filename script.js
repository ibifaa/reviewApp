let reviewList = [{id: 1, name: "Cristian Florea",
                    jobDescription: "Software Development Coach",       
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhjwicKlzU6rj9dQNJf157juZwUSfzdT6Rpf-Tn6RmCZDLv_i_z0boqNcg2GYpPoKIiw&usqp=CAU",
                    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus reiciendis molestias atque sequi commodi beatae voluptatibus illo optio facere at."
                }
            ,
                {
                    id: 2, 
                    name: "Ibifaa Ibisaki",
                    jobDescription: "Software Developer",       
                    image:"./pix.jpg",
                    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus reiciendis molestias atque sequi commodi beatae voluptatibus illo optio facere at."
                },

                {
                id: 3, name: "Kingsly Obot",
                    jobDescription: "Software Enginner",       
                    image:"https://media.licdn.com/dms/image/C4D03AQEkn9CR5RMFYQ/profile-displayphoto-shrink_800_800/0/1556881633873?e=1691020800&v=beta&t=zuzjScSNhAWD5tjmDTPqNa5MYOTnZq3PKytJTrLNlso",
                    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus reiciendis molestias atque sequi commodi beatae voluptatibus illo optio facere at."
                },

                {
                    id: 4, name: "Frankly Ogbona",
                    jobDescription: "Software Enginner",       
                    image:"https://pbs.twimg.com/profile_images/1276931128457408512/4E1AmVf5_400x400.jpg",
                    review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus reiciendis molestias atque sequi commodi beatae voluptatibus illo optio facere at."
                }
                
        ]

        const image = document.querySelector(".img");
        const position = document.querySelector(".position");
        const review = document.querySelector(".comment");
        const name = document.querySelector(".name")

        const forward = document.querySelector(".forward");
        const backward = document.querySelector(".backward");
        const  guess = document.querySelector(".guess")

        // initialization
        let indexNumber = 0;

       
        // load initial item
        window.addEventListener("DOMContentLoaded", ()=>{
           showDetails(indexNumber);
           
        })

        forward.addEventListener("click", ()=>{
            indexNumber++;
            if(indexNumber>reviewList.length-1){
                indexNumber=0
            }    
            showDetails(indexNumber);
        })

        backward.addEventListener("click", () =>{
            indexNumber--
            if(indexNumber < 0){
                indexNumber=reviewList.length-1;
            } 
            showDetails(indexNumber);
        } )

        function showDetails(indexOfPerson){
            const item = reviewList[indexOfPerson];
            image.src = item.image;    
            position.textContent = item.jobDescription;
            name.textContent = item.name;
            review.textContent = item.review;

        }

        guess.addEventListener("click", ()=>{
            let guessReview = Math.floor(Math.random()*reviewList.length)
           showDetails(guessReview)
        })


        