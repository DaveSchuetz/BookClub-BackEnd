const Book = require("../src/models/Book");
const mongoose = require("./connection");

Book.find({}).remove(() => {
  Book.create({
    title: "Hunt for Red October",
    author: "Tom Clancy",
    description: "Book about nothing",
    image: "http://www.pictureGoesHere.com/1"
  });

  Book.create({
    title: "Partiot Games",
    author: "Tom Clancy",
    description: "Book about nothing",
    image: "http://www.pictureGoesHere.com/2"
  });

  Book.create({
    title: "Clear and Present Danger",
    author: "Tom Clancy",
    description: "Book about nothing",
    image: "http://www.pictureGoesHere.com/3"
  });

  Book.create({
    title: "War and Peace",
    author: "Leo Tolstoy",
    description:
      "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature. Pierre Bezukhov. Prince Andrei Bolkonsky. Natasha Rostov.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51GcIO0ciHL.jpg"
  });

  Book.create({
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "During an unnamed time of war, a plane carrying a group of British schoolboys is shot down over the Pacific. The pilot of the plane is killed, but many of the boys survive the crash and find themselves deserted on an uninhabited island, where they are alone without adult supervision.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61yADtvWbeL._SX307_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "Animal Farm",
    author: "George Well",
    description:
      "Manor Farm is run by Mr Jones, a cruel and drunken farmer. One day, the animals gather at a meeting to listen to Old Major, a wise old pig. ... The pigs, who are the most intelligent animals, begin planning a rebellion. They are led by Snowball and Napoleon.",
    image:
      "http://bookcoverarchive.com/wp-content/uploads/amazon/animal_farm.jpg"
  });

  Book.create({
    title: "To Kill a Mocking Bird",
    author: "Harper Lee",
    description:
      "Told through the eyes of Scout Finch, you learn about her father Atticus Finch, an attorney who hopelessly strives to prove the innocence of a black man unjustly accused of rape; and about Boo Radley, a mysterious neighbor who saves Scout and her brother Jem from being killed.",
    image: "https://i.ebayimg.com/images/g/9v4AAOSwXYtYw1nM/s-l640.jpg"
  });

  Book.create({
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    description:
      "On his eleventh birthday, Harry Potter discovers that he is no ordinary boy. Hagrid, a beetle-eyed giant, tells Harry that he is a wizard and has a place at Hogwarts School of Witchcraft and Wizardry.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "Casino Royale",
    author: "Ian Fleming",
    description:
      "Casino Royale opens with James Bond gambling at the Royale-Les-Eaux casino in France. Amongst the gamblers is Le Chiffre, who is a Soviet agent. The story then flashes back to a briefing by M, the head of the British Secret Service.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/CasinoRoyaleCover.jpg"
  });

  Book.create({
    title: "The adventures of Tom Sawyer",
    author: "Mark Twain",
    description:
      "An imaginative and mischievous boy named Tom Sawyer lives with his Aunt Polly and his half-brother, Sid, in the Mississippi River town of St. Petersburg, Missouri. After playing hooky from school on Friday and dirtying his clothes in a fight, Tom is made to whitewash the fence as punishment on Saturday.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51BmN%2BmJTcL._SX319_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "The Call of the Wild",
    author: "Jack London",
    description:
      "Buck, a powerful dog, half St. Bernard and half sheepdog, lives on Judge Miller's estate in California's Santa Clara Valley. He leads a comfortable life there, but it comes to an end when men discover gold in the Klondike region of Canada and a great demand arises for strong dogs to pull sleds.",
    image: "https://images-na.ssl-images-amazon.com/images/I/81%2B9w5nFMDL.jpg"
  });

  Book.create({
    title: "White Fang",
    author: "Jack London",
    description:
      "The she-wolf mates with one of the wolves and has a litter of pups. Only one survives after several more famines, and he grows strong and is a feisty pup. They come to an Indian village where the she-wolf's (who is actually half-wolf, half-dog) master is. He catches her again and White Fang, her pup, stays nearby.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/513wyqnTufL._SX361_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "The Things they Carried",
    author: "Tim O’Brien",
    description:
      "is a collection of linked short stories by American novelist Tim O'Brien, about a platoon of American soldiers fighting on the ground in the Vietnam War.",
    image:
      "https://target.scene7.com/is/image/Target/12198963?wid=488&hei=488&fmt=pjpeg"
  });

  Book.create({
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    description:
      "Set during protagonist Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/512duVU966L._SX322_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "From Russia, with Love",
    author: "Ian Fleming",
    description:
      "The story centers on a plot by SMERSH, the Soviet counter-intelligence agency, to assassinate Bond in such a way as to discredit both him and his organization. As bait, the Russians use a beautiful cipher clerk and the Spektor, a Soviet decoding machine.",
    image: "https://c1.staticflickr.com/3/2439/3638697938_6948744049_b.jpg"
  });

  Book.create({
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    description:
      "The book depicts a dystopian United States in which private businesses suffer under increasingly burdensome laws and regulations. Railroad executive Dagny Taggart and her lover, steel magnate Hank Rearden, struggle against looters who want to exploit their productivity, including Dagny's brother and Hank's wife. As Dagny and Hank fight the looters' efforts to control their business operations and confiscate their production, they realize a mysterious figure called John Galt is convincing other business leaders to abandon their companies and disappear.",
    image:
      "https://img.apmcdn.org/a1f34121ca96167006dadb83f19a2405f3ab622c/uncropped/61f4cd-20120817-atlasshrugged.jpg"
  });

  Book.create({
    title: "Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description:
      "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, featuring his fictional detective Sherlock Holmes",
    image: "https://images-na.ssl-images-amazon.com/images/I/51AL2N%2BmmfL.jpg"
  });

  Book.create({
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    description:
      "Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign",
    image: "http://www.isfdb.org/wiki/images/3/34/THFLLWSHPC1978.jpg"
  });

  Book.create({
    title: "The Two Towers",
    author: "J. R. R. Tolkien",
    description:
      "The Fellowship was scattered. Some were bracing hopelessly for war against the ancient evil of Sauron. Some were contending with the treachery of the wizard Saruman. Only Frodo and Sam were left to take the accursed Ring of Power to be destroyed in Mordor",
    image: "http://www.isfdb.org/wiki/images/1/1b/THTWTWRSBB1978.jpg"
  });

  Book.create({
    title: "The Return of the King",
    author: "J. R. R. Tolkien",
    description:
      "The Companions of the Ring have become involved in separate adventures as the quest continues. And all the time the armies of the Dark Lord are massing.",
    image:
      "http://images1.fanpop.com/images/photos/2300000/The-Return-of-the-King-jrr-tolkien-2314083-300-501.gif"
  });

  Book.create({
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    description:
      "A wizard convinces the Hobbit Bilbo to go on an adventure that the minute hobbit would never dream of for himself.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hobbit_cover.JPG/170px-Hobbit_cover.JPG"
  });

  Book.create({
    title: "Walden",
    author: "Henry David Thoreau",
    description:
      "Part memoir and part spiritual quest, Walden opens with the announcement that Thoreau spent two years at Walden Pond living a simple life without support of any kind.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51qpuQJG8CL._SX327_BO1,204,203,200_.jpg"
  });

  Book.create({
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description:
      "The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.",
    image: "https://images.penguinrandomhouse.com/cover/9780451530578"
  });

  Book.create({
    title: "Oliver Twist",
    author: "Charles Dickens",
    description:
      "The story centres on orphan Oliver Twist, born in a workhouse and sold into apprenticeship with an undertaker. After escaping, Twist travels to London, where he meets The Artful Dodger, a member of a gang of juvenile pickpockets led by the elderly criminal, Fagin.",
    image: "https://i.ebayimg.com/images/g/g0gAAOSwA3dYWrZe/s-l300.jpg"
  });

  Book.create({
    title: "Steelheart",
    author: "Brandon Sanderson",
    description:
      "At age eight, David watched as his father was killed by an Epic, a human with superhuman powers. Now, 10 years later, he joins the Reckoners, people who are trying to kill the Epics and end their tyranny.",
    image: "https://images-na.ssl-images-amazon.com/images/P/0606360271.jpg"
  });

  Book.create({
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "This is a book about JavaScript, programming, and the wonders of the digital.",
    image: "https://eloquentjavascript.net/img/cover.jpg"
  });

  Book.create({
    title: "World War Z",
    author: "Max Brooks",
    description:
      "The novel is a collection of individual accounts narrated by an agent of the United Nations Postwar Commission, following the devastating global conflict against the zombie plague.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/76/World_War_Z_book_cover.jpg"
  });

  Book.create({
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description:
      "It tells of a girl named Alice falling through a rabbit hole into a fantasy world populated by peculiar, anthropomorphic creatures.",
    image: "https://images.penguinrandomhouse.com/cover/9780141321073"
  });
});
