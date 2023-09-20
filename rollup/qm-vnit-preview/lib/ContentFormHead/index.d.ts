import React from 'react';
import './index.less';
type QueryListItem = {
    name?: string;
    label?: string;
    title?: string;
    options?: any[];
    formType?: string;
    dataIndex?: string;
    properties?: object;
    placeholder?: string;
    keyNameForKey?: string;
    keyNameForValue?: string;
    component?: React.ReactElement;
};
type ContentFormHeadProps = {
    cols?: number;
    okButtonText?: string;
    initialValues?: object;
    defaultExpand?: boolean;
    showResetButton?: boolean;
    queryList: QueryListItem[];
    showExportButton?: boolean;
    onSubmit: (values: any) => void;
    onExport?: (values: any) => void;
};
declare function ContentFormHead(props: ContentFormHeadProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ContentFormHead>;
export default _default;
