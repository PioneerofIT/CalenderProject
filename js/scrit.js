const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth+1 }월`; //현재 연도,달 표시

const prevLast = new Date(viewYear, viewMonth, 0); // 저번 달 마지막 날짜 가져오기
const thisLast = new Date(viewYear, viewMonth+1, 0) // 이번 달 마지막 날짜

const PLDate = prevLast.getDate(); // 이전 달 마지막 날짜
const PLday = prevLast.getDay()    //이전 달 마지막 요일

const todayLastDate = thisLast.getDate ();
const todayLastDay = thisLast.getDay();

const prevDates = [];
const thisDate = [...Array(todayLastDate +1).keys()].slice(1); //slice(시작인덱스,끝인덱스)
const nextDates =[];

if(PLday !== 6 ) { //이전달 날짜 배열에 추가
    for(let i =0; i<PLday + 1; i++) {
        prevDates.unshift(PLDate - i);
    }
}

for(let i =1; i<7-todayLastDay; i++) { //다음 달 날짜 nextDates배열에 추가
    nextDates.push(i);
}
const dates= prevDates.concat(thisDate, nextDates);

dates.forEach((date, i) => { //배열 인덱스 순회 하여 html동적 생성
    dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join(''); //배열 값 조인



