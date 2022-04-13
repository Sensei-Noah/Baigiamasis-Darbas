
export let standardBundles = {
  bundleRewardImage:
    "https://stardewvalleywiki.com/mediawiki/images/thumb/1/16/Bundle_Reward.png/18px-Bundle_Reward.png",
  rooms: {
    craftsRoom: {
      name: "Crafts Room",
      roomReward: "Bridge Repair",
      bundles: [
        //Spring foraging Bundle
        {
          name: "Spring foraging Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/8/8a/Spring_Foraging_Bundle.png",
          bundleReward: {
            item: "Spring Seeds (30)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/3/39/Spring_Seeds.png/24px-Spring_Seeds.png",
          },
          items: [
            {
              name: "Wild Horseradish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/90/Wild_Horseradish.png/24px-Wild_Horseradish.png",
              description: "Spring Foraging",
              wiki: "https://stardewvalleywiki.com/Wild_Horseradish",
            },
            {
              name: "Daffodil",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Daffodil.png/24px-Daffodil.png",
              description: "Spring Foraging, buy from Pierre at Flower Dance",
              wiki: "https://stardewvalleywiki.com/Daffodil",
            },
            {
              name: "Leek",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/57/Leek.png/24px-Leek.png",
              description: "Spring Foraging",
              wiki: "https://stardewvalleywiki.com/Leek",
            },
            {
              name: "Dandelion",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Dandelion.png/24px-Dandelion.png",
              description: "Spring Foraging, buy from Pierre at Flower Dance",
              wiki: "https://stardewvalleywiki.com/Dandelion",
            },
          ],
        },
        //Summer Foraging Bundle
        {
          name: "Summer Foraging Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/f/fd/Summer_Foraging_Bundle.png",
          bundleReward: {
            item: "Summer Seeds (30)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c4/Summer_Seeds.png/24px-Summer_Seeds.png",
          },
          items: [
            {
              name: "Grape",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Grape.png/24px-Grape.png",
              description: "Summer Foraging, Fall Farming",
              wiki: "https://stardewvalleywiki.com/Grape",
            },
            {
              name: "Spice Berry",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Spice_Berry.png/24px-Spice_Berry.png",
              description: "Summer Foraging, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Spice_Berry",
            },
            {
              name: "Sweet Pea",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d9/Sweet_Pea.png/24px-Sweet_Pea.png",
              description: "Summer Foraging",
              wiki: "https://stardewvalleywiki.com/Sweet_Pea",
            },
          ],
        },
        //Fall Foraging Bundle
        {
          name: "Fall Foraging Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/3/3d/Fall_Foraging_Bundle.png",
          bundleReward: {
            item: "Fall Seeds (30)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/5/55/Fall_Seeds.png/24px-Fall_Seeds.png",
          },
          items: [
            {
              name: "Common Mushroom",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2e/Common_Mushroom.png/24px-Common_Mushroom.png",
              description:
                "Fall Foraging, Spring & Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree",
              wiki: "https://stardewvalleywiki.com/Common_Mushroom",
            },
            {
              name: "Wild Plum",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3b/Wild_Plum.png/24px-Wild_Plum.png",
              description: "Fall Foraging, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Wild_Plum",
            },
            {
              name: "Hazelnut",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Hazelnut.png/24px-Hazelnut.png",
              description: "Fall Foraging",
              wiki: "https://stardewvalleywiki.com/Hazelnut",
            },
            {
              name: "Blackberry",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/2/25/Blackberry.png/24px-Blackberry.png",
              description: "Fall Foraging, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Blackberry",
            },
          ],
        },
        //winter Foraging Bundle
        {
          name: "winter Foraging Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/1/17/Winter_Foraging_Bundle.png",
          bundleReward: {
            item: "Winter Seeds (30)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/d/dd/Winter_Seeds.png/24px-Winter_Seeds.png",
          },
          items: [
            {
              name: "Winter Root",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Winter_Root.png/24px-Winter_Root.png",
              description:
                "Tilling soil or Artifact Spots in Winter, dropped by Blue Slimes on floors 41-79 of The Mines",
              wiki: "https://stardewvalleywiki.com/Winter_Root",
            },
            {
              name: "Crystal Fruit",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/16/Crystal_Fruit.png/24px-Crystal_Fruit.png",
              description:
                "Winter Foraging, dropped by Dust Sprites on floors 41-79 of The Mines",
              wiki: "https://stardewvalleywiki.com/Crystal_Fruit",
            },
            {
              name: "Snow Yam",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3f/Snow_Yam.png/24px-Snow_Yam.png",
              description: "Tilling soil or Artifact Spots in Winter",
              wiki: "https://stardewvalleywiki.com/Snow_Yam",
            },
            {
              name: "Crocus",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Crocus.png/24px-Crocus.png",
              description: "Winter Foraging",
              wiki: "https://stardewvalleywiki.com/Crocus",
            },
          ],
        },
        //Construction bundle
        {
          name: "Construction Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/7/7a/Construction_Bundle.png",
          bundleReward: {
            item: "Charcoal Kiln (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/7/76/Charcoal_Kiln.png/24px-Charcoal_Kiln.png",
          },
          items: [
            {
              name: "Wood (99)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png",
              description:
                "Chopping Trees or branches with an Axe, Carpenter's Shop",
              wiki: "https://stardewvalleywiki.com/Wood",
            },
            {
              name: "Wood2 (99)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/df/Wood.png/24px-Wood.png",
              description:
                "Chopping Trees or branches with an Axe, Carpenter's Shop",
              wiki: "https://stardewvalleywiki.com/Wood",
            },
            {
              name: "Stone (99)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d4/Stone.png/24px-Stone.png",
              description: "Smashing stones with a Pickaxe, Carpenter's Shop",
              wiki: "https://stardewvalleywiki.com/Stone",
            },
            {
              name: "Hardwood (10)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Hardwood.png/24px-Hardwood.png",
              description:
                "Chopping Large Stumps or Large Logs with an upgraded Axe, smashing crates in The Mines",
              wiki: "https://stardewvalleywiki.com/Hardwood",
            },
          ],
        },
        //Exotic Foraging bundle
        {
          name: "Exotic Foraging Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/5/5a/Exotic_Foraging_Bundle.png",
          bundleReward: {
            item: "Autumn's Bounty (5)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Autumn%27s_Bounty.png/24px-Autumn%27s_Bounty.png",
          },
          items: [
            {
              name: "Coconut",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Coconut.png/24px-Coconut.png",
              description: "Desert Foraging, Oasis",
              wiki: "https://stardewvalleywiki.com/Coconut",
            },
            {
              name: "Cactus Fruit",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Cactus_Fruit.png/24px-Cactus_Fruit.png",
              description: "Desert Foraging, Oasis",
              wiki: "https://stardewvalleywiki.com/Cactus_Fruit",
            },
            {
              name: "Cave Carrot",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Cave_Carrot.png/24px-Cave_Carrot.png",
              description: "The Mines, either smashing boxes or tilling soil",
              wiki: "https://stardewvalleywiki.com/Cave_Carrot",
            },
            {
              name: "Red Mushroom",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e1/Red_Mushroom.png/24px-Red_Mushroom.png",
              description:
                "Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Farm Cave (mushroom option), Tapping a Mushroom Tree, Forest Farm Map in Fall.",
              wiki: "https://stardewvalleywiki.com/Red_Mushroom",
            },
            {
              name: "Purple Mushroom",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4b/Purple_Mushroom.png/24px-Purple_Mushroom.png",
              description:
                "The Mines, The Farm Cave (mushroom option), Forest Farm Map Foraging in Fall",
              wiki: "https://stardewvalleywiki.com/Purple_Mushroom",
            },
            {
              name: "Maple Syrup",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Maple_Syrup.png/24px-Maple_Syrup.png",
              description: "Tapped Maple Tree",
              wiki: "https://stardewvalleywiki.com/Maple_Syrup",
            },
            {
              name: "Oak Resin",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/40/Oak_Resin.png/24px-Oak_Resin.png",
              description: "Tapped Oak Tree",
              wiki: "https://stardewvalleywiki.com/Oak_Resin",
            },
            {
              name: "Pine Tar",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Pine_Tar.png/24px-Pine_Tar.png",
              description: "Tapped Pine Tree",
              wiki: "https://stardewvalleywiki.com/Pine_Tar",
            },
            {
              name: "Morel",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/b/b1/Morel.png/24px-Morel.png",
              description:
                "Foraging in the Secret Woods or Forest Farm Map in Spring, The Farm Cave (mushroom option)",
              wiki: "https://stardewvalleywiki.com/Morel",
            },
          ],
        },
      ],
    },
    pantry: {
      name: "Pantry",
      roomReward: "Greenhouse",
      bundles: [
        //Spring Crops Bundle
        {
          name: "Spring Crops Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/5/51/Spring_Crops_Bundle.png",
          bundleReward: {
            item: "Speed-Gro (20)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Speed-Gro.png/24px-Speed-Gro.png",
          },
          items: [
            {
              name: "Parsnip",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png",
              description: "Spring Crops",
              wiki: "https://stardewvalleywiki.com/Parsnip",
            },
            {
              name: "Green Bean",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5c/Green_Bean.png/24px-Green_Bean.png",
              description: "Spring Crops",
              wiki: "https://stardewvalleywiki.com/Green_Bean",
            },
            {
              name: "Cauliflower",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Cauliflower.png/24px-Cauliflower.png",
              description: "Spring Crops",
              wiki: "https://stardewvalleywiki.com/Cauliflower",
            },
            {
              name: "Potato",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Potato.png/24px-Potato.png",
              description: "Spring Crops",
              wiki: "https://stardewvalleywiki.com/Potato",
            },
          ],
        },
      ],
    },
  },
};

// standardBundles.map((bundle, index) => {
// });

Object.keys(standardBundles.rooms).forEach((keyz) => {
  //console.log(key, standardBundles.rooms[key].bundles);
  Object.keys(standardBundles.rooms[keyz].bundles).forEach((key) => {
    console.log(key, standardBundles.rooms[keyz].bundles[key].name);
  });
});
for (let k in standardBundles.rooms) {
  //console.log(standardBundles.rooms[k]);
  for (let i in standardBundles.rooms[k].bundles) {
    //console.log(standardBundles.rooms[k].bundles[i].name);
    for (let j in standardBundles.rooms[k].bundles[i].items) {
      //console.log(standardBundles.rooms.craftsRoom.bundles[i].items[j].name);
      //console.log(standardBundles.rooms.craftsRoom.bundles[i].items[j].description);
    }
  }
}
