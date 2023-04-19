import twilio from "twilio";
import { envConfig } from "../../config/envConfig.js";

const accountId = envConfig.TWILIO_ACCOUNT_ID;
const tokenTwilio = envConfig.TWILIO_TOKEN;


const twilioWhatsappPhone = envConfig.TWILIO_SERVICE_PHONE;
const adminWhatsappPhone = envConfig.TWILIO_ADMIN_PHONE;

const twilioClient = twilio(accountId, tokenTwilio);

export {twilioClient, twilioWhatsappPhone, adminWhatsappPhone};