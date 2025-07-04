import ctDevice from "../assets/portfolio/CT-Device.png";
import ctBrands from "../assets/portfolio/CT-Brands.mp4";
import ctNewLocation from "../assets/portfolio/CT-New_Location.mp4";
import ctDeviceReset from "../assets/portfolio/CT-Device_Reset.mp4";

import mimoUserReport from "../assets/portfolio/MIMO-User_Report.jpg";
import mimoSplashDesigner from "../assets/portfolio/MIMO-Splash_Designer.jpg";
import mimoDashboard from "../assets/portfolio/MIMO-Dashboard.png";
import mimoSplashDesigns from "../assets/portfolio/MIMO-Splash_Designs.jpg";
import mimoGDPR from "../assets/portfolio/MIMO-GDPR_Interaction.mp4";

import perchedVenuePage from "../assets/portfolio/PERCHED-Venue_Page.png";
import perchedHomePage from "../assets/portfolio/PERCHED-Home_Page.png";
import perchedVenueInteractionMobile from "../assets/portfolio/PERCHED-Venue_Interaction_Mobile.mp4";
import perchedVenueInteraction from "../assets/portfolio/PERCHED-Venue_Interaction.mp4";
import perchedSearchMobile from "../assets/portfolio/PERCHED-Search_Mobile.mp4";
import perchedSearch from "../assets/portfolio/PERCHED-Search.mp4";
import perchedThumbnail from "../assets/portfolio/PERCHED-Thumbnail.png";

import vaultAppShowcase from "../assets/portfolio/VAULT-App_Showcase.mp4";
import vaultPortfolio from "../assets/portfolio/VAULT-Portfolio.png";
import vaultHome from "../assets/portfolio/VAULT-Home.png";
import vaultTokenList from "../assets/portfolio/VAULT-Token_List.png";
import vaultTokenStats from "../assets/portfolio/VAULT-Token_Stats.png";
import vaultThumbnail from "../assets/portfolio/VAULT-Thumbnail.png";

import web3Showcase from "../assets/portfolio/WEB3-Showcase.mp4";
import web3Vault from "../assets/portfolio/WEB3-Vault.png";
import web3VaultMobile from "../assets/portfolio/WEB3-Vault_Mobile.png";
import web3VaultList from "../assets/portfolio/WEB3-Vaults_List.png";
import web3Customised from "../assets/portfolio/WEB3-Customised.png";

import portThumbnail from "../assets/portfolio/PORT-Thumbnail.png";

export const PortfolioDetails = [
  // {
  //   tag: '', // string used as an identifier
  //   title: '', // string used as main header for work item
  //   description: '', // string used as sub header for work item
  //   date: '', // string used to display a date for the work item modal
  //   tasks: [], // array of strings used to generate a bullet point list describing the work item
  //   mainTech: [], // array of strings used to populate the pills in the main portfolio list. Recommended to use just one item.
  //   tech: [], // array of strings used to populate the full list of pills shown in the work item modal.
  //   thumbnail: null, // image import that you want to use for the work item image.
  //   images: [], // array of image imports for the work item modal's lightbox/gallery
  //   captions: [], // array of strings to be used as captions for the lightbox/gallery images. They are matched by index, so order matters.
  //   link: '', // optional string that is used for a github button.
  // },
  {
    tag: 'WEB3_DAPP',
    title: 'Whitelabel Web3 Dashboard',
    company: 'The Standard',
    description: 'Quick start whitelabel Web3 dashboard for Ethereum DApp',
    date: 'Aug 2023',
    end: 'Current',
    tasks: [
      'Focus on simple, customisable, and reusable components.',
      'Interacts with ethereum contracts on the blockchain.',
      'Easily brandable .env variables.',
      'Styled with TailwindCSS & DaisyUI allowing quick and easy theme customisation.',
    ],
    mainTech: [
      'Web3',
    ],
    tech: [
      'Web3',
      'React',
      'Zustand',
      'Tailwind',
      'DaisyUI',
      'HTML',
    ],
    thumbnail: web3Vault,
    images: [
      web3Showcase,
      web3VaultList,
      web3VaultMobile,
      web3Customised,
    ],
    captions: [
      'Showcase of the decentralised frontend, explaining it\'s purpose & functionality, showing some of the user interactions, and demonstrating how it can be further easily customised.',
      'Paginated list of vaults & basic dashboard layout.',
      'Responsive mobile dashboard layout, and light mode demonstration.',
      'Example of customised frontend forked from decentralised frontend with additional styles and functionality.',
    ],
    link: 'https://github.com/ZakMooney/defi-tst-dapp',
  },
  {
    tag: 'PORTFOLIO',
    title: 'Portfolio Dashboard',
    company: 'Personal',
    description: 'React Frontend Developer Portfolio Dashboard',
    date: 'July 2024',
    end: 'Current',
    tasks: [
      'Fully responsive mobile-first portfolio dashboard with Light & Dark themes.',
      'Focus on components & data driven implementation.',
    ],
    mainTech: [
      'React',
    ],
    tech: [
      'React',
      'Tailwind',
      'HTML',
      'SCSS'
    ],
    thumbnail: portThumbnail,
    images: [],
    captions: [],
    link: 'https://github.com/ZakMooney/defi-tst-dapp',
  },
  {
    tag: 'VAULT',
    title: 'Crypto Portfolio Mobile App',
    company: 'Vaultoro',
    description: 'Crypto & Precious Metal Exchange Portfolio App',
    date: 'Dec 2020',
    end: 'Aug 2023',
    tasks: [
      'Built portfolio checking iOS app using React Native with secure OAuth sign in.',
      'Successfully published app to store using Expo',
    ],
    mainTech: [
      'React Native',
    ],
    tech: [
      'React Native',
      'Expo',
      'RESTful API',
      'HTML',
      'SCSS'
    ],
    thumbnail: vaultThumbnail,
    images: [
      vaultAppShowcase,
      vaultPortfolio,
      vaultHome,
      vaultTokenList,
      vaultTokenStats,
    ],
    captions: [
      'Guided walkthrough of the Vaultoro app, showcasing it\'s individual features, and demonstrating the OAuth sign in process.',
      'Signed in state for the portfolio page.',
      'Home page for the app.',
      'Token list within the user\'s portfolio.',
      'Individual Token\'s stats page.',
    ],
    link: null,
  },
  {
    tag: 'MARKETPLACE',
    title: 'Online Marketplace w/ Bookings & Chat',
    company: 'Perched',
    description: 'Online Marketplace for Popup Chefs & Kitchens',
    date: 'Jan 2019',
    end: 'Dec 2019',
    tasks: [
      'Built React front-end following company designs.',
      'Implemented key feature interfaces, including live messaging and a two way booking system.',
    ],
    mainTech: [
      'React',
    ],
    tech: [
      'React',
      'Redux',
      'RESTful API',
      'HTML',
      'SCSS'
    ],
    thumbnail: perchedThumbnail,
    images: [
      perchedVenuePage,
      perchedVenueInteraction,
      perchedVenueInteractionMobile,
      perchedSearch,
      perchedSearchMobile,
      perchedHomePage,
    ],
    captions: [
      'Full venue profile/listing interface.',
      'Demonstration of venue listing interface, including image carousel, google map integration, and chat widget from both sender & recipient POV.',
      'Mobile responsive demonstration of venue listing interface, including nav bar, image carousel, google map integration, and chat widget.',
      'Demonstration of venue search interface, including search & filter forms, and google map integration.',
      'Mobile responsive demonstration of venue search interface, including search & filter forms, and google map integration.',
      'Full SEO optimised home page for the marketplace, highlighting most popular areas.',
    ],
    link: null,
  },
  {
    tag: 'SPLASH_PAGES',
    title: 'Brandable Captive Portal Pages',
    company: 'MIMO',
    description: 'WiFi Splash Page & Marketing Platform',
    date: 'Jun 2017',
    end: 'Jul 2018',
    tasks: [
      'Created new dashboard interface following the company design loosely based on Google\'s Material Design',
      'Implemented end user GDPR compliant interaction',
    ],
    mainTech: [
      'AngularJS',
    ],
    tech: [
      'AngularJS',
      'HTML',
      'SCSS'
    ],
    thumbnail: mimoSplashDesigner,
    images: [
      mimoSplashDesigner,
      mimoSplashDesigns,
      mimoGDPR,
      mimoUserReport,
      mimoDashboard,
    ],
    captions: [
      'Captive Portal design interface, loosely styled on Google\'s Material Design',
      'Examples of Captive Portal designs possible through the interface.',
      'Video showcasing the GDPR interaction, with an automatic consent popup before the user can sign in.',
      'Customer profiles built using Captive Portal information.',
      'Reporting dashboard with stats and charts.',
    ],
    link: null,
  },
  {
    tag: 'MD_DASH',
    title: 'Material Design Dashboard',
    company: 'Cucumber Tony [TechStars]',
    description: 'Cloud-based WiFi Management Platform',
    date: 'Oct 2015',
    end: 'Nov 2019',
    tasks: [
      'Updated and managed AngularJS web app',
      'Followed Google\'s Material Design specification',
    ],
    mainTech: [
      'AngularJS',
    ],
    tech: [
      'AngularJS',
      'HTML',
      'SCSS'
    ],
    thumbnail: ctDevice,
    images: [
      ctNewLocation,
      ctDeviceReset,
      ctDevice,
      ctBrands,
    ],
    captions: [
      'Video showcasing user interactions when creating a new location within their dashboard, including submitting forms.',
      'Video showcasing user interactions when resetting a WiFi Access Point.',
      'Screenshot of a Network summary page, following the Material Design guides.',
      'Video showcasing the user interactions when changing their Brand\'s colour scheme.',
    ],
    link: null,
  },
];