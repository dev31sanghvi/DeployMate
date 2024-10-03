const axios = require('axios');

const API_KEY = 'nEmJesyXDbP2WXXCbmwRdTei';
const MONITOR_URL = 'https://storyverse-27w3tgmn4-devs-projects-a4c4ff36.vercel.app/';
const ALERT_EMAIL = 'vyviheji@logsmarter.net';

async function createMonitor() {
    try {
        const response = await axios.post('https://uptime.betterstack.com/api/v2/monitors', {
            url: MONITOR_URL,
            check_frequency: 60, // Check every 60 seconds
            email: true,

        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Monitor created successfully:', response.data);
    } catch (error:any) {
        console.error('Error creating monitor:', error.response ? error.response.data : error.message);
    }
}

async function checkStatusByUrl() {
    try {
        const response = await axios.get('https://uptime.betterstack.com/api/v2/monitors', {
            params: {
                url: MONITOR_URL
            },
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Filtered monitors:', response.data.data[0].attributes.status); 

        if(response.data.data[0].attributes.status === 'down')
        {
            try {
                const incidents = await axios.get('https://uptime.betterstack.com/api/v2/incidents', {
                    params: {
                        monitor_id: response.data.data[0].id
                    },
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log('incidents of monitor:', incidents.data.data[0].attributes.cause);
                
            }

                catch (error:any){
                    if (error.response) {
                        console.error('Error incident monitors:', error.response.data);
                    } else {
                        console.error('Error incident monitors:', error.message);
                    }
                }
            
        }


    } catch (error:any) {
        if (error.response) {
            console.error('Error filtering monitors:', error.response.data);
        } else {
            console.error('Error filtering monitors:', error.message);
        }
    }
}

createMonitor();
// checkStatusByUrl();