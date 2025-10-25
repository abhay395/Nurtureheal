import UserService from "../services/User.service.js"
import { sendSuccessMessage } from "../utils/helper.js";
import axios from 'axios'
export default {
    getUserInfo: async (req, res) => {
        const { _id } = req.user
        // console.log(user)
        let result = await UserService.getUserInfo(_id);
        sendSuccessMessage(res, 200, "User Profile Fetched successfull", result);
    },
}