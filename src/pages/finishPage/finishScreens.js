import { animate } from 'framer-motion'

export const finishScreens = [
	{
		id: 1,
		bgClassName: 'final-screen_screen1',
		autoSwitchProps: {
			thereIs: true,
			delay: '2',
		},
		presentCloseProps: {
			img: false,
			className: '',
		},
		presentRaysProps: {
			img: false,
			className: '',
		},
		animateIconProps: {
			thereIs: false,
		},
		presentOpenProps: {
			img1: false,
			className1: '',
			img2: false,
			className2: '',
		},
		contentCardPrors: {
			thereIs: false,
		},
	},
	{
		id: 2,
		bgClassName: 'final-screen_screen2',
		autoSwitchProps: {
			thereIs: true,
			delay: '2',
		},
		presentCloseProps: {
			img: false,
			className: '',
		},
		presentRaysProps: {
			img: false,
			className: '',
		},
		animateIconProps: {
			thereIs: false,
		},
		presentOpenProps: {
			img1: false,
			className1: '',
			img2: false,
			className2: '',
		},
		contentCardPrors: {
			thereIs: false,
		},
	},
	{
		id: 3,
		bgClassName: 'final-screen_screen3',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		presentCloseProps: {
			img: presentClose1,
			className: '',
		},
		presentRaysProps: {
			img: rays,
			className: '',
		},
		animateIconProps: {
			thereIs: false,
		},
		presentOpenProps: {
			img1: false,
			className1: '',
			img2: false,
			className2: '',
		},
		contentCardPrors: {
			thereIs: false,
		},
	},
	{
		id: 4,
		bgClassName: 'final-screen_screen3',
		autoSwitchProps: {
			thereIs: true,
			delay: '2',
		},
		presentCloseProps: {
			img: presentClose2,
			className: '',
		},
		presentRaysProps: {
			img: rays,
			className: '',
		},
		animateIconProps: {
			thereIs: true,
			className: '',
		},
		presentOpenProps: {
			img1: false,
			className1: '',
			img2: false,
			className2: '',
		},
		contentCardPrors: {
			thereIs: false,
		},
	},
	{
		id: 5,
		bgClassName: 'final-screen_screen3',
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		presentCloseProps: {
			img: false,
			className: '',
		},
		presentRaysProps: {
			img: false,
			className: '',
		},
		animateIconProps: {
			thereIs: false,
			className: '',
		},
		presentOpenProps: {
			img1: img1,
			className1: '',
			img2: img2,
			className2: '',
		},
		contentCardPrors: {
			thereIs: true,
		},
	},
]
