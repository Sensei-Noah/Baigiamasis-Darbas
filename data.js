export let standardBundles = {
  bundleRewardImage:
    "https://stardewvalleywiki.com/mediawiki/images/thumb/1/16/Bundle_Reward.png/18px-Bundle_Reward.png",
  rooms: [
    // Crafts room
    {
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
    // Pantry
    {
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
        //Summer Crops Bundle
        {
          name: "Summer Crops Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/2/27/Summer_Crops_Bundle.png",
          bundleReward: {
            item: "Quality Sprinkler (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/a/af/Quality_Sprinkler.png/24px-Quality_Sprinkler.png",
          },
          items: [
            {
              name: "Tomato",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9d/Tomato.png/24px-Tomato.png",
              description: "Summer Crops",
              wiki: "https://stardewvalleywiki.com/Tomato",
            },
            {
              name: "Hot Pepper",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Hot_Pepper.png/24px-Hot_Pepper.png",
              description: "Summer Crops",
              wiki: "https://stardewvalleywiki.com/Hot_Pepper",
            },
            {
              name: "Blueberry",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9e/Blueberry.png/24px-Blueberry.png",
              description: "Summer Crops",
              wiki: "https://stardewvalleywiki.com/Blueberry",
            },
            {
              name: "Melon",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png",
              description: "Summer Crops",
              wiki: "https://stardewvalleywiki.com/Melon",
            },
          ],
        },
        //Fall Crops Bundle
        {
          name: "Fall Crops Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/0/0d/Fall_Crops_Bundle.png",
          bundleReward: {
            item: "Bee House (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/c/ce/Bee_House.png/24px-Bee_House.png",
          },
          items: [
            {
              name: "Corn",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f8/Corn.png/24px-Corn.png",
              description: "Summer / Fall Crops",
              wiki: "https://stardewvalleywiki.com/Corn",
            },
            {
              name: "Eggplant",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Eggplant.png/24px-Eggplant.png",
              description: "Fall Crops",
              wiki: "https://stardewvalleywiki.com/Eggplant",
            },
            {
              name: "Pumpkin",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png",
              description: "Fall Crops",
              wiki: "https://stardewvalleywiki.com/Pumpkin",
            },
            {
              name: "Yam",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Yam.png/24px-Yam.png",
              description:
                "Fall Crops, dropped by Duggies on floors 6-29 of The Mines (3%)",
              wiki: "https://stardewvalleywiki.com/Yam",
            },
          ],
        },
        //Quality Crops Bundle
        {
          name: "Quality Crops Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/8/86/Quality_Crops_Bundle.png",
          bundleReward: {
            item: "Preserves Jar (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1e/Preserves_Jar.png/24px-Preserves_Jar.png",
          },
          items: [
            {
              name: "Parsnip	(5)",
              image: "Pictures/24px-Parsnip-Gold-Quality.png",
              description: "Gold quality Spring Crops",
              wiki: "https://stardewvalleywiki.com/Parsnip",
            },
            {
              name: "Melon	(5)",
              image: "Pictures/24px-Melon-Gold-Quality.png",
              description: "Gold quality Summer Crops",
              wiki: "https://stardewvalleywiki.com/Melon",
            },
            {
              name: "Pumpkin	(5)",
              image: "Pictures/24px-Pumpkin-Gold-Quality.png",
              description: "Gold quality Fall Crops",
              wiki: "https://stardewvalleywiki.com/Pumpkin",
            },
            {
              name: "Corn	(5)",
              image: "Pictures/24px-Corn-Gold-Quality.png",
              description: "Gold quality Summer / Fall Crops",
              wiki: "https://stardewvalleywiki.com/Corn",
            },
          ],
        },
        //Animal Bundle
        {
          name: "Animal Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/5/52/Animal_Bundle.png",
          bundleReward: {
            item: "Cheese Press (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/7/79/Cheese_Press.png/24px-Cheese_Press.png",
          },
          items: [
            {
              name: "Large Milk",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/6/67/Large_Milk.png/24px-Large_Milk.png",
              description: "Cows",
              wiki: "https://stardewvalleywiki.com/Large_Milk",
            },
            {
              name: "Large Egg (Brown)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Large_Brown_Egg.png/24px-Large_Brown_Egg.png",
              description: "Brown Chickens",
              wiki: "https://stardewvalleywiki.com/Large_Egg",
            },
            {
              name: "Large Egg",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Large_Egg.png/24px-Large_Egg.png",
              description: "White Chickens",
              wiki: "https://stardewvalleywiki.com/Large_Egg",
            },
            {
              name: "Large Goat Milk",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Large_Goat_Milk.png/24px-Large_Goat_Milk.png",
              description: "Goats",
              wiki: "https://stardewvalleywiki.com/Large_Goat_Milk",
            },
            {
              name: "Wool",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/34/Wool.png/24px-Wool.png",
              description: "Sheep, Rabbits",
              wiki: "https://stardewvalleywiki.com/Wool",
            },
            {
              name: "Duck Egg",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/31/Duck_Egg.png/24px-Duck_Egg.png",
              description: "Ducks",
              wiki: "https://stardewvalleywiki.com/Duck_Egg",
            },
          ],
        },
        //Artisan Bundle
        {
          name: "Artisan Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/7/7a/Artisan_Bundle.png",
          bundleReward: {
            item: "Keg (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7c/Keg.png/24px-Keg.png",
          },
          items: [
            {
              name: "Truffle Oil",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/3d/Truffle_Oil.png/24px-Truffle_Oil.png",
              description: "Made from Truffles using an Oil Maker",
              wiki: "https://stardewvalleywiki.com/Truffle_Oil",
            },
            {
              name: "Cloth",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/51/Cloth.png/24px-Cloth.png",
              description:
                "Loom, Recycling a Soggy Newspaper, Desert Trader, dropped by Mummies in Skull Cavern",
              wiki: "https://stardewvalleywiki.com/Cloth",
            },
            {
              name: "Goat Cheese",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c8/Goat_Cheese.png/24px-Goat_Cheese.png",
              description: "Cheese Press",
              wiki: "https://stardewvalleywiki.com/Goat_Cheese",
            },
            {
              name: "Cheese",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a5/Cheese.png/24px-Cheese.png",
              description: "Cheese Press, Desert Trader",
              wiki: "https://stardewvalleywiki.com/Cheese",
            },
            {
              name: "Honey",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c6/Honey.png/24px-Honey.png",
              description: "Bee House, Oasis",
              wiki: "https://stardewvalleywiki.com/Honey",
            },
            {
              name: "Jelly",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Jelly.png/24px-Jelly.png",
              description: "Preserves Jar",
              wiki: "https://stardewvalleywiki.com/Jellies_and_Pickles",
            },
            {
              name: "Apple",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/7/7d/Apple.png/24px-Apple.png",
              description:
                "Apple Trees during Fall, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Apple",
            },
            {
              name: "Apricot",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/fc/Apricot.png/24px-Apricot.png",
              description:
                "Apricot Trees during Spring, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Apricot",
            },
            {
              name: "Orange",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/43/Orange.png/24px-Orange.png",
              description:
                "Orange Trees during Summer, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Orange",
            },
            {
              name: "Peach",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Peach.png/24px-Peach.png",
              description:
                "Peach Trees during Summer, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Peach",
            },
            {
              name: "Pomegranate",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png",
              description:
                "Pomegranate Trees during Fall, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Pomegranate",
            },
            {
              name: "Cherry",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/2/20/Cherry.png/24px-Cherry.png",
              description:
                "Cherry Trees during Spring, The Farm Cave (fruit bat option)",
              wiki: "https://stardewvalleywiki.com/Cherry",
            },
          ],
        },
      ],
    },
    //Fish Tank
    {
      name: "Fish Tank",
      roomReward: "Glittering Boulder Removed",
      bundles: [
        //River Fish Bundle
        {
          name: "River Fish Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/File:River_Fish_Bundle.png",
          bundleReward: {
            item: "Bait (30)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Bait.png/24px-Bait.png",
          },
          items: [
            {
              name: "Sunfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/56/Sunfish.png/24px-Sunfish.png",
              description:
                "Found in Rivers, 6am - 7pm, Spring, and Summer during sunny weather. Found in the Riverlands Farm or in the Wilderness Farm pond during rainy weather.",
              wiki: "https://stardewvalleywiki.com/Sunfish",
            },
            {
              name: "Catfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Catfish.png/24px-Catfish.png",
              description:
                "Found in Rivers and Secret Woods Pond 6am - midnight, Spring and Fall. Only when raining.",
              wiki: "https://stardewvalleywiki.com/Catfish",
            },
            {
              name: "Shad",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ef/Shad.png/24px-Shad.png",
              description:
                "Found in Rivers, 9am - 2am, Spring, Summer, and Fall. Only when raining.",
              wiki: "https://stardewvalleywiki.com/Shad",
            },
            {
              name: "Tiger Trout",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/0/01/Tiger_Trout.png/24px-Tiger_Trout.png",
              description: "Found in Rivers, 6am - 7pm, Fall and Winter.",
              wiki: "https://stardewvalleywiki.com/Tiger_Trout",
            },
          ],
        },
        //Lake Fish Bundle
        {
          name: "Lake Fish Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/4/46/Lake_Fish_Bundle.png",
          bundleReward: {
            item: "Dressed Spinner (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e8/Dressed_Spinner.png/24px-Dressed_Spinner.png",
          },
          items: [
            {
              name: "Largemouth Bass",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/11/Largemouth_Bass.png/24px-Largemouth_Bass.png",
              description:
                "Found in the Mountain lake, 6am - 7pm, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Largemouth_Bass",
            },
            {
              name: "Carp",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a8/Carp.png/24px-Carp.png",
              description:
                "Found in the Mountain lake, Anytime, during Spring, Summer, or Fall. Found in Secret Woods or Sewer, Anytime, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Carp",
            },
            {
              name: "Bullhead",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Bullhead.png/24px-Bullhead.png",
              description: "Found in the Mountain Lake, Anytime, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Bullhead",
            },
            {
              name: "Sturgeon",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/42/Sturgeon.png/24px-Sturgeon.png",
              description:
                "Found in the Mountain Lake, 6am - 7pm, Summer and Winter.",
              wiki: "https://stardewvalleywiki.com/Sturgeon",
            },
          ],
        },
        //Ocean Fish Bundle
        {
          name: "Ocean Fish Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/a/ac/Ocean_Fish_Bundle.png",
          bundleReward: {
            item: "Warp Totem: Beach (5)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Warp_Totem_Beach.png/24px-Warp_Totem_Beach.png",
          },
          items: [
            {
              name: "Sardine",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/0/04/Sardine.png/24px-Sardine.png",
              description:
                "Found in the Ocean, 6am - 7pm, Spring, Fall, and Winter.",
              wiki: "https://stardewvalleywiki.com/Sardine",
            },
            {
              name: "Tuna",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/c5/Tuna.png/24px-Tuna.png",
              description: "Found in the Ocean, 6am - 7pm, Summer and Winter.",
              wiki: "https://stardewvalleywiki.com/Tuna",
            },
            {
              name: "Red Snapper",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d3/Red_Snapper.png/24px-Red_Snapper.png",
              description:
                "Found in the Ocean, 6am - 7pm, Summer and Fall. Only when raining.",
              wiki: "https://stardewvalleywiki.com/Red_Snapper",
            },
            {
              name: "Tilapia",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/7/73/Tilapia.png/24px-Tilapia.png",
              description: "Found in the Ocean, 6am - 2pm, Summer and Fall.",
              wiki: "https://stardewvalleywiki.com/Tilapia",
            },
          ],
        },
        //Night Fishing Bundle
        {
          name: "Night Fishing Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/a/a7/Night_Fishing_Bundle.png",
          bundleReward: {
            item: "Small Glow Ring (1)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Small_Glow_Ring.png/24px-Small_Glow_Ring.png",
          },
          items: [
            {
              name: "Walleye",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/0/05/Walleye.png/24px-Walleye.png",
              description:
                "Found in Rivers, Lakes and Forest Pond, 12pm - 2am, Fall. Only when raining.",
              wiki: "https://stardewvalleywiki.com/Walleye",
            },
            {
              name: "Bream",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Bream.png/24px-Bream.png",
              description: "Found in Rivers, 6pm - 2am, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Bream",
            },
            {
              name: "Eel",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Eel.png/24px-Eel.png",
              description:
                "Found in the Ocean, 4pm - 2am, Spring or Fall. Only when raining.",
              wiki: "https://stardewvalleywiki.com/Eel",
            },
          ],
        },
        //Crab Pot Bundle
        {
          name: "Crab Pot Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/mediawiki/images/2/22/Crab_Pot_Bundle.png",
          bundleReward: {
            item: "Crab Pot (3)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/9/92/Crab_Pot.png/24px-Crab_Pot.png",
          },
          items: [
            {
              name: "Lobster",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/9f/Lobster.png/24px-Lobster.png",
              description: "Caught in Crab Pots (ocean)",
              wiki: "https://stardewvalleywiki.com/Lobster",
            },
            {
              name: "Crayfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/53/Crayfish.png/24px-Crayfish.png",
              description: "Caught in Crab Pots (freshwater)",
              wiki: "https://stardewvalleywiki.com/Crayfish",
            },
            {
              name: "Crab",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/6/63/Crab.png/24px-Crab.png",
              description:
                "Caught in Crab Pots (ocean), drops from Rock Crabs or Lava Crabs in The Mines",
              wiki: "https://stardewvalleywiki.com/Crab",
            },
            {
              name: "Cockle",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/a/ad/Cockle.png/24px-Cockle.png",
              description: "Caught in Crab Pots (ocean), Beach Foraging",
              wiki: "https://stardewvalleywiki.com/Cockle",
            },
            {
              name: "Mussel",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Mussel.png/24px-Mussel.png",
              description: "Caught in Crab Pots (ocean), Beach Foraging",
              wiki: "https://stardewvalleywiki.com/Mussel",
            },
            {
              name: "Shrimp",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/91/Shrimp.png/24px-Shrimp.png",
              description: "Caught in Crab Pots (ocean)",
              wiki: "https://stardewvalleywiki.com/Shrimp",
            },
            {
              name: "Snail",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/d/d2/Snail.png/24px-Snail.png",
              description: "Caught in Crab Pots (freshwater)",
              wiki: "https://stardewvalleywiki.com/Snail",
            },
            {
              name: "Periwinkle",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1d/Periwinkle.png/24px-Periwinkle.png",
              description: "Caught in Crab Pots (freshwater)",
              wiki: "https://stardewvalleywiki.com/Periwinkle",
            },
            {
              name: "Oyster",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/54/Oyster.png/24px-Oyster.png",
              description: "Caught in Crab Pots (ocean), Beach Foraging",
              wiki: "https://stardewvalleywiki.com/Oyster",
            },
            {
              name: "Clam",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Clam.png/24px-Clam.png",
              description: "	Caught in Crab Pots (ocean), Beach Foraging",
              wiki: "https://stardewvalleywiki.com/Clam",
            },
          ],
        },
        //Specialty Fish Bundle
        {
          name: "Specialty Fish Bundle",
          bundleImage:
            "https://stardewvalleywiki.com/File:Specialty_Fish_Bundle.png",
          bundleReward: {
            item: "Dish O' The Sea (5)",
            image:
              "https://stardewvalleywiki.com/mediawiki/images/thumb/f/ff/Dish_O%27_The_Sea.png/24px-Dish_O%27_The_Sea.png",
          },
          items: [
            {
              name: "Pufferfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/b/ba/Pufferfish.png/24px-Pufferfish.png",
              description:
                "Found in the Ocean, 12pm - 4pm, Summer during sunny weather.",
              wiki: "https://stardewvalleywiki.com/Pufferfish",
            },
            {
              name: "Ghostfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/7/72/Ghostfish.png/24px-Ghostfish.png",
              description:
                "Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghosts.",
              wiki: "https://stardewvalleywiki.com/Ghostfish",
            },
            {
              name: "Sandfish",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/b/bb/Sandfish.png/24px-Sandfish.png",
              description:
                "Found in the pond in The Desert, 6am - 8pm, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Sandfish",
            },
            {
              name: "Woodskip",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/9/97/Woodskip.png/24px-Woodskip.png",
              description:
                "Found in the Secret Woods and the Forest Farm, Anytime, All Seasons.",
              wiki: "https://stardewvalleywiki.com/Woodskip",
            },
          ],
        },
      ],
    },
    //Boiler Room
    {
      name: "Boiler Room",
      roomReward: "Minecarts Repaired",
      bundles: [
        //Blacksmith's Bundle
        {
          name: "Blacksmith's Bundle",
          bundleImage: "https://stardewvalleywiki.com/mediawiki/images/c/c8/Blacksmith_Bundle.png",
          bundleReward: {
            item: "Furnace (1)",
            image: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/0f/Furnace.png/24px-Furnace.png",
          },
          items: [
            {
              name: "Copper Bar",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Copper_Bar.png/24px-Copper_Bar.png",
              description:
                "Smelting Copper Ore in the Furnace",
              wiki: "https://stardewvalleywiki.com/Copper_Bar",
            },
            {
              name: "Iron Bar",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/6/6c/Iron_Bar.png/24px-Iron_Bar.png",
              description:
                "Smelting Iron Ore in the Furnace, Crafting the Transmute (Fe) recipe",
              wiki: "https://stardewvalleywiki.com/Iron_Bar",
            },
            {
              name: "Gold Bar",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png",
              description:
                "Smelting Gold Ore in the Furnace, Crafting the Transmute (Au) recipe",
              wiki: "https://stardewvalleywiki.com/Gold_Bar",
            },
          ],
        },
        //Geologist's Bundle
        {
          name: "Geologist's Bundle",
          bundleImage: "https://stardewvalleywiki.com/File:Geologist%27s_Bundle.png",
          bundleReward: {
            item: "Omni Geode (5)",
            image: "https://stardewvalleywiki.com/mediawiki/images/thumb/0/09/Omni_Geode.png/24px-Omni_Geode.png",
          },
          items: [
            {
              name: "Quartz",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Quartz.png/24px-Quartz.png",
              description:
                "Foraging on all floors of The Mines",
              wiki: "https://stardewvalleywiki.com/Quartz",
            },
            {
              name: "Earth Crystal",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/7/74/Earth_Crystal.png/24px-Earth_Crystal.png",
              description:
                "Foraging on floors 1-39 of The Mines, Geodes, Omni Geodes, drop from Duggies in the Mines (floors 6-29)",
              wiki: "https://stardewvalleywiki.com/Earth_Crystal",
            },
            {
              name: "Frozen Tear",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Frozen_Tear.png/24px-Frozen_Tear.png",
              description:
                "Foraging on floors 41-79 of The Mines, Frozen Geodes, Omni Geodes, drop from Dust Sprites in the Mines (floors 41-79)",
              wiki: "https://stardewvalleywiki.com/Frozen_Tear",
            },
            {
              name: "Fire Quartz",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/5/5b/Fire_Quartz.png/24px-Fire_Quartz.png",
              description:
                "Foraging on floors 81-119 of The Mines, Magma Geodes, Omni Geodes",
              wiki: "https://stardewvalleywiki.com/Fire_Quartz",
            },
          ],
        },
        //Adventurer's Bundle
        {
          name: "Adventurer's Bundle",
          bundleImage: "https://stardewvalleywiki.com/File:Adventurer%27s_Bundle.png",
          bundleReward: {
            item: "Small Magnet Ring (1)",
            image: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/25/Small_Magnet_Ring.png/24px-Small_Magnet_Ring.png",
          },
          items: [
            {
              name: "Slime (99)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/38/Slime.png/24px-Slime.png",
              description:
                "Dropped by Slimes",
              wiki: "https://stardewvalleywiki.com/Slime",
            },
            {
              name: "Bat Wing (10)",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/3/35/Bat_Wing.png/24px-Bat_Wing.png",
              description:
                "Dropped by Bats in The Mines",
              wiki: "https://stardewvalleywiki.com/Bat_Wing",
            },
            {
              name: "Solar Essence",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Solar_Essence.png/24px-Solar_Essence.png",
              description:
                "Dropped by Ghosts, Squid Kids, or Metal Heads in The Mines, dropped by Mummies or Iridium Bats in the Skull Cavern",
              wiki: "https://stardewvalleywiki.com/Solar_Essence",
            },
            {
              name: "Void Essence",
              image:
                "https://stardewvalleywiki.com/mediawiki/images/thumb/1/1f/Void_Essence.png/24px-Void_Essence.png",
              description:
                "Dropped by Shadow Brutes or Shadow Shamans in The Mines or Serpents in the Skull Cavern",
              wiki: "https://stardewvalleywiki.com/Void_Essence",
            },
          ],
        },
      ],
    },
  ],
};
