// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as TrashButton from "./TrashButton.js";
import * as CopyMenuButton from "./CopyMenuButton.js";
import * as LayoutToggleButton from "./LayoutToggleButton.js";

function ActionBar(Props) {
  var className = Props.className;
  var toggleState = Props.toggleState;
  var onDelete = Props.onDelete;
  var onCopy = Props.onCopy;
  var onToggle = Props.onToggle;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  return React.createElement("div", tmp, React.createElement(TrashButton.make, {
                  className: "h-8 w-8",
                  onClick: (function (e) {
                      e.preventDefault();
                      return Curry._1(onDelete, undefined);
                    })
                }), React.createElement(CopyMenuButton.make, {
                  className: "h-8 w-8",
                  onCopyZawgyiText: (function (e) {
                      e.preventDefault();
                      return Curry._1(onCopy, /* ZawgyiText */0);
                    }),
                  onCopyUnicodeText: (function (e) {
                      e.preventDefault();
                      return Curry._1(onCopy, /* UnicodeText */1);
                    }),
                  onCopyBoth: (function (e) {
                      e.preventDefault();
                      return Curry._1(onCopy, /* BothText */2);
                    })
                }), React.createElement(LayoutToggleButton.make, {
                  className: "hidden md:block h-8 w-8",
                  toggleState: toggleState,
                  onClick: (function (e) {
                      e.preventDefault();
                      return Curry._1(onToggle, undefined);
                    })
                }));
}

var make = ActionBar;

export {
  make ,
  
}
/* react Not a pure module */
