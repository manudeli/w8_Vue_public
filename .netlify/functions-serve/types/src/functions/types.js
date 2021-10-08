var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// functions/types.ts
__export(exports, {
  ApiType: () => ApiType,
  Methods: () => Methods,
  OptionType: () => OptionType
});
var Methods;
(function(Methods2) {
  Methods2["get"] = "GET";
  Methods2["post"] = "POST";
  Methods2["put"] = "PUT";
  Methods2["delete"] = "DELETE";
  Methods2["connect"] = "CONNECT";
  Methods2["patch"] = "PATCH";
})(Methods || (Methods = {}));
var ApiType;
(function(ApiType2) {
  ApiType2["id"] = "i";
  ApiType2["title"] = "t";
  ApiType2["search"] = "s";
})(ApiType || (ApiType = {}));
var OptionType;
(function(OptionType2) {
  OptionType2["year"] = "y";
  OptionType2["type"] = "type";
  OptionType2["page"] = "page";
})(OptionType || (OptionType = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiType,
  Methods,
  OptionType
});
//# sourceMappingURL=types.js.map
