import {Notification} from '../enums/Notification';

export type NotificationContent = {
    header: string;
    description: string;
}

export type ExportFormatDataMap = Record<Notification, NotificationContent>;

export const NotificationsDataMap: ExportFormatDataMap = {
    [Notification.EMPTY_LABEL_NAME_ERROR]: {
        header: '空标签名称',
        description: '看起来你没有为某个标签指定名称，每个标签都必须具有唯一的名称值。请插入正确的名称或删除空标签，然后重试。'
    },
    [Notification.NON_UNIQUE_LABEL_NAMES_ERROR]: {
        header: '非唯一标签名称',
        description: '看起来并不是所有的标签名称都是唯一的；唯一的名称是必要的，以确保在完成工作时正确导出数据。让你的名字独一无二，然后再试一次。'
    },
    [Notification.MODEL_DOWNLOAD_ERROR]: {
        header: '无法下载模型',
        description: '看起来我们无法从外部服务器下载tensorflow.js模型。请确保你已连接到Internet，然后重试。'
    },
    [Notification.MODEL_INFERENCE_ERROR]: {
        header: '推理失败',
        description: '看起来无法对你的图像进行推断。请帮助我们改进Make Sense并让我们知道。'
    },
    [Notification.MODEL_LOAD_ERROR]: {
        header: '无法加载模型',
        description: '看起来无法从上传的文件中加载你的tensorflow.js模型。确保你上传了所有模型碎片文件。请再次重新上传所有模型文件。'
    },
    [Notification.LABELS_FILE_UPLOAD_ERROR]: {
        header: '标签文件未上传',
        description: '你似乎忘记上传包含检测到的类名列表的文本文件。我们需要它来将YOLOv5模型输出映射到标签。请再次重新上传所有模型文件。'
    },
    [Notification.ANNOTATION_FILE_PARSE_ERROR]: {
        header: '无法分析注释文件',
        description: '注释文件的内容不是有效的JSON、CSV或XML。请修复选定要导入的文件，然后重试。',
    },
    [Notification.ANNOTATION_IMPORT_ASSERTION_ERROR]: {
        header: '注释文件不包含有效数据',
        description: '导入过程中提供的批注丢失或无效。请修复选定要导入的文件，然后重试。',
    },
    [Notification.UNSUPPORTED_INFERENCE_SERVER_MESSAGE]: {
        header: '尚未支持所选推理服务器',
        description: '与选定推理服务器的集成仍在建设中。请继续关注GitHub上的更多更新。'
    },
    [Notification.ROBOFLOW_INFERENCE_SERVER_ERROR]: {
        header: 'Roboflow连接失败',
        description: '看起来无法连接到你的Roboflow型号。请确保型号规范和Roboflow API密钥是正确的。'
    }
}
