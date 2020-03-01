

import * as twilio from 'twilio';

export function sendEnrollmentConfirmation (phoneNumber: string, dlNumber: string) {
    const truncatedDlNumber = dlNumber.slice(10);
        const message = `You have been subscribed to SMS notifactions for the Driver license number ending in ${truncatedDlNumber}, Please note that standard Messaging rates may apply.\nIf you wish to stop reciving SMS notifications to this number, please respond to this message with the word STOP`
      return sendSms(phoneNumber, message)
}

export function sendReportSMS (phoneNumber: string, dlNumber: string, report: string) {
  const truncatedDlNumber = dlNumber.slice(10);
      const message = 
      `This is a report for Driver License ending in ${truncatedDlNumber}. reply STOP if you no longer want to recvice messages\n
      ${report}`
    return sendSms(phoneNumber, message)
}

function sendSms (phoneNumber: string, message: string) {
    console.log('sending sms');
    const TWILIO_CLIENT_ID = process.env['TWILIO_CLIENT_ID'];
    const TWILIO_AUTH_KEY = process.env['TWILIO_AUTH_KEY'];
    const twilioClient = twilio(TWILIO_CLIENT_ID, TWILIO_AUTH_KEY);
    return Promise.all([twilioClient.messages.create({
        body: message,
        to: '+1' + phoneNumber, // Text this number
        from: '+17866289828' // From a valid Twilio number
      })])
}