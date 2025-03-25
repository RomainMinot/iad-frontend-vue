import { config } from '@vue/test-utils';

// Disabled vue's warnings provided by vue-test-utils
config.global.config.warnHandler = () => null;

window.happyDOM.setInnerWidth(1024);
window.happyDOM.setInnerHeight(768);
