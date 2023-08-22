export const popupSharedProps = {
  show: Boolean, // v-model

  zIndex: [Number, String],

  lockScroll: { type: Boolean, default: true },

  beforeClose: Function,

  teleport: { type: [String, Element], default: 'body' },

  disabledTeleport: Boolean,

  overlay: { type: Boolean, default: true },

  overlayClass: [String, Array, Object],

  overlayStyle: Object,

  closeOnClickOverlay: { type: Boolean, default: true }
};

export const popupSharedPropKeys = Object.keys(popupSharedProps);
