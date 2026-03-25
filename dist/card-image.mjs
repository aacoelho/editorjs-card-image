(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-card-image{margin:1em auto;background-color:#f8f8f8;color:#000;border-radius:8px;padding:20px}.cdx-card-image__image-container{margin-bottom:8px}.cdx-card-image__image{border-radius:3px;overflow:hidden;width:100%;max-width:100%;display:block;object-fit:contain}.cdx-card-image__file-button{width:100%;display:flex;align-items:center;justify-content:center;border:1px dashed #d3dce6;border-radius:6px;padding:38px;color:#5c6b7a;font-size:14px;cursor:pointer;user-select:none;box-sizing:border-box}.cdx-card-image__file-button svg{width:20px;height:20px;margin:0 8px 0 0}.cdx-card-image__file-button svg path{stroke:none}.cdx-card-image__file-button:hover{color:#0080ff;background-color:#f5f7fa}.cdx-card-image__file-button:hover svg{fill:#0080ff}.cdx-card-image__file-button:hover svg path{fill:#0080ff}.cdx-card-image--empty .cdx-card-image__image,.cdx-card-image--empty .cdx-card-image__buttons-wrapper,.cdx-card-image--filled .cdx-card-image__file-button{display:none}.cdx-card-image--filled .cdx-card-image__buttons-wrapper{display:flex}.cdx-card-image__buttons-wrapper{margin-top:4px;display:flex;gap:4px;width:100%;flex-wrap:wrap}.cdx-card-image__button{flex:1;width:100%;display:flex;align-items:center;justify-content:center;margin-top:0;border-radius:6px;padding:10px 14px;cursor:pointer;user-select:none;box-sizing:border-box;gap:10px;font-size:14px}.cdx-card-image__button svg{flex:0 0 auto;width:18px;height:18px}.cdx-card-image__button--delete{border:1px solid rgba(220,53,69,.35);background-color:#dc35450f;color:#dc3545}.cdx-card-image__button--delete:hover{background-color:#dc35451f}.cdx-card-image__button--replace{border:1px solid rgba(56,138,229,.35);background-color:#388ae514;color:#388ae5}.cdx-card-image__button--replace:hover{background-color:#388ae524}.cdx-card-image__title{font-size:18px;margin-bottom:20px;margin-top:20px;outline:none!important}.cdx-card-image__description{font-size:14px;color:#333;outline:none!important}.cdx-card-image--left{text-align:left}.cdx-card-image--center{text-align:center}.cdx-card-image--right{text-align:right}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var d = Object.defineProperty;
var c = (l, e, t) => e in l ? d(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var n = (l, e, t) => (c(l, typeof e != "symbol" ? e + "" : e, t), t);
class r {
  constructor({ data: e, config: t, api: i, block: a, readOnly: s }) {
    n(this, "api");
    n(this, "block");
    n(this, "readOnly");
    n(this, "_data");
    n(this, "config");
    n(this, "nodes");
    n(this, "addImageButtonPlaceholder");
    n(this, "replaceImageButtonPlaceholder");
    n(this, "deleteImageButtonPlaceholder");
    n(this, "deleteIconSvg", '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>');
    n(this, "replaceIconSvg", '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"></path></svg>');
    n(this, "addImageIconSvg", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path fill="#5C6B7A" fill-rule="nonzero" d="M20 17.778V2.222A2.222 2.222 0 0 0 17.778 0H2.222A2.222 2.222 0 0 0 0 2.222v15.556C0 19.006.994 20 2.222 20h15.556A2.222 2.222 0 0 0 20 17.778ZM6.111 11.667l2.778 3.339L12.778 10l5 6.667H2.222l3.89-5Z"/></svg>');
    n(this, "titlePlaceholder");
    n(this, "descriptionPlaceholder");
    n(this, "aligns", [
      {
        name: "left",
        title: "Align left",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z"/></svg>'
      },
      {
        name: "center",
        title: "Align center",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm-51 101c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.757 1.925 8.542 5.282 11.86 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86ZM525.721 336H114.366c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.358 3.32 7.207 5.223 11.997 5.223H525.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223Zm-52 102.021H165.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.862v33.68c0 4.757 1.432 8.542 4.79 11.86 3.357 3.341 7.677 5.223 11.996 5.223h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862-3.357-3.34-7.207-5.222-11.997-5.222Z"/></svg>'
      },
      {
        name: "right",
        title: "Align right",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm0 101.549c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.757 1.925 8.542 5.282 11.861 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.104 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 102.035c-3.357-3.32-7.207-5.223-11.997-5.223H131.366c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861 3.358 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 101.57c-3.357-3.341-7.207-5.223-11.997-5.223H234.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.861v33.68c0 4.758 1.432 8.542 4.79 11.862 3.357 3.34 7.677 5.222 11.996 5.222h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862Z"/></svg>'
      }
    ]);
    this.config = t, this.api = i, this.block = a, this.readOnly = s, this.addImageButtonPlaceholder = t.addImageButtonPlaceholder || "Click to select an image...", this.replaceImageButtonPlaceholder = t.replaceImageButtonPlaceholder || "Replace image", this.deleteImageButtonPlaceholder = t.deleteImageButtonPlaceholder || "Delete image", this.titlePlaceholder = t.titlePlaceholder || "Add title", this.descriptionPlaceholder = t.descriptionPlaceholder || "Add description", this.data = e, this.nodes = {
      wrapper: null,
      imageContainer: null,
      image: null,
      fileButton: null,
      replaceButton: null,
      fileInput: null,
      deleteButton: null,
      buttonsWrapper: null,
      title: null,
      description: null
    };
  }
  static get DEFAULT_ALIGN_TYPE() {
    return "left";
  }
  get classes() {
    return {
      wrapper: "cdx-card-image",
      imageContainer: "cdx-card-image__image-container",
      image: "cdx-card-image__image",
      fileButton: "cdx-card-image__file-button",
      replaceButton: ["cdx-card-image__button", "cdx-card-image__button--replace"],
      deleteButton: ["cdx-card-image__button", "cdx-card-image__button--delete"],
      buttonsWrapper: "cdx-card-image__buttons-wrapper",
      title: "cdx-card-image__title",
      description: "cdx-card-image__description",
      wrapperForAlignType: (e) => `cdx-card-image--${e}`
    };
  }
  set data(e) {
    this._data = Object.assign({}, {
      file: e.file,
      title: e.title || "",
      description: e.description || "",
      align: e.align || r.DEFAULT_ALIGN_TYPE
    });
  }
  get data() {
    return this._data;
  }
  render() {
    var t, i, a;
    this.nodes.wrapper = this.make("div", this.classes.wrapper), this.updateImageState(), this.nodes.imageContainer = this.make("div", this.classes.imageContainer);
    const e = this.getCurrentFileUrl();
    if (e && (this.nodes.image = this.make("img", this.classes.image, {
      src: e,
      alt: "Card image"
    }), this.nodes.imageContainer.appendChild(this.nodes.image)), !this.readOnly) {
      const s = document.createElement("input");
      s.type = "file", s.accept = "image/*", s.style.display = "none", this.nodes.fileInput = s, this.nodes.fileButton = this.make("div", this.classes.fileButton, {
        innerHTML: `${this.addImageIconSvg}<span class="cdx-card-image__file-button-text">${this.addImageButtonPlaceholder}</span>`
      }), this.nodes.buttonsWrapper = this.make("div", this.classes.buttonsWrapper), this.nodes.replaceButton = this.make("div", this.classes.replaceButton, {
        innerHTML: `${this.replaceIconSvg}<span class="cdx-card-image__replace-button-text">${this.replaceImageButtonPlaceholder}</span>`
      }), this.nodes.deleteButton = this.make("div", this.classes.deleteButton, {
        innerHTML: `${this.deleteIconSvg}<span class="cdx-card-image__delete-button-text">${this.deleteImageButtonPlaceholder}</span>`
      }), this.nodes.fileButton.addEventListener("click", () => this.pickImage()), (t = this.nodes.replaceButton) == null || t.addEventListener("click", () => this.pickImage()), this.nodes.deleteButton.addEventListener("click", () => this.clearFile()), typeof this.config.selectFiles != "function" && s.addEventListener("change", () => this.handleNativeFileChange()), this.nodes.imageContainer.appendChild(this.nodes.fileButton), (i = this.nodes.buttonsWrapper) == null || i.appendChild(this.nodes.replaceButton), (a = this.nodes.buttonsWrapper) == null || a.appendChild(this.nodes.deleteButton), this.nodes.imageContainer.appendChild(this.nodes.buttonsWrapper), this.nodes.imageContainer.appendChild(this.nodes.fileInput);
    }
    return this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.title = this.make("div", this.classes.title, {
      contentEditable: this.readOnly ? "false" : "true",
      innerHTML: this._data.title || ""
    }), this.nodes.title.dataset.placeholder = this.titlePlaceholder, this.nodes.wrapper.appendChild(this.nodes.title), this.nodes.description = this.make("div", this.classes.description, {
      contentEditable: this.readOnly ? "false" : "true",
      innerHTML: this._data.description || ""
    }), this.nodes.description.dataset.placeholder = this.descriptionPlaceholder, this.nodes.wrapper.appendChild(this.nodes.description), this.updateAlign(this._data.align || r.DEFAULT_ALIGN_TYPE), this.nodes.wrapper;
  }
  save() {
    var e, t;
    return {
      file: this._data.file,
      title: this.getCleanContent(((e = this.nodes.title) == null ? void 0 : e.innerHTML) || ""),
      description: this.getCleanContent(((t = this.nodes.description) == null ? void 0 : t.innerHTML) || ""),
      align: this._data.align
    };
  }
  validate(e) {
    var t, i, a;
    return !!(((i = (t = e.file) == null ? void 0 : t.url) == null ? void 0 : i.trim()) || ((a = e.title) == null ? void 0 : a.trim()));
  }
  renderSettings() {
    return this.aligns.map((t) => ({
      icon: t.icon,
      name: `align-${t.name}`,
      label: t.title,
      toggle: "align",
      isActive: this._data.align === t.name,
      onActivate: () => {
        this.updateAlign(t.name);
      }
    }));
  }
  static get sanitize() {
    return {
      file: !1,
      title: !0,
      description: !0,
      align: !1
    };
  }
  static get toolbox() {
    return {
      title: "Card with image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"></path></svg>'
    };
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get isReadOnlySupported() {
    return !0;
  }
  getCurrentFileUrl(e = this._data.file) {
    var t, i;
    return ((i = (t = e == null ? void 0 : e.sizes) == null ? void 0 : t.large) == null ? void 0 : i.url) || (e == null ? void 0 : e.url) || "";
  }
  extractFile(e) {
    var t, i;
    if (typeof e == "string")
      return { url: e };
    if ((e == null ? void 0 : e.success) === 1 && ((t = e == null ? void 0 : e.file) == null ? void 0 : t.url) || (i = e == null ? void 0 : e.file) != null && i.url)
      return e.file;
    if (e != null && e.url)
      return { url: e.url };
  }
  setFile(e) {
    var a, s;
    this._data.file = e, this.updateImageState();
    const t = this.getCurrentFileUrl(e);
    if (this.nodes.image) {
      this.nodes.image.src = t;
      return;
    }
    this.nodes.image = this.make("img", this.classes.image, {
      src: t,
      alt: "Card image"
    });
    const i = ((a = this.nodes.imageContainer) == null ? void 0 : a.firstChild) || null;
    (s = this.nodes.imageContainer) == null || s.insertBefore(this.nodes.image, i);
  }
  async pickImage() {
    try {
      if (typeof this.config.selectFiles == "function") {
        const t = await this.config.selectFiles(), i = this.extractFile(t);
        i != null && i.url && this.setFile(i);
        return;
      }
      const e = this.nodes.fileInput;
      e == null || e.click();
    } catch (e) {
      console.error(e);
    }
  }
  handleNativeFileChange() {
    var a;
    const e = this.nodes.fileInput, t = (a = e == null ? void 0 : e.files) == null ? void 0 : a[0];
    if (!t)
      return;
    const i = new FileReader();
    i.onload = () => {
      const s = i.result;
      typeof s == "string" && this.setFile({
        url: s,
        name: t.name,
        type: t.type,
        size: t.size
      });
    }, i.readAsDataURL(t), e.value = "";
  }
  clearFile() {
    this._data.file = void 0, this.updateImageState(), this.nodes.image && (this.nodes.image.src = "");
  }
  updateImageState() {
    var t, i, a;
    const e = !!((t = this._data.file) != null && t.url);
    (i = this.nodes.wrapper) == null || i.classList.toggle("cdx-card-image--filled", e), (a = this.nodes.wrapper) == null || a.classList.toggle("cdx-card-image--empty", !e);
  }
  getCleanContent(e) {
    return e ? e.replace(/^<br\/?>$/i, "").replace(/^<p><br\/?>?<\/p>$/i, "").replace(/^<div><br\/?>?<\/div>$/i, "").replace(/^\s*$/, "") : "";
  }
  updateAlign(e) {
    var t;
    this._data.align === e && ((t = this.nodes.wrapper) == null ? void 0 : t.classList.contains(this.classes.wrapperForAlignType(e))) || (this._data.align = e, this.aligns.forEach((i) => {
      var a;
      (a = this.nodes.wrapper) == null || a.classList.toggle(this.classes.wrapperForAlignType(i.name), this._data.align === i.name);
    }));
  }
  make(e, t = [], i = {}) {
    const a = document.createElement(e);
    Array.isArray(t) ? a.classList.add(...t) : t && a.classList.add(t);
    for (const s in i)
      a[s] = i[s];
    return a;
  }
}
export {
  r as default
};
