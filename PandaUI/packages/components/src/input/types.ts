import { ExtractDefaultPropTypes } from "vue";

export const InputSize = ["midium", "small", "mini"];

type AutoSize = {
    minRows?: number,
    maxRows?: number
}

export const inputProps = {
    clearable: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    },
    modelValue: {
        type: String || Number,
    },
    size: {
        type: String,   
        default: "midium",
        validator(value: string) {
            return InputSize.includes(value);
        }
    },
    showPassword: {
        type: Boolean
    },
    prefixIcon: {
        type: String
    },
    suffixIcon: {
        type: String
    },
    textarea: {
        type: Boolean,
    },
    resize : {
        type: Boolean
    }
};

export type InputProps = ExtractDefaultPropTypes<typeof inputProps>