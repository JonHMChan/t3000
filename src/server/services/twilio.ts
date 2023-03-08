import { env } from "~/env.mjs";
import { Twilio } from "twilio";

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = env.TWILIO_ACCOUNT_SID;
const authToken = env.TWILIO_AUTH_TOKEN;

const twilio: Twilio = new Twilio(accountSid, authToken);

export default twilio;
