import api from './api';
import Game from '../dtos/Games';

interface GamesIndexData {
  games: Game[];
}

const GamesService = {
  index(url: string) {
    return api.get<GamesIndexData>(url).then(resp => resp.data.games);
  }
}

export default GamesService;