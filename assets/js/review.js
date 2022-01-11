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
		function submitHandler(event){
			  event.preventDefault();
			 let task = document.getElementById("newTask").value;
			 let name = document.getElementById("name").value;
			 let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png"
			 let obj = {
				 "name":name,
				 "cmd":task,
				 "url":url
			 }
			 myArray.push(obj);
			 let taskListInString = JSON.stringify(myArray);
			 localStorage.setItem("comment", taskListInString);
			 
			  renderTask();
			
		}
		function renderTask(){
			let taskInString =  localStorage.getItem("comment");
			let taskInArray = JSON.parse(taskInString);
			let noOfTask = taskInArray.length;
			let num = "";
			for(let i = 0; i < noOfTask; i++){
				console.log(taskInArray[i])
				let review = `<div class = "review-div">
								<img class = "icon" src = ${taskInArray[i].url} >
								<h4 class = "head2" >${taskInArray[i].name}</h4>
								<img class = "star" src = "../assets/img/5-stars-png-no-background-4.png" width = "10%" height = "5%" alt = "starimg"><br>
								<p class = "para1">${taskInArray[i].cmd}</p>
							</div>`
				console.log(review);
				
				  
				  num += review;
			 }
			  let order = document.getElementById("unorder");
			  order.innerHTML = num;
		}
		renderTask();