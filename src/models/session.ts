import { TwitchAuthService } from "@services";

export const Session = new (class {
  twitchToken!: string;

  async init() {
    this.twitchToken = await TwitchAuthService.getTwitchAuthToken();
  }
})();
