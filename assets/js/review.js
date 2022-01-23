let myArray = [];

		function onPageLoad(){
			let listValue = JSON.parse(localStorage.getItem("comment"));
			if(listValue != null){
				myArray = listValue;
			}
			else {
  
				myArray = [];
				localStorage.setItem("comment", JSON.stringify(myArray));
			}
		}
		onPageLoad();
		let img_name =["Star_rating_1_of_5.png","Star_rating_2_of_5.png","1024px-3_stars.svg.png","Star_rating_4_of_5.png","Star_rating_5_of_5.png"];
		function submitHandler(event){
			 event.preventDefault();
			 let task = document.getElementById("newTask").value;
			 let name = document.getElementById("name").value;
			 let noOfRating = document.getElementById("rating").value ;
			 let rating = (img_name[noOfRating-1]);
			 let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"
			 let obj = {
				 "name":name,
				 "cmd":task,
				 "url":url,
				 "rating":rating
			 }
			 myArray.push(obj);
			 let taskListInString = JSON.stringify(myArray);
			 localStorage.setItem("comment", taskListInString);
			 
			  renderTask();
			
			
		}
		// added value in the review page
		function renderTask(){
			let taskInString =  localStorage.getItem("comment");
			let taskInArray = JSON.parse(taskInString);
			let noOfTask = taskInArray.length;
			let num = "";
			
			for(let i = 0; i < noOfTask; i++){
				// console.log(taskInArray[i])
				let review = `<div class = "review-div">
								<img class = "icon" src = ${taskInArray[i].url} >
								<h4 class = "head2" >${taskInArray[i].name}</h4>
								<img class = "star" src = "${taskInArray[i].rating}" width = "10%" height = "5%" alt = "starimg"><br>
								<p class = "para1">${taskInArray[i].cmd}</p>
							</div>`
				// console.log(review);
				
				  
				  num += review;
			 }
			  let order = document.getElementById("unorder");
			  order.innerHTML = num;
		}
		renderTask();