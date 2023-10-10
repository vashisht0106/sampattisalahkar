
const defaultLng = en = require("./en.json");

// Do not edit/remove/add anything below this line!!!

import { getOptionsExtraData } from "../app/services/AccountOptions/optionsExtraData";
import { getSellFastImages } from "../app/services/HowToSellFast/images";
import { getMoreRoutes } from "../app/services/More/moreRoutes";
const routes = getMoreRoutes();
const images = getSellFastImages();
const optionsExtraData = getOptionsExtraData();

//  General String
const __ = (keyString, selectedLanguage) => {
  // let data = `${defaultLng}.${keyString}`;
  let data = `${selectedLanguage}.${keyString}`;
  return `${eval(data)}`;
};

// Account Options
const getAccountOptionsData = (selectedLanguage) => {
  let resData = eval(selectedLanguage)["options_user"];
  resData.map((_dat) => {
    _dat["assetUri"] = optionsExtraData[_dat.id].assetUri;
    _dat["icon"] = optionsExtraData[_dat.id].icon;
    _dat["routeName"] = optionsExtraData[_dat.id].routeName;
  });

  return resData;
};
// Drawer Account Options
const getDrawerAccountOptionsData = (selectedLanguage) => {
  let resData = eval(selectedLanguage)["drawer_account_options"];
  resData.map((_dat) => {
    _dat["assetUri"] = optionsExtraData[_dat.id].assetUri;
    _dat["icon"] = optionsExtraData[_dat.id].icon;
    _dat["routeName"] = optionsExtraData[_dat.id].routeName;
  });

  return resData;
};
// Drawer Support Options
const getDrawerSupportOptionsData = (selectedLanguage) => {
  let resData = eval(selectedLanguage)["drawer_support_options"];
  resData.map((_dat) => {
    _dat["assetUri"] = optionsExtraData[_dat.id].assetUri;
    _dat["icon"] = optionsExtraData[_dat.id].icon;
    _dat["routeName"] = optionsExtraData[_dat.id].routeName;
  });

  return resData;
};

// App Description
const getAppDescription = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"appDescription"}`;
  return eval(data);
};

// FAQ
const getFAQ = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"frequentlyAskedQuestions"}`;
  return eval(data);
};

// Sell Faster
const getSellFastTips = (selectedLanguage) => {
  const data = `${selectedLanguage}.${"sellFastTips"}`;
  let resData = eval(data);
  eval(data).map((_obj) => {
    _obj["uri"] = images[_obj.id];
  });
  return resData;
};

// Privacy Policy
const getPrivacyPolicy = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"privacyPolicy"}`;
  return eval(data);
};

// TnC
const getTnC = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"termsAndConditions"}`;
  return eval(data);
};

const getRelativeTimeConfig = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"relativeTime"}`;
  return eval(data);
};

// week
const getWeek = (selectedLanguage) => {
  let data = `${selectedLanguage}.${"weekDayNames"}`;
  return eval(data);
};

export {
  __,
  getAccountOptionsData,
  getAppDescription,
  getFAQ,
  getSellFastTips,
  getPrivacyPolicy,
  getTnC,
  getRelativeTimeConfig,
  getDrawerAccountOptionsData,
  getDrawerSupportOptionsData,
  getWeek,
};
