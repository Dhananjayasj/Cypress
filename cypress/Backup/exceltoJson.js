var XLSX=require('xlsx')
var fs=require('fs')
var workbook=XLSX.readFile('cypress/spreedsheets/userData.xlsx');

var worksheet=workbook.Sheets['Sheet1']

var user_data=XLSX.utils.sheet_to_json(worksheet)

console.log(user_data);
 fs.writeFile('cypress/fixtures/Exceltojson/user_data.json', JSON.stringify('user_data'),(err)=>{
    if(err){
        console.log(err)
        return
    }
 })
