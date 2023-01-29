  import 'dotenv/config'
  import {  aemHeadlessClient } from '$lib/server/aemHeadlessApi';

    export const load = async({ params, fetch }) =>{
          const adventureDetails = async()=>{
              let adventuresRes;
              try {
                let query = "wknd-shared/adventure-by-slug;slug=" + params.slug;
                  adventuresRes = await aemHeadlessClient.runPersistedQuery(query);
                  return adventuresRes.data.adventureList.items;
              } catch (error) {
                // Handle the error any way you'd like
                console.log("error=" + error);
              }
          }
         return {
              adventure: adventureDetails(),
          }
  
    }
  