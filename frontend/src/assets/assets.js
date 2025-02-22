import p_img1 from './JORDAN+MVP.png'
import p_img2 from './JORDAN+MVP1.png'
import p_img3 from './JORDAN+MVP2.png'
import p_img4 from './NIKE+COURT+VISION+LO+NN.png'
import p_img5 from './NIKE+COURT+VISION+LO+NN1.png'
import p_img6 from './NIKE+COURT+VISION+LO+NN2.png'
import p_img7 from './AIR+JORDAN+1+RETRO+HIGH+OG+GS.png'
import p_img8 from './AIR+JORDAN+1+RETRO+HIGH+OG+GS1.png'
//import p_img9 from './AIR+JORDAN+1+RETRO+HIGH+OG+GS2.png'
import p_img10 from './NIKE+GO+FLYEASE.png'
import p_img11 from './NIKE+GO+FLYEASE1.png'
import p_img12 from './NIKE+GO+FLYEASE2.png'
import p_img13 from './NIKE+AIR+MAX+ISHOD.png'
import p_img14 from './NIKE+AIR+MAX+ISHOD1.png'
import p_img15 from './NIKE+AIR+MAX+ISHOD2.png'
import p_img16 from './NIKE+REAX+8+TR+MESH.png'
import p_img17 from './NIKE+REAX+8+TR+MESH1.png'
import p_img18 from './NIKE+REAX+8+TR+MESH2.png'
import p_img19 from './NIKE+AIR+FORCE+1+GS.png'
import p_img20 from './NIKE+AIR+FORCE+1+GS1.png'
import p_img21 from './NIKE+AIR+FORCE+1+GS2.png'
import p_img22 from './NIKE+COURT+VISION+LO+NN+ESS.png'
import p_img23 from './NIKE+COURT+VISION+LO+NN+ESS1.png'
import p_img24 from './NIKE+COURT+VISION+LO+NN+ESS2.png'
import p_img25 from './AIRJORDAN1HIGHG.png'
import p_img26 from './AIRJORDAN1HIGHG1.png'
import p_img27 from './AIRJORDAN1HIGHG2.png'
import p_img28 from './WMNS+AIR+JORDAN+4+RETRO.png'
import p_img29 from './WMNS+AIR+JORDAN+4+RETRO1.png'
import p_img30 from './WMNS+AIR+JORDAN+4+RETRO2.png'

import logo from './logo.png'
import search_icon from './searchicon.png'
import cart_icon from './carticon.png'
import profile_icon from './profileicon.png'
import menu_icon from './menuicon.png'
import back_icon from './backicon.png'
import hero_img from './hero.jpg'
import exchange_icon from './exchange.png'
import productReturn_icon from './product-return.png'
import support_icon from './support.png'
import dropdown_icon from './down.png'
import cross_icon from './cancel.png'
import star_icon from './star.png'
import star_dull_icon from './stardull.png'
import bin_icon from './bin.png'
import stripe_icon from './stripe.png'
import razorpay_icon from './razorpay.png'
import about_img from './about.jpg'
import contact_img from './contact.jpg'

export const assets = {
    logo,
    search_icon,
    cart_icon,
    profile_icon,
    menu_icon,
    back_icon,
    hero_img,
    exchange_icon,
    productReturn_icon,
    support_icon,
    dropdown_icon,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    stripe_icon,
    razorpay_icon,
    about_img,
    contact_img

} 

export const products =[
    {
        _id: "aaaaa",
        name: "Jordan MVP",
        description: "Men's Shoes",
        price: 15295.00,
        image: [p_img1, p_img2, p_img3],
        category: "Men",
        subCategory: "HighTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    },
    {
        _id: "aaaab",
        name: "Nike Court Vision Low",
        description: "Men's Shoes",
        price: 4995.00,
        image: [p_img4, p_img5, p_img6],
        category: "Men",
        subCategory: "LowTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    },
    {
        _id: "aaaaac",
        name: "Air Jordan 1 High OG",
        description: "Older Kid's Shoes",
        price: 9777.00,
        image: [p_img7, p_img8],
        category: "Kids",
        subCategory: "HighTop",
        sizes: ["UK1","UK2","UK3","UK5","UK6","UK7","UK8"],
        date: 1716634345448,
        bestSeller: false
    },
    {
        _id: "aaaad",
        name: "Nike Go FlyEase",
        description: "Women's Easy On/Off Shoes",
        price: 11297.00,
        image: [p_img10, p_img11, p_img12],
        category: "Women",
        subCategory: "EasyOnOff",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: false
    },
    {
        _id: "aaaae",
        name: "Nike Airmax ISHOD",
        description: "Men's Shoes",
        price: 9207.00,
        image: [p_img13, p_img14, p_img15],
        category: "Men",
        subCategory: "LowTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    },
    {
        _id: "aaaaf",
        name: "Nike Reax 8 TR",
        description: "Men's WorkOut Shoes",
        price: 7495.00,
        image: [p_img16, p_img17, p_img18],
        category: "Men",
        subCategory: "Workout",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: false
    },
    {
        _id: "aaaag",
        name: "AirForce 1",
        description: "Men's Shoes",
        price: 7117.00,
        image: [p_img19, p_img20, p_img21],
        category: "Men",
        subCategory: "LowTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    },
    {
        _id: "aaaah",
        name: "Nike Court Vission Nature",
        description: "Men's Shoes",
        price: 15295.00,
        image: [p_img22, p_img23, p_img24],
        category: "Men",
        subCategory: "LowTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: false
    },
    {
        _id: "aaaai",
        name: "Air Jordan I High G",
        description: "Men's Golf Shoes",
        price: 15295.00,
        image: [p_img25, p_img26, p_img27],
        category: "Men",
        subCategory: "Golf",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    },
    {
        _id: "aaaaj",
        name: "Air Jordan 4 Retro",
        description: "Men's Shoes",
        price: 18327.00,
        image: [p_img28, p_img29, p_img30],
        category: "Men",
        subCategory: "HighTop",
        sizes: ["UK5", "UK6", "UK7", "UK8", "UK9", "UK9.5"],
        date: 1716634345448,
        bestSeller: true
    }
]