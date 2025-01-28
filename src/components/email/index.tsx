"use client"
import React, { useState } from "react";
import Sidebar from "./EmailSidebar";
import EmailList from "./EmailList";
import Header from "./EmailHeader";
import EmailDetail from "./EmailDetail";


const emails = [
  { id: 1, sender: "John Doe", subject: "Hello", content: "Hi there!", time: "10:00 AM" },
  { id: 2, sender: "Jane Smith", subject: "Meeting Update", content: "Meeting is rescheduled", time: "11:00 AM" },
];

const Home: React.FC = () => {
  const [selectedEmailId, setSelectedEmailId] = useState<number | null>(null);
  const selectedEmail = emails.find((email) => email.id === selectedEmailId);

  return (
    <>
      <EmailList
        emails={emails}
        selectedEmailId={selectedEmailId  }
        onSelectEmail={setSelectedEmailId}
      />
      <EmailDetail
        email={selectedEmail || null} />
    </>

      
  );
};

export default Home;
