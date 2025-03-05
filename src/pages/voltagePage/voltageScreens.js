// img
import boyImg1 from '../../resources/voltage/boy_1.png'
import boyImg2 from '../../resources/voltage/boy_2.png'

import womanImg1 from '../../resources/voltage/woman_1.png'
import womanImg2 from '../../resources/voltage/woman_2.png'
import womanImg3 from '../../resources/voltage/woman_3.png'

import backImg1 from '../../resources/voltage/volt_bg_1.jpg'
import backImg2 from '../../resources/voltage/volt_bg_2.jpg'
import backImg3 from '../../resources/voltage/volt_bg_3.jpg'
import backImg4 from '../../resources/voltage/volt_bg_4.jpg'
import backImg5 from '../../resources/voltage/volt_bg_5.jpg'
import backImg6 from '../../resources/voltage/volt_bg_6.jpg'
import sidebar6 from '../../resources/sidebar/sidebar_6.svg'

export const voltageScreens = [
	{
		id: 1,
		bg: backImg1,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Ну наконец-то выходной! Можно спокойно досмотреть сериал.',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
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
		replicaBoyProps: {
			replicaText:
				'Ой... Что это было? Что-то сверкнуло и вся техника разом выключилась.',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
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
		replicaBoyProps: {
			replicaText: 'Так, по крайней мере, не будет искрить.',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
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
		replicaBoyProps: {
			replicaText: 'Интересно, она успела сгореть?',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
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
		replicaBoyProps: {
			replicaText: 'Эх, еще и новые колонки!',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Выключите колонки',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen3',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen4',
		},
	},
	{
		id: 6,
		bg: backImg5,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Остался кондиционер — и всё',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Теперь — к кондиционеру!',
		textButton: '',
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen4',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen5',
		},
	},
	{
		id: 7,
		bg: backImg6,
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Фу-у-ух. Это было страшно!',
			className: '',
		},
		woman: false,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Вы справились!',
		textButton: '>',
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen6',
		},
	},
	{
		id: 8,
		bg: backImg6,
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Вот как всегда — на самом интересном месте! Как так вышло-то?',
			className: '',
		},
		woman: womanImg1,
		replicaWomanProps: {
			replicaText: 'Случился перепад напряжения в электросети.',
			replicaTextSpan: '',
			className: 'replica__woman',
		},

		textСontrolPanel: 'Произошел скачок напряжения',
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
		id: 9,
		bg: backImg6,
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Телек, кажется, совсем сгорел…  У меня оформлена страховка,  это получится компенсировать?',
			className: '',
		},
		woman: womanImg2,
		replicaWomanProps: {
			replicaText:
				'Конечно, по риску «Перепад напряжения» вам оплатят ремонт или полную стоимость пострадавших вещей — за каждую ',
			replicaTextSpan: 'до 10% от лимита, заложенного на «Движимое имущество».',
			className: 'replica__woman',
		},

		textСontrolPanel: 'Произошел скачок напряжения',
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
		id: 10,
		bg: backImg6,
		sidebar: false,
		boy: false,
		replicaBoyProps: {
			replicaText: '',
			className: '',
		},
		woman: womanImg3,
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},

		textСontrolPanel: '',
		textButton: '',
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
		},
	},
]
