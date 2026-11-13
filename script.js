document.body.innerHTML = "<h1>JavaScript Assignment</h1>";

function show(q, a) {
  document.body.innerHTML += "<h2>" + q + "</h2><p>" + a + "</p>";
}
function ask(msg) {
  var v = prompt(msg);
  if (v === null || v === "") return "0";
  return v;
}

// Q1 Shopping Bill Calculator
var shirt = 1500;
var trouser = 2500;
var originalBill = shirt + trouser;
var discount = 0;
if (originalBill >= 3000) { discount = originalBill * 10 / 100; }
var finalBill = originalBill - discount;
show("Q1 Shopping Bill", "Original Bill: Rs. " + originalBill + "<br>Discount: Rs. " + discount + "<br>Final Bill: Rs. " + finalBill);

// Q2 Student Result Checker
var cs = Number(ask("Q2 - Computer Science marks likho (0-100)"));
var math = Number(ask("Q2 - Mathematics marks likho (0-100)"));
var eng = Number(ask("Q2 - English marks likho (0-100)"));
var totalMarks = cs + math + eng;
var percentage = totalMarks / 3;
var result = "Fail";
if (percentage >= 50) { result = "Pass"; }
show("Q2 Student Result", "Total Marks: " + totalMarks + "<br>Percentage: " + percentage.toFixed(2) + "%<br>Result: " + result);

// Q3 Electricity Bill
var units = Number(ask("Q3 - Units likho"));
var bill = 0;
if (units <= 100) { bill = units * 10; } else { bill = 100 * 10 + (units - 100) * 15; }
show("Q3 Electricity Bill", "Units: " + units + "<br>Total Bill: Rs. " + bill);

// Q4 ATM Withdrawal
var balance = 20000;
var withdraw = Number(ask("Q4 - Kitne paise nikalne hain? Balance 20000 hai"));
if (withdraw > 0 && withdraw <= balance) {
  balance = balance - withdraw;
  show("Q4 ATM", "Remaining Balance: Rs. " + balance);
} else {
  show("Q4 ATM", "Invalid withdrawal amount");
}

// Q5 Multiplication Table
var number = Number(ask("Q5 - Kis number ka table chahiye?"));
var table = "";
for (var i = 1; i <= 10; i++) { table += number + " x " + i + " = " + (number * i) + "<br>"; }
show("Q5 Multiplication Table", table);

// Q6 Movie Ticket Booking - Mistake 1 yahan hai
var age = Number(ask("Q6 - Age likho"));
var student = ask("Q6 - Student ho? yes / no likho").toLowerCase();
var ticketPrice = 0;
var ticketDiscount = 0;
if (age < 12) { ticketPrice = 300; }
else if (age <= 59) {
  ticketPrice = 600;
  if (student == "Yes") { ticketDiscount = ticketPrice * 10 / 100; }
} else { ticketPrice = 400; }
var finalTicket = ticketPrice - ticketDiscount;
show("Q6 Movie Ticket", "Ticket Price: Rs. " + ticketPrice + "<br>Discount: Rs. " + ticketDiscount + "<br>Final Cost: Rs. " + finalTicket);

// Q7 Employee Salary and Bonus
var salary = Number(ask("Q7 - Salary likho"));
var rating = Number(ask("Q7 - Rating likho 1 se 5 tak"));
var years = Number(ask("Q7 - Kitne saal ho gaye?"));
var bonus = 0;
if (rating == 5 && years >= 5) { bonus = salary * 20 / 100; }
else if (rating == 4 && years >= 3) { bonus = salary * 15 / 100; }
else if (rating == 3 && years >= 2) { bonus = salary * 10 / 100; }
show("Q7 Employee Salary", "Basic Salary: Rs. " + salary + "<br>Bonus: Rs. " + bonus + "<br>Final Salary: Rs. " + (salary + bonus));

// Q8 Online Food Delivery
var foodAmount = Number(ask("Q8 - Food amount likho"));
var distance = Number(ask("Q8 - Distance likho km me"));
var deliveryCharge = 0;
if (foodAmount >= 2000 && distance <= 5) { deliveryCharge = 0; }
else if (distance <= 5) { deliveryCharge = 100; }
else {
  if (foodAmount < 2000) { deliveryCharge = 100; }
  deliveryCharge = deliveryCharge + (distance - 5) * 20;
}
show("Q8 Food Delivery", "Food Amount: Rs. " + foodAmount + "<br>Delivery Charges: Rs. " + deliveryCharge + "<br>Total Bill: Rs. " + (foodAmount + deliveryCharge));

// Q9 ATM Daily Transaction Limit - Mistake 2 yahan hai
var dailyLimit = 50000;
var totalWithdrawn = 0;
var req = Number(ask("Q9 - Pehli withdrawal likho, rukne ke liye 0 likho"));
while (req != 0) {
  if (req < 0) { show("Q9 Note", "Negative amount reject"); }
  else if (req >= dailyLimit - totalWithdrawn) { show("Q9 Note", "Limit exceed, reject: " + req); }
  else { totalWithdrawn = totalWithdrawn + req; }
  req = Number(ask("Q9 - Agli withdrawal likho, rukne ke liye 0 likho"));
}
show("Q9 ATM Daily Limit", "Total Withdrawn: Rs. " + totalWithdrawn + "<br>Remaining Limit: Rs. " + (dailyLimit - totalWithdrawn));

// Q10 Smart Parking
var totalRevenue = 0;
var hours = Number(ask("Q10 - Parking hours likho, rukne ke liye 0 likho"));
while (hours != 0) {
  var parkingFee = 0;
  if (hours <= 2) { parkingFee = hours * 50; }
  else if (hours <= 5) { parkingFee = 2 * 50 + (hours - 2) * 30; }
  else { parkingFee = 2 * 50 + 3 * 30 + (hours - 5) * 20; }
  totalRevenue = totalRevenue + parkingFee;
  show("Q10 Parking", hours + " hours - Fee: Rs. " + parkingFee);
  hours = Number(ask("Q10 - Agli gari ke hours likho, rukne ke liye 0 likho"));
}
show("Q10 Total Revenue", "Total Revenue: Rs. " + totalRevenue);

// Q11 University Scholarship
var perc = Number(ask("Q11 - Percentage likho"));
var income = Number(ask("Q11 - Family monthly income likho"));
var scholarshipPercent = 0;
if (perc >= 90 && income < 50000) { scholarshipPercent = 100; }
else if (perc >= 80 && income < 70000) { scholarshipPercent = 50; }
else if (perc >= 70 && income < 40000) { scholarshipPercent = 25; }
var annualFee = 100000;
var scholarshipAmount = annualFee * scholarshipPercent / 100;
show("Q11 Scholarship", "Scholarship: " + scholarshipPercent + "%<br>Amount: Rs. " + scholarshipAmount + "<br>Remaining Fee: Rs. " + (annualFee - scholarshipAmount));

// Q12 Supermarket Inventory
var stock = 100, unitPrice = 500, unitsSold = 0, revenue = 0;
var purchase = Number(ask("Q12 - Kitne units khareedne hain? Rukne ke liye 0 likho"));
while (purchase != 0 && stock > 0) {
  if (purchase < 0) { show("Q12 Note", "Negative reject"); }
  else if (purchase > stock) { show("Q12 Note", "Stock se zyada reject"); }
  else {
    stock = stock - purchase;
    unitsSold = unitsSold + purchase;
    revenue = revenue + purchase * unitPrice;
    show("Q12 Purchase", purchase + " units - Bill: Rs. " + (purchase * unitPrice));
  }
  if (stock > 0) { purchase = Number(ask("Q12 - Agli purchase likho, rukne ke liye 0 likho")); }
}
show("Q12 Supermarket", "Units Sold: " + unitsSold + "<br>Remaining Stock: " + stock + "<br>Total Revenue: Rs. " + revenue);

// Q13 Hospital Patient Billing - Mistake 3 yahan hai
var hospitalRevenue = 0;
var days = Number(ask("Q13 - Kitne din admit tha? Rukne ke liye 0 likho"));
while (days != 0) {
  var roomType = ask("Q13 - Room type likho: general / semi-private / private").toLowerCase();
  var roomRate = 0;
  if (roomType == "general") { roomRate = 2000; }
  else if (roomType == "semi private") { roomRate = 3500; }
  else if (roomType == "private") { roomRate = 5000; }
  var patientBill = days * roomRate + 1500 + 2000 + 3000;
  hospitalRevenue = hospitalRevenue + patientBill;
  show("Q13 Patient Bill", "Days: " + days + "<br>Bill: Rs. " + patientBill);
  days = Number(ask("Q13 - Agle patient ke din likho, rukne ke liye 0 likho"));
}
show("Q13 Hospital Billing", "Total Hospital Revenue: Rs. " + hospitalRevenue);

// Q14 Mobile Data Usage
var dataPackage = 10, dataConsumed = 0;
for (var d = 1; d <= 30; d++) {
  if (dataConsumed >= 10) { break; }
  var daily = Number(ask("Q14 - Day " + d + " kitna data use hua? GB me likho"));
  if (daily < 0) { show("Q14 Note", "Day " + d + " Negative reject"); continue; }
  if (daily > (dataPackage - dataConsumed)) { show("Q14 Note", "Day " + d + " Zyada hai, reject"); continue; }
  dataConsumed = dataConsumed + daily;
}
var remainingData = dataPackage - dataConsumed;
var usageCategory = "";
if (dataConsumed < 5) { usageCategory = "Low Usage"; }
else if (dataConsumed <= 8) { usageCategory = "Moderate Usage"; }
else if (dataConsumed < 10) { usageCategory = "High Usage"; }
else { usageCategory = "Package Exhausted"; }
show("Q14 Mobile Data", "Data Consumed: " + dataConsumed + " GB<br>Remaining Data: " + remainingData + " GB<br>Category: " + usageCategory);

// Q15 University Examination Performance
var marksList = [];
for (var s = 1; s <= 10; s++) {
  var m = Number(ask("Q15 - Student " + s + " ke marks likho (0-100)"));
  marksList.push(m);
}
var totalClassMarks = 0, excellent = 0, veryGood = 0, good = 0, fail = 0;
for (var s2 = 0; s2 < marksList.length; s2++) {
  totalClassMarks += marksList[s2];
  if (marksList[s2] >= 85) excellent++;
  else if (marksList[s2] >= 70) veryGood++;
  else if (marksList[s2] >= 50) good++;
  else fail++;
}
var classAverage = totalClassMarks / 10;
var highest = marksList[0], lowest = marksList[0], aboveAverage = "";
for (var j = 0; j < marksList.length; j++) {
  if (marksList[j] > highest) highest = marksList[j];
  if (marksList[j] < lowest) lowest = marksList[j];
  if (marksList[j] > classAverage) aboveAverage += "Student " + (j + 1) + ", ";
}
var passedStudents = excellent + veryGood + good;
var passPercentage = passedStudents / 10 * 100;
var classPerformance = "";
if (classAverage >= 85) classPerformance = "Excellent Class Performance";
else if (classAverage >= 70) classPerformance = "Good Class Performance";
else if (classAverage >= 50) classPerformance = "Satisfactory Class Performance";
else classPerformance = "Poor Class Performance";
var studentReport = "";
for (var k = 0; k < marksList.length; k++) {
  var category = "";
  if (marksList[k] >= 85) category = "Excellent";
  else if (marksList[k] >= 70) category = "Very Good";
  else if (marksList[k] >= 50) category = "Good";
  else category = "Fail";
  studentReport += "Student " + (k + 1) + ": " + marksList[k] + " - " + category + "<br>";
}
show("Q15 University Examination", studentReport + "<br>Total Marks: " + totalClassMarks + "<br>Class Average: " + classAverage.toFixed(2) + "<br>Excellent: " + excellent + "<br>Very Good: " + veryGood + "<br>Good: " + good + "<br>Fail: " + fail + "<br>Highest Marks: " + highest + "<br>Lowest Marks: " + lowest + "<br>Pass Percentage: " + passPercentage + "%<br>Above Average Students: " + aboveAverage + "<br>Class Performance: " + classPerformance);