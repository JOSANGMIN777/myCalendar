'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import RenderEventClickModal from "@/components/renderEventClickModal";
import '@/styles/calendar.css'
import { useState } from "react";
import renderDateClickModal from "@/components/renderDateClickModal";
import { EventApi, EventClickArg } from "@fullcalendar/core/index.js";
import renderEventContent from "@/components/renderEventContent";
import {v4} from 'uuid'
import { TEXTS } from "@/styles/common";

interface Event {
    id: string;
    title: string;
    description: string;
    start: string;
    end: string;
    location: string;
}

interface NewEvent {
    id: string,
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;
}

const Calendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState<NewEvent>({
      id: '',  
      title: '',
      description: '',
      location: '',
      start: '',
      end: '',
    });
    const [showModal, setShowModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);
    const [isEditing, setIsEditing] = useState(false)
    const [currentEventId, setCurrentEventId] = useState<string | null>(null); 

    const handleDateClick = (arg: DateClickArg) => {
        const localDate = new Date(arg.dateStr);
        const formattedDate = localDate.toISOString().slice(0,16);

        setNewEvent ({
            id: v4(), // 일정 생성 시 랜덤한 id 부여
            title: '',
            description: '',
            location: '',
            start: formattedDate,
            end: `${arg.dateStr}T23:59`
        });
        setIsEditing(false);
        setShowModal(true); // 모달 열기
      };
      
      const handleEventClick = (clickInfo: EventClickArg) => {
        const event = clickInfo.event;
      
        setSelectedEvent(event);
        setShowDetails(true); // 상세 보기 모달 열기
        setCurrentEventId(event.id);
      
        setNewEvent({
          id: event.id,
          title: event.title || '',
          description: event.extendedProps?.description || '',
          start: event._instance?.range.start.toISOString().slice(0, 16) || '',
          end: event._instance?.range.end.toISOString().slice(0, 16) || '',
          location: event.extendedProps?.location || '',
        });
      };

      
    return (
        <>
                <FullCalendar
                    plugins={[dayGridPlugin,interactionPlugin]}
                    initialView="dayGridMonth"
                    eventContent={renderEventContent}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    events={events}
                    height={610}
                    locale={'eng'}
                    headerToolbar={{
                        left: 'title',
                        center: 'prev next today',
                        right: '',
                    }}
                    buttonText={{
                        today: TEXTS.TODAY
                    }}
                    titleFormat={(date) => {
                        return `${date.date.year}.${String(date.date.month + 1).padStart(2, '0')}`;
                    }}
                    expandRows={true}
                    dayHeaderContent={(arg) => (
                        <div>{arg.date.toLocaleDateString('ko-KR', { weekday: 'short' })}</div> 
                    )}
                />
                   
                   {showModal && renderDateClickModal({
                newEvent,
                setNewEvent,
                setShowModal,
                events,
                setEvents,
                isEditing,
                currentEventId,
                setIsEditing,
                setCurrentEventId,
            })}

{showDetails && selectedEvent && (
  <RenderEventClickModal
    selectedEvent={selectedEvent}
    setShowDetails={setShowDetails}
    setIsEditing={setIsEditing}
    setCurrentEventId={setCurrentEventId}
    setEvents={setEvents}
    isEditing={isEditing}
    events={events}
  />
)}
     </>
    )    
}

export default Calendar