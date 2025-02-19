import { v4 } from "uuid";

interface Event {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  location: string;
}

interface NewEvent {
  id: string
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
}

interface SaveProps {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    newEvent: NewEvent;
    setNewEvent: React.Dispatch<React.SetStateAction<NewEvent>>;
    isEditing: boolean;
    currentEventId: string | null;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentEventId: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  const handleSave = ({
    setEvents,
    newEvent,
    setNewEvent,
    isEditing,
    currentEventId,
    setShowModal,
    setIsEditing,
    setCurrentEventId
  }: SaveProps) => {
    const event: Event = {
      id: currentEventId || v4(),
      title: newEvent.title,
      description: newEvent.description,
      start: newEvent.start,
      end: newEvent.end,
      location: newEvent.location,
    };
  
    if (isEditing && currentEventId) {
      setEvents((prev) =>
        prev.map(existingEvent =>
        existingEvent.id === currentEventId ? { ...existingEvent, ...newEvent } : existingEvent
      ));
    } else {
      setEvents((prev) => [...prev, event]);
    }
    
    setShowModal(false);
    setIsEditing(false);
    setCurrentEventId(null);
    setNewEvent({
    id: '',
      title: '',
      description: '',
      location: '',
      start: '',
      end: '',
    });
  };
  
  export default handleSave