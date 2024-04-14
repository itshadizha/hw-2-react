import React from "react";
import Card from "./Card";

const Products = () => {
  const products = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "https://m.media-amazon.com/images/I/91jcpFox9kL._AC_UY1000_.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image:
        "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/211851/211851_p_mainimage/211851",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127,
      },
      priceCents: 2095,
      keywords: ["sports", "basketballs"],
    },
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CL9umEje0pCYhf_qkxEUzy54lwok7g5pyxvOHeAV-g&s",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56,
      },
      priceCents: 799,
      keywords: ["tshirts", "apparel", "mens"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    },
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbecSJZ72Y05YKpAgODTBKXQJfFShoLJ55ktKYcjkGjw&s",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197,
      },
      priceCents: 1899,
      keywords: ["toaster", "kitchen", "appliances"],
    },
    {
      id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
      image:
        "https://assets.wfcdn.com/im/45787220/compr-r85/2014/201423361/stone-lain-stella-6-piece-dinner-plate-set-porcelain.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating: {
        stars: 4,
        count: 37,
      },
      priceCents: 2067,
      keywords: ["plates", "kitchen", "dining"],
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      image: "https://m.media-amazon.com/images/I/91hBA6hLfuL.jpg",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: 4.5,
        count: 175,
      },
      priceCents: 3499,
      keywords: ["kitchen", "cookware"],
    },
    {
      id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTBpIMTbZ2iiMmp8kqStkdRItGJ8RbWGIMkpvOsnTcg&s",
      name: "Plain Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 317,
      },
      priceCents: 2400,
      keywords: ["hoodies", "sweaters", "apparel"],
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      image: "https://m.media-amazon.com/images/I/51wH24UdABL._AC_.jpg",
      name: "Luxury Towel Set - Graphite Gray",
      rating: {
        stars: 4.5,
        count: 144,
      },
      priceCents: 3599,
      keywords: ["bathroom", "washroom", "restroom", "towels", "bath towels"],
    },
    {
      id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
      image: "https://m.media-amazon.com/images/I/81j5ND-NhkL.jpg",
      name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      rating: {
        stars: 4.5,
        count: 305,
      },
      priceCents: 2899,
      keywords: ["bathroom", "cleaning"],
    },
    {
      id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
      image: "https://i.ebayimg.com/images/g/PSsAAOSwjp1jTZcn/s-l1200.webp",
      name: "Waterproof Knit Athletic Sneakers - Gray",
      rating: {
        stars: 4,
        count: 89,
      },
      priceCents: 3390,
      keywords: ["shoes", "running shoes", "footwear"],
    },
    {
      id: "5968897c-4d27-4872-89f6-5bcb052746d7",
      image: "https://m.media-amazon.com/images/I/61ZMIYmKEzL._AC_UY1000_.jpg",
      name: "Women's Chiffon Beachwear Cover Up - Black",
      rating: {
        stars: 4.5,
        count: 235,
      },
      priceCents: 2070,
      keywords: ["robe", "swimsuit", "swimming", "bathing", "apparel"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    },
    {
      id: "aad29d11-ea98-41ee-9285-b916638cac4a",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_3f51f447-7799-457b-9ba3-2eff7621b4ae?wid=488&hei=488&fmt=pjpeg",
      name: "Round Sunglasses",
      rating: {
        stars: 4.5,
        count: 30,
      },
      priceCents: 1560,
      keywords: ["accessories", "shades"],
    },
    {
      id: "04701903-bc79-49c6-bc11-1af7e3651358",
      image: "https://i.ebayimg.com/images/g/V7gAAOSwDcpk9c-X/s-l1600.jpg",
      name: "Women's Two Strap Buckle Sandals - Tan",
      rating: {
        stars: 4.5,
        count: 562,
      },
      priceCents: 2499,
      keywords: ["footwear", "sandals", "womens", "beach", "summer"],
    },
    {
      id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
      image:
        "https://images.thdstatic.com/productImages/5e236ba9-5cab-4524-8bdb-44d7682a1890/svn/alabaster-beige-exclusive-fabrics-furnishings-blackout-curtains-vpch-120601-96-64_1000.jpg",
      name: "Blackout Curtains Set 4-Pack - Beige",
      rating: {
        stars: 4.5,
        count: 232,
      },
      priceCents: 4599,
      keywords: ["bedroom", "curtains", "home"],
    },
    {
      id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
      image:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/23ea72f1f07bb984752e1f3517a1d39a.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      name: "Men's Slim-Fit Summer Shorts",
      rating: {
        stars: 4,
        count: 160,
      },
      priceCents: 1699,
      keywords: ["shorts", "apparel", "mens"],
    },
    {
      id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
      image:
        "https://m.media-amazon.com/images/I/814FJMMa8oL._AC_UF350,350_QL80_.jpg",
      name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      rating: {
        stars: 5,
        count: 846,
      },
      priceCents: 3074,
      keywords: ["water boiler", "appliances", "kitchen"],
    },
    {
      id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
      image: "https://m.media-amazon.com/images/I/51f-gKJjFIL._AC_.jpg",
      name: "Ultra Soft Tissue 2-Ply - 18 Box",
      rating: {
        stars: 4,
        count: 99,
      },
      priceCents: 2374,
      keywords: ["kleenex", "tissues", "kitchen", "tissues box", "napkins"],
    },
    {
      id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
      image: "https://m.media-amazon.com/images/I/81jP3B038EL._AC_UY1000_.jpg",
      name: "Straw Lifeguard Sun Hat",
      rating: {
        stars: 4,
        count: 215,
      },
      priceCents: 2200,
      keywords: ["hats", "straw hats", "summer", "apparel"],
    },
    {
      id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
      image: "https://m.media-amazon.com/images/I/71pPJzNW2vL._AC_UY1000_.jpg",
      name: "Sterling Silver Sky Flower Stud Earrings",
      rating: {
        stars: 4.5,
        count: 52,
      },
      priceCents: 1799,
      keywords: ["jewelry", "accessories", "womens"],
    },
    {
      id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjq_EMFTwT7r-v5H2MMwXTkFgjE9wjfFFafxoUAHheA&s",
      name: "Women's Stretch Popover Hoodie",
      rating: {
        stars: 4.5,
        count: 2465,
      },
      priceCents: 1374,
      keywords: ["hooded", "hoodies", "sweaters", "womens", "apparel"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    },
    {
      id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
      image:
        "https://i5.walmartimages.com/asr/95b4706d-8d37-4b4d-8c28-57381cd23cd6.5f21b31166d2d31d88e3a9a6988d6275.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      rating: {
        stars: 4.5,
        count: 119,
      },
      priceCents: 1250,
      keywords: ["bathmat", "bathroom", "home"],
    },
    {
      id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
      image: "https://m.media-amazon.com/images/I/612ATLVNdyL._AC_UY1000_.jpg",
      name: "Women's Knit Ballet Flat",
      rating: {
        stars: 4,
        count: 326,
      },
      priceCents: 2640,
      keywords: ["shoes", "flats", "womens", "footwear"],
    },
    {
      id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
      image:
        "https://i5.walmartimages.com/seo/Fragarn-Men-s-Regular-Fit-Quick-Dry-Golf-Polo-Shirt-Available-in-Big-Tall_602bda8d-a4c8-4a52-8f75-251701d5a959.41cc57f2180cf3d965d250232789b745.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating: {
        stars: 4.5,
        count: 2556,
      },
      priceCents: 1599,
      keywords: ["tshirts", "shirts", "apparel", "mens"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    },
    {
      id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
      image: "https://cdn2.static1-sima-land.com/items/7204554/1/700-nw.jpg",
      name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
      rating: {
        stars: 4.5,
        count: 2286,
      },
      priceCents: 8300,
      keywords: ["garbage", "bins", "cans", "kitchen"],
    },
    {
      id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
      image: "https://m.media-amazon.com/images/I/31D8et+n23L._AC_.jpg",
      name: "Duvet Cover Set with Zipper Closure",
      rating: {
        stars: 4,
        count: 456,
      },
      priceCents: 2399,
      keywords: ["bedroom", "bed sheets", "sheets", "covers", "home"],
    },
    {
      id: "d2785924-743d-49b3-8f03-ec258e640503",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrUzgwIYAkFvF_wMjCD2aYpdkXnuO6TkwKRb8kJff_Q&s",
      name: "Women's Chunky Cable Beanie - Gray",
      rating: {
        stars: 5,
        count: 83,
      },
      priceCents: 1250,
      keywords: [
        "hats",
        "winter hats",
        "beanies",
        "tuques",
        "apparel",
        "womens",
      ],
    },
    {
      id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-24zuFIG5mID6StidAlKvcr4K0GYPZ9m2oUig36f0Ug&s",
      name: "Men's Classic-fit Pleated Chino Pants",
      rating: {
        stars: 4.5,
        count: 9017,
      },
      priceCents: 2290,
      keywords: ["pants", "apparel", "mens"],
    },
    {
      id: "1c079479-8586-494f-ab53-219325432536",
      image: "https://m.media-amazon.com/images/I/61KmRPm1tgL._AC_UY900_.jpg",
      name: "Men's Athletic Sneaker",
      rating: {
        stars: 4,
        count: 229,
      },
      priceCents: 3890,
      keywords: ["shoes", "running shoes", "footwear", "mens"],
    },
    {
      id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PkQyKkCPVpmsXP8rx_NY7obP4eQrHYw_zvnxx9DgAA&s",
      name: "Men's Navigator Sunglasses Pilot",
      rating: {
        stars: 3.5,
        count: 42,
      },
      priceCents: 1690,
      keywords: ["sunglasses", "glasses", "accessories", "shades"],
    },
    {
      id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
      image:
        "https://m.media-amazon.com/images/I/71oZ1-QYomL._AC_UF894,1000_QL80_.jpg",
      name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      rating: {
        stars: 4.5,
        count: 511,
      },
      priceCents: 6797,
      keywords: ["cooking set", "kitchen"],
    },
    {
      id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
      image: "https://m.media-amazon.com/images/I/51VryxOG44L.jpg",
      name: "Vanity Mirror with Heavy Base - Chrome",
      rating: {
        stars: 4.5,
        count: 130,
      },
      priceCents: 1649,
      keywords: ["bathroom", "washroom", "mirrors", "home"],
    },
    {
      id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
      image:
        "https://www.titlenine.com/dw/image/v2/BDTP_PRD/on/demandware.static/-/Sites-titlenine_master_catalog/default/dw34a48abc/images/src/100062/100062_01.jpg?sw=750&sh=750&sm=fit",
      name: "Women's Fleece Jogger Sweatpant",
      rating: {
        stars: 4.5,
        count: 248,
      },
      priceCents: 2400,
      keywords: ["pants", "sweatpants", "jogging", "apparel", "womens"],
    },
    {
      id: "d339adf3-e004-4c20-a120-40e8874c66cb",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQogTboXDWG0hRpm7ppUYyFbDRCrlpwiMqp2EAn_wOXQ&s",
      name: "Double Oval Twist French Wire Earrings - Gold",
      rating: {
        stars: 4.5,
        count: 117,
      },
      priceCents: 2400,
      keywords: ["accessories", "womens"],
    },
    {
      id: "d37a651a-d501-483b-aae6-a9659b0757a0",
      image:
        "https://pictures-uganda.jijistatic.com/21109694_NjIwLTYyMC0yMGI0MWM1MmIz.webp",
      name: "Round Airtight Food Storage Containers - 5 Piece",
      rating: {
        stars: 4,
        count: 126,
      },
      priceCents: 2899,
      keywords: ["boxes", "food containers", "kitchen"],
    },
    {
      id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFwMmil1Vfb_Clmx6giQWr0FnyPZs1KNBzSg1euTeHw&s",
      name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      rating: {
        stars: 4.5,
        count: 1211,
      },
      priceCents: 2250,
      keywords: ["coffeemakers", "k	itchen", "appliances"],
    },
    {
      id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
      image: "https://m.media-amazon.com/images/I/71Hf+zkgXVL.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: 4.5,
        count: 363,
      },
      priceCents: 3099,
      keywords: ["bedroom", "home"],
    },
    {
      id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
      image: "https://i.ebayimg.com/images/g/r1EAAOSw-ZlkTFiS/s-l400.jpg",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: 4.5,
        count: 93,
      },
      priceCents: 2110,
      keywords: ["bathroom", "home", "towels"],
    },
    {
      id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
      image:
        "https://n.nordstrommedia.com/id/sr3/fe057180-3337-4ad8-b1f1-6b1a4304e089.jpeg?h=365&w=240&dpr=2",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: 4,
        count: 89,
      },
      priceCents: 3390,
      keywords: ["shoes", "running shoes", "footwear", "womens"],
    },
    {
      id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
      image: "https://m.media-amazon.com/images/I/71wrc-Q+9bL.jpg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: 4,
        count: 3,
      },
      priceCents: 10747,
      keywords: ["food blenders", "kitchen", "appliances"],
    },
    {
      id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
      image:
        "https://m.media-amazon.com/images/I/51BA693fP3L._AC_UF894,1000_QL80_.jpg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: 5,
        count: 679,
      },
      priceCents: 3899,
      keywords: ["mixing bowls", "baking", "cookware", "kitchen"],
    },
    {
      id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
      image: "https://m.media-amazon.com/images/I/71ZJjQGznNL.jpg",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: 4.5,
        count: 1045,
      },
      priceCents: 5799,
      keywords: ["kitchen", "kitchen towels", "tissues"],
    },

    {
      id: "bc2847e9-5323-403f-b7cf-57fde044a955",
      image: "https://m.media-amazon.com/images/I/61ERUsUlTDL._AC_UY1000_.jpg",
      name: "Men's Full-Zip Hooded F	leece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157,
      },
      priceCents: 2400,
      keywords: ["sweaters", "hoodies", "apparel", "mens"],
    },
  ];

  return (
    <div className="container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
