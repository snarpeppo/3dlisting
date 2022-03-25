export default {

    async loadQueue(context) {
        const res = await fetch(`http://localhost:3000/getQueue`);
        console.log(res)
        const resData = await res.json();
        console.log(resData.data)
        if (!res.ok) {
            const error = new Error(resData.message || `failed to fetch: status ${res.status}`)
            throw error;
        }

        context.commit("setQueue", resData.data);
    },

    async createSub(context, data) {
        const subData = {
            username: data.username,
            fileName: data.fileName,
            fk_filament: data.fk_filament,
        };

        const res = await fetch(`http://localhost:3000/createSub`,
            {
                headers: {
                    'Content-Type': "application/json",
                },
                method: 'POST',
                body: JSON.stringify(subData),
            });
        const resData = await res.json();
        if (!res.ok) {
            const error = new Error(resData.message || 'failed');
            throw error;
        }

        context.commit('createSub', subData);
    }

}