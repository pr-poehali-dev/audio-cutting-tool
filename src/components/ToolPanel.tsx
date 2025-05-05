
import React from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ToolPanel = () => {
  return (
    <div className="p-2 h-full">
      <Accordion type="multiple" defaultValue={["editing", "cleanup"]} className="space-y-2">
        <AccordionItem value="editing" className="border-gray-700 bg-gray-750 rounded-md">
          <AccordionTrigger className="py-2 px-3 text-sm font-medium hover:bg-gray-700 rounded-t-md">
            Инструменты редактирования
          </AccordionTrigger>
          <AccordionContent className="pt-2 px-2 pb-3 space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Нарезать
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m15 15-6 6"></path>
                <path d="m21 15-12 12"></path>
                <path d="M8 8v.01"></path>
                <path d="M12 8v.01"></path>
                <path d="M16 8v.01"></path>
                <path d="M20 8v.01"></path>
                <path d="M8 12v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M16 12v.01"></path>
                <path d="M20.01 12"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 16v.01"></path>
                <path d="M20 16v.01"></path>
                <path d="M8 16v.01"></path>
              </svg>
              Склеить
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <line x1="9" x2="9" y1="3" y2="21"></line>
                <line x1="15" x2="15" y1="3" y2="21"></line>
                <line x1="3" x2="21" y1="9" y2="9"></line>
                <line x1="3" x2="21" y1="15" y2="15"></line>
              </svg>
              Выделить
            </Button>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="cleanup" className="border-gray-700 bg-gray-750 rounded-md">
          <AccordionTrigger className="py-2 px-3 text-sm font-medium hover:bg-gray-700 rounded-t-md">
            Очистка звука
          </AccordionTrigger>
          <AccordionContent className="pt-2 px-2 pb-3 space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 9c.5-.5 2-1 4.5-.5s4 1 4.5.5 2-1 4.5-.5 4 1 4.5.5"></path>
                <path d="M2 14c.5-.5 2-1 4.5-.5s4 1 4.5.5 2-1 4.5-.5 4 1 4.5.5"></path>
                <path d="M2 19c.5-.5 2-1 4.5-.5s4 1 4.5.5 2-1 4.5-.5 4 1 4.5.5"></path>
                <path d="M22 19c-2-.5-4-.5-6 2-1 1-2 2-6 1.5s-4-2-4-2"></path>
              </svg>
              Шумоподавление
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 2v20h20"></path>
                <path d="M6 16l6-12 6 10"></path>
              </svg>
              Компрессор
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M2 12h8"></path>
                <path d="M14 12h8"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M12 18v-6"></path>
                <path d="M8 18v-1"></path>
                <path d="M16 18v-1"></path>
                <path d="M12 6v6"></path>
              </svg>
              Эквалайзер
            </Button>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="effects" className="border-gray-700 bg-gray-750 rounded-md">
          <AccordionTrigger className="py-2 px-3 text-sm font-medium hover:bg-gray-700 rounded-t-md">
            Эффекты
          </AccordionTrigger>
          <AccordionContent className="pt-2 px-2 pb-3 space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M20 5.5A11.3 11.3 0 0 0 3.6 7.4"></path>
                <path d="M21.5 15.6A11.3 11.3 0 0 1 3.7 17.8"></path>
                <path d="M9.2 5.2A5 5 0 0 1 14.8 9"></path>
                <path d="M5.2 9.2A5 5 0 0 0 9.5 15"></path>
                <path d="M15.1 9.5a5 5 0 0 1 3.9 4.8"></path>
                <path d="M9.5 15.1a5 5 0 0 0 5.3 3.9"></path>
                <path d="M12 8a1 1 0 0 0-1 1v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-1-1Z"></path>
              </svg>
              Реверберация
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M13 10h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.98-1.2A1 1 0 0 0 15 4H9a1 1 0 0 0-.8.4l-.98 1.2a1 1 0 0 1-.8.4H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7"></path>
                <rect width="6" height="10" x="9" y="10" rx="1"></rect>
                <path d="M7 14h.01"></path>
                <path d="M17 14h.01"></path>
                <path d="M7 18h.01"></path>
                <path d="M17 18h.01"></path>
              </svg>
              Задержка
            </Button>
            <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
              Авто-тюн
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4 p-3 bg-gray-750 rounded-md border border-gray-700">
        <h3 className="text-sm font-medium mb-2">Автоматическая обработка</h3>
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
          Автоматическая склейка
        </Button>
      </div>

      <div className="mt-4 p-3 bg-gray-750 rounded-md border border-gray-700">
        <h3 className="text-sm font-medium mb-2">Пресеты</h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
            Голос (подкаст)
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
            Музыка
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm bg-gray-700 border-gray-600 hover:bg-gray-600 text-white">
            Голос + Музыка
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolPanel;
