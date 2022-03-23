import { env } from '@/server/config/env';
import { createClient } from 'newt-client-js';

export const newt = createClient({
  spaceUid: 'yoiw-personal',
  token: env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
});
