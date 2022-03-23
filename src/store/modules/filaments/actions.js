export default {

    async loadFilaments(context){
        const res = await fetch(`http://localhost:3000/getFilaments`);
        console.log(res)
        const resData = await res.json();
        console.log(resData.data)
        if(!res.ok){
            const error = new Error(resData.message || `failed to fetch: status ${res.status}`)
            throw error;
        }

        context.commit("setFilaments", resData.data);
    }

}