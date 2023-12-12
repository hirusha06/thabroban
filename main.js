// Identifying the DOM elements


 // Personal Information
 const personNameInput = document.getElementById("fullName");
 const contactInput = document.getElementById("contactnum");
 const emailInput = document.getElementById("emailAddress");
 const countryInput = document.getElementById("countryName");
 
 // Branch Selection
 const branchInput = document.getElementsByName("branchName");
 const colomboBranchInput = document.getElementById("colomboBranch");
 const negomboBranchInput = document.getElementById("negomboBranch");
 const galleBranchInput = document.getElementById("galleBranch");
 
 // Room Selection
 const roomInput = document.getElementsByName("roomType");
 const numRoomsInput = document.getElementById("numberRooms");
 const extraBedInput = document.getElementById("extraBed");
 const singleInput = document.getElementById("singleRoom");
 const doubleInput = document.getElementById("doubleRoom");
 const tripleInput = document.getElementById("tripleRoom");
 
 // Number of adults and children
 const adultsNumInput = document.getElementById("numAdults");
 const childrenNumBelowInput = document.getElementById("numChildrenBelow");
 const childrenNumAboveInput = document.getElementById("numChildrenAbove");
 const numpeoplemealInput = document.getElementsByName("numpeople")
 
 // Duration
 const checkinInput = document.getElementById("checkIn");
 const checkoutInput = document.getElementById("checkOut");
 const numofdaysOutput = document.getElementById("numofDays");
 const durationInput = document.getElementsByName("duration");
 
  // Extra requirments
  const extrareqInput = document.getElementsByName("extraFacilit");
  const wifiInput = document.getElementById("wifi");
  const poolViewInput = document.getElementById("poolView");
  const gardenViewInput = document.getElementById("gardenView");
 
  // Promo Code
 const promoInput = document.getElementById("promocode");
 
  // Current Cost outputs
 const outputText1 = document.getElementById("currentCost");
 const outputText2 = document.getElementById("output-2");
 const outputText3 = document.getElementById("output-3");
 const outputText4 = document.getElementById("output-4");
 const outputText5 = document.getElementById("output-5");
 const outputText6 = document.getElementById("output-6");
 const outputText7 = document.getElementById("output-7");
 
  // Book Buttons
 const bookBtn = document.getElementById("bookButton");
 const favinput = document.getElementById("favouriteButton");
 const checkfavBtn = document.getElementById("checkFavourite");
 const checkloyaltyBtn = document.getElementById("checkLoyaltyBtn");
 const resetfavBtn = document.getElementById("resetForm");
 
  // cost
 const popUpoutput = document.getElementById("fullCost");
 const continueInput = document.getElementById("continueButton");
 const roomdetailsOutput = document.getElementById("roomdetails");
 const adventuredetailOutput = document.getElementById("adventuredetails");
 const closeBtnInput = document.getElementById("closeBtn");
 const closeBtn2Input = document.getElementById("closeBtn2");
 
   // Adventure DOM Elements
 const advInput = document.getElementsByName("adventures");
 const guideInput = document.getElementsByName("guideDiving");
 const localadultsInput = document.getElementById("localAdults");
 const localkidsInput = document.getElementById("localKids");
 const foreignadultsInput = document.getElementById("foreignAdults");
 const foreignkidsInput = document.getElementById("foreignKids");
 const adultsguideInput = document.getElementById("guideAdults");
 const kidsguideInput = document.getElementById("guideKids");
 
 // Buttons
 const advBookBtnInput = document.getElementById("bookAdventure");
 const advcheckFavBtn = document.getElementById("checkAdventure");
 const advresetFormInput = document.getElementById("resetAdventure");
 
  // Personal Information DOM Elements
  const personName2Input = document.getElementById("fullName2");
 const contactId2Input = document.getElementById("contactnum2");
 const emailId2Input = document.getElementById("emailAddress2");
 const countryId2Input = document.getElementById("countryName2");
 
  // Branch Selection DOM Elements
 const colomboBranch2Input = document.getElementById("colomboBranch2");
 const negomboBranch2Input = document.getElementById("negomboBranch2");
 const galleBranch2Input = document.getElementById("galleBranch2");
 
 
 // Declaring Variables
 let fullName;
 let contact;
 let emailaddress;
 let countryname;
 let branchname;
 let roomtype;
 let roomCost;
 let roomtotal;
 let numberRoom;
 let pointsEarned;
 let totaltpoints;
 let previousloyaltypoint;
 let extraBed;
 let extraBedCost;
 let numofadults;
 let numofchildrenbelow5;
 let numofchildrenabove5;
 let totalMembers;
 let finalmealCost;
 let childmealsCost;
 let numofDays;
 let dateIn;
 let dateOut;
 let extraFacilit;
 let wifi;
 let poolView;
 let promoCode
 let promoDiscount;
 let currentCost;
 let finalCost;
 let finalPayable;
 let finalCostwithoutpromo;
 
     // Variables for the adventure Booking from
 let adventureType1;
 let adventureCost;
 let adventureType2;
 let adventureType3;
 let adventureType4;
 let guide1;
 let guideCost;
 let guide2;
 let totalAdventure;
 let adventureOutput;
 let guide;
 let adventureoutput1;
 let adventureoutput2;
 let adventureoutput3;
 let adventureoutput4;
 
 
     
 
 // Event listners
 branchInput.forEach(item => item.addEventListener("change", branchnamefunction));
 numpeoplemealInput.forEach(item => item.addEventListener("change",mealFunction));
 durationInput.forEach(item => item.addEventListener("change", dateCalFunction));
 extrareqInput.forEach(item =>item.addEventListener("change", extrareqFunction));
 roomInput.forEach(item => item.addEventListener("change", roomcostFuntion));
 bookBtn.addEventListener("click", outputfunction);
 resetfavBtn.addEventListener("click", resetbookroomFunction);
 
 
 
 advInput.forEach(item => item.addEventListener("change", adventurecalFunction));
 guideInput.forEach(item => item.addEventListener("change", guideCalFunction));
 advBookBtnInput.addEventListener("click", advBookFunction);
 branchInput.forEach(item => item.addEventListener("change", branchnamefunction));
 advresetFormInput.addEventListener("click", advformresetFunction);
 checkloyaltyBtn.addEventListener("click", checkloyaltyFunction)
 
 
 
 // Event listner functio
 
 // Initializing Variables
 function initialize(){
     fullName = "";
     contact = "";
     emailaddress = "";
     countryname = "";
     branchname = "";
     roomtype = "";
     roomCost = 0;
     roomtotal = 0;
     numberRoom = 0;
     pointsEarned = 0;
     totaltpoints = 0;
     previousloyaltypoint = 0;
     extraBed = "";
     extraBedCost = 0;
     numofadults = 0;
     numofchildrenbelow5 = 0;
     numofchildrenabove5 = 0;
     totalMembers = 0;
     finalmealCost = 0;
     numofDays = 0;
     dateIn= "";
     dateOut = "";
     extrareq = "";
     wifi = "";
     poolView = "";
     promoCode = "";
     promoDiscount = 0;
     currentCost = 0;
     finalCost = 0;
     childmealsCost = 0;
     finalPayable = 0;
     finalCostwithoutpromo = 0;
 
     // Initializing Variables Related To The Adventure Booking Form
     adventureType1 = "";
     adventureCost = 0;
     adventureType2 = "";
     adventureType3 = "";
     adventureType4 = "";
     guide1 = "";
     guideCost = 0;
     guide2 = "";
     totalAdventure = 0;
     adventureOutput = "";
     guide = "";
     adventureType1 = "";
     adventureoutput2 = "";
     adventureoutput3 = "";
     adventureoutput4 = "";
 }
 
 function branchnamefunction(){
     if (this.value == "colombo"){
         branchname = "Colombo Branch";
     } else if (this.value == "negombo"){
         branchname = "Negombo Branch";
     } else if (this.value == "galle"){
         branchname = "Galle Branch";
     } else{
         branchname = "Branch Not Selected";
     }
 }
 
 function personalinfoFunction(){
     fullName= personNameInput.value;
     contact = contactInput.value;
     emailaddress = emailInput.value;
     countryname = countryInput.value;
     
 }
 
 function personalinfoFunction2(){
     fullName = personName2Input.value;
     contact = contactId2Input.value;
     emailaddress = emailId2Input.value;
     countryname = countryId2Input.value;
 }    
 
 
 function roomcostFuntion(){
     if(this.value == "singleRoom"){
         roomtype = "Single Room(s)";
         roomCost = 25000.00;
     }else if(this.value == "doubleRoom"){
         roomtype = "Double Room(s)";
         roomCost = 35000.00;
     }else if(this.value == "tripleRoom"){
         roomtype = "Triple Room(s)";
         roomCost = 40000.00;
     }
     if(extraBedInput.checked){
         extraBedCost = 8000.00;
         extraBed = " Extra Bed Added ";
     }else{
         extraBedCost = 0;
         extraBed = "";
     }
     numberRoom = numRoomsInput.value;
     if (numberRoom > 3){
         pointsEarned = numberRoom * 20;
     }else{
         pointsEarned = 0;
     }
     localStorage.setItem("pointsEarned", `${pointsEarned}`);
     roomtotal = (roomCost + extraBedCost) * numberRoom;
 
     previousloyaltypoint = Number(localStorage.getItem("previousloyaltypoint"));
     totaltpoints = pointsEarned + previousloyaltypoint;
     localStorage.setItem("totaltpoints", `${totaltpoints}`);
     outputText1.innerText = `Room Type and Costs are ${roomtype} ${roomCost} ${extraBed}. The number of rooms ${numberRoom} and the Room payable is ${roomtotal}`;
 }
 
 
 function mealFunction(){
     numofadults = parseInt(adultsNumInput.value);
     numofchildrenbelow5 = parseInt(childrenNumBelowInput.value);
     numofchildrenabove5 = parseInt(childrenNumAboveInput.value);
     totalMembers = numofadults + numofchildrenabove5;
     let mealCost = (totalMembers * 10000);
     if (numofchildrenabove5 > 0){
         childmealsCost = 5000;
     }else{
         childmealsCost = 0;
     }
     finalmealCost = mealCost + childmealsCost;
     outputText2.innerText  = `Number of adults is ${numofadults} and the number of children below and above is ${numofchildrenbelow5} and ${numofchildrenabove5}, The total Meal Cost is LKR ${finalmealCost}` ;
 }
 
 
 
 function dateCalFunction(){
 
     dateIn=  checkinInput.value;
     dateOut = checkoutInput.value;
 
     let checkOut = new Date(checkoutInput.value);
     let checkIn = new Date(checkinInput.value);
 
     if (isNaN(checkOut)){
         numofdaysOutput.innerText = "Invalid Date";
     }else if (isNaN(checkIn)){
         numofdaysOutput.innerText = "Invalid Date";
     }
     else{
         let difference = checkOut.getTime() - checkIn.getTime();
         if (`${difference}` < 0){
             numofdaysOutput.innerText = "Invalid Date";
         }else{
             numofDays  = difference / (1000 * 3600 * 24);
             numofdaysOutput.innerText = `${numofDays}`;
         }
     }
     finalCost = (roomtotal + finalmealCost) * numofDays;
     finalCostwithoutpromo = (roomtotal + finalmealCost) * numofDays;
     outputText4.innerText = `Final Payable is (Wihtout Promotion Discounts) LKR ${finalCostwithoutpromo}`;
 }
 
 
 function extrareqFunction(){
     if(this.value == "wifi"){
         if(this.checked){
             wifi = "WIFI Included \n";
         }else{
             wifi = " ";
         }
     }else if(this.value == "poolView"){
         poolView = " Pool View Included";
     }else if(this.value == "gardenView"){
         poolView = " Garden View Included";
     }else{
         poolView = " ";
     }
     extrareq = wifi + poolView;
     outputText3.innerText = `Extra requirements\n ${extrareq}`;
 }
 
 function promoFunction(){
     promoCode = promoInput.value;
     if(promoCode === "Promo123"){
         promoDiscount = finalCost * (5/100);
         finalCost -= promoDiscount;
         finalPayable = finalCost;
     }
     
 }
 
 
 function outputfunction(){
     personalinfoFunction();
     popUpoutput.classList.toggle('active');
     roomdetailsOutput.innerHTML =
     
     `
     <h2>Your Booking Confirmed.!!!</h2>
     <h2>--------------------------</h2>
     <h3>Hi,Mr/Ms. ${fullName}</h3>
     <p>
         Order details are as Follows : <br>
         Selected branch is ${branchname}<br>
         Selected Room Type is ${roomtype} ${extraBed}and the Room(s) Cost is LKR ${roomCost} <br>
         Entered Number of Rooms ${numberRoom} <br>
         The Room Total payable is LKR ${roomtotal}<br>
         Loyalty Points Earned ${pointsEarned} <br>
         Entered Number of Adults  ${numofadults} <br>
         Entered Number of Children (Below 5 years old) is ${numofchildrenbelow5}<br>
         Entered Number of Children (Above 5 years old) is ${numofchildrenabove5}<br>
         The total Meal Cost is LKR ${finalmealCost}<br>
         Check In date ${dateIn}<br>
         Check Out date ${dateOut}<br>
         ${extrareq}<br>
         Final Cost (Without Promotion Discounts) LKR ${finalCostwithoutpromo}<br>
         Final Cost (With Promotion if there any) LKR ${finalPayable} <br><br>
 
         Contact Details : ${contact}<br>
         Email address : ${emailaddress}<br>
         Country : ${countryname}<br>
    <h2>--------------------------------------------------------------</h2>
         
     </p>`
 
 }  
 
 function continueFunction(){
     previousloyaltypoint = totaltpoints;
     localStorage.setItem("previousloyaltypoint", `${previousloyaltypoint}`);
     popUpoutput.classList.toggle('active');
     outputText1.innerText = "";
     outputText2.innerText = "";
     outputText3.innerText = "";
     outputText4.innerText = "";
     outputText5.innerText = "";
     outputText6.innerText = "";
     outputText7.innerText = "";
 
     //Setting values to default
     initialize();
     colomboBranchInput.checked = false;
     negomboBranchInput.checked = false;
     galleBranchInput.checked = false;
     singleInput.checked = false;
     doubleInput.checked = false;
     tripleInput.checked = false;
     extraBedInput.checked = false;
     numRoomsInput.value = 1;
     adultsNumInput.value = 1;
     childrenNumBelowInput.value = 0;
     childrenNumAboveInput.value = 0;
     checkinInput.value = "yyyy-mm-dd";
     checkoutInput.value = "yyyy-mm-dd";
     numofdaysOutput.innerText = "Number of Days";
     wifiInput.checked = false;
     poolViewInput.checked = false;
     gardenViewInput.checked = false;
     promoInput.value = "";
     personNameInput.value = "";
     contactInput.value = "";
     emailInput.value = "";
     countryInput.value = "";
     
     // Setting values in adventure book form to default
     localadultsInput.checked = false;
     localkidsInput.checked = false;
     foreignadultsInput.checked = false;
     foreignkidsInput.checked = false;
     adultsguideInput.checked = false;
     kidsguideInput.checked = false;
     personName2Input.value = "";
     contactId2Input.value = "";
     emailId2Input.value = "";
     countryId2Input.value = "";
     colomboBranch2Input.checked = false;
     negomboBranch2Input.checked = false;
     galleBranch2Input.checked = false;
 }
 
 
 function addfavFunction(){
     popup2.classList.toggle('active');
     // Local Storage for the Room Bookings
     localStorage.setItem("name", `${fullName}`);
     localStorage.setItem("selectedBranch", `${branchname}`);
     localStorage.setItem("roomType", `${roomtype}`);
     localStorage.setItem("extraBed", `${extraBed}`);
     localStorage.setItem("roomCost", `${roomCost}`);
     localStorage.setItem("numberofRooms", `${numberRoom}`);
     localStorage.setItem("roomtotal", `${roomtotal}`);
     localStorage.setItem("numofadults", `${numofadults}`);
     localStorage.setItem("numofchildrenbelow5", `${numofchildrenbelow5}`);
     localStorage.setItem("numofchildrenabove5", `${numofchildrenabove5}`);
     localStorage.setItem("finalmealCost", `${finalmealCost}`);
     localStorage.setItem("checkIndate", `${dateIn}`);
     localStorage.setItem("checkOutDate", `${dateOut}`);
     localStorage.setItem("extrareq", `${extrareq}`);
     localStorage.setItem("finalCostwithoutpromo", `${finalCostwithoutpromo}`);
     localStorage.setItem("finalPayable", `${finalPayable}`);
     localStorage.setItem("contact", `${contact}`);
     localStorage.setItem("email", `${emailaddress}`);
     localStorage.setItem("country", `${countryname}`);
 
 
     //Adding Favorites from the adventure bookings to Local Storage
     localStorage.setItem("adventures", `${adventureOutput}`);
     localStorage.setItem("guideforAdults", `${guide1}`);
     localStorage.setItem("guideforKids", `${guide2}`);
     localStorage.setItem("guideCost", `${guideCost}`);
     localStorage.setItem("advfinalPayable", `${totalAdventure}`);
     localStorage.setItem("adventureCost", `${adventureCost}`);
 
 
 
     
     continueFunction();
 }
 
 
 function resetbookroomFunction(){
     outputText1.innerText = "";
     outputText2.innerText = "";
     outputText3.innerText = "";
     outputText4.innerText = "";
     outputText5.innerText = "";
     outputText6.innerText = "";
     outputText7.innerText = "";
 
 
     //Setting values to default
     initialize();
     colomboBranchInput.checked = false;
     negomboBranchInput.checked = false;
     galleBranchInput.checked = false;
     singleInput.checked = false;
     doubleInput.checked = false;
     tripleInput.checked = false;
     extraBedInput.checked = false;
     numRoomsInput.value = 1;
     adultsNumInput.value = 1;
     childrenNumBelowInput.value = 0;
     childrenNumAboveInput.value = 0;
     checkinInput.value = "yyyy-mm-dd";
     checkoutInput.value = "yyyy-mm-dd";
     numofdaysOutput.innerText = "Number of Days";
     wifiInput.checked = false;
     poolViewInput.checked = false;
     gardenViewInput.checked = false;
     promoInput.value = "";
     personNameInput.value = "";
     contactInput.value = "";
     emailInput.value = "";
     countryInput.value = "";
 }
 
 
 function checkloyaltyFunction(){
 
     let setpointsEarned = localStorage.getItem("pointsEarned");
     let settotaltpoints = localStorage.getItem("totaltpoints");
     let setpreviousloyaltypoint = localStorage.getItem("previousloyaltypoint");
 
     window.alert(`
     Loyalty Points Information :
     Previous Loyalty Points : ${setpreviousloyaltypoint}
     Earned Loyalty Points : ${setpointsEarned}
     Total Loyalty Points : ${settotaltpoints}
     `);
 
     // loyaltyoutput.innerHTML = 
 
 }
 
 
     // Functions Related To The Adventure Booking Event Listners
 function adventurecalFunction(){
         if(this.value == "localAdults"){
             if(this.checked){
                 adventureType1 = "Diving for local Adults (1 hr) Included - LKR 5000\n";
                 adventureoutput1 = `Diving for local Adults (1 hr) Included - LKR 5000 <br>`
                 adventureCost += 5000;
             }else{
                 adventureoutput1 = "";
                 adventureType1 = "";
                 adventureCost -= 5000;
             }
         }else if(this.value == "localKids"){
             if(this.checked){
                 adventureType2 = " Diving for local kids (above 5 years) Included - LKR 2000\n";
                 adventureoutput2 = `Diving for local kids (above 5 years) Included - LKR 2000 <br>`
                 adventureCost += 2000;
             }else{
                 adventureoutput2 = "";
                 adventureType2 = "";
                 adventureCost -= 2000;
             }
         }else if(this.value == "foreignAdults"){
             if (this.checked){
                 adventureType3 = " Diving for foreign adults Included - LKR 10000\n";
                 adventureoutput3 = `Diving for foreign adults Included - LKR 10000 <br>`
                 adventureCost += 10000;
             }else{
                 adventureoutput3 = "";
                 adventureType3 = "";
                 adventureCost -= 10000;
             }
         }else if(this.value == "foreignKids"){
             if(this.checked){
                 adventureType4 = " Diving for foreign kids Included - LKR 5000";
                 adventureoutput4 = `Diving for foreign kids Included - LKR 5000 <br>`
                 adventureCost += 5000;
             }else{
                 adventureoutput4 = "";
                 adventureType4 = "";
                 adventureCost -= 5000;
             }
         }
         totalAdventure = adventureCost + guideCost;
         adventureOutput = ` ${adventureoutput1} ${adventureoutput2} ${adventureoutput3} ${adventureoutput4}`;
         outputText5.innerText = ` ${adventureType1} ${adventureType2} ${adventureType3} ${adventureType4}`;
         outputText7.innerText = `Total Payable is LKR ${totalAdventure}`
 }
 
 function guideCalFunction(){
     if(this.value == "guideAdults"){
         if(this.checked){
             guide1 = `Guide during the diving session for Adults The Guide Cost is LKR 1000\n`;
             guideCost += 1000;
         }else{
             guide1 = "";
             guideCost -= 1000;
         }
     }else if(this.value == "guideKids"){
         if(this.checked){
             guide2 = `Guide during the diving session for Kids The Guide Cost is LKR 500\n`;
             guideCost += 500;
         }else{
             guide2 = "";
             guideCost -= 500;
         }
     }
     guide = `${guide1} ${guide2} Total Guide Cost is ${guideCost}`;
     outputText6.innerText = `${guide}`;
     totalAdventure = adventureCost + guideCost;
     outputText7.innerText = `Total Payable is LKR ${totalAdventure}`
 }
 
 function advBookFunction(){
     personalinfoFunction2();
     popUpoutput.classList.toggle('active');
     adventuredetailOutput.innerHTML =
     `
     <h2>Adventure Order Placed!!!</h2>
     <h2>-------------------------</h2>
     <h3>Hi, Mr/Ms. ${fullName}</h3>
     <p>
         Order details are as Follows : <br>
         Selected branch is ${branchname}<br>
         Selected Adventures are, <br>
             ${adventureOutput} <br>
         Guidance Selection, <br>
             ${guide1} <br> \n ${guide2} <br>
         The Total Payable is ${totalAdventure} <br><br>
 
         Contact Details : ${contact}<br>
         Email address : ${emailaddress}<br>
         Country : ${countryname}<br>
     </p>
     `
 }
 
 
 
 function advformresetFunction(){
     outputText1.innerText = "";
     outputText2.innerText = "";
     outputText3.innerText = "";
     outputText4.innerText = "";
     outputText5.innerText = "";
     outputText6.innerText = "";
     outputText7.innerText = "";
     
     initialize();
     
     localadultsInput.checked = false;
     localkidsInput.checked = false;
     foreignadultsInput.checked = false;
     foreignkidsInput.checked = false;
     adultsguideInput.checked = false;
     kidsguideInput.checked = false;
     personName2Input.value = "";
     contactId2Input.value = "";
     emailId2Input.value = "";
     countryId2Input.value = "";
     colomboBranch2Input.checked = false;
     negomboBranch2Input.checked = false;
     galleBranch2Input.checked = false;
 }
     
 
 
 initialize();