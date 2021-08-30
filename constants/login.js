export default {
    /**
     * 
     * @param {Number,Password} phone 
     * @returns 
     */
    ValidateLogin(phone,password){
        
        if((phone=="18970190597")&&(password=="123")){
            return true 
        }
        else{
            return false
        }
    }
}