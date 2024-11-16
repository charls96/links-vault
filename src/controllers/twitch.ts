import { TWITCH_USERNAMES } from "@constants";
import { TwitchService } from "@services";

export const TwitchController = new (class {
  getUserNames() {
    return TWITCH_USERNAMES.split(";");
  }

  async getUserIds(): Promise<string[]> {
    const usernames = this.getUserNames();

    const users = await TwitchService.getUsers(usernames);

    return users.map((user) => user.id);
  }
})();
