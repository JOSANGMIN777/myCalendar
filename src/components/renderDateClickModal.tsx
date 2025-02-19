import handleSave from "./handleSave";
import { Modal, ModalContent } from "@/styles/styles";
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
    newEvent: {
      id: string;
      title: string;
      description: string;
      location: string;
      start: string;
      end: string;
    };
    
    setNewEvent: React.Dispatch<React.SetStateAction<{
      id: string;
      title: string;
      description: string;
      location: string;
      start: string;
      end: string;
    }>>;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    isEditing: boolean;
    currentEventId: string | null;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentEventId: React.Dispatch<React.SetStateAction<string | null>>;
  }



const renderDateClickModal = ({
    newEvent,
    setNewEvent,
    setShowModal,
    events,
    setEvents,
    isEditing,
    currentEventId,
    setIsEditing,
    setCurrentEventId
  }: RenderProps) => {
    return (
      <Modal>
        <ModalContent>
          <h2>{TEXTS.NEW_EVENT}</h2>
          <label>
            {TEXTS.TITLE}
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </label>
          <label>
            {TEXTS.DESCRIPTION}
            <input
              type="text"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </label>
          <label>
            {TEXTS.LOCATION}
            <input
              type="text"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, location: e.target.value }))
              }
            />
          </label>
          <label>
            {TEXTS.START_TIME}
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, start: e.target.value }))
              }
            />
          </label>
          <label>
            {TEXTS.END_TIME}
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, end: e.target.value }))
              }
            />
          </label>
          <button  onClick={() =>
            handleSave({
              events,
              setEvents,
              newEvent,
              setNewEvent,
              isEditing,
              currentEventId,
              setShowModal,
              setIsEditing,
              setCurrentEventId
            })
          }>{TEXTS.SAVE}</button>
          <button onClick={() => setShowModal(false)}>{TEXTS.CALL_OFF}</button>
        </ModalContent>
      </Modal>
    );
  };

export default renderDateClickModal