export default {
    /**
     * 
     * @param {Number,Password} phone 
     * @returns 
     */
    ValidateLogin(phone,password){


    
    const db = SQLite.openDatabase("db.DECO3801");
    var test = [];
      // 删除表，请一定要注释
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE DECO3801.Users;"
    //   );
    //   // console.log(JSON.stringify(db))
      
    // });
      // 建立Users表
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Users (id integer primary key not null, phone text, password text, username text);"
      );
      // console.log(JSON.stringify(db))
      
    });
  
        
  
}


      
}