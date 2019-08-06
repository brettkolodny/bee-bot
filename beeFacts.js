const facts = [
  "the practice of beekeeping dates back at least 4,500 years",
  "Approximately one third of the food we eat is the result of honey bee pollination",
  "In their 6-8 week lifespan, a worker bee will fly the equivalent distance of 1 ½ times the circumference of the Earth?",
  "A productive queen can lay up to 2,500 eggs per day?",
  "Mead, which is made from fermented honey, is the world’s oldest fermented beverage",
  "A single bee will produce only about 1/12 of a teaspoon of honey in its lifetime?",
  "Bees are attracted by caffeine?",
  "The perfect hexagons that form honeycomb hold the most amount of honey with the smallest amount of material (wax)?",
  "Honey bees are the only insect that produces food consumed by humans?",
  "During a single collection trip, a honey bee will visit anywhere from 50 to 100 flowers?",
  "Honey bees beat their wings 200 times per second, creating their trademark “buzz”?",
  "There are three types of bees in every hive: a queen, worker bees, and drones?",
  "Only drones are male?",
  "In order to make a pound of honey, a hive of bees must fly 55,000 miles",
  "Honey bees don’t sleep? Instead, they spend their nights motionless, conserving energy for the next day’s activities?",
  "The honey bee is the official insect of Maine?",
  "Honey was found in King Tut’s tomb, and, because it never spoils, it was still good!",
  "Honey is the only known source of the antioxidant pinocembrin?",
  "On average, Americans consume 1.31 pounds of honey every year",
  "A queen goes on what is called a “mating flight” where she leaves the hive and mates with anywhere from 5 to 45 different drones? She stores the sperm in her spermatheca, and has a lifetime supply, therefore only needing to take 1 mating flight in her lifetime",
  "Honey bees are not born knowing how to make honey? Instead, they are taught in the hive by older bees?",
  "There are estimated to be nearly 212,000 beekeepers in the United States",
  "Honey is 25% sweeter than table sugar?",
  "Honey is the only foodstuff that contains all of the necessary nutrients to sustain life?",
  "Bee venom is used as a treatment for several ailments, including arthritis and high blood pressure?",
  "Drones die after mating with a queen?",
  "A single hive can produce anywhere from 60 to 100 pounds of honey every year?",
  "The ancient Greeks and Romans viewed honey as a symbol of love, beauty, and fertility?",
  "There are people in Africa that keep elephants out of their fields by keeping honey bee hives around the fields in what is called a bee fence?",
  "In Greek mythology, Apollo is credited as being the first beekeeper?",
  "Ancient peoples used to believe that bees were created from the carcasses of dead animals?",
  "Bees were a very popular animal to include in Napoleonic heraldry? ",
  "In ancient Egypt, people paid their taxes with honey?",
  "The ancient Greeks minted coins with bees on them?",
  "Beeswax is found in many of our everyday products, including furniture polishes, cosmetics, and medicines?",
  "The name ‘Melissa’ is derived from the Greek word for honey bee?",
  "Beekeeping is said to be the second oldest professions?",
  "Stone Age cave paintings have been found of ancient beekeepers? The oldest known art depicting honey gathering can be found in the Cave of the Spider near Valencia, Spain?",
  "Every species of bee performs their communication dances differently?",
  "The darker the honey, the greater amount of antioxidant properties it has?",
  "Bees can be trained to locate buried land mines?",
  "Ounce for ounce, honey bee venom is more deadly than cobra venom? Don’t worry, though – it takes 19 stings for every kilogram of a person’s body weight to be lethal?",
  "The first Anglo-Saxons drank beer made from water and honeycomb, with herbs for flavoring?",
  "The word “honeymoon” is derived from the ancient tradition of supplying a newlywed couple with a month’s supply of mead in order to ensure happiness and fertility?",
  "Humans sometimes use the Greater Honeyguide to find bee hives in the wild?",
  "While a worker bee will die after it stings, a queen can survive stinging?",
  "Worker bees have barbed stingers, while a queen has a smooth stinger, which she mostly uses to kill other queens?",
  "In the Hittite Empire (modern-day Turkey and Syria), a swarm’s value was equal to that of a sheep, and the penalty for bee thieving was a fine of 6 shekels of silver?",
  "The Magna Carta legalized the harvesting of wild honey by common folk?",
  "A hive will collect approximately 66 pounds of pollen per year?",
  "A worker bee can carry a load of nectar or pollen equal to 80% of her own body weight?",
  "Up until the mid-1700’s in England, it was common practice to kill all of the bees in a hive during honey collection?",
  "For every pound of honey produced, a hive must collect 10 pounds of pollen?",
  "In the United States, more than 300 different kinds of honey are produced every year? The variety in color and flavor is determined by the types of flowers from which the bees collect nectar?",
  "The European honey bee was brought over to North America by the Shakers? Because of this, Native Americans referred to honey bees as the “White Man’s Fly”?",
  "Honey bees did not spread to Alaska until 1927?",
  "During the American Revolution, George Washington said “It was the cackling geese that saved Rome, but it was the bees that saved America?",
  "Honey bees have 170 odorant receptors, and have a sense of smell 50 times more powerful than a dog?",
  "Every bee colony has its own distinct scent so that members can identify each other?",
  "A hive is perennial, meaning that it becomes inactive in the winter but “awakens” again in the spring? When individuals die, they are quickly replace – workers every 6-8 weeks, and the queen every 2-3 years? Because of this, a hive could technically be immortal!",
  "Bes have 2 stomachs – one for eating, and one for storing nectar?",
  "Bees have existed for around 30 million years?",
  "Hives produce 5 distinct substances: honey, beeswax, propolis, pollen, and royal jelly?",
  "Newborn bees ask for food by sticking out their tongues at passing worker bees?",
  "While bears do enjoy honey, they prefer to eat bee larvae?",
  "Bees have long, straw-like tongues called a proboscis which they use to suck liquid nectar out of flowers?",
  "During the winter, some worker bees take on the job of “heater bees,” where they vibrate their bodies in order to keep the hive at the optimal temperature of 95ºF?",
  "Bees make honey by regurgitating digested nectar into honeycomb cells and then fanning it with their wings?",
  "Honeycomb cells have many uses other than storing honey? They are also used to store nectar, pollen, and water, as well as a nursery for larvae!",
  "Bees have 5 eyes – 3 simple eyes, and 2 compound eyes?",
  "Only female bees have stingers?",
  "The females do all of the work in the hive? The drones’ only job is to mate with a queen?",
  "Bees have 4 life stages: egg, larvae, pupae, and adult?",
  "Honey has antibacterial properties and can be used as a dressing for wounds?",
  "The top-bar hive originated in Africa?",
  "The queen bee (and only the queen) eats royal jelly for the duration of her life? This milky substance is produced in a special gland located in a worker bee’s head?",
  "Bees use propolis, a sticky substance gathered from the buds of trees, to fill in cracks and weatherproof their hives?",
  "Bees create wax in a special gland on their stomach, which they then chew to form honeycomb?",
  "Bees communicate in 2 ways: the waggle dance, and through the use of pheromones?",
  "Due to the rise in popularity of urban beekeeping, it is estimated that honey bees outnumber the residents of London 30-1 in the summer months?",
  "Bee keeping suits are white because bees react strongly to dark colors!",
  "The science of beekeeping is called apiculture?",
  "In 1984, honeybees on a space shuttle constructed a honeycomb in zero gravity?",
  "Primitive hives were made from earthenware, mud, or hollow logs?",
  "Bees are sold by the pound?",
  "Swarming occurs when a colony has outgrown its current hive and is preparing to separate into 2 or more new, smaller hives?",
  "The top honey producing states are North Dakota, California, and South Dakota as of 2016?",
  "A single ounce of honey could fuel a honey bee’s flight all the way around the world?",
  "Honey bees are the only type of bee that dies after stinging?",
  "Honey bees usually travel about 3 miles away from the hive in search of nectar and pollen?",
  "Honey is composed of 80% sugars and 20% water?",
  "During the winter, worker bees will take short cleansing flights in order to defecate and remove debris from the hive?",
  "Some worker bees have the job of being an “undertaker bee” and are in charge of removing dead bees from the hive?",
  "Due to colony collapse disorder, bees have been dying off at a rate of approximately 30% per year?",
  "In Wisconsin, beekeepers can apply to have their honey certified as pure and use “Wisconsin certified honey” on their packaging?",
  "Bees hate human breath?",
  "Bees are being used to study dementia? When a bee takes on a new job usually done by a younger bee, its brain stops aging!",
  "Bees have their own “facial recognition software,” and can recognize human faces?",
  "Bees use the sun as a compass, and on cloudy days, use polarized light to find their way?",
  "Honey made from rhododendron is poisonous, though rarely fatal?",
  "The queen bee can live up to 5 years and is the only bee that lays eggs. She is the busiest in the summer months, when the hive needs to be at its maximum strength, and lays up to 2500 eggs per day?",
  "Larger than the worker bees, the male honey bees (also called drones), have no stinger and do no work. All they do is mate?",
  "Honey has always been highly regarded as a medicine. It is thought to help with everything from sore throats and digestive disorders to skin problems and hay fever?",
  "Honey has antiseptic properties and was historically used as a dressing for wounds and a first aid treatment for burns and cuts?",
  "The natural fruit sugars in honey – fructose and glucose – are quickly digested by the body. This is why sportsmen and athletes use honey to give them a natural energy boost?",
  "When a bee finds a good source of nectar it flies back to the hive and shows its friends where the nectar source is by doing a dance which positions the flower in relation to the sun and hive. This is known as the ‘waggle dance?’",
  "Honey’s ability to attract and retain moisture means that it has long been used as a beauty treatment. It was part of Cleopatra’s daily beauty ritual?",
  "Honey is incredibly healthy and includes enzymes, vitamins, minerals. It’s the only food that contains “pinocembrin”, an antioxidant associated with improved brain functioning?",
  "If a queen bee is removed from a hive, the colony will know within 15 minutes?",
  "A good queen may lay as many as 1,000 to 2,000 eggs per day during Spring?",
  "A honey bee can visit between 50 and 100 flowers during a foraging trip?",
  "Honey bees must gather nectar from 2 million flowers to make one pound of honey?",
  "The high moisture content of fresh nectar would cause spoilage? By converting the nectar to honey, the bees are able to store food for months at a time.",
  "Larva that “hatches” from a honey bee egg will be fed about 1,300 times per day?",
  "Honey bee venom is different than wasp venom? You can be allergic to one and not the other.",
  "Honey bees cannot see the color red? UV patterns on the red flowers guide bees to nectar.",
  "Honey bees are most active between 60° and 100°F?",
  "A toxin in bee venom called melittin may prevent HIV? Melittin can kill HIV by poking holes into the virus's protective envelope.",
  "During chillier seasons, worker bees can live for nine months? But in the summer, they rarely last longer than six weeks.",
  "Scientists at Newcastle University found that nectar laced with caffeine helps bees remember where the flower is, increasing the chances of a return visit?",
  "Researchers at Royal Holloway University in London found that bumblebees fly the shortest route possible between flowers? So far, they're the only animals known to solve the problem.",
  'I went into a pet shop and asked for twelve bees.\nThe shopkeeper counted out thirteen and handed them over.\n"You’ve given me one too many."\n"That one is a freebie."'
];

function getFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)].toLowerCase();

  return `did you know ${fact}`;
}

module.exports = { getFact: getFact };
