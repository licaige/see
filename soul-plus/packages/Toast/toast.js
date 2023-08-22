import { h, render } from 'vue';
import { appendElements } from '../utils';
import ToastConstructor from './SoToast.vue';

let instances = [];
const defaultOpts = {
  show: true,
  type: 'text',
  position: 'bottom', // middle bottom
  message: '',
  duration: 2000, // 默认2秒关闭
  transition: undefined,
  overlay: false, // 默认不显示遮罩层
  overlayClass: undefined,
  disabledTeleport: true, // 禁用 Teleport
  closeOnClickOverlay: false,
  lockScroll: false
};

const clear = () => {
  for (let instance of instances) {
    instance.vm.component.exposed.close();
  }
  instances = [];
};

const Toast = function (opts) {
  clear(); // 只存在当前 toast

  if (typeof opts === 'string') {
    opts = { message: opts };
  }

  let options = { ...defaultOpts, ...opts };

  const container = document.createElement('div');
  container.className = 'container_toast';

  // createVNode 方法创建一个 vNode 独享
  const vm = h(ToastConstructor, {
    ...options,
    'onUpdate:show': value => {
      vm.component.props.show = value;
    }
  });

  // clean element preventing mem leak
  vm.props.onClosed = () => {
    if (options.onClosed) {
      options.onClosed();
    }
    render(null, container);
  };

  // 使用 render 方法转换成真实dom
  render(vm, container);
  instances.push({ vm });

  appendElements(container.children);

  return {
    close: () => vm.component.exposed.close()
  };
};

Toast.clear = clear;

Toast.install = app => {
  app.config.globalProperties.$toast = Toast;
};

export default Toast;
