export default {
    /**
     * 
     * @param {Number} phone 
     * @returns 
     */
    ValidatePhone(phone){
        const reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
        return reg.test(phone)
    }
}