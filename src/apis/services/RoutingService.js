import axios from 'axios';
const urlBase = "https://apigp.onrender.com"

export class RoutingService {


  async getRoutingByBdm() {
    try {
      const response = await axios.post(`${urlBase}/api/getRoutingByBdm`,// Données envoyées en JSON
        { bdmId: window.sessionStorage.getItem('bdmId') }, // Données envoyées en JSON
        {  headers: {
            'Content-Type': 'application/json', // Définir le type de contenu
          }});

      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du routing:', error);
      throw error;
    }
  }

  async getMyAgents(){

    try {
        const response = await axios.post(`${urlBase}/api/getMyAgents`,          // Données envoyées en JSON
          { bdmId: window.sessionStorage.getItem('bdmId') }, // Données envoyées en JSON
          {  headers: {
              'Content-Type': 'application/json', // Définir le type de contenu
            }});
        
        return response.data;
      } catch (error) {
        console.error('Erreur lors des agents:', error);
        throw error;
      }


  }

  async getPms(){
    try{
      const response = await axios.get(`${urlBase}/api/getPms`)
      return response.data
    }catch(error){
      console.error('Erreur lors des agents:', error);
      throw error;
    }
    
  }

  async saveRouting(data){
    try {
      const response = await axios.post(`${urlBase}/api/makeRouting`, data);
      console.log('Response:', response.data);
      return response.data; // Return the response data so it can be handled by the calling function
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error so it can be caught in the calling function
    }
  }

}
