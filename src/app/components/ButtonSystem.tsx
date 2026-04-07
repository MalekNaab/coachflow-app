/**
 * Button Component System
 * 
 * This file documents all available button variants and their usage in the TrainerPro application.
 * All buttons use the consistent design system with emerald green accents.
 */

import { Button } from './ui/button';
import { Save, Trash2, Plus, Download, Edit, ChevronRight } from 'lucide-react';

/**
 * PRIMARY BUTTON
 * Use for main actions, CTAs, and form submissions
 * Example: "Save", "Create", "Submit"
 */
export const PrimaryButton = () => (
  <Button className="bg-emerald-600 hover:bg-emerald-700">
    <Save className="w-4 h-4 mr-2" />
    Save Changes
  </Button>
);

/**
 * SECONDARY BUTTON
 * Use for secondary actions that are important but not primary
 * Example: "Cancel", "Back", "Skip"
 */
export const SecondaryButton = () => (
  <Button variant="secondary">
    Secondary Action
  </Button>
);

/**
 * OUTLINE BUTTON
 * Use for neutral actions or when you need a less prominent button
 * Example: "Cancel", "View Details", "Learn More"
 */
export const OutlineButton = () => (
  <Button variant="outline">
    Cancel
  </Button>
);

/**
 * GHOST BUTTON
 * Use for tertiary actions, icon buttons, or subtle interactions
 * Example: "Edit", "Delete" (in table rows), navigation items
 */
export const GhostButton = () => (
  <Button variant="ghost">
    <Edit className="w-4 h-4 mr-2" />
    Edit
  </Button>
);

/**
 * DESTRUCTIVE BUTTON
 * Use for dangerous/destructive actions
 * Example: "Delete", "Remove", "Cancel Subscription"
 */
export const DestructiveButton = () => (
  <Button variant="destructive">
    <Trash2 className="w-4 h-4 mr-2" />
    Delete Account
  </Button>
);

/**
 * ICON BUTTON
 * Use for actions that only need an icon (no text)
 * Example: Close buttons, action buttons in tight spaces
 */
export const IconButton = () => (
  <Button variant="ghost" size="icon">
    <Plus className="w-4 h-4" />
  </Button>
);

/**
 * BUTTON SIZES
 * Available sizes: sm, default, lg, icon
 */
export const ButtonSizes = () => (
  <div className="flex items-center gap-3">
    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
      Small
    </Button>
    <Button className="bg-emerald-600 hover:bg-emerald-700">
      Default
    </Button>
    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
      Large
    </Button>
  </div>
);

/**
 * LOADING BUTTON
 * Use when an action is in progress
 */
export const LoadingButton = () => (
  <Button disabled className="bg-emerald-600">
    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    Loading...
  </Button>
);

/**
 * BUTTON WITH ICON (Leading)
 * Use when you want to add visual context to an action
 */
export const ButtonWithLeadingIcon = () => (
  <Button className="bg-emerald-600 hover:bg-emerald-700">
    <Plus className="w-4 h-4 mr-2" />
    Add New Client
  </Button>
);

/**
 * BUTTON WITH ICON (Trailing)
 * Use for navigation or actions that lead somewhere
 */
export const ButtonWithTrailingIcon = () => (
  <Button variant="outline">
    View Details
    <ChevronRight className="w-4 h-4 ml-2" />
  </Button>
);

/**
 * BUTTON GROUP
 * Use when you have multiple related actions
 */
export const ButtonGroup = () => (
  <div className="flex items-center gap-2">
    <Button variant="outline">
      <Download className="w-4 h-4 mr-2" />
      Export
    </Button>
    <Button variant="outline">
      <Edit className="w-4 h-4 mr-2" />
      Edit
    </Button>
    <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
      <Trash2 className="w-4 h-4 mr-2" />
      Delete
    </Button>
  </div>
);

/**
 * FULL WIDTH BUTTON
 * Use in modals, forms, or mobile layouts
 */
export const FullWidthButton = () => (
  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
    Continue
  </Button>
);

// Export all button examples for documentation
export const ButtonExamples = {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  DestructiveButton,
  IconButton,
  ButtonSizes,
  LoadingButton,
  ButtonWithLeadingIcon,
  ButtonWithTrailingIcon,
  ButtonGroup,
  FullWidthButton,
};
