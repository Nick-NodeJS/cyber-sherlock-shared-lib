import { TActiveProfile } from '../types';

export interface TCyberSherlockProfile {
  user_id: string;
  name: string | undefined;
  email: string | undefined;
  email_verified: false;
  phone: string | undefined;
  phone_verified: false;
  picture: string | undefined;
}

export interface TGoogleProfile {
  user_id: string;
  name: string | undefined;
  email: string;
  email_verified: true;
  picture: string | undefined;
}

export interface TFacebookProfile {
  user_id: string;
  name: string;
  email: string | undefined;
  picture: string | undefined;
}

export interface TUserProfile {
  id: string;
  active_profile: TActiveProfile;
  cyber_sherlock: TCyberSherlockProfile | undefined;
  google: TGoogleProfile | undefined;
  facebook: TFacebookProfile | undefined;
  created_at: Date;
  updated_at: Date;
}
