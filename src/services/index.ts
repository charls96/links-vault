import TwitchService from "./twitch.ts";

export default new (class ServiceManager {
  twitch!: TwitchService;

  readonly #name = "service";

  async init() {
    this.twitch = await TwitchService.init();
  }
})();
