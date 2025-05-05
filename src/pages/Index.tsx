
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import AudioEditor from "@/components/AudioEditor";
import ToolPanel from "@/components/ToolPanel";
import Header from "@/components/Header";

const Index = () => {
  const [volume, setVolume] = useState(80);
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCurrentFile(files[0]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="flex-grow flex flex-col p-4 overflow-hidden">
        <div className="bg-gray-800 rounded-lg p-4 mb-4 flex items-center">
          <Button className="bg-purple-600 hover:bg-purple-700 mr-4">
            Новый проект
          </Button>
          
          <div className="relative">
            <Button 
              variant="outline" 
              className="border-gray-600 hover:bg-gray-700 text-white"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              Открыть аудио
            </Button>
            <input 
              type="file" 
              id="fileInput" 
              className="hidden" 
              accept="audio/*"
              onChange={handleFileUpload} 
            />
          </div>
          
          <Separator orientation="vertical" className="mx-4 h-8 bg-gray-600" />
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
            </Button>
          </div>
          
          <Separator orientation="vertical" className="mx-4 h-8 bg-gray-600" />
          
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="secondary" className="bg-green-700 hover:bg-green-600 text-white">
              Экспорт
            </Button>
          </div>
        </div>
        
        <div className="flex flex-1 gap-4 overflow-hidden">
          <div className="w-60 bg-gray-800 rounded-lg overflow-auto">
            <ToolPanel />
          </div>
          
          <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
            <Tabs defaultValue="editor" className="h-full flex flex-col">
              <TabsList className="bg-gray-700 mx-2 mt-2 justify-start">
                <TabsTrigger value="editor" className="data-[state=active]:bg-gray-600">
                  Редактор
                </TabsTrigger>
                <TabsTrigger value="mixer" className="data-[state=active]:bg-gray-600">
                  Микшер
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="flex-1 p-4 overflow-hidden">
                <AudioEditor currentFile={currentFile} />
              </TabsContent>
              
              <TabsContent value="mixer" className="p-4">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <p>Микшер доступен в полной версии</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4">
        <div className="text-xs text-gray-400">
          Аудио Редактор v1.0 | {currentFile ? `Текущий файл: ${currentFile.name}` : 'Файл не выбран'}
        </div>
      </div>
    </div>
  );
};

export default Index;
