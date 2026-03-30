import { Injectable } from '@nestjs/common';
import Twilio from 'twilio';
import axios from 'axios';

@Injectable()
export class SmsService {
  private twilio = process.env.TWILIO_SID && process.env.TWILIO_TOKEN
    ? Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)
    : null;

  async sendOtp(phone: string, code: string) {
    const provider = process.env.SMS_PROVIDER || 'twilio';

    if (provider === 'msg91') {
      await axios.post(
        'https://api.msg91.com/api/v5/otp',
        { mobile: phone, template_id: process.env.MSG91_TEMPLATE_ID, otp: code },
        { headers: { authkey: process.env.MSG91_AUTH_KEY } },
      );
      return;
    }

    if (!this.twilio) throw new Error('Twilio is not configured');
    await this.twilio.messages.create({
      from: process.env.TWILIO_FROM!,
      to: phone,
      body: `Your FarmFresh OTP is ${code}`,
    });
  }
}