import {Settings} from '../../settings/Settings';

export interface ISocialMedia {
    displayName:string;
    imageSrc:string;
    imageAlt:string;
    href:string;
    tooltipMessage:string;
}

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'Github',
        imageSrc: '/ico/github-logo.png',
        imageAlt: 'GitHub',
        href: Settings.GITHUB_URL,
        tooltipMessage: '点亮GitHub的 ⭐',
    },
    {
        displayName: 'Medium',
        imageSrc: '/ico/medium-logo.png',
        imageAlt: 'Medium',
        href: Settings.MEDIUM_URL,
        tooltipMessage: '在Medium上阅读人工智能内容',
    },
    {
        displayName: 'YouTube',
        imageSrc: '/ico/youtube-logo.png',
        imageAlt: 'YouTube',
        href: Settings.YOUTUBE_URL,
        tooltipMessage: '在YouTube上观看人工智能教程'
    },
    {
        displayName: 'Twitch',
        imageSrc: '/ico/twitch-logo.png',
        imageAlt: 'Twitch',
        href: Settings.TWITCH_URL,
        tooltipMessage: '在Twitch上一起参加Kaggle比赛'
    },
];
