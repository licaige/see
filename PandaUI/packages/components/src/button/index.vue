<template>
    <button class="pd-button" :class="styleClass" :disabled="Disabled">
     <Icon class="icon" v-if="iconFont.iconName && iconFont.position != 'right'" :name="iconFont.iconName" />
     <span class="pd-button-loading" v-if="Loading"></span>
            <slot/>
        <Icon class="icon" v-if="iconFont.position == 'right' && iconFont.iconName" :name="iconFont.iconName" />
    </button>
</template>

<script lang="ts">
import './style/index.less';
import { defineComponent, computed } from 'vue';
import { buttonProps } from './types';
import Icon from "../icon/index.vue";
export default defineComponent({
    name: 'pd-button',
    props: buttonProps,
    components: { Icon },
    setup(props) {
        // 动态添加样式
        const styleClass = computed(() => { 
            return {
                [`pd-button--${props.type}`]: props.type,
                [`pd-button--${props.size}`]: props.size,
                'is-round': props.round,
                'is-plain': props.plain,
                'is-disabled': props.disabled,
                'is-loading': props.loading
            }
        });

        // 添加图标
        const iconFont = computed(() => {
            const iconName = props.icon;
            const position = props.iconPosition;
            return {
                iconName,
                position
            }
        });

        // 判断按钮是否处于加载状态
        const Loading = computed(() => props.loading);

        // 判断按钮是否禁用
        const Disabled = computed(() => props.disabled || Loading.value);

        return {
            styleClass,
            iconFont,
            Icon,
            Loading,
            Disabled
        };
    },
});
</script>

