import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 28RwbV6jN-T487NgLpOpcEhwxUWKTn0Rcm3g_fJdpkQ",
  },
});
