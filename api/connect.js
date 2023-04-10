import mysql from "mysql"

export const db = mysql.createConnection({
  host:"aws.connect.psdb.cloud",
  user:"1dci82tmaahhfhxp5imm",
  password:"pscale_pw_wDVEfXO6C44aXzjb2FWSV6ual6vuuAFnMNgIBmvLdAD",
  database:"social"
})
