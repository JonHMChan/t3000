import * as SendGrid from "@sendgrid/mail";
import { env } from "~/env.mjs";

const sendgrid: SendGrid.MailService = SendGrid;

sendgrid.setApiKey(env.SENDGRID_API_KEY);

export default sendgrid;
