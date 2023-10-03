export function convertToMinutes(secondsString: string) {
	let seconds = Number(secondsString);
	let min = Math.floor(seconds / 60);
	let sec = seconds % 60;
	return `00:${min <= 9 ? `0${min}` : min}:${sec <= 9 ? `0${sec}` : sec}`;
}

export function convertToSeconds(minutes: string) {
	let timeArr = minutes.split(':').map(Number);
	return String(timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2]);
}

export function recognizeInputType(value: string) {
	if (isNaN(Number(value))) {
		// string
		if (value.split(':')) {
			const arrValues = value.split(':');
			if (arrValues.length === 3) {
				// 00:02:03.265
				const arrSec = Math.round(Number(arrValues[2]));
				return `${arrValues[0]}:${arrValues[1]}:${arrSec}`;
			} else if (arrValues.length === 2) {
				// 02:03.265
				const arrSec = Math.round(Number(arrValues[1]));
				return `00:${arrValues[0]}:${arrSec}`;
			} else if (arrValues.length === 1) {
				// 03.265
				const seconds = Number(value);
				return Math.round(seconds);
			} else {
				console.log(value);
				throw new Error(`I do not recognize selected value: ${value}`);
			}
		}
	} else {
		// number
		const seconds = Number(value);
		return Math.round(seconds);
	}
}

export function createNewRow(
	time?: string,
	marker?: string,
	element?: HTMLElement
) {
	if (element) {
		const row: HTMLTableRowElement = document.createElement('tr');
		row.innerHTML = `
                    <td>${marker ? marker : 'Untitled marker'}</td>
                    <td>${time ? time : '0:00:00'}</td>
                    <td>0:00:00</td>
                    <td>0:00:00</td>
                  `;
		element.appendChild(row);
	}
}

export function createTable(time?: string, marker?: string) {
	const container = document.querySelector('.table');
	if (container) {
		const table = document.createElement('table');
		table.innerHTML = `<tr>
                        <th>Comment</th>
                        <th>Time strap start</th>
                        <th>Time strap end</th>
                        <th>Time not labeled</th>
                      </tr>
                      `;
		container.appendChild(table);
		createNewRow(time, marker, table);
	}
}
