import { EventContentArg } from "@fullcalendar/core/index.js";

const renderEventContent = (eventInfo:EventContentArg) => {

        const getFixedColor = (id: string) => {
          const colors = ['red', 'blue', 'green', 'purple'];
          const colorIndex = id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % colors.length;
          return colors[colorIndex]; // id를 아스키 코드 값으로 변환하여 계산한 결과로 랜덤한 색 부여
        };

    return(
        <div
        style={{
            backgroundColor: getFixedColor(eventInfo.event.id),
            border: 'none',
            padding: "5px",
            borderRadius: "4px",
            color: "#fff",
          }}
        >
        <b>{eventInfo.event.title}</b>
        </div>
    )
}

export default renderEventContent;