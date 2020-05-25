import Axios from "axios";

const footballService = {
  getStandings: (): Promise<any> => {
    const options = {
      headers: { "X-Auth-Token": "3d94d314e5084ea2983b02ed81d976e4" },
    };
    return Axios.get(
      "http://api.football-data.org/v2/competitions/BL1/standings",
      options
    );
  },
};

export default footballService;
