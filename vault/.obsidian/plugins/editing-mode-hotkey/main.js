/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => EditingModeHotkey
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var EditingModeHotkey = class extends import_obsidian.Plugin {
  async onload() {
    console.log("loading editing-mode-hotkey");
    this.addCommand({
      id: "toggleDefaultEditingMode",
      name: "Toggle default editing mode (Source/Live Preview)",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "E"
        }
      ],
      callback: () => this.toggleDefaultEditingMode()
    });
  }
  toggleDefaultEditingMode() {
    const livePreview = this.app.vault.getConfig("livePreview");
    if (livePreview === false) {
      this.app.vault.setConfig("livePreview", true);
      this.app.workspace.iterateAllLeaves((leaf) => {
        const view = leaf.getViewState();
        if (view.state.mode === "source") {
          view.state.source = false;
          leaf.setViewState(view);
        }
      });
    } else if (livePreview === true) {
      this.app.vault.setConfig("livePreview", false);
      this.app.workspace.iterateAllLeaves((leaf) => {
        const view = leaf.getViewState();
        if (view.state.mode === "source") {
          view.state.source = true;
          leaf.setViewState(view);
        }
      });
    }
  }
};


/* nosourcemap */