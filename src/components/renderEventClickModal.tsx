import { EventApi } from "@fullcalendar/core/index.js";
import { useState, useEffect } from "react";
import handleSave from "./handleSave";
import { Button, ButtonGroup, Modal, ModalContent } from "@/styles/styles";
import { TEXTS } from "@/styles/common";

interface Event {
    id: string;
    title: string;
    description: string;
    start: string;
    end: string;
    location: string;
  }

interface RenderProps {
  selectedEvent: EventApi;
  setShowDetails: (value: boolean) => void;
  setIsEditing: (value: boolean) => void;
  setCurrentEventId: (id: string | null) => void;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  isEditing: boolean;
  events: Event[]
}

const RenderEventClickModal = ({
  selectedEvent,
  setShowDetails,
  setIsEditing,
  setCurrentEventId,
  setEvents,
  isEditing,
  events
}: RenderProps) => {
  const [title, setTitle] = useState(selectedEvent?.title || "");
  const [description, setDescription] = useState(selectedEvent?.extendedProps?.description || "");
  const [location, setLocation] = useState(selectedEvent?.extendedProps?.location || "");
  const [startTime, setStartTime] = useState(selectedEvent._instance?.range?.start.toLocaleString() || "");
  const [endTime, setEndTime] = useState(selectedEvent._instance?.range?.end.toLocaleString() || "");

  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setDescription(selectedEvent.extendedProps?.description || "");
      setLocation(selectedEvent.extendedProps?.location || "");
      setStartTime(selectedEvent._instance?.range?.start.toISOString().slice(0, 16) || "");
      setEndTime(selectedEvent._instance?.range?.end.toISOString().slice(0, 16) || "");
    }
  }, [selectedEvent]);

  const handleEdit = () => {
    setCurrentEventId(selectedEvent.id);
    setIsEditing(true); 
  };

  const handleSaveAction = () => {
    const newEvent = {
      id: selectedEvent.id,
      title,
      description,
      location,
      start: startTime,
      end: endTime,
    };

    handleSave({
      events,
      setEvents,
      newEvent,
      setNewEvent: () => {},
      isEditing,
      currentEventId: selectedEvent.id,
      setShowModal: setShowDetails as React.Dispatch<React.SetStateAction<boolean>>,
      setIsEditing: setIsEditing as React.Dispatch<React.SetStateAction<boolean>>,
      setCurrentEventId: setCurrentEventId as React.Dispatch<React.SetStateAction<string | null>>,
    });
  };

  const handleDelete = () => {
    confirm(TEXTS.DELETE_MSG);
    deleteEvent(selectedEvent.id);
    setShowDetails(false);
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <Modal>
      <ModalContent>
        {isEditing ? (
          <>
            <h2>{TEXTS.SHOW_EVENT_MODIFY}</h2>
            <label>
              <strong>{TEXTS.TITLE}</strong>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
              <strong>{TEXTS.DESCRIPTION}</strong>
              <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
              <strong>{TEXTS.LOCATION}</strong>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <label>
              <strong>{TEXTS.START_TIME}</strong>
              <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </label>
            <label>
              <strong>{TEXTS.END_TIME}</strong>
              <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </label>
            <ButtonGroup>
              <Button onClick={handleSaveAction}>{TEXTS.SAVE}</Button>
              <Button onClick={() => setIsEditing(false)}>{TEXTS.CALL_OFF}</Button>
            </ButtonGroup>
          </>
        ) : (
          <>
            <h2>{TEXTS.SHOW_EVENT}</h2>
            <p><strong>{TEXTS.TITLE}</strong> {selectedEvent?.title || TEXTS.NO_TITLE}</p>
            <p><strong>{TEXTS.DESCRIPTION}</strong> {selectedEvent?.extendedProps?.description || TEXTS.NO_DESCRIPTION}</p>
            <p><strong>{TEXTS.LOCATION}</strong> {selectedEvent?.extendedProps?.location || TEXTS.NO_LOCATION}</p>
            <p><strong>{TEXTS.START_TIME}</strong> {startTime}</p>
            <p><strong>{TEXTS.END_TIME}</strong> {endTime}</p>
            <ButtonGroup>
              <Button onClick={handleEdit}>{TEXTS.MODIFY}</Button>
              <Button onClick={handleDelete}>{TEXTS.DELETE}</Button>
              <Button onClick={() => setShowDetails(false)}>{TEXTS.CLOSE}</Button>
            </ButtonGroup>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};


export default RenderEventClickModal;