import { recognizeInputType } from '../src/utils';

chrome.contextMenus.onClicked.addListener(handleClick);

function handleClick(info) {
	switch (info.menuItemId) {
		case 'addTime':
			console.log(recognizeInputType(info.selectionText));
			break;
		default:
			break;
	}
}

chrome.runtime.onInstalled.addListener(function () {
	const features = [
		{ title: 'Add session time', id: 'addTime' },
		{ title: `Add '%s' Construction Site marker`, id: 'CSMarker' },
		{ title: `Add '%s' Line Change marker`, id: 'LCMarker' },
		{ title: `Add '%s' Highway Interchange marker`, id: 'HIMarker' },
		{ title: `Add '%s' Ramp marker`, id: 'RMarker' },
		{ title: `Add '%s' Emergency Line marker`, id: 'ELMarker' },
		{ title: `Add '%s' untitled marker`, id: 'uMarker' },
	];

	features.forEach((feature, i) => {
		if (i === 1) {
			chrome.contextMenus.create({
				type: 'separator',
				id: 'separator',
			});
		}
		chrome.contextMenus.create({
			title: feature.title,
			contexts: ['selection'],
			id: feature.id,
		});
	});
});
