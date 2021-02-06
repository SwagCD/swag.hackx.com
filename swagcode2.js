//apa liat liat? mau ngebait?
var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.write(day + '/' + months[month] + '/' + year);