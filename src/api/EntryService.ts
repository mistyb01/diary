import Entry from "../types/entry";

const mockData : Entry[] =  [
  {
    "id": 1,
    "userID": 1,
    "title": "A Day on the Research Vessel",
    "text_body": "Today, I had the privilege of embarking on a research expedition aboard our research vessel. We set sail early in the morning, heading to the open waters of the Pacific Ocean. As a marine biologist, these expeditions are the highlight of my career. Our mission was to study the migration patterns of humpback whales. For hours, we scanned the horizon, searching for telltale signs of these majestic creatures. Finally, our patience paid off as we spotted a group of humpbacks breaching and slapping their tails on the water's surface. It was a breathtaking sight. We carefully approached the whales, ensuring that we didn't disturb their natural behavior. We collected data on their behaviors, took photographs, and recorded underwater vocalizations. These magnificent creatures never cease to amaze me with their intelligence and grace. Throughout the day, we also observed various seabirds, dolphins, and even a rare sighting of a leatherback sea turtle. Our research contributes to the conservation efforts and understanding of these marine ecosystems, and I feel privileged to be a part of it.",
    "creation_timestamp": "2023-10-27T09:00:00"
  },
  {
    "id": 2,
    "userID": 2,
    "title": "Coral Reef Expedition",
    "text_body": "Today, I had the opportunity to explore a vibrant coral reef ecosystem. As a marine biologist, studying these underwater wonderlands is a dream come true. The reef we visited was teeming with life, and I couldn't wait to document and analyze the diverse species that call it home. My team and I donned our scuba gear and descended into the crystal-clear waters. The kaleidoscope of colors and shapes that greeted us was simply astounding. We swam among schools of tropical fish, spotted intricate coral formations, and even encountered a gentle manta ray gliding gracefully through the water. Our research involved documenting the health of the coral and monitoring for any signs of coral bleaching, a threat to these delicate ecosystems. We carefully collected samples and conducted underwater surveys to track changes over time. The highlight of the day was our discovery of a hidden cave within the reef. Inside, we found a stunning array of sea sponges, sea anemones, and tiny seahorses. It was a reminder of the hidden treasures that our oceans hold, and the importance of preserving these ecosystems for future generations. As the day drew to a close, we resurfaced with a sense of awe and responsibility. Our work as marine biologists is vital to understanding and conserving these fragile environments.",
    "creation_timestamp": "2023-10-28T11:30:00"
  },
  {
    "id": 3,
    "userID": 3,
    "title": "Tracking Sea Turtle Nesting",
    "text_body": "Today marked a crucial phase in our ongoing sea turtle conservation project. I had the privilege of monitoring sea turtle nesting activity on a remote beach. The preservation of these magnificent creatures is at the heart of our research, and every nesting season is a critical part of that effort. Under the moonlight, we patrolled the beach in search of nesting female sea turtles. The soft rustling of their fins on the sand was a mesmerizing sight. Once we identified a nesting turtle, we observed her from a distance to avoid causing stress. We collected valuable data, including measurements, markings, and nest location coordinates. It's always a moving experience to witness these ancient creatures returning to their ancestral nesting grounds. The cycle of life continues as the turtles dig a hole in the sand and deposit their precious eggs. We carefully marked the nest, recording the number of eggs laid, and then ensured it was protected from potential threats. Our work doesn't end with the nesting season. We also track the hatchlings when they emerge and make their way to the sea. Protecting these young turtles during this vulnerable stage is a vital part of our conservation efforts. As a marine biologist, I feel a deep connection to these sea turtles, and I'm dedicated to ensuring their survival in the face of the many challenges they face.",
    "creation_timestamp": "2023-11-05T08:45:00"
  },
  {
    "id": 4,
    "userID": 1,
    "title": "Deep-Sea Exploration",
    "text_body": "Venturing into the depths of the ocean is always a thrilling experience. Our deep-sea exploration mission took us to the abyssal plains, where sunlight barely penetrates and unique, mysterious creatures thrive in the darkness. As a marine biologist, I was eager to discover what secrets the deep sea held. Our submersible descended into the inky depths, and as we reached the seafloor, a whole new world came into view. We observed bioluminescent organisms, such as anglerfish and giant squid, which illuminated the darkness with their otherworldly glow. These adaptations to the extreme environment never cease to amaze me. We collected samples of deep-sea creatures and sediment to study later. Each discovery added to our understanding of the intricate web of life in this remote habitat. The pressure at these depths is immense, and the darkness can be disorienting, but our training and technology kept us safe and allowed us to document our findings. Our research will contribute to the conservation of these unique ecosystems and the protection of their fragile balance. The deep sea remains a frontier of exploration, and I feel fortunate to be part of the ongoing quest to unlock its secrets.",
    "creation_timestamp": "2024-11-15T16:30:00"
  },
  {
    "id": 5,
    "userID": 2,
    "title": "Shark Tagging Expedition",
    "text_body": "Today, we embarked on a shark tagging expedition in the open waters. Sharks are apex predators, and understanding their behavior and migratory patterns is essential for marine conservation efforts. We were equipped with specialized tagging equipment and a deep respect for these powerful creatures. As the sun rose, we located a group of sharks near a known aggregation site. With practiced precision, we approached the sharks, carefully avoiding any actions that might stress them. Using specialized equipment, we tagged several individuals, recording their size, species, and behavior. The experience was both thrilling and humbling. Observing these magnificent creatures up close revealed the grace and power they possess. It's a reminder of the critical role sharks play in maintaining the health of our oceans. Our data will contribute to a better understanding of shark populations and their movements, which in turn informs conservation policies and helps protect these vital species. As a marine biologist, these moments of direct interaction with the subjects of our study are incredibly rewarding and reinforce my commitment to marine conservation.",
    "creation_timestamp": "2023-11-20T10:15:00"
  },]

class EntryService {
    async getEntries(): Promise<Entry[]> {
        return mockData;
    }
}

const entryService = new EntryService();

export { entryService };
