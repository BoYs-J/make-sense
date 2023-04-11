import {LabelType} from './enums/LabelType';
import {ILabelFormatData} from '../interfaces/ILabelFormatData';
import {AnnotationFormatType} from './enums/AnnotationFormatType';

export type ImportFormatDataMap = Record<LabelType, ILabelFormatData[]>

export const ImportFormatData: ImportFormatDataMap = {
    [LabelType.RECT]: [
        {
            type: AnnotationFormatType.COCO,
            label: 'COCO JSON格式的单个文件'
        },
        {
            type: AnnotationFormatType.YOLO,
            label: 'YOLO格式的多个文件以及标签名称定义 - labels.txt文件'
        },
        {
            type: AnnotationFormatType.VOC,
            label: 'VOC XML格式的多个文件'
        }
    ],
    [LabelType.POINT]: [],
    [LabelType.LINE]: [],
    [LabelType.POLYGON]: [
        {
            type: AnnotationFormatType.COCO,
            label: 'Single file in COCO JSON format.'
        }
    ],
    [LabelType.IMAGE_RECOGNITION]: []
}
