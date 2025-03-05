// img
import boyImg1 from '../../resources/voltage/boy_1.png'
import backImg1 from '../../resources/voltage/volt_bg_1.jpg'
import backImg2 from '../../resources/voltage/volt_bg_2.jpg'
import backImg3 from '../../resources/voltage/volt_bg_3.jpg'
import backImg4 from '../../resources/voltage/volt_bg_4.jpg'
import backImg5 from '../../resources/voltage/volt_bg_5.jpg'
import backImg6 from '../../resources/voltage/volt_bg_6.jpg'
import sidebar6 from '../../resources/sidebar/sidebar_6.svg'
import boyImg2 from '../../resources/voltage/boy_2.png'

export const voltageScreens = [
	{
		id: 1,
		bg: backImg1,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Ну наконец-то выходной! Можно спокойно досмотреть сериал.',
		textСontrolPanel: 'Да здесь целый домашний кинотеатр!',
		textButton: 'Далее',
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
		},
	},
	{
		id: 2,
		bg: backImg2,
		sidebar: sidebar6,
		boy: boyImg2,
		replicaText:
			'Ой... Что это было? Что-то сверкнуло и вся техника разом выключилась.',
		textСontrolPanel: 'Помогите починить сгоревшую технику',
		textButton: 'Помочь',
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
		},
	},
	{
		id: 3,
		bg: backImg2,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Так, по крайней мере, не будет искрить.',
		textСontrolPanel: 'Выключите телевизор',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen1',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
		},
	},
	{
		id: 4,
		bg: backImg3,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Интересно, она успела сгореть?',
		textСontrolPanel: 'Теперь надо спасти лампу',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen2',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen3',
		},
	},
	{
		id: 5,
		bg: backImg4,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Эх, еще и новые колонки!',
		textСontrolPanel: 'Выключите колонки',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen3',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen3',
		},
	},
	{
		id: 6,
		bg: backImg5,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Остался кондиционер — и всё',
		textСontrolPanel: 'Теперь — к кондиционеру!',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen4',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen4',
		},
	},
	{
		id: 7,
		bg: backImg6,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaText: 'Фу-у-ух. Это было страшно!',
		textСontrolPanel: 'Вы справились!',
		textButton: '',
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen5',
		},
	},
]
