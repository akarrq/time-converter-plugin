import { convertToMinutes, convertToSeconds } from './utils';

const secondsInput: HTMLInputElement | null =
	document.querySelector('#timeSeconds');
const minutesInput: HTMLInputElement | null =
	document.querySelector('#timeMinutes');

secondsInput?.addEventListener('keyup', function handleKeyup(event) {
	const { target } = event;
	if (minutesInput)
		minutesInput.value = convertToMinutes((target as HTMLInputElement).value);
});

minutesInput?.addEventListener('change', function handleChange(event) {
	const { target } = event;
	if (secondsInput)
		secondsInput.value = convertToSeconds((target as HTMLInputElement).value);
});
