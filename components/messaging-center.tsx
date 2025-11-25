"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { Send, MessageCircle } from "lucide-react"

interface Message {
  id: number
  senderName: string
  artisanName: string
  artisanId: number
  lastMessage: string
  lastMessageTime: string
  unread: boolean
  messages: {
    id: number
    sender: string
    text: string
    time: string
  }[]
}

const mockConversations: Message[] = [
  {
    id: 1,
    senderName: "Amit Kumar",
    artisanName: "Radha Pal",
    artisanId: 1,
    lastMessage: "Thank you for the beautiful idol set!",
    lastMessageTime: "2 hours ago",
    unread: true,
    messages: [
      { id: 1, sender: "Radha Pal", text: "Hello! How can I help you?", time: "3 hours ago" },
      { id: 2, sender: "Amit Kumar", text: "I am interested in the Durga Puja Idol Set", time: "2 hours 50 min ago" },
      {
        id: 3,
        sender: "Radha Pal",
        text: "Great choice! It's one of our bestsellers. Can I customize it for you?",
        time: "2 hours 30 min ago",
      },
      { id: 4, sender: "Amit Kumar", text: "Thank you for the beautiful idol set!", time: "2 hours ago" },
    ],
  },
  {
    id: 2,
    senderName: "Priya Singh",
    artisanName: "Hari Das",
    artisanId: 2,
    lastMessage: "I can ship it by end of the week",
    lastMessageTime: "1 day ago",
    unread: false,
    messages: [
      { id: 1, sender: "Priya Singh", text: "When will the saree be shipped?", time: "1 day ago" },
      { id: 2, sender: "Hari Das", text: "I can ship it by end of the week", time: "1 day ago" },
    ],
  },
  {
    id: 3,
    senderName: "Rajesh Patel",
    artisanName: "Priya Malakar",
    artisanId: 3,
    lastMessage: "Can you do bulk orders for events?",
    lastMessageTime: "3 days ago",
    unread: false,
    messages: [
      { id: 1, sender: "Rajesh Patel", text: "Can you do bulk orders for events?", time: "3 days ago" },
      {
        id: 2,
        sender: "Priya Malakar",
        text: "Yes! I do custom orders for weddings and festivals. Let me know your requirements!",
        time: "2 days ago",
      },
    ],
  },
]

export function MessagingCenter() {
  const [selectedConversation, setSelectedConversation] = useState<Message | null>(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")
  const { t } = useLanguage()

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      // In a real app, this would send to the backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">{t("messages")}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card className="h-full overflow-y-auto divide-y divide-border">
            {mockConversations.length === 0 ? (
              <div className="p-6 text-center text-foreground/70">
                <MessageCircle size={32} className="mx-auto mb-3 opacity-50" />
                <p>{t("noMessages")}</p>
              </div>
            ) : (
              mockConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full text-left p-4 hover:bg-muted transition ${selectedConversation?.id === conversation.id ? "bg-muted" : ""}`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold text-foreground">{conversation.artisanName}</h3>
                    {conversation.unread && <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>}
                  </div>
                  <p className="text-sm text-foreground/70 truncate">{conversation.lastMessage}</p>
                  <p className="text-xs text-foreground/60 mt-1">{conversation.lastMessageTime}</p>
                </button>
              ))
            )}
          </Card>
        </div>

        {/* Message Thread */}
        <div className="lg:col-span-2">
          {selectedConversation ? (
            <Card className="h-full flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-primary">{selectedConversation.artisanName}</h2>
                <p className="text-sm text-foreground/60">
                  {t("messageFromArtisan")} {selectedConversation.artisanName}
                </p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === selectedConversation.senderName ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === selectedConversation.senderName
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border flex gap-2">
                <Input
                  placeholder={t("typeMessage")}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90 gap-2">
                  <Send size={18} />
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageCircle size={48} className="mx-auto mb-4 text-foreground/30" />
                <p className="text-foreground/70">{t("noMessages")}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
