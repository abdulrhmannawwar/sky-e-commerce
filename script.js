let header = document.querySelector("header");
document.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        header.style.backgroundColor = 'rgb(92 133 244)';
    } else {
        header.style.backgroundColor = '';
    }
});

const itemsContainer = document.querySelector(".itemsContainer");
const clothesSection = document.querySelector(".clothes");
const shoeSection = document.querySelector(".shoes");
const accessoriesSection = document.querySelector(".accessories");
const watchesSection = document.querySelector(".watches");
const electronicsSection = document.querySelector(".electronics");
const homeAppliancesSection = document.querySelector(".homeAppliances");

let oldPrices = document.querySelectorAll(".oldPrice");
let newPrices = document.querySelectorAll(".newPrice");
let itemsNames = document.querySelectorAll(".itemName");
let itemImgs = document.querySelectorAll(".itemImg");
let itemsBuyBtns = document.querySelectorAll(".itemBuy");

let itemsCounter = document.querySelector(".itemsCount");
itemsBuyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        itemsCounter.innerHTML = +itemsCounter.innerHTML + 1;
    });
});

let itemsChoose = document.querySelectorAll(".itemsChoose h1");
itemsChoose.forEach((choose) => {
    choose.addEventListener("click", () => {
        itemsChoose.forEach((choose) => {
            choose.classList.remove("selected");
            choose.style.borderBottom = "1px solid #91dbf2";
        })
        choose.classList.add("selected");
        choose.style.borderBottom = "1px solid #018bfc";
    })
});


//for clothes section 

let clothesSources = [];
itemImgs.forEach((img) => {
    clothesSources.push(img.src);
})
let clothesItemsNames = [];
itemsNames.forEach((name) => {
    clothesItemsNames.push(name.innerHTML);
});

clothesSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = clothesSources[i];
        itemsNames[i].innerHTML = clothesItemsNames[i];
    })
});


//for shoe section

let shoeSources = ['images/shoes/Adidas_NMD_R1-removebg-preview.png',
    'images/shoes/Adidas_NMD_R2-removebg-preview.png',
    'images/shoes/New_Balance_2002-removebg-preview.png',
    'images/shoes/New_Balance_Fresh_Foam_X_1080v12-removebg-preview.png',
    'images/shoes/New_Balance_Roav_V1-removebg-preview.png',
    'images/shoes/Nike_Air_Max_Plus_-removebg-preview.png',
    'images/shoes/Nike_Go_FlyEase_Easy_OnOff-removebg-preview.png',
    'images/shoes/Puma_RS-X_Reinvention_webp-removebg-preview.png',
    'images/shoes/Puma_X_Rihanna_Fenty_Bow_-removebg-preview.png'
];
let shoeItemsNames = ['Adidas NMD R1',
    'Adidas NMD R2',
    'New Balance 2002',
    'New Balance Fresh Foam X 1080v12',
    'New Balance Roav V1',
    'Nike Air Max Plus ',
    'Nike Go FlyEase Easy OnOff',
    'Puma RS-X Reinvention webp',
    'Puma X Rihanna Fenty Bow '
];
shoeSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = shoeSources[i];
        itemsNames[i].innerHTML = shoeItemsNames[i];
    });
});

//for accessories section

let accessoriesSources = ['images/Accessories/Aidie Check Print Scarf.png',
    'images/Accessories/Curved Oval Sunglasses.png',
    'images/Accessories/Geometric Knit Scarf Black.png',
    'images/Accessories/Isabella Hatinator.png',
    'images/Accessories/Lace Trim Bucket Hat Natural.png',
    'images/Accessories/Packable Fedora.png',
    'images/Accessories/Peggy Pill Box Fascinator Orange.png',
    'images/Accessories/Small Travel Packing Cube.png',
    'images/Accessories/Tuna Motif Socks.png'
];

let accessoriesItemsNames = ['Aidie Check Print Scarf',
    'Curved Oval Sunglasses',
    'Geometric Knit Scarf Black',
    'Isabella Hatinator',
    'Lace Trim Bucket Hat Natural',
    'Packable Fedora',
    'Peggy Pill Box Mascinator Orange',
    'Small Travel Packing Cube',
    'Tuna Motif Socks'
];
accessoriesSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = accessoriesSources[i];
        itemsNames[i].innerHTML = accessoriesItemsNames[i];
    });
});

//for watches section

let watchesSources = ["images/Watches/Casio_Edifice_EFR-539SG-7AVUE_Men_s_Two_Tone_Stainless_Steel_Bracelet_Watch-removebg-preview.png",
    "images/Watches/Casio_Edifice_EFV-C110D-1A4VEF_Men_s_Stainless_Steel_Bracelet_Watch-removebg-preview.png",
    "images/Watches/Citizen_Men_s_Chronograph_Grey_Dial_Two_Tone_Stainless_Steel_Bracelet_Watch-removebg-preview.png",
    "images/Watches/G-Shock_GA-100CF-1A9ER_Men_s_Camo_Black_Resin_Strap_Watch-removebg-preview.png",
    "images/Watches/G-Shock_GA-2000-1A9ER_Men_s_Carbon_Core_Black_Resin_Strap_Watch-removebg-preview.png",
    "images/Watches/Olivia_Burton_Grey_Leather_Strap_Watch___Two_Tone_Bee_Bracelet_Gift_Set-removebg-preview.png",
    "images/Watches/Radley_Ladies__Series_8_Casis_Purple_Silicone_Strap_Smart_Watch-removebg-preview.png",
    "images/Watches/Radley_Ladies__Series_8_Vintage_Blue_Silicone_Strap_Smart_Watch-removebg-preview.png",
    "images/Watches/Sekonda_Maverick_Men_s_Green_Dial_Two_Tone_Stainless_Steel_Bracelet_Watch-removebg-preview.png"    
];

let watchesItemsNames = ["Casio Edifice EFR-539SG-7AVUE Men's Two Tone Stainless Steel Bracelet Watch",
    "Casio Edifice EFV-C110D-1A4VEF Men's Stainless Steel Bracelet Watch",
    "Citizen Men's Chronograph Grey Dial Two Tone Stainless Steel Bracelet Watch",
    "G-Shock GA-100CF-1A9ER Men's Camo Black Resin Strap Watch",
    "G-Shock GA-2000-1A9ER Men's Carbon Core Black Resin Strap Watch",
    "Olivia Burton Grey Leather Strap Watch & Two Tone Bee Bracelet Gift Set",
    "Radley Ladies' Series 8 Casis Purple Silicone Strap Smart Watch",
    "Radley Ladies' Series 8 Vintage Blue Silicone Strap Smart Watch",
    "Sekonda Maverick Men's Green Dial Two Tone Stainless Steel Bracelet Watch"
];
watchesSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = watchesSources[i];
        itemsNames[i].innerHTML = watchesItemsNames[i];
    });
});

//for electronics section

let electronicsSources = ['images/Electronics/Caseoni_Water_Dispenser_-removebg-preview.png',
    'images/Electronics/G-Power_WS344_Power_Strip_Surge_Protector-removebg-preview.png',
    'images/Electronics/Honor_Pad_X9_11.5_Inches-removebg-preview.png',
    'images/Electronics/Lenovo_Legion_Slim_7-removebg-preview.png',
    'images/Electronics/MAONO_Gaming_USB_Microphone-removebg-preview.png',
    'images/Electronics/NexiGo_Vertical_Stand_with_Cooling_Fan-removebg-preview.png',
    'images/Electronics/SAMSUNG_WASHING_MACHINE-removebg-preview.png',
    'images/Electronics/Xiaomi_Mi_Box_S-removebg-preview.png',
    'images/Electronics/Xiaomi_Redmi_VXN4305GL_Power_Bank_10000mAh-removebg-preview.png'
];

let electronicsItemsNames = ['Caseoni Water Dispenser',
    'Power Surge Protector',
    'Honor Pad X9 11.5 Inches',
    'Lenovo Legion Slim 7',
    'MAONO Gaming USB Microphone',
    'NexiGo Vertical Stand with Cooling Fan',
    'SAMSUNG WASHING MACHINE',
    'Xiaomi Mi Box S',
    'Xiaomi Redmi Power Bank'
];

electronicsSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = electronicsSources[i];
        itemsNames[i].innerHTML = electronicsItemsNames[i];
    });
});

//for home appliances section

let homeAppliancesSources = ['images/Home Appliances/Automatic_American_Coffee_Maker-removebg-preview.png',
    'images/Home Appliances/Chopper_400_Watt_1_Liter-removebg-preview.png',
    'images/Home Appliances/Daylight_Bulb_LED_Lamp-removebg-preview.png',
    'images/Home Appliances/Electric_Blender_250_Watt_1.5_Liter-removebg-preview.png',
    'images/Home Appliances/Electric_Pot_1.2_Liter_600_Watt-removebg-preview.png',
    'images/Home Appliances/Kitchen_Ventilating_Fan-removebg-preview.png',
    'images/Home Appliances/Steam_Iron_2000_Watt_Teflon-removebg-preview.png',
    'images/Home Appliances/Toaster_2_Slices_700_Watt_White-removebg-preview.png',
    'images/Home Appliances/Wall_Fan_16_Inch_4_Blades-removebg-preview.png'
];

let homeAppliancesItemsNames = ['Automatic American Coffee Maker',
    'Chopper 400 Watt 1 Liter',
    'Daylight Bulb LED Lamp',
    'Electric Blender 250 Watt 1.5 Liter',
    'Electric Pot 1.2 Liter 600 Watt',
    'Kitchen Ventilating Fan',
    'Steam Iron 2000 Watt Teflon',
    'Toaster 2 Slices 700 Watt White',
    'Wall Fan 16 Inch 4 Blades'
];

homeAppliancesSection.addEventListener("click", () => {
    itemImgs.forEach((img, i) => {
        img.src = homeAppliancesSources[i];
        itemsNames[i].innerHTML = homeAppliancesItemsNames[i];
    });
});