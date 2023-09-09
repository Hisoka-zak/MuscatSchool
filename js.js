passwordRef.addEventListener("input", () => {
if(!isPasswordValid()){
messageRef.style.visibility = "hidden";
passwordRef.style.cssText = "border-color: #feZee; background-color: #ffc2c2";
}else {
passwordRef.style.cssText =  "border-color: #34bd34; background-color: #c2ffc2";
}});

submitBtn.addEventlistener("mouseover", () =› {
//If either password or username is invalid then do this.
if (!isUsernameValid() || !isPasswordValid()){
//Get the current position of submit btn 
let containerRect = document.querySelector(".container").getBoundingClientRect();
let submitRect = submitBtn.getBoundingClientRect();
let offset = submitRect.left - containerRect.left;
console.log(offset);
//If the button is on the left hand side.. move it to the the right hand side
if (offset <= 100){
submitBtn.style.transform = "translateX(16.25em)"
}
//Vice versa
else {
submitBtn.style.transform = "translatex(0)";
	}
  }
});
submitBtn.addEventlistener("click", () =› {
messageRef.style.visibility = "visible";
});