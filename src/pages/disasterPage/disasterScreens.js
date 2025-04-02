// img
import girlImg1 from '../../resources/disaster/preview_disaster_woman_01.webp'
import girlImg2 from '../../resources/disaster/preview_disaster_woman_02.webp'
import womanImg1 from '../../resources/voltage/woman_1.webp'

import sidebar5 from '../../resources/sidebar/sidebar_5.svg'

export const disasterScreens = [
	{
		id: 1,
		bgClassName: 'screen_screen1',
		sidebar: sidebar5,
		girl: girlImg1,
		replicaGirlProps: {
			replicaText:
				'Ничего себе, окно разбилось! Может, из-за сильного ветра? А вдруг что-то другое произошло? Что же теперь делать…',
			className: 'replica__screen1',
		},
		banner: false,
		womanProps: {
			woman: false,
			className: '',
		},
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Нужно понять, из-за чего разбилось окно',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		disasterFinal: false,
		pagination: true,
	},

	{
		id: 2,
		bgClassName: 'screen_screen2',
		sidebar: sidebar5,
		girl: false,
		replicaGirlProps: {
			replicaText: '',
			className: '',
		},
		banner: true,
		womanProps: {
			woman: false,
			className: '',
		},
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Нужно понять, из-за чего разбилось окно',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		disasterFinal: false,
		pagination: true,
	},

	{
		id: 3,
		bgClassName: 'screen_screen2',
		sidebar: sidebar5,
		girl: girlImg1,
		replicaGirlProps: {
			replicaText:
				'Ничего себе, окно разбилось! Может, из-за сильного ветра? А вдруг что-то другое произошло? Что же теперь делать…',
			className: 'replica__screen1',
		},
		banner: false,
		womanProps: {
			woman: false,
			className: '',
		},
		replicaWomanProps: {
			replicaText: '',
			replicaTextSpan: '',
			className: '',
		},
		textСontrolPanel: 'Нужно понять, из-за чего разбилось окно',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		disasterFinal: false,
		pagination: true,
	},

	{
		id: 4,
		bgClassName: 'screen_screen1',
		sidebar: sidebar5,
		girl: girlImg1,
		replicaGirlProps: {
			replicaText:
				'Ничего себе, окно разбилось! Может, из-за сильного ветра? А вдруг что-то другое произошло? Что же теперь делать…',
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
		textСontrolPanel: 'Нужно понять, из-за чего разбилось окно',
		textButton: 'Далее',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		invisibleButtonProps: {
			isVisible: false,
			className: '',
		},
		disasterFinal: false,
		pagination: true,
	},
]
