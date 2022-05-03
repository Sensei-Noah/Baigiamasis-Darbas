const navtabcont = document.getElementById("nav-tabContent");

const springFB = document.getElementById("list-spring-forage-list");
const springFBTab = document.getElementById("list-Spring-Forage");

const summerFB = document.getElementById("list-summer-forage-list");
const summerFBTab = document.getElementById("list-Summer-Forage");

const fallFB = document.getElementById("list-fall-forage-list");
const fallFBTab = document.getElementById("list-Fall-Forage");

const winterFB = document.getElementById("list-winter-forage-list");
const winterFBTab = document.getElementById("list-Winter-Forage");

const constFB = document.getElementById("list-construction-bundle-list");
const constFBTab = document.getElementById("list-Construction-Bundle");

const exoticFB = document.getElementById("list-exotic-forage-list");
const exoticFBTab = document.getElementById("list-Exotic-Forage");

const springFBCon = () => {
  springFBTab.className = "tab-pane d-flex flex-wrap";
  summerFBTab.className = "d-none";
  fallFBTab.className = "d-none";
  winterFBTab.className = "d-none";
  constFBTab.className = "d-none";
  exoticFBTab.className = "d-none";
};
springFB.addEventListener("click", springFBCon);

const summerFBCon = () => {
  summerFBTab.className = "tab-pane d-flex flex-wrap";
  springFBTab.className = "d-none";
  fallFBTab.className = "d-none";
  winterFBTab.className = "d-none";
  constFBTab.className = "d-none";
  exoticFBTab.className = "d-none";
};
summerFB.addEventListener("click", summerFBCon);

const fallFBCon = () => {
  fallFBTab.className = "tab-pane d-flex flex-wrap";
  summerFBTab.className = "d-none";
  springFBTab.className = "d-none";
  winterFBTab.className = "d-none";
  constFBTab.className = "d-none";
  exoticFBTab.className = "d-none";
};
fallFB.addEventListener("click", fallFBCon);

const winterFBCon = () => {
  winterFBTab.className = "tab-pane d-flex flex-wrap";
  fallFBTab.className = "d-none";
  summerFBTab.className = "d-none";
  springFBTab.className = "d-none";
  constFBTab.className = "d-none";
  exoticFBTab.className = "d-none";
};
winterFB.addEventListener("click", winterFBCon);

const constFBCon = () => {
  constFBTab.className = "tab-pane d-flex flex-wrap";
  springFBTab.className = "d-none";
  summerFBTab.className = "d-none";
  fallFBTab.className = "d-none";
  winterFBTab.className = "d-none";
  exoticFBTab.className = "d-none";
};
constFB.addEventListener("click", constFBCon);

const exoticFBCon = () => {
  exoticFBTab.className = "tab-pane d-flex flex-wrap";
  springFBTab.className = "d-none";
  summerFBTab.className = "d-none";
  fallFBTab.className = "d-none";
  winterFBTab.className = "d-none";
  constFBTab.className = "d-none";
};
exoticFB.addEventListener("click", exoticFBCon);

// Progress Bar

let completedProgress = 0;

const progresschange = () => {
  const progress = document.getElementById("progressbar");
  let progressPercent = completedProgress / 1.15;
  progress.style.width = `${progressPercent}%`;
  progress.innerText = `${completedProgress}/115`;
};

//
const wildhinput = document.getElementById("Wild_Horseradish");
const wildhChange = () => {
  if (wildhinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_wildh", wildhinput.checked);
  } else if (wildhinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_wildh");
  }
  progresschange();
};
wildhinput.addEventListener("input", wildhChange);
let inwildh = JSON.parse(localStorage.getItem("input_wildh"));
wildhinput.checked = inwildh;

if (inwildh == true) {
  ++completedProgress;
}

//
const daffodilinput = document.getElementById("Daffodil");
const daffodilChange = () => {
  if (daffodilinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_daffodil", daffodilinput.checked);
  } else if (daffodilinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_daffodil");
  }
  progresschange();
};
daffodilinput.addEventListener("input", daffodilChange);
let indaffodil = JSON.parse(localStorage.getItem("input_daffodil"));
daffodilinput.checked = indaffodil;

if (indaffodil == true) {
  ++completedProgress;
}

//
const leekinput = document.getElementById("Leek");
const leekChange = () => {
  if (leekinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_leek", leekinput.checked);
  } else if (leekinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_leek");
  }
  progresschange();
};
leekinput.addEventListener("input", leekChange);

let inleek = JSON.parse(localStorage.getItem("input_leek"));
leekinput.checked = inleek;

if (inleek == true) {
  ++completedProgress;
}
//
const dandelioninput = document.getElementById("Dandelion");
const dandelionChange = () => {
  if (dandelioninput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_dandelion", dandelioninput.checked);
  } else if (dandelioninput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_dandelion");
  }
  progresschange();
};
dandelioninput.addEventListener("input", dandelionChange);
let indandelion = JSON.parse(localStorage.getItem("input_dandelion"));
dandelioninput.checked = indandelion;

if (indandelion == true) {
  ++completedProgress;
}
//
const grapeinput = document.getElementById("Grape");
const grapeChange = () => {
  if (grapeinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_grape", grapeinput.checked);
  } else if (grapeinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_grape");
  }
  progresschange();
};
grapeinput.addEventListener("input", grapeChange);

let ingrape = JSON.parse(localStorage.getItem("input_grape"));
grapeinput.checked = ingrape;

if (ingrape == true) {
  ++completedProgress;
}
//
const spice_berryinput = document.getElementById("Spice_Berry");
const spice_berryChange = () => {
  if (spice_berryinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_spice_berry", spice_berryinput.checked);
  } else if (spice_berryinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_spice_berry");
  }
  progresschange();
};
spice_berryinput.addEventListener("input", spice_berryChange);

let inspice_berry = JSON.parse(localStorage.getItem("input_spice_berry"));
spice_berryinput.checked = inspice_berry;

if (inspice_berry == true) {
  ++completedProgress;
}
//
const sweet_peainput = document.getElementById("Sweet_Pea");
const sweet_peaChange = () => {
  if (sweet_peainput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_sweet_pea", sweet_peainput.checked);
  } else if (sweet_peainput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_sweet_pea");
  }
  progresschange();
};
sweet_peainput.addEventListener("input", sweet_peaChange);

let insweet_pea = JSON.parse(localStorage.getItem("input_sweet_pea"));
sweet_peainput.checked = insweet_pea;

if (insweet_pea == true) {
  ++completedProgress;
}
//
const common_mushroominput = document.getElementById("Common_Mushroom");
const common_mushroomChange = () => {
  if (common_mushroominput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_common_mushroom", common_mushroominput.checked);
  } else if (common_mushroominput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_common_mushroom");
  }
  progresschange();
};
common_mushroominput.addEventListener("input", common_mushroomChange);

let incommon_mushroom = JSON.parse(
  localStorage.getItem("input_common_mushroom")
);
common_mushroominput.checked = incommon_mushroom;

if (incommon_mushroom == true) {
  ++completedProgress;
}
//
const wild_pluminput = document.getElementById("Wild_Plum");
const wild_plumChange = () => {
  if (wild_pluminput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_wild_plum", wild_pluminput.checked);
  } else if (wild_pluminput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_wild_plum");
  }
  progresschange();
};
wild_pluminput.addEventListener("input", wild_plumChange);

let inwild_plum = JSON.parse(localStorage.getItem("input_wild_plum"));
wild_pluminput.checked = inwild_plum;

if (inwild_plum == true) {
  ++completedProgress;
}
//
const hazelnutinput = document.getElementById("Hazelnut");
const hazelnutChange = () => {
  if (hazelnutinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_hazelnut", hazelnutinput.checked);
  } else if (hazelnutinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_hazelnut");
  }
  progresschange();
};
hazelnutinput.addEventListener("input", hazelnutChange);

let inhazelnut = JSON.parse(localStorage.getItem("input_hazelnut"));
hazelnutinput.checked = inhazelnut;

if (inhazelnut == true) {
  ++completedProgress;
}
//
const blackberryinput = document.getElementById("Blackberry");
const blackberryChange = () => {
  if (blackberryinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_blackberry", blackberryinput.checked);
  } else if (blackberryinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_blackberry");
  }
  progresschange();
};
blackberryinput.addEventListener("input", blackberryChange);

let inblackberry = JSON.parse(localStorage.getItem("input_blackberry"));
blackberryinput.checked = inblackberry;

if (inblackberry == true) {
  ++completedProgress;
}
//
const winter_rootinput = document.getElementById("Winter_Root");
const winter_rootChange = () => {
  if (winter_rootinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_winter_root", winter_rootinput.checked);
  } else if (winter_rootinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_winter_root");
  }
  progresschange();
};
winter_rootinput.addEventListener("input", winter_rootChange);

let inwinter_root = JSON.parse(localStorage.getItem("input_winter_root"));
winter_rootinput.checked = inwinter_root;

if (inwinter_root == true) {
  ++completedProgress;
}
//
const crystal_fruitinput = document.getElementById("Crystal_Fruit");
const crystal_fruitChange = () => {
  if (crystal_fruitinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_crystal_fruit", crystal_fruitinput.checked);
  } else if (crystal_fruitinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_crystal_fruit");
  }
  progresschange();
};
crystal_fruitinput.addEventListener("input", crystal_fruitChange);

let incrystal_fruit = JSON.parse(localStorage.getItem("input_crystal_fruit"));
crystal_fruitinput.checked = incrystal_fruit;

if (incrystal_fruit == true) {
  ++completedProgress;
}
//
const snow_yaminput = document.getElementById("Snow_Yam");
const snow_yamChange = () => {
  if (snow_yaminput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_snow_yam", snow_yaminput.checked);
  } else if (snow_yaminput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_snow_yam");
  }
  progresschange();
};
snow_yaminput.addEventListener("input", snow_yamChange);

let insnow_yam = JSON.parse(localStorage.getItem("input_snow_yam"));
snow_yaminput.checked = insnow_yam;

if (insnow_yam == true) {
  ++completedProgress;
}
//
const crocusinput = document.getElementById("Crocus");
const crocusChange = () => {
  if (crocusinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_crocus", crocusinput.checked);
  } else if (crocusinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_crocus");
  }
  progresschange();
};
crocusinput.addEventListener("input", crocusChange);

let incrocus = JSON.parse(localStorage.getItem("input_crocus"));
crocusinput.checked = incrocus;

if (incrocus == true) {
  ++completedProgress;
}
//
const wood1input = document.getElementById("Wood1");
const wood1Change = () => {
  if (wood1input.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_wood1", wood1input.checked);
  } else if (wood1input.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_wood1");
  }
  progresschange();
};
wood1input.addEventListener("input", wood1Change);

let inwood1 = JSON.parse(localStorage.getItem("input_wood1"));
wood1input.checked = inwood1;

if (inwood1 == true) {
  ++completedProgress;
}
//
const wood2input = document.getElementById("Wood2");
const wood2Change = () => {
  if (wood2input.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_wood2", wood2input.checked);
  } else if (wood2input.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_wood2");
  }
  progresschange();
};
wood2input.addEventListener("input", wood2Change);

let inwood2 = JSON.parse(localStorage.getItem("input_wood2"));
wood2input.checked = inwood2;

if (inwood2 == true) {
  ++completedProgress;
}
//
const stoneinput = document.getElementById("Stone");
const stoneChange = () => {
  if (stoneinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_stone", stoneinput.checked);
  } else if (stoneinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_stone");
  }
  progresschange();
};
stoneinput.addEventListener("input", stoneChange);

let instone = JSON.parse(localStorage.getItem("input_stone"));
stoneinput.checked = instone;

if (instone == true) {
  ++completedProgress;
}
//
const hardwoodinput = document.getElementById("Hardwood");
const hardwoodChange = () => {
  if (hardwoodinput.checked == true) {
    ++completedProgress;
    localStorage.setItem("input_hardwood", hardwoodinput.checked);
  } else if (hardwoodinput.checked == false) {
    --completedProgress;
    localStorage.removeItem("input_hardwood");
  }
  progresschange();
};
hardwoodinput.addEventListener("input", hardwoodChange);

let inhardwood = JSON.parse(localStorage.getItem("input_hardwood"));
hardwoodinput.checked = inhardwood;

if (inhardwood == true) {
  ++completedProgress;
}
//

let exoticOverf = 0;

const exOVER = () => {
  if (exoticOverf == 5) {
    if (coconutinput.checked == false) {
      coconutinput.disabled = "true";
    }

    if (cactus_fruitinput.checked == false) {
      cactus_fruitinput.disabled = "true";
    }

    if (cave_carrotinput.checked == false) {
      cave_carrotinput.disabled = "true";
    }

    if (red_mushroominput.checked == false) {
      red_mushroominput.disabled = "true";
    }

    if (purple_mushroominput.checked == false) {
      purple_mushroominput.disabled = "true";
    }

    if (maple_syrupinput.checked == false) {
      maple_syrupinput.disabled = "true";
    }

    if (oak_resininput.checked == false) {
      oak_resininput.disabled = "true";
    }

    if (pine_tarinput.checked == false) {
      pine_tarinput.disabled = "true";
    }

    if (morelinput.checked == false) {
      morelinput.disabled = "true";
    }
  } else {
    coconutinput.disabled = "";
    cactus_fruitinput.disabled = "";
    cave_carrotinput.disabled = "";
    red_mushroominput.disabled = "";
    purple_mushroominput.disabled = "";
    maple_syrupinput.disabled = "";
    oak_resininput.disabled = "";
    pine_tarinput.disabled = "";
    morelinput.disabled = "";
  }
};
//
const coconutinput = document.getElementById("Coconut");
const coconutChange = () => {
  if (coconutinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_coconut", coconutinput.checked);
  } else if (coconutinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_coconut");
  }
  progresschange();
  exOVER();
};
coconutinput.addEventListener("input", coconutChange);

let incoconut = JSON.parse(localStorage.getItem("input_coconut"));
coconutinput.checked = incoconut;

if (incoconut == true) {
  ++completedProgress;
  ++exoticOverf;
}

//
const cactus_fruitinput = document.getElementById("Cactus_Fruit");
const cactus_fruitChange = () => {
  if (cactus_fruitinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_cactus_fruit", cactus_fruitinput.checked);
  } else if (cactus_fruitinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_cactus_fruit");
  }
  progresschange();
  exOVER();
};
cactus_fruitinput.addEventListener("input", cactus_fruitChange);

let incactus_fruit = JSON.parse(localStorage.getItem("input_cactus_fruit"));
cactus_fruitinput.checked = incactus_fruit;

if (incactus_fruit == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const cave_carrotinput = document.getElementById("Cave_Carrot");
const cave_carrotChange = () => {
  if (cave_carrotinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_cave_carrot", cave_carrotinput.checked);
  } else if (cave_carrotinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_cave_carrot");
  }
  progresschange();
  exOVER();
};
cave_carrotinput.addEventListener("input", cave_carrotChange);

let incave_carrot = JSON.parse(localStorage.getItem("input_cave_carrot"));
cave_carrotinput.checked = incave_carrot;

if (incave_carrot == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const red_mushroominput = document.getElementById("Red_Mushroom");
const red_mushroomChange = () => {
  if (red_mushroominput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_red_mushroom", red_mushroominput.checked);
  } else if (red_mushroominput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_red_mushroom");
  }
  progresschange();
  exOVER();
};
red_mushroominput.addEventListener("input", red_mushroomChange);

let inred_mushroom = JSON.parse(localStorage.getItem("input_red_mushroom"));
red_mushroominput.checked = inred_mushroom;

if (inred_mushroom == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const purple_mushroominput = document.getElementById("Purple_Mushroom");
const purple_mushroomChange = () => {
  if (purple_mushroominput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_purple_mushroom", purple_mushroominput.checked);
  } else if (purple_mushroominput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_purple_mushroom");
  }
  progresschange();
  exOVER();
};
purple_mushroominput.addEventListener("input", purple_mushroomChange);

let inpurple_mushroom = JSON.parse(
  localStorage.getItem("input_purple_mushroom")
);
purple_mushroominput.checked = inpurple_mushroom;

if (inpurple_mushroom == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const maple_syrupinput = document.getElementById("Maple_Syrup");
const maple_syrupChange = () => {
  if (maple_syrupinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_maple_syrup", maple_syrupinput.checked);
  } else if (maple_syrupinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_maple_syrup");
  }
  progresschange();
  exOVER();
};
maple_syrupinput.addEventListener("input", maple_syrupChange);

let inmaple_syrup = JSON.parse(localStorage.getItem("input_maple_syrup"));
maple_syrupinput.checked = inmaple_syrup;

if (inmaple_syrup == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const oak_resininput = document.getElementById("Oak_Resin");
const oak_resinChange = () => {
  if (oak_resininput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_oak_resin", oak_resininput.checked);
  } else if (oak_resininput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_oak_resin");
  }
  progresschange();
  exOVER();
};
oak_resininput.addEventListener("input", oak_resinChange);

let inoak_resin = JSON.parse(localStorage.getItem("input_oak_resin"));
oak_resininput.checked = inoak_resin;

if (inoak_resin == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const pine_tarinput = document.getElementById("Pine_Tar");
const pine_tarChange = () => {
  if (pine_tarinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_pine_tar", pine_tarinput.checked);
  } else if (pine_tarinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_pine_tar");
  }
  progresschange();
  exOVER();
};
pine_tarinput.addEventListener("input", pine_tarChange);

let inpine_tar = JSON.parse(localStorage.getItem("input_pine_tar"));
pine_tarinput.checked = inpine_tar;

if (inpine_tar == true) {
  ++completedProgress;
  ++exoticOverf;
}
//
const morelinput = document.getElementById("Morel");
const morelChange = () => {
  if (morelinput.checked == true) {
    ++completedProgress;
    ++exoticOverf;
    localStorage.setItem("input_morel", morelinput.checked);
  } else if (morelinput.checked == false) {
    --completedProgress;
    --exoticOverf;
    localStorage.removeItem("input_morel");
  }
  progresschange();
  exOVER();
};
morelinput.addEventListener("input", morelChange);

let inmorel = JSON.parse(localStorage.getItem("input_morel"));
morelinput.checked = inmorel;

if (inmorel == true) {
  ++completedProgress;
  ++exoticOverf;
}
//

//END
progresschange();
exOVER();
