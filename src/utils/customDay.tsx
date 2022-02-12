export function useDay() {

	function makeBirthDay(year: string, month: string, day: string) {
		const strMonth = parseInt(month) >= 10 ? month : "0"+month;
		const strDay = parseInt(day) >= 10 ? day : "0"+day;
		return year + "" + strMonth + "" + strDay;
	}

	return { makeBirthDay }
}