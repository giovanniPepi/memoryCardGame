import { useEffect, useState } from "react";
import behemoth from "../img/Behemoth.gif";
import blueDjinn from "../img/Blue_Djinn.webp";
import cyclops from "../img/Cyclops.gif";
import darkTorturer from "../img/Dark_Torturer.gif";
import dragonLord from "../img/Dragon_Lord.gif";
import demon from "../img/Demon.webp";
import dragon from "../img/Dragon.webp";
import dwarfGuard from "../img/Dwarf_Guard.gif";
import fireElemental from "../img/Fire_Elemental.webp";
import ghastlyDragon from "../img/Ghastly_Dragon.gif";
import giantSpider from "../img/Giant_Spider.webp";
import gravedigger from "../img/Gravedigger.gif";
import greenDjinn from "../img/Green_Djinn.webp";
import grimReaper from "../img/Grim_Reaper.gif";
import guzzlemaw from "../img/Guzzlemaw.gif";
import hydra from "../img/Hydra.gif";
import juggernaut from "../img/Juggernaut.webp";
import orc from "../img/Orc.gif";
import panda from "../img/Panda.gif";
import pharaoh from "../img/Pharaoh.webp";
import scarab from "../img/Scarab.gif";
import serpentSpawn from "../img/Serpent_spawn.webp";
import spectre from "../img/Spectre.gif";
import stoneGolem from "../img/Stone_Golem.gif";
import undeadGladiator from "../img/Undead_Gladiator.gif";
import warlock from "../img/Warlock.gif";
import werewolf from "../img/Werewolf.gif";
import workerGolem from "../img/Worker_golem.gif";
import wyrm from "../img/Wyrm.gif";
import eye from "../img/A_Greedy_Eye.webp";

import Card from "./Card";

const CardContainer = (props) => {
  const images = [
    {
      src: demon,
      title: "Demon",
      backgroundColor: "#F65A2A",
      borderStyle: "1px solid #1D0303",
    },
    {
      src: behemoth,
      title: "Behemoth",
      backgroundColor: "#AE9573",
      borderStyle: "1px solid #3F2B17",
    },
    {
      src: blueDjinn,
      title: "Blue Djinn",
      backgroundColor: "#E7E0F0",
      borderStyle: "1px solid #CEB6A7",
    },
    {
      src: cyclops,
      title: "Cyclops",
      backgroundColor: "#F0BF7F",
      borderStyle: "1px solid #361B02",
    },
    {
      src: darkTorturer,
      title: "Dark Torturer",
      backgroundColor: "#CBB9AA",
      borderStyle: "1px solid #0B0806",
    },
    {
      src: dragonLord,
      title: "Dragon Lord",
      backgroundColor: "#BD3F31",
      borderStyle: "1px solid #3A0301",
    },
    {
      src: dragon,
      title: "Dragon",
      backgroundColor: "#74951E",
      borderStyle: "1px solid #223A04",
    },
    {
      src: dwarfGuard,
      title: "Dwarf Guard",
      backgroundColor: "#D2B66A",
      borderStyle: "1px solid #494337",
    },
    {
      src: fireElemental,
      title: "Fire Elemental",
      backgroundColor: "#FC9115",
      borderStyle: "1px solid #FC9918",
    },
    {
      src: ghastlyDragon,
      title: "Ghastly Dragon",
      backgroundColor: "#a5658a",
      borderStyle: "2px solid #2b304a",
    },
    {
      src: giantSpider,
      title: "Giant Spider",
      backgroundColor: "#155823",
      borderStyle: "1px solid #501B15",
    },
    {
      src: gravedigger,
      title: "Gravedigger",
      backgroundColor: "#964A58",
      borderStyle: "1px solid #34191F",
    },
    {
      src: greenDjinn,
      title: "Green Djinn",
      backgroundColor: "#93D1AD",
      borderStyle: "1px solid #4A3C38",
    },
    {
      src: grimReaper,
      title: "Grim Reaper",
      backgroundColor: "#BBBBBB",
      borderStyle: "1px solid #121212",
    },
    {
      src: guzzlemaw,
      title: "Guzzlemaw",
      backgroundColor: "#BD7862",
      borderStyle: "1px solid #7D3844",
    },
    {
      src: hydra,
      title: "Hydra",
      backgroundColor: "#6EB92B",
      borderStyle: "1px solid #204909",
    },
    {
      src: juggernaut,
      title: "Juggernaut",
      backgroundColor: "#ADD107",
      borderStyle: "1px solid #0A4D07",
    },
    {
      src: orc,
      title: "Orc Berserker",
      backgroundColor: "#02D400",
      borderStyle: "1px solid #282828",
    },
    {
      src: panda,
      title: "Panda",
      backgroundColor: "#A3A5A4",
      borderStyle: "1px solid #191818",
    },
    {
      src: pharaoh,
      title: "Pharaoh",
      backgroundColor: "#0B50A9",
      borderStyle: "1px solid #00004A",
    },
    {
      src: scarab,
      title: "Scarab",
      backgroundColor: "#9670A7",
      borderStyle: "1px solid #252F20",
    },
    {
      src: serpentSpawn,
      title: "Serpent Spawn",
      backgroundColor: "#31B25C",
      borderStyle: "1px solid #CB830E",
    },
    {
      src: spectre,
      title: "Spectre",
      backgroundColor: "#278181",
      borderStyle: "1px solid #2E153C",
    },
    {
      src: stoneGolem,
      title: "Stone Golem",
      backgroundColor: "#46433F",
      borderStyle: "1px solid #877F7D",
    },
    {
      src: undeadGladiator,
      title: "Undead Gladiator",
      backgroundColor: "#F4E54D",
      borderStyle: "1px solid #BA090B",
    },
    {
      src: warlock,
      title: "Warlock",
      backgroundColor: "#673D7C",
      borderStyle: "1px solid #2E0045",
    },
    {
      src: werewolf,
      title: "Werewolf",
      backgroundColor: "#FE9A7A",
      borderStyle: "1px solid #A6442B",
    },
    {
      src: workerGolem,
      title: "Worker Golem",
      backgroundColor: "#25AAAB",
      borderStyle: "1px solid #984621",
    },
    {
      src: wyrm,
      title: "Wyrm",
      backgroundColor: "#9F1A6A",
      borderStyle: "1px solid #410031",
    },
    {
      src: eye,
      title: "A Greedy Eye",
      backgroundColor: "#ED6C66",
      borderStyle: "1px solid #7DB1F2",
    },
  ];

  const { score, highest, gameLogic } = props;
  const [cards, setCards] = useState(images);

  const shuffle = (newCards) => {
    // receives the preivous cards as arguments
    for (let i = newCards.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * i); // this logic will always favor the lower indexes <-----------------------------------
      [newCards[rand], newCards[i]] = [newCards[i], newCards[rand]]; // switch cards position on array
    }
  };

  useEffect(() => {
    const newCards = [...cards]; // passes the current cards to shuffling
    shuffle(newCards);
    setCards(newCards); // store newcards in state
  }, [score, highest]); // useEffect will rerun whenever one of the depency items change;

  return (
    <section className="cardContainer">
      {cards.map(
        (
          card // creates a <Card /> for each card in the array
        ) => (
          <Card
            card={card}
            key={card.title}
            gameLogic={gameLogic}
            image={card.src}
          />
        )
      )}
    </section>
  );
};

export default CardContainer;
