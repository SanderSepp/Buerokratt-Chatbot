import { FC, useState } from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';
import { MdOutlineCheck } from 'react-icons/md';
import { Message } from '../../types/message';
import { CHAT_EVENTS, MessageStatus } from '../../types/chat';
import Linkifier from './linkifier';
import { useTranslation } from 'react-i18next';
import Track from 'components/Track';
import './Typing.scss';

type PreviewMessageProps = {
  preview: string;
  onSelect: (message: Message) => void;
  readStatus: {
    current: MessageStatus;
  };
};

const PreviewMessage: FC<PreviewMessageProps> = ({
  preview,
  onSelect,
  readStatus,
}) => {
  return (
    <div className={clsx('active-chat__messageContainer')}>
      {!!preview && preview && (
        <div className={clsx('active-chat__message-preview')}>
          {!!preview && (
            <Track>
              <Linkifier message={decodeURIComponent(preview ?? '')} />
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Track>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviewMessage;
