import SoDropdownMenu from './DropdownMenu';
import SoDropdownItem from './DropdownItem';
import SoButton from './Button';
import SoCell from './Cell';
import SoOverlay from './Overlay';
import SoPopup from './Popup';
import SoToast from './Toast';
import SoIcon from './Icon';
import SoTabs from './Tabs';
import SoTabPane from './TabPane';
import SoDialog from './Dialog';
import SoField from './Field';
import SoActionSheet from './ActionSheet';

const components = [
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoCell,
  SoOverlay,
  SoPopup,
  SoToast,
  SoIcon,
  SoTabs,
  SoTabPane,
  SoDialog,
  SoField,
  SoActionSheet
];

const install = app => {
  if (install.installed) return;
  components.forEach(component => {
    app.use(component);
  });
};

const SoulPlus = { install };

export {
  install,
  SoDropdownMenu,
  SoDropdownItem,
  SoButton,
  SoCell,
  SoOverlay,
  SoPopup,
  SoToast,
  SoIcon,
  SoTabs,
  SoTabPane,
  SoDialog,
  SoField,
  SoActionSheet
};

export default SoulPlus;
