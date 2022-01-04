// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as React$1 from "@headlessui/react";

function ConfirmDialog(Props) {
  var isOpen = Props.isOpen;
  var onClose = Props.onClose;
  var $$delete = Props.delete;
  return React.createElement(React$1.Dialog, {
              open: isOpen,
              onClose: (function (param) {
                  
                }),
              as: "div",
              children: (function (param) {
                  return React.createElement("div", {
                              className: "min-h-screen px-4 text-center bg-primary_600"
                            }, React.createElement(React$1.Dialog.Overlay, {
                                  className: "fixed inset-0"
                                }), React.createElement("span", {
                                  "aria-hidden": true,
                                  className: "inline-block h-screen align-middle"
                                }), React.createElement("div", {
                                  className: "inline-block w-[22rem] max-w-md p-6 overflow-hidden text-left align-middle transition-all transform shadow-md rounded-md bg-slate-50 mt-[-5rem]"
                                }, React.createElement(React$1.Dialog.Title, {
                                      className: "text-lg font-medium leading-6 text-primary_900",
                                      children: (function (param) {
                                          return "Deletion";
                                        })
                                    }), React.createElement("div", {
                                      className: "mt-2"
                                    }, React.createElement("p", {
                                          className: "text-sm text-gray-500"
                                        }, "Are you sure to delete the text?")), React.createElement("div", {
                                      className: "flex mt-4 space-x-4"
                                    }, React.createElement("button", {
                                          className: "inline-flex w-[5rem] justify-center px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 border border-transparent rounded-md hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500",
                                          type: "button",
                                          onClick: (function (e) {
                                              e.preventDefault();
                                              return Curry._1(onClose, undefined);
                                            })
                                        }, "Cancel"), React.createElement("button", {
                                          className: "inline-flex w-[5rem] justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                                          type: "button",
                                          onClick: (function (e) {
                                              e.preventDefault();
                                              Curry._1($$delete, undefined);
                                              return Curry._1(onClose, undefined);
                                            })
                                        }, "Yes"))));
                }),
              className: "fixed inset-0 z-[100]"
            });
}

var make = ConfirmDialog;

export {
  make ,
  
}
/* react Not a pure module */
