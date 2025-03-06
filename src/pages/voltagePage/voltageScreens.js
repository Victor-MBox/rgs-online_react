// img
import boyImg1 from '../../resources/voltage/boy_1.webp'
import boyImg2 from '../../resources/voltage/boy_2.webp'

import womanImg1 from '../../resources/voltage/woman_1.webp'
import womanImg2 from '../../resources/voltage/woman_2.webp'
import womanImg3 from '../../resources/voltage/woman_3.webp'

import sidebar6 from '../../resources/sidebar/sidebar_6.svg'

export const voltageScreens = [
	{
		id: 1,
		bgClassName: 'screen_screen1',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Ну наконец-то выходной! Можно спокойно досмотреть сериал.',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},

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
		voltageFinal: false,
	},
	{
		id: 2,
		bgClassName: 'screen_screen2',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Ой... Что это было? Что-то сверкнуло и вся техника разом выключилась.',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 3,
		bgClassName: 'screen_screen2',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Так, по крайней мере, не будет искрить.',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 4,
		bgClassName: 'screen_screen3',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Интересно, она успела сгореть?',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 5,
		bgClassName: 'screen_screen4',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Эх, еще и новые колонки!',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 6,
		bgClassName: 'screen_screen5',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Остался кондиционер — и всё',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 7,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Фу-у-ух. Это было страшно!',
			className: '',
		},
		womanProps: {
			woman: false,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 8,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Вот как всегда — на самом интересном месте! Как так вышло-то?',
			className: '',
		},
		womanProps: {
			woman: womanImg1,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 9,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Телек, кажется, совсем сгорел…  У меня оформлена страховка,  это получится компенсировать?',
			className: '',
		},
		womanProps: {
			woman: womanImg2,
			className: '',
		},
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
		voltageFinal: false,
	},
	{
		id: 10,
		bgClassName: 'screen_screen6',
		sidebar: false,
		boy: false,
		replicaBoyProps: {
			replicaText: '',
			className: '',
		},
		womanProps: {
			woman: womanImg3,
			className: 'screen__woman_final',
		},
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
		voltageFinal: true,
	},
]
