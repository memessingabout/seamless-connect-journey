
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "driver";
  text: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  driverName: string;
  driverPhoto: string;
  className?: string;
}

const ChatInterface = ({ driverName, driverPhoto, className }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "driver",
      text: "Hi there! I'm on my way to pick you up.",
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate driver response after a short delay
    setTimeout(() => {
      const driverResponses = [
        "I'll be there in a few minutes.",
        "No problem, I'll wait for you.",
        "Yes, I can see your location on the map.",
        "I'm in a red helmet and blue jacket.",
        "I've arrived at your location.",
      ];
      
      const randomResponse = driverResponses[Math.floor(Math.random() * driverResponses.length)];
      
      const driverMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "driver",
        text: randomResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, driverMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={driverPhoto} alt={driverName} />
            <AvatarFallback>{driverName[0]}</AvatarFallback>
          </Avatar>
          Chat with {driverName}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[250px] overflow-y-auto flex flex-col space-y-4 pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <div className="text-sm">{msg.text}</div>
                <div className="text-xs mt-1 opacity-70">{formatTime(msg.timestamp)}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatInterface;
