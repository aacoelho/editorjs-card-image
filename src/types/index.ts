import { BlockToolData } from '@editorjs/editorjs';

/**
 * cardImage Tool's input and output data format
 */
export interface cardImageData extends BlockToolData {
  /**
   * Image source URL/data URL
   * (e.g. "https://..." or "data:image/...;base64,...")
   */
  imageUrl?: string;
  /**
   * Backwards compatibility: older versions stored image source in `value`.
   * If you have existing content, we will try to map `value -> imageUrl`.
   */
  value?: string;
  title?: string;
  description?: string;
  align?: string;
}

/**
 * cardImage Tool's configuration object that passed through the initial Editor config
 */
export interface cardImageConfig {
  /**
   * Button text used to pick/select an image.
   * Kept compatible with the older `addImagePlaceholder` config key.
   */
  imageButtonContent?: string;
  /**
   * Backwards compatibility: older versions used this for the "value" field.
   * We now use it as fallback for `imageButtonContent`.
   */
  addImagePlaceholder?: string;
  titlePlaceholder?: string;
  descriptionPlaceholder?: string;

  /**
   * Optional custom image selector.
   * If provided, the tool will call it when user clicks the select button.
   *
   * Supported return shapes:
   *  - { success: 1, file: { url: string } }
   *  - { file: { url: string } }
   *  - { url: string }
   *  - string (url)
   */
  selectFiles?: () => Promise<any>;
}
