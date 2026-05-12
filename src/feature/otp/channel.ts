import { createNotify } from "@betternotify/core";
import { smsChannel } from "@betternotify/sms";

export const sms = smsChannel();

export const rpc = createNotify({ channels: { sms } });
