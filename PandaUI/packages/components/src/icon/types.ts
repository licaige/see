import { ExtractDefaultPropTypes } from "vue";

export const iconProps = {
    name: {
        type: String
    },
    dot: {
        type: Boolean
    },
    badge: {
        type: String
    },
    color: {
        type: String
    }
};

export type IconProps = ExtractDefaultPropTypes<typeof iconProps>;