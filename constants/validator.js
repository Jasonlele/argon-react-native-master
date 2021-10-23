export default {
    /**
     * 
     * @param {Number} phone 
     * @returns 
     */
    ValidatePhone(phone){
        const reg = /^\D*0(\D*\d){9}\D*$/;
        return reg.test(phone)
    }
}