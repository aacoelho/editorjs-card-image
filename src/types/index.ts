import { BlockToolData } from '@editorjs/editorjs';

export interface cardImageFile {
  /**
   * Source URL for the image (can be a data URL).
   */
  url: string;
  /**
   * Optional sizes object (mirrors Editor.js `image` tool shape).
   */
  sizes?: {
    large?: { url: string };
    [key: string]: any;
  };
  /**
   * Allow additional backend fields.
   */
  [key: string]: any;
}

/**
 * cardImage Tool's input and output data format
 */
export interface cardImageData extends BlockToolData {
  /**
   * Full file object (preferred). Example:
   * { url: string, sizes?: { large?: { url: string } }, ... }
   */
  file?: cardImageFile;
  title?: string;
  description?: string;
  align?: string;
}

/**
 * cardImage Tool's configuration object that passed through the initial Editor config
 */
export interface cardImageConfig {
  /**
   * Button text used to pick/select an image when no image is selected yet.
   */
  addImageButtonPlaceholder?: string;

  /**
   * Button text shown when an image is already selected (used for replacing it).
   */
  replaceImageButtonPlaceholder?: string;

  /**
   * Button text for deleting the selected image.
   */
  deleteImageButtonPlaceholder?: string;

  titlePlaceholder?: string;
  descriptionPlaceholder?: string;

  /**
   * Optional custom image selector.
   * If provided, the tool will call it when user clicks the button.
   *
   * Supported return shapes (mirrors Editor.js `image` tool):
   *  - { success: 1, file: { url: string } }
   *  - { success: 1, file: { url: string, sizes?: {...} } }
   *  - { file: { url: string } }
   *  - { url: string }
   *  - string (url)
   */
  selectFiles?: () => Promise<any>;
}
