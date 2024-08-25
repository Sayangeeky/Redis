import { createClient } from "redis";

const client = createClient()



async function main(){

    await client.connect()
    while(true){
        const res = await client.brPop("submissions", 0)
        await new Promise((res) => setTimeout(res, 3000))

        console.log("Processed");
        
    }
}

main()