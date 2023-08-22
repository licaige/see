import type { ExtractPropTypes, PropType } from 'vue';
import type button from './button.vue';
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "danger"];
export declare type ButtonSize = 'small' | 'default' | 'large';
export declare const buttonProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly values: readonly ["default", "primary", "success", "warning", "danger"];
        readonly default: "default";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "default";
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonType = ButtonProps['type'];
export declare type ButtonInstance = InstanceType<typeof button>;
