// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";

function string(prim) {
  return prim;
}

function useState(prim) {
  return React.useState(function () {
              return Curry._1(prim, undefined);
            });
}

function App$TextArea(Props) {
  var fontFamily = Props.fontFamily;
  var value = Props.value;
  var onChange = Props.onChange;
  return React.createElement("textarea", {
              className: "p-4  rounded-md bg-primary_100 focus:outline-none  flex-1 shadow  subpixel-antialiased \n      leading-8 hover:shadow-md hover:bg-blend-lighten ring-1 focus:ring-primary_100 resize-none",
              style: {
                fontFamily: fontFamily
              },
              value: value,
              onChange: onChange
            });
}

var TextArea = {
  make: App$TextArea
};

function App(Props) {
  var match = React.useState(function () {
        return "theme-gray";
      });
  var match$1 = React.useState(function () {
        return "သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။";
      });
  var setUnicodeText = match$1[1];
  var match$2 = React.useState(function () {
        return "သီဟိုဠ္မွ ဉာဏ္ႀကီးရွင္သည္ အာယုဝၯနေဆးၫႊန္းစာကို ဇလြန္ေဈးေဘး ဗာဒံပင္ထက္ အဓိ႒ာန္လ်က္ ဂဃနဏဖတ္ခဲ့သည္။";
      });
  var setZawgyiText = match$2[1];
  return React.createElement("div", {
              className: match[0]
            }, React.createElement("div", {
                  className: "flex flex-row space-x-5 p-10 pt-20 bg-primary_700 h-screen justify-between"
                }, React.createElement(App$TextArea, {
                      fontFamily: "Noto Sans Myanmar",
                      value: match$1[0],
                      onChange: (function (e) {
                          return Curry._1(setUnicodeText, (function (param) {
                                        return e.target.value;
                                      }));
                        })
                    }), React.createElement(App$TextArea, {
                      fontFamily: "Zawgyi-One",
                      value: match$2[0],
                      onChange: (function (e) {
                          return Curry._1(setZawgyiText, (function (param) {
                                        return e.target.value;
                                      }));
                        })
                    })));
}

var make = App;

export {
  string ,
  useState ,
  TextArea ,
  make ,
  
}
/* react Not a pure module */
