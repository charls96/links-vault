import TwitchService from "./twitch.ts";
import TwitchAuthService from "./twitchAuth.ts";

export default new (class ServiceManager {
  twitch!: TwitchService;
  twitchAuth!: TwitchAuthService;

  readonly #name = "services";

  async init() {
    this.twitchAuth = await TwitchAuthService.init();
    this.twitch = new TwitchService();
  }
})();
