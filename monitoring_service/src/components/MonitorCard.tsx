interface MonitorCardProps {
    url: string;
    status: string;
  }

  export default function MonitorCard({ url, status }: MonitorCardProps) {
    return (
      <div className="p-4 bg-cardBackground text-cardText rounded shadow-md w-80">
        <h3 className="text-xl">{url}</h3>
        <p>Status: {status === 'up' ? '✅ Up' : '❌ Down'}</p>
      </div>
    );
  }
