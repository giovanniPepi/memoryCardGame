import { useState } from "react";
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

const CardContainer = () => {
  const images = [
    {
      src: demon,
      title: "Demon",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: behemoth,
      title: "Behemoth",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: blueDjinn,
      title: "Blue Djinn",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: cyclops,
      title: "Cyclops",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: darkTorturer,
      title: "Dark Torturer",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: dragonLord,
      title: "Dragon Lord",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: dragon,
      title: "Dragon",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: dwarfGuard,
      title: "Dwarf Guard",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: fireElemental,
      title: "Fire Elemental",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: ghastlyDragon,
      title: "Ghastly Dragon",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: giantSpider,
      title: "Giant Spider",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: gravedigger,
      title: "Gravedigger",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: greenDjinn,
      title: "Green Djinn",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: grimReaper,
      title: "Grim Reaper",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: guzzlemaw,
      title: "Guzzlemaw",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: hydra,
      title: "Hydra",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: juggernaut,
      title: "Juggernaut",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: orc,
      title: "Orc",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: panda,
      title: "Panda",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: pharaoh,
      title: "Pharaoh",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: scarab,
      title: "Scarab",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: serpentSpawn,
      title: "Serpent Spawn",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: spectre,
      title: "Spectre",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: stoneGolem,
      title: "Stone Golem",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: undeadGladiator,
      title: "Undead Gladiator",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: warlock,
      title: "Warlock",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: werewolf,
      title: "Werewolf",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: workerGolem,
      title: "Worker Golem",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: wyrm,
      title: "Wyrm",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
    {
      src: eye,
      title: "A Greedy Eye",
      backgroundColor: "red",
      borderStyle: "1px solid rgb(255 223 137)",
    },
  ];

  const { score, highest, gameLogic } = props;
  const [cards, setCards] = useState(images);

  /*   const getRandomCard = () => {
    let rand = Math.floor(Math.random() * 30);
    return rand;
  };
 */
  return (
    <div>
      {/*       <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
 */}{" "}
    </div>
  );
};

export default CardContainer;
