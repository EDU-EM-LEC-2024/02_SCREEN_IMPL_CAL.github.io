console.log("common.js")
// 
window.addEventListener('resize', function(){
    console.log('Inner width : ' + window.innerWidth); 
    console.log('outer width : ' +window.outerWidth);    
});

//-----------------------------
// 시간 표시
//-----------------------------
setInterval(()=>{
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    if(min<10)
        min = "0" + min;
    
    const timeEl = document.querySelector('.top .left .curdate .time');

    timeEl.innerHTML = `${hour}:${min}`;

},1000);

// //-----------------------------
// // 위치 확인
// //-----------------------------
// navigator.geolocation.getCurrentPosition((position) => {
// 	console.log("position",position)
// });




// 

let wedding_date = new Date();

const mEl = document.querySelector('.wrapper .curdate .month')
if( (wedding_date.getMonth()+1)<10)
    mEl.innerHTML = "0"+(wedding_date.getMonth()+1);
else
    mEl.innerHTML = (wedding_date.getMonth()-1);
const dayEl = document.querySelector('.wrapper .curdate .day')
if(wedding_date.getDate()<10)
    dayEl.innerHTML = "0"+wedding_date.getDate();
else
    dayEl.innerHTML = wedding_date.getDate();  


const wedding_hours = "null";
let curMonth
// CALENDAR FUNCTION 

function cal_calender(wedding_date){
   
    var d_day = wedding_date.getDate();
    var yoil = wedding_date.getDay();
    var calendarYear = wedding_date.getFullYear();          // 달력 연도
    var calendarMonth = wedding_date.getMonth() + 1;        // 달력 월 
    var calendarToday = wedding_date.getDate();             // 달력 일
    
    //마지막 일자 구하기
    var monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();
    //날짜를 기준으로 월의 시작 요일 구하기
    var monthStartDay = new Date(calendarYear, calendarMonth-1, 1);
    
    var calendarMonthStartDay = monthStartDay.getDay(); // 달력 월의 시작 요일
    console.log("YEAR : ",calendarYear);
    console.log("MONTH : ",calendarMonth);
    console.log("LAST DAY : ",monthLastDate);
    console.log("D-DAY : ",d_day);
    console.log("START YOIL : ",monthStartDay);
    console.log("START YOIL : ",calendarMonthStartDay); //월요일기준으로 1 - 6(토) ,0(일)


    //달력에 월 넣기
    curMonth = calendarMonth;
    const prevDate = new Date(calendarYear,wedding_date.getMonth()-1,wedding_date.getDate());
    const nextDate = new Date(calendarYear,wedding_date.getMonth()+1,wedding_date.getDate());

    const monthEl = document.querySelector('.calmonth');
    while(monthEl.firstChild){
        monthEl.removeChild(monthEl.firstChild);
    }
    const tds = document.querySelectorAll('td')
    tds.forEach(td=>{
        td.innerHTML="";
    })

    //prev
    const prevAtg = document.createElement("a");
    prevAtg.setAttribute('style','cursor:pointer')
    const prevSpan = document.createElement('span');
    prevSpan.innerHTML = "<";
    prevAtg.appendChild(prevSpan);
    monthEl.appendChild(prevAtg);    
    prevAtg.addEventListener('click',function(){
        cal_calender(prevDate);
    })
    //centerd
    const centerspan = document.createElement('span');
    if(calendarMonth<10)
        calendarMonth="0"+calendarMonth;    
    if(calendarToday<10)
        calendarToday="0"+calendarToday;
    centerspan.innerHTML = " "+calendarYear+"년 "+calendarMonth+"월 ";
    monthEl.appendChild(centerspan); 
    //next
    const nextAtg = document.createElement("a");
    nextAtg.setAttribute('style','cursor:pointer')
    const nextSpan = document.createElement('span');
    nextSpan.innerHTML = ">";
    nextAtg.appendChild(nextSpan);
    monthEl.appendChild(nextAtg);    
    nextAtg.addEventListener('click',function(){
        cal_calender(nextDate);
    })



    //monthEl.innerHTML += " <a href='javascript:cal_calender()'><span>"+">"+"</span></a>";

    // //01SECTION 헤더 YYYY/MM/DD 랜더링
    // const Section01topDateEl = document.querySelector('.wrapper nav>div:nth-child(1)')
    // Section01topDateEl.innerHTML = calendarYear+" <span style=font-size:1.5rem>/</span> ";
    // if(calendarMonth<10)
    // Section01topDateEl.innerHTML += "0"+calendarMonth+" <span style=font-size:1.5rem>/</span> ";
    // else
    // Section01topDateEl.innerHTML += calendarMonth+" <span style=font-size:1.5rem>/</span> ";

    // if(d_day<10)
    // Section01topDateEl.innerHTML += "0"+d_day;
    // else
    // Section01topDateEl.innerHTML += d_day;   


    // ///01SECTION 헤더 요일 랜더링
     const yoilEl = document.querySelector('.wrapper .curdate>.yoil')
     if(yoil==0)
         yoilEl.innerHTML = '일요일';
     else if(yoil==1)
         yoilEl.innerHTML = '월요일';
     else if(yoil==2)
         yoilEl.innerHTML = '화요일';
     else if(yoil==3)
         yoilEl.innerHTML = '수요일';
     else if(yoil==4)
         yoilEl.innerHTML = '목요일';
     else if(yoil==5)
         yoilEl.innerHTML = '금요일';
     else if(yoil==6)
         yoilEl.innerHTML = '토요일';
        

    //월 / 일 입력
    


    // const section01HoursEl = document.querySelector('.wrapper>main>section:nth-child(1) .bottom .hours');
    // section01HoursEl.innerHTML= time;



        

    //-------------------
    // TOP-HOURS
    //-------------------
    // const topHoursEl = document.querySelector('.wrapper>main>section>.body .top-hours')
    // if(yoil==0)
    //     topHoursEl.innerHTML = '일요일 ' +time;
    // else if(yoil==1)
    //     topHoursEl.innerHTML = '월요일 ' +time;
    // else if(yoil==2)
    //     topHoursEl.innerHTML = '화요일 ' +time;
    // else if(yoil==3)
    //     topHoursEl.innerHTML = '수요일 ' +time;
    // else if(yoil==4)
    //     topHoursEl.innerHTML = '목요일 ' +time;
    // else if(yoil==5)
    //     topHoursEl.innerHTML = '금요일 ' +time;
    // else if(yoil==6)
    //     topHoursEl.innerHTML = '토요일 ' +time;
    
    //-------------------
    // TABLE BODY 
    //-------------------
    let day=1;
    //FirstRow
    const tdStartEls =  document.querySelectorAll(".wrapper>main>section>.body table td.start-days");
    tdStartEls.forEach(tdEl=>{    
       const start_no =  tdEl.getAttribute('data-start');
        if(start_no>=calendarMonthStartDay)
            tdEl.innerHTML= "<span style=position:absolute;left:10px;top:10px;>"+(day++)+"<span>"
        })
        //EtcRow
        const tdEtcEls =  document.querySelectorAll(".wrapper>main>section>.body table td.days");
        tdEtcEls.forEach(tdEl=>{    
        
            if(day<=monthLastDate)
                tdEl.innerHTML="<span style=position:absolute;left:10px;top:10px;>"+day+"</span>";
        
            day++;
        })   


    // // D-DAY 표시(classname : d-day)
    // const tdEls =  document.querySelectorAll("..wrapper>main>section>.body table td");
    // tdEls.forEach(tdEl=>{
    //     if(tdEl.innerHTML==d_day)
    //     tdEl.classList.add('d-day');
    // })
    
    
    
    
}
cal_calender(wedding_date, wedding_hours);




// // D DAY FUNCTION
// const dayEls = document.querySelectorAll('.wrapper>main>section:nth-child(4) .bottom .day>span');
// const hoursEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .hours>span');
// const minEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .min>span');
// const secEl = document.querySelector('.wrapper>main>section:nth-child(4) .bottom .sec>span');

// const d_day_func = (weddingDate)=>{

//     const todayTime = new Date();
    
//     const diff = weddingDate - todayTime;

//     let diffDay = Math.floor(diff / (1000*60*60*24));
//     let diffHour = Math.floor((diff / (1000*60*60)) % 24);
//     let diffMin = Math.floor((diff / (1000*60)) % 60);
//     let diffSec = Math.floor(diff / 1000 % 60);

//     console.log("D-DAY표시 :",diffDay,diffHour,diffMin,diffSec);
//     // D-DAY 랜더링 
//     dayEls.forEach(dayEl=>{
//         if(diffDay<10)
//             dayEl.innerHTML = "0"+diffDay;
//         else
//             dayEl.innerHTML = diffDay;
//     })


//     if(diffHour<10)
//         diffHour="0"+diffHour;
//     hoursEl.innerHTML = diffHour;

//     if(diffMin<10)
//         diffMin="0"+diffMin;
//     minEl.innerHTML = diffMin;
//     if(diffSec<10)
//         diffSec="0"+ diffSec;
    
//         secEl.innerHTML = diffSec;


// }

// DDAY 최초실행
// d_day_func(wedding_date);

//D Day 반복 비동기
// setInterval(function(){
//     d_day_func(wedding_date);
// },1000)



//------------------------
// 스케쥴 추가
//------------------------
const tds = document.querySelectorAll('td');
addSchdule(tds,'red');
addSchdule(tds,'green');
addSchdule(tds,'blueviolet');
function addSchdule(tds,color){


    tds.forEach((td,idx)=>{
        
        if(idx%4==0 && td.innerHTML!=''){
            //01

            const divEl =  document.createElement('div');
            const labelEl = document.createElement('div');
            const contentEl =document.createElement('div');
            contentEl.innerHTML="내용"
            if(window.outerWidth>=400){
                divEl.setAttribute('style',"width:100%;height:30px;border-top:1px solid;border-bottom:1px solid;margin-bottom:5px;display:flex;align-items:center;justify-content:left;")
                labelEl.setAttribute('style',`width:15px;height:100%;background-color:${color};margin-right:10px;`)
                contentEl.setAttribute('style','font-size:.7rem');
            }else{
                divEl.setAttribute('style',"width:100%;height:15px;border-top:1px solid;border-bottom:1px solid;margin-bottom:5px;display:flex;align-items:center;justify-content:left;")
                labelEl.setAttribute('style',`width:5px;height:100%;background-color:${color};margin-right:10px;`)
                contentEl.setAttribute('style','font-size:.4rem');
            }
            divEl.appendChild(labelEl);
            divEl.appendChild(contentEl);
            td.appendChild(divEl);
        }


    })
}

