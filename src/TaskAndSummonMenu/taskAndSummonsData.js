const manaActions = {
  'grimoire': {
    name: "Grimoire",
    power: 1,
    action: "Read a Page",
    fileName: "grimoire",
  },
  'crystal-ball': {
    name: "Crystal ball",
    power: 2,
    action: "Gather enery from your surroundings",
    fileName: "crystal-ball",
  },
  'bones': {
    name: "Bones",
    power: 4,
    action: "Collect bones from the dead",
    fileName: "bones",
  },
  'voodoo-doll': {
    name: "Voodoo doll",
    power: 5,
    action: "Curse mortals one by one",
    fileName: "voodoo-doll",
  },
  'knife': {
    name: "Knife",
    power: 8,
    action: "Commit murder",
    fileName: "knife",
  },
  'potions': {
    name: "Potions",
    power: 9,
    action: "Make deadly potions",
    fileName: "potions",
  },
  'ghost': {
    name: "Spirits",
    power: 11,
    action: "Connect with spirits",
    fileName: "ghost",
  },
  'scythe': {
    name: "Sacrifices",
    power: 13,
    action: "Collect blood and souls",
    fileName: "scythe",
  },
  'eye': {
    name: "Body parts",
    power: 14,
    action: "Collect parts for future rituals",
    fileName: "eye",
  },
  'candle': {
    name: "Rituals",
    power: 20,
    action: "Prepare large rituals",
    fileName: "candle",
  },
  'haunted-house': {
    name: "Fortress",
    power: 25,
    action: "A place for rituals and summmons",
    fileName: "haunted-house",
  },
};

const summonsObj = {
  'spider': {
    name: "Giant Spider",
    power: 1,
    action: "Traps unsuspecting victims",
    fileName: "spider",
    cost: 1
  },
  'skull': {
    name: "Animated Skeleton",
    power: 2,
    action: "Seeks victims at night",
    fileName: "skull",
    cost: 20
  },
  'zombie': {
    name: "Raise Zombie",
    power: 3,
    action: "Conquer towns with ever growing hordes",
    fileName: "zombie",
    cost: 50
  },
  'mummy': {
    name: "Mummy",
    power: 5,
    action: "Old heroes and kings at your command",
    fileName: "mummy",
    cost: 100
  },
  
  'ghost': {
    name: "Lost Souls",
    power: 7,
    action: "Souls who couldn't quite make it",
    fileName: "ghost",
    cost: 130
  },
  'werewolf': {
    name: "Werewolf",
    power: 10,
    action: "Hunts deep inside forests with their sharp senses",
    fileName: "werewolf",
    cost: 200
  },
  
  'frankenstein': {
    name: "Frankenstein",
    power: 15,
    action: "A true masterpiece",
    fileName: "frankenstein",
    cost: 250
  },
  'swampmonster': {
    name: "Swamp Monster",
    power: 16,
    action: "Solitary but powerful creature",
    fileName: "swamp-monster",
    cost: 320
  },
  'witch': {
    name: "Witch",
    power: 20,
    action: "From potions to enhancements, all of it",
    fileName: "witch",
    cost: 360
  },
  'vampire': {
    name: "Vampire",
    power: 25,
    action: "Those of high status have taken a notice",
    fileName: "vampire",
    cost: 500
  },
  'dracula': {
    name: "Dracula",
    power: 40,
    action: "Lord of vampires with unfathomable power",
    fileName: "dracula",
    cost: 750
  },
  'devil': {
    name: "Devil",
    power: 100,
    action: "Comes from the pits of hell to unleash chaos",
    fileName: "devil",
    cost: 850
  },
  'death': {
    name: "Death",
    power: 1000,
    action: "Server the link between soul and body",
    fileName: "death",
    cost: 1000
  },
  
};

export { summonsObj, manaActions };
