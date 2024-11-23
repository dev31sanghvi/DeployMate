import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://uptime.betterstack.com/api/v2/monitors';

export const createMonitor = async (url: string) => {
  try {
    await axios.post(BASE_URL, { url, check_frequency: 60 }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating monitor:', error.response ? error.response.data : error.message);
    } else {
      console.error('Error creating monitor:', error);
    }
  }
};

export const getMonitors = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.data.map((monitor: any) => ({
      url: monitor.attributes.url,
      status: monitor.attributes.status
    }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching monitors:', error.response ? error.response.data : error.message);
    return [];
  }
};


export default function pollMonitoringservice(){

    setInterval(async () => {
        await getMonitors();
    }, 1000 * 60);
    //it will poll every 60 seconds


}