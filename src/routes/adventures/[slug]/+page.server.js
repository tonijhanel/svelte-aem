  import 'dotenv/config'
  import {  aemHeadlessClient } from '$lib/server/aemHeadlessApi';

    export const load = async({ params, fetch }) =>{
          const adventureDetails = async()=>{
              let adventuresRes;
              try {
                let query = "wknd-shared/adventure-by-slug;slug=" + params.slug;
                  console.log("in try");
                  adventuresRes = await aemHeadlessClient.runPersistedQuery(query);

                  console.log(adventuresRes.data.adventureList.items);
  //adventureDetail.data.adventureList.items
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
  