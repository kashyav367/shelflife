import ApiResponse from "../common/utils/api-response.js";
import * as service from "./auth-service.js";

const register = async (req, res, next) => {
    try {
        const user = await service.register(req.body);

        ApiResponse.ok(res, "User Created Successfully", user);
    }
    catch (error) {
        next(error);
    }
};

const login = async(req,res,next) => {
    try{
       const { accessToken, refreshToken, user} = await service.login(
        req.body,
       );
     res.cookie("refreshToken", refreshToken, {
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        maxAge: 7*24*60*60*1000, 
     });
     ApiResponse.ok(res, "Login Successful", {accessToken, user})  
    }
    catch(error){
        next(error)
    }
}
export { register, login };