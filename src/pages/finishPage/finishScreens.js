// img
import presentClose1 from '../../resources/final/present_1.webp'
import presentClose2 from '../../resources/final/present_2.webp'
import presentOpen1 from '../../resources/final/present_3-1.webp'
import presentOpen2 from '../../resources/final/present_3-2.webp'

import rays from '../../resources/final/rays.svg'

import bg1 from '../../resources/final/final_bg_1.webp'
import bg2 from '../../resources/final/final_bg_2.webp'
import bg3 from '../../resources/final/final_bg_3.webp'

import bgMob1 from '../../resources/final/final_mob_bg_1.webp'
import bgMob2 from '../../resources/final/final_mob_bg_2.webp'
import bgMob3 from '../../resources/final/final_mob_bg_3.webp'

export const allImages = {
	presentClose1,
	presentClose2,
	presentOpen1,
	presentOpen2,
	rays,
	bg1,
	bg2,
	bg3,
	bgMob1,
	bgMob2,
	bgMob3,
}

export const finishScreens = [
	{
		id: 1,
		bgNameProps: {
			img: 'bg1',
			mob: 'bgMob1',
		},
		autoSwitchProps: {
			thereIs: true,
			delay: '0.7',
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
		bgNameProps: {
			img: 'bg2',
			mob: 'bgMob2',
		},
		autoSwitchProps: {
			thereIs: true,
			delay: '0.9',
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
		bgNameProps: {
			img: 'bg3',
			mob: 'bgMob3',
		},
		autoSwitchProps: {
			thereIs: false,
			delay: '',
		},
		presentCloseProps: {
			img: presentClose1,
			className: 'one',
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
		bgNameProps: {
			img: 'bg3',
			mob: 'bgMob3',
		},
		autoSwitchProps: {
			thereIs: true,
			delay: '1',
		},
		presentCloseProps: {
			img: presentClose2,
			className: 'two',
		},
		presentRaysProps: {
			img: rays,
			className: '',
		},
		animateIconProps: {
			thereIs: false,
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
		bgNameProps: {
			img: 'bg3',
			mob: 'bgMob3',
		},
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
			img1: presentOpen1,
			className1: '',
			img2: presentOpen2,
			className2: '',
		},
		contentCardPrors: {
			thereIs: true,
		},
	},
]
