import Engagement  from "../models/Engagement.js";
import { engagementMail} from "../utils/engagementMail.js";


export const submitEngagement = async (req, res) => {
    try {
        const {name, email, phone, message} = req.body;

        if(!name || !email || !phone)
            return res.status(400).json({ success:false, msg: "All fields are required"});
        
        const engagementData = await Engagement.create({ name, email, phone, message, });

        await engagementMail(engagementData);

        res.status(200).json({success: true, msg: "Message sent sucessfully!"});
    } catch(error) {
        console.error("Error submitting engagement form:", error);
        res.status(500).json({ success: false, msg: "Server error"});
    }
};