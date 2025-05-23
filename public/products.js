
const products = [
    {
      id: "p1",
      name: "Apple",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 12,
      discountPrice: 10,
      rating: "2",
      qtyperprice: "1",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/21_1.jpg",
      brand:"b1",
    },
    {
      id: "p2",
      name: "Dragon Fruit",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 17,
      discountPrice: 15,
      rating: "4",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/22_1.jpg"
    },
    {
      id: "p3",
      name: "Blue Berry",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 12,
      discountPrice: 11,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/23_1.jpg"
    },
    {
      id: "p4",
      name: "Natural Hub Cherry Karonda",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 65,
      discountPrice: 49,
      rating: "5",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/24_1.jpg"
    },
    {
      id: "p5",
      name: "Mango",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 55,
      discountPrice: 50,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/28_1.jpg"
    },
    {
      id: "p6",
      name: "Red Berry",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 21,
      discountPrice: 20,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/25_1.jpg"
    },
    {
      id: "p7",
      name: "Orange",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 3,
      discountPrice: 2,
      rating: "4",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/26_1.jpg"
    },
    {
      id: "p8",
      name: "Guava",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 12,
      discountPrice: 10,
      rating: "5",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/27_1.jpg"
    },
    {
      id: "p9",
      name: "Pineapple",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 16,
      discountPrice: 15,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/29_1.jpg"
    },
    {
      id: "p10",
      name: "Banana",
      category: "Fruits",
      subCategory: "Fresh Fruits",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 12,
      discountPrice: 10,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/30_1.jpg"
    },
    {
      id: "p11",
      name: "Tomato",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 6,
      discountPrice: 5,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/11_1.jpg"
    },
    {
      id: "p12",
      name: "Potato",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 17,
      discountPrice: 15,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/12_1.jpg"
    },
    {
      id: "p13",
      name: "Onion",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 30,
      discountPrice: 25,
      rating: "4",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/13_1.jpg"
    },
    {
      id: "p14",
      name: "Coriander Bunch",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 7,
      discountPrice: 5,
      rating: "3",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/14_1.jpg"
    },
    {
      id: "p15",
      name: "Capsicum",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 3,
      discountPrice: 2,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/15_1.jpg"
    },
    {
      id: "p16",
      name: "Sweet Corn",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 8,
      discountPrice: 6,
      rating: "5",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/16_1.jpg"
    },
    {
      id: "p17",
      name: "Ginger - Organic",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 3,
      discountPrice: 2,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg"
    },
    {
      id: "p18",
      name: "Beetroot",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 5,
      discountPrice: 3,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/18_1.jpg"
    },
    {
      id: "p19",
      name: "Brocolli",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 11,
      discountPrice: 10,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg"
    },
    {
      id: "p20",
      name: "Ginger Pack",
      category: "Vegetables",
      subCategory: "Vegetables",
      title: "Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.",
      description: "",
      discountPercentage: "-78%",
      variations: [],
      stock: 100,
      price: 11,
      discountPrice: 10,
      rating: "2",
      qtyperprice: "",
      images: "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg"
    }
  ]
  export default products;