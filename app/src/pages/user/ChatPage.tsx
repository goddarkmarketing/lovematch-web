import { Image, PlusCircle, Send, Smile } from 'lucide-react';
import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { EmptyState } from '../../components/shared/EmptyState';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function ChatPage() {
  const { state, selectConversation, sendMessage } = useLoveMatch();
  const [draft, setDraft] = useState('');
  const activeConversation = state.conversations.find((conversation) => conversation.id === state.selectedConversationId);

  return (
    <div className="app-shell">
      <AppSidebar mode="user" />
      <main className="chat-layout">
        <section className="chat-list-panel">
          <h1>ข้อความ</h1>
          <input className="search-input" placeholder="ค้นหาบทสนทนา..." />
          <div className="chat-list">
            {state.conversations.map((conversation) => (
              <button
                key={conversation.id}
                className={`chat-list-item${conversation.id === state.selectedConversationId ? ' is-active' : ''}`}
                onClick={() => selectConversation(conversation.id)}
              >
                <img src={conversation.profile.image} alt={conversation.profile.name} />
                <div>
                  <strong>{conversation.profile.name}</strong>
                  <p>{conversation.typing ? 'กำลังพิมพ์...' : conversation.lastMessage}</p>
                </div>
                <span>{conversation.unread > 0 ? conversation.unread : ''}</span>
              </button>
            ))}
          </div>
        </section>

        {activeConversation ? (
          <>
            <section className="chat-thread">
              <header className="thread-header">
                <div className="thread-user">
                  <img src={activeConversation.profile.image} alt={activeConversation.profile.name} />
                  <div>
                    <strong>{activeConversation.profile.name}</strong>
                    <p>{activeConversation.profile.online ? 'กำลังพิมพ์...' : activeConversation.profile.city}</p>
                  </div>
                </div>
                <button className="chip-action">แปลอัตโนมัติ</button>
              </header>
              <div className="message-stream">
                {activeConversation.messages.map((message) => (
                  <article key={message.id} className={`message-bubble message-bubble--${message.sender}`}>
                    <p>{message.body}</p>
                    <span>{message.timestamp}</span>
                  </article>
                ))}
              </div>
              <footer className="composer">
                <div className="composer-tools">
                  <button>
                    <PlusCircle size={18} />
                  </button>
                  <button>
                    <Image size={18} />
                  </button>
                </div>
                <input value={draft} placeholder="พิมพ์ข้อความ" onChange={(event) => setDraft(event.target.value)} />
                <button>
                  <Smile size={18} />
                </button>
                <button
                  className="composer-send"
                  onClick={() => {
                    sendMessage(draft);
                    setDraft('');
                  }}
                >
                  <Send size={18} />
                </button>
              </footer>
            </section>

            <aside className="thread-profile">
              <img src={activeConversation.profile.image} alt={activeConversation.profile.name} className="thread-profile__image" />
              <h2>
                {activeConversation.profile.name}, {activeConversation.profile.age}
              </h2>
              <p>{activeConversation.profile.city}</p>
              <div className="tag-list">
                {activeConversation.profile.interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
              <div className="thread-actions">
                <button>รายงานผู้ใช้</button>
                <button className="danger">บล็อกผู้ใช้</button>
              </div>
            </aside>
          </>
        ) : (
          <EmptyState title="ยังไม่มีบทสนทนา" description="เมื่อคุณเริ่มแชท บทสนทนาจะปรากฏที่นี่" />
        )}
      </main>
    </div>
  );
}
