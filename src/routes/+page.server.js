import 'dotenv/config'
import {  aemHeadlessClient } from '$lib/server/aemHeadlessApi';

  export const load = async() =>{
        const allAdventures = async()=>{
            let adventuresRes;
            try {
                adventuresRes = await aemHeadlessClient.runPersistedQuery('wknd-shared/adventures-all');
                return adventuresRes.data.adventureList.items;
            } catch (error) {
              // Handle the error any way you'd like
              console.log("error=" + error);
            }
        }

        return {
            adventures: allAdventures(),
        }

  }
