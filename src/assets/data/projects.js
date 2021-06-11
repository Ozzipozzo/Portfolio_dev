import { v4 as uuidv4 } from 'uuid';
import Snapchat from '../images/snapchat.jpg';
import Burgerquizz from '../images/burgerquizz.jpg';
import Spotify from '../images/spotify.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Projet Spotify',
    desc:
      'Nous avons recrée une interface front avec React, en groupe de 3, de la célébre application Spotify',
    img: Spotify,
    url: 'https://github.com/Ozzipozzo/Spotify_React_Project',
  },
  {
    id: uuidv4(),
    name: 'Project SnapChat',
    desc:
      'Une application bien connue, crée en React Native, avec une API fournie.',
    img: Snapchat,
    url:
      'https://github.com/EpitechIT2020/W-JSC-502-PAR-2-2-snapchat-aime.koutsimouka',
  },
  {
    id: uuidv4(),
    name: 'My quizz',
    desc:
      'Site de Quizz développé en Symfony, quelques modifications sont à faire',
    img: Burgerquizz,
  },
];

export default projects;
