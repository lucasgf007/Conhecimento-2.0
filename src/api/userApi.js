export const useApi = {
    getAllUsers: () => {

    },
    addNewUser: () => {

    },
    user: async (email, pass) => {
        let response = await fetch(`${process.env.REACT_APP_API_RESPONSE}/dev/test_pass`, {
            method: 'GET',
            body: JSON.stringify({
                e_mail: email,
                password: pass
            })
        });
        let json = await response.json()
        return json;
    }
}