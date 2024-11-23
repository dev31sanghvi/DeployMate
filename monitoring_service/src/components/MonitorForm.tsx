import { useState } from 'react';

interface MonitorFormProps {
  onSubmit: (url: string) => void;
}

export default function MonitorForm({ onSubmit }: MonitorFormProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 w-80 rounded bg-cardBackground text-cardText focus:outline-none"
      />
      <button type="submit" className="bg-textPrimary text-background px-4 py-2 rounded">
        Add Monitor
      </button>
    </form>
  );
}
