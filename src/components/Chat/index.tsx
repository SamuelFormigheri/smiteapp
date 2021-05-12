import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { BiMessage } from 'react-icons/bi';
import { HiUser } from 'react-icons/hi';
import { v4 } from 'uuid';
import { IChatMessages } from './interface';
import styles from './styles.module.scss';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<IChatMessages[]>([]);
    const [historyChat, setHistoryChat] = useState<boolean>(false);
    const chatRef = useRef<HTMLDivElement>();
    const chatInputRef = useRef<HTMLInputElement>();

    const handleSubmitChat = (e: FormEvent) => {
        e.preventDefault();
        const message = {
            author: "THecatonquiro",
            time: new Date().toLocaleTimeString(),
            content: chatInputRef.current.value
        }
        chatInputRef.current.value = "";
        setMessages((prevState) => [...prevState, message]);
    };

    const handleClickOutside = (e) => {
        if(!chatRef || !chatRef.current || chatRef.current.contains(e.target))
            return;

        setHistoryChat(false);
    };

    useEffect(() => {
        if(!historyChat)
            document.removeEventListener("click", handleClickOutside );

        document.addEventListener("click", handleClickOutside );
    }, [historyChat]);
   
  return (
    <div ref={chatRef} className={styles.chat}>
        <div className={styles.historyChat} style={!historyChat ? { display: 'none' } : {} }>
            <div className={styles.messagesContainer}>
                {messages.length > 0 && messages.map((message) => {
                    return(
                        <div key={v4()} className={styles.message}>
                            [{message.time}]
                            <span>
                                {message.author} :
                            </span>
                            {message.content}
                        </div>
                    )
                })}
            </div>
        </div>
        <div className={styles.chatOn}>
            Sistema
        </div>
        <form onSubmit={handleSubmitChat} className={styles.chatBar}>
            <input ref={chatInputRef} 
                type="text" 
                name="chat" 
                placeholder="Pressione ENTER para conversar" 
                autoComplete="off"
                onClick={() => setHistoryChat(true)}
            />
        </form>
        <div className={styles.chatIcon}>
            <BiMessage color="var(--white)" size={26} style={{marginTop: '4px'}} />
        </div>
        <div className={styles.chatIcon}>
            <HiUser color="var(--white)" size={26} />
        </div>
    </div>
  );
}

export default Chat;