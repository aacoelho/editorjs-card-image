/**
 * Import styles
 */
import './index.scss';

/**
 * Import types
 */
import { cardImageData, cardImageConfig, cardImageFile } from './types';
import { API, BlockAPI, BlockTool } from '@editorjs/editorjs';

/**
 * card image Tool for Editor.js
 */
export default class cardImage implements BlockTool {
  /**
   * Code API — public methods to work with Editor
   * 
   * @link https://editorjs.io/api
   */
   private readonly api: API;

  /**
   * Block API — methods and properties to work with Block instance
   * 
   * @link https://editorjs.io/blockapi
   */
  private readonly block: BlockAPI;

  /**
   * Read-only mode flag
   */
  private readonly readOnly: boolean;

  /**
   * Tool data for input and output
   */
  private _data!: cardImageData;

  /**
   * Configuration object that passed through the initial Editor configuration.
   */
  private config: cardImageConfig;

  /**
   * Tool's HTML nodes
   */
  private nodes: {[key: string]: HTMLElement|null};

  /**
   * Image pick button label
   */
  private addImageButtonPlaceholder: string;

  /**
   * Replace image button label
   */
  private replaceImageButtonPlaceholder: string;

  /**
   * Delete image button label
   */
  private deleteImageButtonPlaceholder: string;

  /**
   * Icon shown in the delete button.
   * Uses `currentColor` so it matches the button text color.
   */
  private readonly deleteIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>`;

  /**
   * Icon shown in the replace button.
   * Uses `currentColor` so it matches the button text color.
   */
  private readonly replaceIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"></path></svg>`;

  /**
   * Title input placeholder
   */
  private titlePlaceholder: string;

  /**
   * Description input placeholder
   */
  private descriptionPlaceholder: string;

  /**
   * Available alignments
   */
  private aligns = [
    {
      name: 'left',
      title: 'Align left',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M85.282 500.778c3.357 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86Zm0-101.549c3.357 3.32 7.207 5.222 11.997 5.222h342.71c4.812 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.757-1.925-8.542-5.282-11.861-3.357-3.32-7.185-5.223-11.997-5.223H97.28c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.104-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-102.035c3.357 3.32 7.207 5.223 11.997 5.223h411.355c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861-3.358-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861Zm0-101.57c3.357 3.341 7.207 5.223 11.997 5.223h308.645c4.32 0 8.639-1.882 11.996-5.222 3.358-3.32 4.79-7.104 4.79-11.861v-33.68c0-4.758-1.432-8.542-4.79-11.862-3.357-3.34-7.677-5.222-11.996-5.222H97.279c-4.79 0-8.64 1.882-11.997 5.222-3.357 3.32-5.282 7.104-5.282 11.861v33.68c0 4.758 1.925 8.542 5.282 11.862Z"/></svg>`
    },
    {
      name: 'center',
      title: 'Align center',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm-51 101c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.757 1.925 8.542 5.282 11.86 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86ZM525.721 336H114.366c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.542 5.282 11.86 3.358 3.32 7.207 5.223 11.997 5.223H525.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86-3.357-3.32-7.207-5.223-11.997-5.223Zm-52 102.021H165.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.862v33.68c0 4.757 1.432 8.542 4.79 11.86 3.357 3.341 7.677 5.223 11.996 5.223h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862-3.357-3.34-7.207-5.222-11.997-5.222Z"/></svg>`
    },
    {
      name: 'right',
      title: 'Align right',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#000000" fill-rule="nonzero" d="M554.718 138.222c-3.357-3.32-7.207-5.222-11.997-5.222H97.28c-4.79 0-8.64 1.903-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.861v33.702c0 4.736 1.925 8.541 5.282 11.86 3.357 3.32 7.207 5.223 11.997 5.223H542.72c4.79 0 8.64-1.903 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.861v-33.702c0-4.736-1.925-8.541-5.282-11.86Zm0 101.549c-3.357-3.32-7.207-5.222-11.997-5.222h-342.71c-4.812 0-8.64 1.902-11.997 5.222-3.357 3.32-5.282 7.125-5.282 11.86v33.702c0 4.757 1.925 8.542 5.282 11.861 3.357 3.32 7.185 5.223 11.997 5.223h342.71c4.79 0 8.64-1.903 11.997-5.223 3.357-3.319 5.282-7.104 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 102.035c-3.357-3.32-7.207-5.223-11.997-5.223H131.366c-4.79 0-8.64 1.903-11.997 5.223-3.357 3.319-5.282 7.125-5.282 11.86v33.702c0 4.736 1.925 8.542 5.282 11.861 3.358 3.32 7.207 5.222 11.997 5.222H542.72c4.79 0 8.64-1.902 11.997-5.222 3.357-3.32 5.282-7.125 5.282-11.86v-33.702c0-4.736-1.925-8.542-5.282-11.861Zm0 101.57c-3.357-3.341-7.207-5.223-11.997-5.223H234.076c-4.32 0-8.639 1.882-11.996 5.222-3.358 3.32-4.79 7.104-4.79 11.861v33.68c0 4.758 1.432 8.542 4.79 11.862 3.357 3.34 7.677 5.222 11.996 5.222h308.645c4.79 0 8.64-1.882 11.997-5.222 3.357-3.32 5.282-7.104 5.282-11.861v-33.68c0-4.758-1.925-8.542-5.282-11.862Z"/></svg>`
    }
  ];

  /**
   * Default alignment type
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGN_TYPE() {
    return 'left';
  }

  /**
   * Class constructor
   * 
   * @link https://editorjs.io/tools-api#class-constructor
   */
  constructor({ data, config, api, block, readOnly }: { data: cardImageData, config: cardImageConfig, api: API, block: BlockAPI, readOnly: boolean }) {
    this.config = config;
    this.api = api;
    this.block = block;
    this.readOnly = readOnly;

    this.addImageButtonPlaceholder =
      config.addImageButtonPlaceholder || 'Click to select an image...';
    this.replaceImageButtonPlaceholder = config.replaceImageButtonPlaceholder || 'Replace image';
    this.deleteImageButtonPlaceholder = config.deleteImageButtonPlaceholder || 'Delete image';
    this.titlePlaceholder = config.titlePlaceholder || 'Add title';
    this.descriptionPlaceholder = config.descriptionPlaceholder || 'Add description';

    // Use data setter to automatically sanitize
    this.data = data;

    /**
     * Declare Tool's nodes
     */
    this.nodes = {
      wrapper: null,
      imageContainer: null,
      image: null,
      fileButton: null,
      replaceButton: null,
      fileInput: null,
      deleteButton: null,
      buttonsWrapper: null,
      title: null,
      description: null,
    };
  }

  /**
   * Class names
   *
   * @returns {Object}
   */
  get classes() {
    return {
      wrapper: 'cdx-card-image',
      imageContainer: 'cdx-card-image__image-container',
      image: 'cdx-card-image__image',
      fileButton: 'cdx-card-image__file-button',
      replaceButton: 'cdx-card-image__replace-button',
      deleteButton: 'cdx-card-image__delete-button',
      buttonsWrapper: 'cdx-card-image__buttons-wrapper',
      title: 'cdx-card-image__title',
      description: 'cdx-card-image__description',
      wrapperForAlignType: (alignType: string) => `cdx-card-image--${alignType}`,
    };
  }

  /**
   * Data setter
   * @param {cardImageData} data - Raw data to store (Editor.js handles sanitization automatically)
   */
  set data(data: cardImageData) {
    this._data = Object.assign({}, {
      file: data.file,
      title: data.title || "",
      description: data.description || "",
      align: data.align || cardImage.DEFAULT_ALIGN_TYPE,
    });
  }

  /**
   * Data getter
   * @returns {cardImageData} Current tool data
   */
  get data(): cardImageData {
    return this._data;
  }

  /**
   * PUBLIC METHODS
   * 
   * @link https://editorjs.io/tools-api#public-methods
   */

  /**
   * Creates UI of a Block
   * Required
   * @link https://editorjs.io/tools-api#render
   * 
   * @returns {HTMLElement}
   */
  render() {
    this.nodes.wrapper = this.make('div', this.classes.wrapper);
    // Initialize empty/filled state (used by `index.scss`)
    this.updateImageState();

    // Image area
    this.nodes.imageContainer = this.make('div', this.classes.imageContainer);

    // If image exists (saved state / read-only), render it immediately
    const currentUrl = this._data.file?.sizes?.large?.url || this._data.file?.url;
    if (currentUrl) {
      this.nodes.image = this.make('img', this.classes.image, {
        src: currentUrl,
        alt: 'Card image',
      });
      this.nodes.imageContainer.appendChild(this.nodes.image);
    }

    if (!this.readOnly) {
      // Hidden native file input (fallback when `config.selectFiles` isn't provided)
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      this.nodes.fileInput = fileInput;

      // Button that triggers `selectFiles` or the native picker
      this.nodes.fileButton = this.make('div', this.classes.fileButton, {
        innerHTML: this.addImageButtonPlaceholder,
      });

      // Wrap replace/delete buttons together for easier styling/layout
      this.nodes.buttonsWrapper = this.make('div', this.classes.buttonsWrapper);

      // Button shown when an image exists (used for replacing)
      this.nodes.replaceButton = this.make('div', this.classes.replaceButton, {
        innerHTML: `${this.replaceIconSvg}<span class="cdx-card-image__replace-button-text">${this.replaceImageButtonPlaceholder}</span>`,
      });

      // Delete button (clears `file`)
      this.nodes.deleteButton = this.make('div', this.classes.deleteButton, {
        innerHTML: `${this.deleteIconSvg}<span class="cdx-card-image__delete-button-text">${this.deleteImageButtonPlaceholder}</span>`,
      });

      const setFile = (file: cardImageFile) => {
        this._data.file = file;
        this.updateImageState();

        if (this.nodes.image) {
          const url = file?.sizes?.large?.url || file?.url || '';
          (this.nodes.image as HTMLImageElement).src = url;
          return;
        }

        const url = file?.sizes?.large?.url || file?.url || '';
        this.nodes.image = this.make('img', this.classes.image, {
          src: url,
          alt: 'Card image',
        });

        // Insert image above the buttons (if they exist)
        const firstChild = this.nodes.imageContainer?.firstChild || null;
        this.nodes.imageContainer?.insertBefore(this.nodes.image, firstChild);
      };

      const pickImage = async () => {
        try {
          if (typeof this.config.selectFiles === 'function') {
            const result = await this.config.selectFiles();

            const extractedFile: cardImageFile | undefined =
              typeof result === 'string'
                ? { url: result }
                : (result?.success === 1 && result?.file?.url ? result.file : undefined) ||
                  (result?.file?.url ? result.file : undefined) ||
                  (result?.url ? { url: result.url } : undefined);

            if (extractedFile?.url) {
              setFile(extractedFile);
              return;
            }
          }

          // Fallback: use local file picker and store a data URL
          fileInput.click();
        } catch (e) {
          console.error(e);
        }
      };

      this.nodes.fileButton.addEventListener('click', pickImage);
      this.nodes.replaceButton?.addEventListener('click', pickImage);

      this.nodes.deleteButton.addEventListener('click', () => {
        this._data.file = undefined;
        this.updateImageState();

        if (this.nodes.image) {
          (this.nodes.image as HTMLImageElement).src = '';
        }
      });

      // If buttons wrapper exists, ensure it sits after image
      // (button visibility is still controlled by `cdx-card-image--empty/--filled` CSS).

      fileInput.addEventListener('change', () => {
        const file = fileInput.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (typeof result === 'string') {
            setFile({
              url: result,
              name: file.name,
              type: file.type,
              size: file.size,
            });
          }
        };
        reader.readAsDataURL(file);

        // Allow selecting the same file again
        fileInput.value = '';
      });

      this.nodes.imageContainer.appendChild(this.nodes.fileButton);

      // Append replace/delete inside wrapper (and file input after)
      this.nodes.buttonsWrapper?.appendChild(this.nodes.replaceButton);
      this.nodes.buttonsWrapper?.appendChild(this.nodes.deleteButton);
      this.nodes.imageContainer.appendChild(this.nodes.buttonsWrapper);
      this.nodes.imageContainer.appendChild(this.nodes.fileInput);
    }

    this.nodes.wrapper.appendChild(this.nodes.imageContainer);

    // Title input
    this.nodes.title = this.make('div', this.classes.title, {
      contentEditable: !this.readOnly ? 'true' : 'false',
      innerHTML: this._data.title || '',
    });
    this.nodes.title.dataset.placeholder = this.titlePlaceholder;

    this.nodes.wrapper.appendChild(this.nodes.title);

    // Description input
    this.nodes.description = this.make('div', this.classes.description, {
      contentEditable: !this.readOnly ? 'true' : 'false',
      innerHTML: this._data.description || '',
    });
    this.nodes.description.dataset.placeholder = this.descriptionPlaceholder;

    this.nodes.wrapper.appendChild(this.nodes.description);

    // Apply alignment
    this.updateAlign(this._data.align || cardImage.DEFAULT_ALIGN_TYPE);

    return this.nodes.wrapper;
  }

  /**
   * Extracts Block data from the UI
   * Required
   * @link https://editorjs.io/tools-api#save
   * 
   * @returns {cardImageData} saved data
   */
  save(): cardImageData {
    return {
      file: this._data.file,
      title: this.getCleanContent(this.nodes.title?.innerHTML || ''),
      description: this.getCleanContent(this.nodes.description?.innerHTML || ''),
      align: this._data.align,
    };
  }

  /**
   * Validates Block data after saving
   * @link https://editorjs.io/tools-api#validate
   * 
   * @param {cardImageData} savedData
   * @returns {boolean} true if data is valid, otherwise false
   */ 
  validate(savedData: cardImageData): boolean {
    // Require at least an image or title to be present
    return !!(savedData.file?.url?.trim() || savedData.title?.trim());
  }

  /**
   * 
   * Returns HTML that will be appended at the top of Block-settings
   * @link https://editorjs.io/tools-api#render-settings
   * 
   * @returns {HTMLElement}
   */ 
  renderSettings() {
    const alignTypes = this.aligns.map((align) => ({
      icon: align.icon,
      name: `align-${align.name}`,
      label: align.title,
      toggle: 'align',
      isActive: this._data.align === align.name,
      onActivate: () => {
        this.updateAlign(align.name);
      },
    }));

    return alignTypes;
  }

  /**
   * Clear Tools stuff: cache, variables, events.
   * Called when Editor instance is destroying.
   * @link https://editorjs.io/tools-api#destroy
   * 
   * @returns {void}
   */
  // destroy() {}

  /**
   * Handle content pasted by ways that described by pasteConfig static getter
   * @link https://editorjs.io/tools-api#on-paste
   * 
   * @param {PasteEvent} event - event with pasted content
   * @returns {void}
   */  
  // onPaste() {}

  /**
   * Specifies how to merge two similar Blocks
   * @link https://editorjs.io/tools-api#merge
   * 
   * @param {cardImageData} data - data of second Block
   * @returns {cardImageData} - merged data
   */
  // merge() {} 

  /**
   * STATIC GETTERS
   * 
   * @link https://editorjs.io/tools-api#static-getters
   */

  /**
   * Process pasted content before appending to the Editor
   * @link https://editorjs.io/tools-api#pasteconfig
   * 
   * @returns {tags?: string[], files?: { mimeTypes: string[], extensions: string[] }, patterns?: { [string]: RegEx }}
   */ 
  // static get pasteConfig() {
  //   return {
  //     /**
  //      * Paste HTML into Editor
  //      */
  //     tags: [],
    
  //     /**
  //      * Paste URL of media into the Editor
  //      */
  //     patterns: {},
    
  //     /**
  //      * Drag n drop file from into the Editor
  //      */
  //     files: {
  //       mimeTypes: [ ],
  //     },
  //   };
  // }

  /**
   * Clean unwanted HTML tags or attributes
   * @link https://editorjs.io/tools-api#sanitize
   * 
   * @returns {{[string]: boolean|object}} - Sanitizer rules
   */
  static get sanitize() {
    return {
      file: false,        // Keep uploaded file object as-is
      title: true,      // Allow all inline formatting in titles
      description: true, // Allow all inline formatting in descriptions
      align: false,     // Keep alignment as plain text
    };
  } 

  /**
   * Describe an icon and title here
   * Required if Tools should be added to the Toolbox
   * @link https://editorjs.io/tools-api#toolbox
   * 
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'Card with image',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V88A16,16,0,0,0,184,72Zm0,128H40V88H184V200ZM232,56V176a8,8,0,0,1-16,0V56H64a8,8,0,0,1,0-16H216A16,16,0,0,1,232,56Z"></path></svg>',
    };
  }

  /**
   * Shortcut that fires render method and inserts new Block
   * @link https://editorjs.io/tools-api#shortcut
   * 
   * @returns {string}
   */
  // static get shortcut() {
  //   // return 'CMD+SHIFT+I';
  // }

  /**
   * Config allows Tool to specify how it can be converted into/from another Tool
   * 
   * @link https://editorjs.io/tools-api#conversionconfig
   * 
   * @returns {{export: string|function, import: string|function}}
   */
  // static get conversionConfig() {
  //   // return {
  //   //   export: (data) => {
  //   //     return data.items.join('.'); // in this example, all list items will be concatenated to an export string
  //   //   },
  //   //  
  //   //   /**
  //   //    * In this example, List Tool creates items by splitting original text by a dot symbol. 
  //   //    */
  //   //   import: (string) => {
  //   //     const items = string.split('.');
  //   //
  //   //     return {
  //   //       items: items.filter( (text) => text.trim() !== ''),
  //   //       type: 'unordered'
  //   //     };
  //   //   }
  //   // };
  // }

  /**
   * With this option, Editor.js won't handle Enter keydowns
   * @link https://editorjs.io/tools-api#enablelinebreaks
   * 
   * @returns {boolean}
   */ 
  static get enableLineBreaks() {
    return true;
  }

  /**
   * This flag tells core that current tool supports the read-only mode
   * @link https://editorjs.io/tools-api#isreadonlysupported
   * 
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  } 

  /**
   * LIFE CYCLE HOOKS
   * 
   * These methods are called by Editor.js core
   * @link https://editorjs.io/tools-api#lifecycle-hooks
   */

  /**
   * Called after Block contents is added to the page
   */
  // rendered() {}

  /**
   * Called each time Block contents is updated
   */
  // updated() {}

  /**
   * Called after Block contents is removed from the page but before Block instance deleted
   */
  // removed() {}

  /**
   * Called after Block is moved by move tunes or through API
   * 
   * @param {MoveEvent} event 
   */
  // moved(event) {}

  /**
   * HELPER METHODS
   */

  /**
   * Toggle `--empty/--filled` based on whether `file.url` exists.
   */
  private updateImageState() {
    const isFilled = !!this._data.file?.url;
    this.nodes.wrapper?.classList.toggle('cdx-card-image--filled', isFilled);
    this.nodes.wrapper?.classList.toggle('cdx-card-image--empty', !isFilled);
  }

  /**
   * Clean HTML content and return empty string for "empty" content
   * 
   * @param {string} content - HTML content to clean
   * @returns {string} - Cleaned content or empty string
   */
  private getCleanContent(content: string): string {
    if (!content) return '';
    
    // Remove common "empty" HTML patterns that browsers insert
    const cleanedContent = content
      .replace(/^<br\/?>$/i, '') // Single <br> or <br/>
      .replace(/^<p><br\/?>?<\/p>$/i, '') // <p><br></p> or <p><br/></p>
      .replace(/^<div><br\/?>?<\/div>$/i, '') // <div><br></div> or <div><br/></div>
      .replace(/^\s*$/, ''); // Whitespace only
    
    return cleanedContent;
  }

  /**
   * Update Align
   * 
   * @param {string} currentAlign 
   */
  updateAlign(currentAlign: string) {
    if (this._data.align === currentAlign && this.nodes.wrapper?.classList.contains(this.classes.wrapperForAlignType(currentAlign))) {
      return;
    }

    this._data.align = currentAlign;

    this.aligns.forEach(align => {
      this.nodes.wrapper?.classList.toggle(this.classes.wrapperForAlignType(align.name), this._data.align === align.name);
    });
  }

  /**
   * Helper for creating DOM elements
   * @param {string} tagName - Element tag name
   * @param {string|string[]} classNames - Class names to add
   * @param {object} attributes - Attributes to set
   * @returns {HTMLElement}
   */
  private make(tagName: string, classNames: string | string[] = [], attributes: Record<string, any> = {}): HTMLElement {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      (el as any)[attrName] = attributes[attrName];
    }

    return el;
  }
};
