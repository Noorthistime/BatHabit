import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Sparkles, Wand2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'oracle';
  text: string;
  timestamp: string;
}

const MOCK_HISTORY: ChatMessage[] = [
  {
    id: '1',
    sender: 'oracle',
    text: 'Greetings, Alistair Vance. I am the Oracle of the Night Realm. I sense a disturbance in your discipline. How may I guide you?',
    timestamp: '10:00 PM',
  },
  {
    id: '2',
    sender: 'user',
    text: 'I lost my 10-day streak on reading the Grimoire. Feeling pretty unmotivated.',
    timestamp: '10:02 PM',
  },
  {
    id: '3',
    sender: 'oracle',
    text: 'A severed Vow is merely a lesson in the dark, not the end of your legacy. The true test of a Nightwalker is not in never falling, but in rising before the sun catches you. Shall we set a smaller, undeniable quest for tonight to rebuild the momentum?',
    timestamp: '10:03 PM',
  },
];

export function Oracle() {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_HISTORY);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simulate Oracle thinking and replying
    setTimeout(() => {
      const oracleReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'oracle',
        text: 'I hear your words. The path forward is shrouded, but I shall illuminate it for you soon. (Mock reply)',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, oracleReply]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] max-w-5xl mx-auto p-4 md:p-8">
      
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-[#415A77] dark:border-[#3a0404] pb-6 shrink-0">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] flex items-center justify-center border-2 border-[#415A77] dark:border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)] text-[#D4AF37]">
            <Sparkles size={24} />
          </div>
          <div className="absolute top-0 -right-1 w-3 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse"></div>
        </div>
        <div>
          <h1 className="font-serif text-3xl text-[#F7F3E9] dark:text-[#EEEAD7] font-bold tracking-wider uppercase flex items-center gap-2">
            The Oracle
          </h1>
          <p className="font-mono text-xs text-[#D4AF37] dark:text-[#C5A059] tracking-widest uppercase">Seek Guidance from the Abyss</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto py-8 custom-scrollbar space-y-6">
        {messages.map((msg) => (
          <motion.div 
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] md:max-w-[70%] gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className="shrink-0 mt-auto mb-2">
                {msg.sender === 'oracle' ? (
                  <div className="w-8 h-8 rounded-full bg-[#0D1B2A] dark:bg-[#060102] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37] text-[#D4AF37]">
                    <Sparkles size={14} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#1B263B] dark:bg-[#3a0404] flex items-center justify-center border border-[#415A77] dark:border-[#6D0808] text-[#F7F3E9] font-serif font-bold text-sm">
                    V
                  </div>
                )}
              </div>

              {/* Message Bubble */}
              <div className="flex flex-col">
                <div 
                  className={`relative p-4 rounded-2xl overflow-hidden ${
                    msg.sender === 'user' 
                      ? 'bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md text-[#F7F3E9] dark:text-[#EEEAD7] rounded-br-sm border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg' 
                      : 'bg-[#0D1B2A] dark:bg-[rgba(20,2,4,0.85)] backdrop-blur-xl text-[#F7F3E9] dark:text-[#EEEAD7] rounded-bl-sm border border-[#415A77]/50 dark:border-[#D4AF37]/60 font-serif italic shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                  }`}
                  style={msg.sender === 'oracle' ? { background: 'radial-gradient(circle at top left, rgba(109,8,8,0.4) 0%, rgba(20,2,4,0.9) 100%)' } : {}}
                >
                  {/* Gothic Cut Corners for Oracle Messages */}
                  {msg.sender === 'oracle' && (
                    <>
                      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 pointer-events-none" />
                      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/40 pointer-events-none" />
                      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/40 pointer-events-none" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 pointer-events-none" />
                    </>
                  )}
                  <p className="relative z-10 text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
                <span className={`font-mono text-[10px] text-[#F7F3E9]/50 dark:text-[#8d9685] mt-1.5 px-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </span>
              </div>

            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="shrink-0 pt-4 border-t border-[#415A77] dark:border-[#3a0404]">
        <form onSubmit={handleSend} className="relative flex items-end gap-2">
          <div className="relative flex-1">
            <div className="absolute top-3.5 left-4 text-[#D4AF37]/70">
              <MessageSquare size={20} />
            </div>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder="Seek guidance..."
              className="w-full bg-[#1B263B]/50 dark:bg-[rgba(35,6,8,0.78)] border border-[#415A77] dark:border-[#D4AF37]/45 focus:border-[#D4AF37] dark:focus:border-[#D4AF37]/70 text-[#F7F3E9] dark:text-[#EEEAD7] rounded-xl pl-12 pr-4 py-3.5 outline-none resize-none overflow-hidden min-h-[52px] max-h-[120px] shadow-inner transition-colors font-sans"
              rows={1}
            />
          </div>
          <button 
            type="submit"
            disabled={!input.trim()}
            className="w-[52px] h-[52px] shrink-0 rounded-xl bg-gradient-to-br from-[#1B263B] to-[#415A77] dark:from-[#3a0404] dark:to-[#6D0808] border border-[#415A77] dark:border-[#D4AF37]/50 flex items-center justify-center text-[#F7F3E9] dark:text-[#F5D77F] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
          >
            <Wand2 size={20} className={input.trim() ? "animate-pulse" : ""} />
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="font-mono text-[9px] text-[#F7F3E9]/40 dark:text-[#8d9685]/60 uppercase tracking-widest">
            The Oracle's knowledge is vast, but her interpretations are yours to decipher.
          </span>
        </div>
      </div>

    </div>
  );
}
