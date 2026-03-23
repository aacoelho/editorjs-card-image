(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-card-image{--bg-color: #ebf0f5;--front-color: #388ae5;--border-color: #d3dce6;margin:1em auto;background-color:#f8f8f8;color:#000;border-radius:8px;padding:20px}.cdx-card-image__image-container{margin-bottom:8px}.cdx-card-image__image{border-radius:3px;overflow:hidden;width:100%;max-width:100%;vertical-align:bottom;display:block;object-fit:contain;background:rgba(0,0,0,.04)}.cdx-card-image__file-button{width:100%;display:flex;align-items:center;justify-content:center;border:1px dashed #d3dce6;background-color:#f5f7fa;border-radius:6px;padding:38px;color:#5c6b7a;font-size:14px;cursor:pointer;user-select:none;box-sizing:border-box}.cdx-card-image__file-button svg{width:20px;height:20px;margin:0 8px 0 0}.cdx-card-image__file-button svg path{stroke:none}.cdx-card-image__file-button:hover{color:#0080ff}.cdx-card-image__file-button:hover svg{fill:#0080ff}.cdx-card-image__file-button:hover svg path{fill:#0080ff}.cdx-card-image--empty .cdx-card-image__image,.cdx-card-image--filled .cdx-card-image__file-button{display:none}.cdx-card-image__title{font-size:18px;margin-bottom:20px;outline:none!important}.cdx-card-image__description{font-size:14px;color:#333;outline:none!important}.cdx-card-image--left{text-align:left}.cdx-card-image--center{text-align:center}.cdx-card-image--right{text-align:right}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var d = Object.defineProperty;
var o = (r, e, t) => e in r ? d(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (o(r, typeof e != "symbol" ? e + "" : e, t), t);
class c {
  constructor({ data: e, config: t, api: s, block: a, readOnly: i }) {
    n(this, "api");
    n(this, "block");
    n(this, "readOnly");
    n(this, "_data");
    n(this, "config");
    n(this, "nodes");
    n(this, "imageButtonContent");
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
    this.config = t, this.api = s, this.block = a, this.readOnly = i, this.imageButtonContent = t.imageButtonContent || t.addImagePlaceholder || "Click to select an image...", this.titlePlaceholder = t.titlePlaceholder || "Add title", this.descriptionPlaceholder = t.descriptionPlaceholder || "Add description", this.data = e, this.nodes = {
      wrapper: null,
      imageContainer: null,
      image: null,
      fileButton: null,
      fileInput: null,
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
      title: "cdx-card-image__title",
      description: "cdx-card-image__description",
      wrapperForAlignType: (e) => `cdx-card-image--${e}`
    };
  }
  set data(e) {
    const t = e.value, s = typeof t == "string" && (t.startsWith("data:") || t.startsWith("http://") || t.startsWith("https://") || t.startsWith("/"));
    this._data = Object.assign({}, {
      imageUrl: e.imageUrl || (s ? t : ""),
      title: e.title || "",
      description: e.description || "",
      align: e.align || c.DEFAULT_ALIGN_TYPE
    });
  }
  get data() {
    return this._data;
  }
  render() {
    if (this.nodes.wrapper = this.make("div", this.classes.wrapper), this.updateImageState(), this.nodes.imageContainer = this.make("div", this.classes.imageContainer), this._data.imageUrl && (this.nodes.image = this.make("img", this.classes.image, {
      src: this._data.imageUrl,
      alt: "Card image"
    }), this.nodes.imageContainer.appendChild(this.nodes.image)), !this.readOnly) {
      const e = document.createElement("input");
      e.type = "file", e.accept = "image/*", e.style.display = "none", this.nodes.fileInput = e, this.nodes.fileButton = this.make("div", this.classes.fileButton, {
        innerHTML: this.imageButtonContent
      });
      const t = (s) => {
        var i, l;
        if (this._data.imageUrl = s, this.updateImageState(), this.nodes.image) {
          this.nodes.image.src = s;
          return;
        }
        this.nodes.image = this.make("img", this.classes.image, {
          src: s,
          alt: "Card image"
        });
        const a = ((i = this.nodes.imageContainer) == null ? void 0 : i.firstChild) || null;
        (l = this.nodes.imageContainer) == null || l.insertBefore(this.nodes.image, a);
      };
      this.nodes.fileButton.addEventListener("click", async () => {
        var s, a;
        try {
          if (typeof this.config.selectFiles == "function") {
            const i = await this.config.selectFiles(), l = typeof i == "string" ? i : (i == null ? void 0 : i.url) || ((i == null ? void 0 : i.success) === 1 ? (s = i == null ? void 0 : i.file) == null ? void 0 : s.url : "") || ((a = i == null ? void 0 : i.file) == null ? void 0 : a.url) || "";
            if (l) {
              t(l);
              return;
            }
          }
          e.click();
        } catch (i) {
          console.error(i);
        }
      }), e.addEventListener("change", () => {
        var i;
        const s = (i = e.files) == null ? void 0 : i[0];
        if (!s)
          return;
        const a = new FileReader();
        a.onload = () => {
          const l = a.result;
          typeof l == "string" && t(l);
        }, a.readAsDataURL(s), e.value = "";
      }), this.nodes.imageContainer.appendChild(this.nodes.fileButton), this.nodes.imageContainer.appendChild(this.nodes.fileInput);
    }
    return this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.title = this.make("div", this.classes.title, {
      contentEditable: this.readOnly ? "false" : "true",
      innerHTML: this._data.title || ""
    }), this.nodes.title.dataset.placeholder = this.titlePlaceholder, this.nodes.wrapper.appendChild(this.nodes.title), this.nodes.description = this.make("div", this.classes.description, {
      contentEditable: this.readOnly ? "false" : "true",
      innerHTML: this._data.description || ""
    }), this.nodes.description.dataset.placeholder = this.descriptionPlaceholder, this.nodes.wrapper.appendChild(this.nodes.description), this.updateAlign(this._data.align || c.DEFAULT_ALIGN_TYPE), this.nodes.wrapper;
  }
  save() {
    var e, t;
    return {
      imageUrl: this._data.imageUrl || "",
      title: this.getCleanContent(((e = this.nodes.title) == null ? void 0 : e.innerHTML) || ""),
      description: this.getCleanContent(((t = this.nodes.description) == null ? void 0 : t.innerHTML) || ""),
      align: this._data.align
    };
  }
  validate(e) {
    var t, s;
    return !!(((t = e.imageUrl) == null ? void 0 : t.trim()) || ((s = e.title) == null ? void 0 : s.trim()));
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
      imageUrl: !1,
      title: !0,
      description: !0,
      align: !1
    };
  }
  static get toolbox() {
    return {
      title: "Image card",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM140,80v96a8,8,0,0,1-16,0V95l-11.56,7.71a8,8,0,1,1-8.88-13.32l24-16A8,8,0,0,1,140,80Z"></path></svg>'
    };
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get isReadOnlySupported() {
    return !0;
  }
  updateImageState() {
    var t, s;
    const e = !!this._data.imageUrl;
    (t = this.nodes.wrapper) == null || t.classList.toggle("cdx-card-image--filled", e), (s = this.nodes.wrapper) == null || s.classList.toggle("cdx-card-image--empty", !e);
  }
  getCleanContent(e) {
    return e ? e.replace(/^<br\/?>$/i, "").replace(/^<p><br\/?>?<\/p>$/i, "").replace(/^<div><br\/?>?<\/div>$/i, "").replace(/^\s*$/, "") : "";
  }
  updateAlign(e) {
    var t;
    this._data.align === e && ((t = this.nodes.wrapper) == null ? void 0 : t.classList.contains(this.classes.wrapperForAlignType(e))) || (this._data.align = e, this.aligns.forEach((s) => {
      var a;
      (a = this.nodes.wrapper) == null || a.classList.toggle(this.classes.wrapperForAlignType(s.name), this._data.align === s.name);
    }));
  }
  make(e, t = [], s = {}) {
    const a = document.createElement(e);
    Array.isArray(t) ? a.classList.add(...t) : t && a.classList.add(t);
    for (const i in s)
      a[i] = s[i];
    return a;
  }
}
export {
  c as default
};
