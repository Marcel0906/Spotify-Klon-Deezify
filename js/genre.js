export const newGenres = async () => {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5f5667f7dcmsh8351307edd4790ep1905e8jsn2f800572c9df",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const genres = {
  data: [
    {
      id: "0",
      name: "Alle",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "132",
      name: "Pop",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "457",
      name: "Hörbücher",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/8b0c8494e267e0e02bbb09b8ad7aac6f/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "116",
      name: "Rap/Hip Hop",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/5c27115d3b797954afff59199dad98d1/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "152",
      name: "Rock",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "113",
      name: "Dance",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/bd5fdfa1a23e02e2697818e09e008e69/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "165",
      name: "R&B",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/68a43aec844708e693cb99f47814153b/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "85",
      name: "Alternative",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/fd252ab727d9a3b0b3c29014873f8f57/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "106",
      name: "Electro",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/15df4502c1c58137dae5bdd1cc6f0251/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "466",
      name: "Folk",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/f9e070848998df8870ba65cd0d22b2b3/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "144",
      name: "Reggae",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/7b901a98628cf879e1465f1dfd697e00/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "129",
      name: "Jazz",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "84",
      name: "Country",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/6eca3188f724f04843a15e3e575751a5/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "98",
      name: "Klassik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/609f69b669b242252aa8ee09b5597655/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "173",
      name: "Filme/Videospiele",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/236d8057751d9c557728400dfe71483a/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "464",
      name: "Heavy Metal",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/f14f9fde9feb38ca6d61960f00681860/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "169",
      name: "Soul & Funk",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/3d5e8aab99b95bfa7ac7e9e466e7781e/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "2",
      name: "Afrikanische Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/703413adf47ad8a6001b438f7608a2be/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "16",
      name: "Asiatische Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/dd6d2756465b22488dff5d8663e86688/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "153",
      name: "Blues",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/1abb6810098d4015bdc860c91bcfd2b6/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "75",
      name: "Brasilianische Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/01b12a3f3582899a13b664cea703a335/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "459",
      name: "Deutsche Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/7874588931619df051f4b019101825ad/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "81",
      name: "Indische Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/b098161d9a824eef314bc38b985594a1/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "95",
      name: "Kids",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/b0b8efcbc3cb688864ce69da0061e525/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
    {
      id: "197",
      name: "Latin Musik",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/misc/069c9888538799748960781f098b5f4b/250x250-000000-80-0-0.jpg",
      type: "genre",
    },
  ],
};

// export function genre1() {
//   return genres;
// }
