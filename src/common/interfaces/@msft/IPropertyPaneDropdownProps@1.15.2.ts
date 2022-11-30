// Copied from SPFx 1.15.2 node_modules\@microsoft\sp-property-pane\dist\index-internal.d.ts

import { IPropertyPaneDropdownOption_15_2 } from './IPropertyPaneDropdownOption@1.15.2';
import { IPropertyPaneDropdownCalloutProps_15_2 } from './IPropertyPaneDropdownCalloutProps@1.15.2';

/**
 * PropertyPane drop down component props.
 *
 * @public
 */
 export declare interface IPropertyPaneDropdownProps {
  /**
   * Descriptive label for the Dropdown.
   */
  label: string;
  /**
   * The key of the initially selected option.
   */
  selectedKey?: string | number;
  /**
   * Collection of options for this Dropdown.
   */
  options?: IPropertyPaneDropdownOption_15_2[];
  /**
   * Whether the property pane dropdown option is disabled or not.
   */
  disabled?: boolean;
  /**
   * A description of the dropdown for the benefit of screen reader users.
   */
  ariaLabel?: string;
  /**
   * Defines an element's number or position in the current set of controls.
   * Maps to native aria-posinset attribute. It starts from 1.
   */
  ariaPositionInSet?: number;
  /**
   * Defines the number of items in the current set of controls. Maps to native aria-setsize attribute.
   */
  ariaSetSize?: number;
  /**
   * Custom properties for Dropdown's Callout used to render options.
   */
  calloutProps?: IPropertyPaneDropdownCalloutProps_15_2;
  /* Excluded from this release type: errorMessage */
  /* Excluded from this release type: dataAutomationId */
  /* Excluded from this release type: tooltipProps */
}

