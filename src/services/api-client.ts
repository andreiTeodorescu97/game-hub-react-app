import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89dcb7669cf44b18850cf23357c54cbc",
  },
});
