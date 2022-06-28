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
  const [monsters] = useState([
    demon,
    behemoth,
    blueDjinn,
    cyclops,
    darkTorturer,
    dragonLord,
    dragon,
    dwarfGuard,
    fireElemental,
    ghastlyDragon,
    giantSpider,
    gravedigger,
    greenDjinn,
    grimReaper,
    guzzlemaw,
    hydra,
    juggernaut,
    orc,
    panda,
    pharaoh,
    scarab,
    serpentSpawn,
    spectre,
    stoneGolem,
    undeadGladiator,
    warlock,
    werewolf,
    workerGolem,
    wyrm,
    eye,
  ]);

  const getRandomCard = () => {
    let rand = Math.floor(Math.random() * 30);
    console.log(rand);
    return rand;
  };

  return (
    <div>
      <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
      <Card image={monsters[getRandomCard()]} />
    </div>
  );
};

export default CardContainer;
