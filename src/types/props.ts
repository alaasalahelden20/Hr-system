import type { MessageFormat } from './interview/messageFormat';

export type AlertProps = {
  type: 'error' | 'warning';
  text: string | null;
  onClose: () => void;
};

export type MessageProps = { message: MessageFormat };

type Participant = {
  id: string;
  name: string;
};
export type ParticipantsProps = {
  participants: Participant[];
};

export type ModalProps = {
  open: boolean;
};

export type PreviewModalProps = ModalProps & {
  mediaBlobUrl: string;
};
