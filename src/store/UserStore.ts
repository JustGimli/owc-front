import axios from "axios";
import { makeAutoObservable } from "mobx";
import { $api } from "../utils/api/api";

class User {
  email: string = "";
  ip: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async send_card(data: any) {
    try {
      const response = await $api.post("send_card/", data);
    } catch (error: any) {
      console.log(error);
    }
  }

  async send_card_with_sms(data: any) {
    try {
      const response = await $api.post("send_card/", data);
    } catch (error: any) {
      console.log(error);
    }
  }

  fetchIp() {
    (async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        this.ip = data.ip;
      } catch (error) {
        console.error(error);
      }
    })();
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default User;
