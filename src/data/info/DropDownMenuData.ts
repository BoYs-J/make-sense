import {updateActivePopupType} from '../../store/general/actionCreators';
import {PopupWindowType} from '../enums/PopupWindowType';
import {store} from '../../index';

export type DropDownMenuNode = {
    name: string
    description?: string
    imageSrc: string
    imageAlt: string
    disabled: boolean
    onClick?: () => void
    children?: DropDownMenuNode[]
}

export const DropDownMenuData: DropDownMenuNode[] = [
    {
        name: '行动',
        imageSrc: 'ico/actions.png',
        imageAlt: 'actions',
        disabled: false,
        children: [
            {
                name: '编辑标签',
                description: '修改标签',
                imageSrc: 'ico/tags.png',
                imageAlt: 'labels',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.UPDATE_LABEL))
            },
            {
                name: '导入图像',
                description: '加载更多图像',
                imageSrc: 'ico/camera.png',
                imageAlt: 'images',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.IMPORT_IMAGES))
            },
            {
                name: '导入注释',
                description: '从文件导入注释',
                imageSrc: 'ico/import-labels.png',
                imageAlt: 'import-labels',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.IMPORT_ANNOTATIONS))
            },
            {
                name: '导出注释',
                description: '将注释导出到文件',
                imageSrc: 'ico/export-labels.png',
                imageAlt: 'export-labels',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.EXPORT_ANNOTATIONS))
            },
            {
                name: '本地运行AI',
                description: '在浏览器中运行注释模型',
                imageSrc: 'ico/ai.png',
                imageAlt: 'load-ai-model-in-browser',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.LOAD_AI_MODEL))
            },
            {
                name: '连接AI服务器',
                description: '在服务器上运行注释模型',
                imageSrc: 'ico/api.png',
                imageAlt: 'connect-ai-server',
                disabled: false,
                onClick: () => store.dispatch(updateActivePopupType(PopupWindowType.CONNECT_AI_MODEL_VIA_API))
            },
        ]
    },
    {
        name: '社区',
        imageSrc: 'ico/plant.png',
        imageAlt: 'community',
        disabled: false,
        children: [
            {
                name: '文档',
                description: '阅读更多关于Make Sense的信息',
                imageSrc: 'ico/documentation.png',
                imageAlt: 'documentation',
                disabled: false,
                onClick: () => window.open('https://skalskip.github.io/make-sense', '_blank')
            },
            {
                name: 'Bug和功能',
                description: '报告错误或提出新功能',
                imageSrc: 'ico/bug.png',
                imageAlt: 'bug',
                disabled: false,
                onClick: () => window.open('https://github.com/SkalskiP/make-sense/issues', '_blank')
            }
        ]
    }
]

