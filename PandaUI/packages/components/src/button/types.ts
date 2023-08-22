import { ExtractDefaultPropTypes } from "vue";

export const ButtonType = ["default", "primary", "success", "info", "warning", "danger", "text"];

export const ButtonSize = ["midium", "small", "mini"];

export const buttonProps = {
    type: {
        type: String,
        default: "default",
        validator(value: string) {
            return ButtonType.includes(value);
        }
    },
    size: {
        type: String,
        default: "midium",
        validator(value: string) {
            return ButtonSize.includes(value);
        }
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    icon: String,
    iconPosition: String
};

export type ButtonProps = ExtractDefaultPropTypes<typeof buttonProps>;