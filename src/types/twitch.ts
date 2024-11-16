export type TwitchUserType = "admin" | "global_mod" | "staff" | ""; // "" Stands for normal user
export type TwitchBroadcasterType = "affiliate" | "partner" | ""; // "" Stands for normal broadcaster

export interface TwitchAuthResponseToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  type: TwitchUserType;
  broadcaster_type: TwitchBroadcasterType;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
}

export interface TwitchUserResponse {
  data: TwitchUser[];
}
