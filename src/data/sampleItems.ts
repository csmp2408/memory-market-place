import vintageBook from "@/assets/vintage-book.jpg";
import vintageTeacup from "@/assets/vintage-teacup.jpg";
import vintageJewelryBox from "@/assets/vintage-jewelry-box.jpg";
import vintageCamera from "@/assets/vintage-camera.jpg";

export const sampleItems = [
  {
    id: "1",
    title: "Grandmother's Poetry Collection",
    price: 25,
    location: "Portland, OR",
    timeAgo: "2 hours ago",
    story: "This leather-bound poetry collection belonged to my grandmother who passed away last month. She would read from it every Sunday evening, and the pressed flowers she used as bookmarks are still there. Each poem has her handwritten notes in the margins - little thoughts about love, loss, and hope. I can't bear to keep it, but I hope someone who loves poetry as much as she did will treasure it.",
    image: vintageBook,
    category: "Books & Literature",
    seller: {
      name: "Emma Chen",
      trustScore: 5
    }
  },
  {
    id: "2", 
    title: "Wedding Day Teacup",
    price: 18,
    location: "Boston, MA", 
    timeAgo: "5 hours ago",
    story: "My great-aunt gave me this delicate rose-pattern teacup on my wedding day in 1987. She said it would bring me luck in love and that I should only use it on special occasions. After 35 wonderful years of marriage and countless anniversary teas, I'm downsizing and want this beautiful piece to start creating new memories in someone else's home.",
    image: vintageTeacup,
    category: "Home & Decor",
    seller: {
      name: "Margaret Sullivan", 
      trustScore: 5
    }
  },
  {
    id: "3",
    title: "Mother's Jewelry Box",
    price: 45,
    location: "Austin, TX",
    timeAgo: "1 day ago", 
    story: "This jewelry box was my mother's most treasured possession. The mother-of-pearl inlay still catches the morning light just like it did on her vanity. Inside, you'll find a few pieces she left me - nothing valuable monetarily, but priceless in memories. I'm moving across the country and can't take everything, but I hope this finds someone who will appreciate its gentle beauty.",
    image: vintageJewelryBox,
    category: "Collectibles",
    seller: {
      name: "Sarah Rodriguez",
      trustScore: 4
    }
  },
  {
    id: "4",
    title: "Dad's Adventure Camera",
    price: 120,
    location: "Seattle, WA", 
    timeAgo: "3 days ago",
    story: "My father carried this camera on every family vacation from 1965 to 1985. From our camping trips in Yellowstone to visits with cousins in California, this little camera captured all our precious moments. The film advance still works perfectly, and there's something magical about the photos it takes - they have that warm, nostalgic quality that digital can't replicate. Dad would love knowing it's still creating memories.",
    image: vintageCamera,
    category: "Electronics", 
    seller: {
      name: "David Park",
      trustScore: 5
    }
  }
];