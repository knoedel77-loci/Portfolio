"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  pause?: number;
};

export default function TypingText({
  text,
  speed = 120,   // langsamer
  pause = 1500,  // Pause am Ende
}: TypingTextProps) {
  const [visible, setVisible] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let typing: NodeJS.Timeout;
    let restart: NodeJS.Timeout;

    const startTyping = () => {
      typing = setInterval(() => {
        setVisible(text.slice(0, index + 1));
        index++;

        if (index === text.length) {
          clearInterval(typing);

         restart = setTimeout(() => {
            index = 0;
             setVisible("");
            startTyping(); // 🔑 DAS fehlte
            }, pause);

        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(typing);
      clearTimeout(restart);
    };
  }, [text, speed, pause]);

  return (
    <span className="inline-block w-[14ch] text-right">
      {visible}
      <span className="inline-block w-[1ch]">
        {showCursor ? "|" : " "}
      </span>
    </span>
  );
}
