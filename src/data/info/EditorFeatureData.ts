export interface IEditorFeature {
    displayText:string;
    imageSrc:string;
    imageAlt:string;
}

export const EditorFeatureData: IEditorFeature[] = [
    {
        displayText: '开源并在GPLv3许可证下免费使用',
        imageSrc: 'ico/open-source.png',
        imageAlt: 'open-source',
    },
    {
        displayText: '无需高级安装，只需使用浏览器打开即可',
        imageSrc: 'ico/online.png',
        imageAlt: 'online',
    },
    {
        displayText: "不会存储你的图像，因为不会将它们发送到任何地方",
        imageSrc: 'ico/private.png',
        imageAlt: 'private',
    },
    {
        displayText: '支持多种标签类型-矩形、直线、点和多边形',
        imageSrc: 'ico/labels.png',
        imageAlt: 'labels',
    },
    {
        displayText: '支持YOLO、VOC XML、VGG JSON、CSV等输出文件格式',
        imageSrc: 'ico/file.png',
        imageAlt: 'file',
    },
    {
        displayText: '可使用人工智能提高工作效率',
        imageSrc: 'ico/robot.png',
        imageAlt: 'robot',
    },
];