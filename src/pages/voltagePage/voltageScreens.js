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
			className: 'replica__screen1',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: false,
		pagination: true,
	},
	{
		id: 2,
		bgClassName: 'screen_screen2',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Ой... Что это было? Что-то сверкнуло и вся техника разом выключилась.',
			className: 'replica__screen2',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: false,
		pagination: true,
	},
	{
		id: 3,
		bgClassName: 'screen_screen2',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Так, по крайней мере, не будет искрить.',
			className: 'replica__screen3',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen1',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: false,
		pagination: false,
	},
	{
		id: 4,
		bgClassName: 'screen_screen3',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Интересно, она успела сгореть?',
			className: 'replica__screen4',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen2',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen3',
			delay: 0.8,
		},
		voltageFinal: false,
		pagination: false,
	},
	{
		id: 5,
		bgClassName: 'screen_screen4',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Эх, еще и новые колонки!',
			className: 'replica__screen5',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen3',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen4',
			delay: 0.8,
		},
		voltageFinal: false,
		pagination: false,
	},
	{
		id: 6,
		bgClassName: 'screen_screen5',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Остался кондиционер — и всё',
			className: 'replica__screen6',
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: true,
			className: 'invisible-button__screen4',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen5',
			delay: 0.8,
		},
		voltageFinal: false,
		pagination: false,
	},
	{
		id: 7,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg1,
		replicaBoyProps: {
			replicaText: 'Фу-у-ух. Это было страшно!',
			className: 'replica__screen7',
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
		textButton: '',
		autoSwitchProps: {
			thereIs: true,
			delay: 1.5,
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: true,
			className: 'coin-icon__screen6',
			delay: 0.6,
		},
		voltageFinal: false,
		pagination: false,
	},
	{
		id: 8,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Вот как всегда — на самом интересном месте! Как так вышло-то?',
			className: 'replica__screen8',
		},
		womanProps: {
			woman: womanImg1,
			className: '',
		},
		replicaWomanProps: {
			replicaText: 'Случился перепад напряжения в электросети.',
			replicaTextSpan: '',
			className: 'replica__woman replica__woman_8',
		},

		textСontrolPanel: 'Произошел скачок напряжения',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: false,
		pagination: true,
	},
	{
		id: 9,
		bgClassName: 'screen_screen6',
		sidebar: sidebar6,
		boy: boyImg2,
		replicaBoyProps: {
			replicaText:
				'Телек, кажется, совсем сгорел…  У меня оформлена страховка,  это получится компенсировать?',
			className: 'replica__screen9',
		},
		womanProps: {
			woman: womanImg2,
			className: '',
		},
		replicaWomanProps: {
			replicaText:
				'Конечно, по риску «Перепад напряжения» вам оплатят ремонт или полную стоимость пострадавших вещей — за каждую ',
			replicaTextSpan: 'до 10% от лимита, заложенного на «Движимое имущество».',
			className: 'replica__woman replica__woman_9',
		},

		textСontrolPanel: 'Произошел скачок напряжения',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: false,
		pagination: true,
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
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		coinIconProps: {
			coinIcon: false,
			className: '',
			delay: false,
		},
		voltageFinal: true,
		pagination: true,
	},
]
