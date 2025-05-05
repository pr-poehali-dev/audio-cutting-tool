
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import AudioEditor from "@/components/AudioEditor";
import ToolPanel from "@/components/ToolPanel";
import Header from "@/components/Header";

const Index = () => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  
  // Обработчик загрузки файла
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCurrentFile(files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Левая панель с инструментами */}
        <div className="w-64 border-r border-gray-700 overflow-y-auto bg-gray-800">
          <ToolPanel />
        </div>
        
        {/* Основная область редактирования */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Аудио Редактор</h2>
            <div className="flex items-center space-x-2">
              <Button 
                variant="secondary" 
                onClick={() => document.getElementById('file-upload')?.click()}
                className="bg-gray-700 hover:bg-gray-600"
              >
                Открыть аудио
              </Button>
              <input
                id="file-upload"
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-400 text-sm">
                {currentFile ? `Файл: ${currentFile.name}` : 'Файл не выбран'}
              </span>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <AudioEditor currentFile={currentFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
