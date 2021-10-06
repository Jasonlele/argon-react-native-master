
import * as SQLite from "expo-sqlite";
export default {
    /**
     * 
     * @param {Number,Password} phone 
     * @returns 
     */
    ValidateLogin(phone,password){

    
    const db = SQLite.openDatabase("db.DECO3801");
    var test = [];

    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Users (id integer primary key not null, phone text, password text);"
      );
      // console.log(JSON.stringify(db))
      
    });
    // 执行插值操作，每次刷新都会执行
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "INSERT INTO Users (phone, password) VALUES('yyf123','12345')"
    //   );

    //   tx.executeSql(
    //     "INSERT INTO Users (phone, password) VALUES('wxj123','12345')"
    //   );
      
    // });
    
    db.transaction((tx) => {
    
      tx.executeSql("select * from Users where phone = ? and password = ? ", 
      [phone, password],
       (_, result) =>{
          var len = result.rows.length;
        
          if(len>0){
            console.log(JSON.stringify(result.rows))
            //????
           return true;
          }
         
          
       }
         


        );
        
    });
        
  
}

}